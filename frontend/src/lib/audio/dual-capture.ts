/**
 * Dual Audio Capture Service
 * Captures both microphone (user) and tab audio (others) simultaneously
 * Mixes them for transcription and provides speaker identification
 */

export interface DualAudioConfig {
  sampleRate: number;
  echoCancellation: boolean;
  noiseSuppression: boolean;
}

export class DualAudioCaptureService {
  private micStream: MediaStream | null = null;
  private displayStream: MediaStream | null = null;
  private audioContext: AudioContext | null = null;
  private micSource: MediaStreamAudioSourceNode | null = null;
  private displaySource: MediaStreamAudioSourceNode | null = null;
  private merger: ChannelMergerNode | null = null;
  private processor: ScriptProcessorNode | null = null;
  private isCapturing: boolean = false;
  
  // For speaker identification
  private micAnalyser: AnalyserNode | null = null;
  private displayAnalyser: AnalyserNode | null = null;
  private currentSpeaker: 'You' | 'Others' | 'Silent' = 'Silent';
  private speakerCallback: ((speaker: string) => void) | null = null;

  constructor(private config: DualAudioConfig = {
    sampleRate: 48000,
    echoCancellation: true,
    noiseSuppression: true
  }) {}

  /**
   * Start capturing both microphone and display audio
   */
  async startCapture(
    onAudioData: (data: ArrayBuffer, speaker: string) => void,
    onSpeakerChange?: (speaker: string) => void
  ): Promise<void> {
    try {
      this.speakerCallback = onSpeakerChange || null;
      
      // Step 1: Request microphone access
      console.log('Requesting microphone access...');
      this.micStream = await navigator.mediaDevices.getUserMedia({
        audio: {
          echoCancellation: this.config.echoCancellation,
          noiseSuppression: this.config.noiseSuppression,
          autoGainControl: true,
          sampleRate: this.config.sampleRate
        }
      });
      
      const micTracks = this.micStream.getAudioTracks();
      console.log('Microphone tracks:', micTracks.length);
      if (micTracks.length > 0) {
        console.log('Microphone track:', micTracks[0].label);
      }
      
      // Step 2: Request display/tab audio
      console.log('Requesting display audio...');
      this.displayStream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });
      
      const displayAudioTracks = this.displayStream.getAudioTracks();
      const displayVideoTracks = this.displayStream.getVideoTracks();
      
      console.log('Display audio tracks:', displayAudioTracks.length);
      console.log('Display video tracks:', displayVideoTracks.length);
      
      // We can stop the video track as we only need audio
      displayVideoTracks.forEach(track => {
        track.stop();
        console.log('Stopped video track to save resources');
      });
      
      if (displayAudioTracks.length === 0) {
        throw new Error('No audio track from display. Make sure you checked "Share tab audio"');
      }
      
      // Step 3: Setup audio processing
      await this.setupAudioProcessing(onAudioData);
      
      this.isCapturing = true;
      console.log('Dual audio capture started successfully');
      
      // Handle stream ending
      this.displayStream.addEventListener('inactive', () => {
        console.log('Display stream became inactive');
        this.stopCapture();
      });
      
    } catch (error: any) {
      console.error('Failed to start dual audio capture:', error);
      this.stopCapture();
      throw error;
    }
  }

  /**
   * Setup audio processing pipeline with mixing
   */
  private async setupAudioProcessing(
    onAudioData: (data: ArrayBuffer, speaker: string) => void
  ): Promise<void> {
    // Create audio context
    this.audioContext = new AudioContext({
      sampleRate: this.config.sampleRate
    });
    
    console.log('AudioContext created with sample rate:', this.audioContext.sampleRate);
    
    // Create sources
    if (this.micStream) {
      this.micSource = this.audioContext.createMediaStreamSource(this.micStream);
      console.log('Microphone source created');
    }
    
    if (this.displayStream) {
      const displayAudioTracks = this.displayStream.getAudioTracks();
      if (displayAudioTracks.length > 0) {
        const audioOnlyStream = new MediaStream(displayAudioTracks);
        this.displaySource = this.audioContext.createMediaStreamSource(audioOnlyStream);
        console.log('Display audio source created');
      }
    }
    
    // Create analysers for speaker detection
    this.micAnalyser = this.audioContext.createAnalyser();
    this.micAnalyser.fftSize = 256;
    this.displayAnalyser = this.audioContext.createAnalyser();
    this.displayAnalyser.fftSize = 256;
    
    // Connect sources to analysers
    if (this.micSource) {
      this.micSource.connect(this.micAnalyser);
    }
    if (this.displaySource) {
      this.displaySource.connect(this.displayAnalyser);
    }
    
    // Create merger to combine both audio streams
    this.merger = this.audioContext.createChannelMerger(2);
    
    // Connect sources to merger
    // Channel 0: Microphone (You)
    // Channel 1: Display (Others)
    if (this.micAnalyser) {
      this.micAnalyser.connect(this.merger, 0, 0);
    }
    if (this.displayAnalyser) {
      this.displayAnalyser.connect(this.merger, 0, 1);
    }
    
    // Create processor for capturing mixed audio
    const bufferSize = 4096;
    this.processor = this.audioContext.createScriptProcessor(bufferSize, 2, 2);
    
    this.processor.onaudioprocess = (event) => {
      // Get audio data from both channels
      const micData = event.inputBuffer.getChannelData(0);
      const displayData = event.inputBuffer.getChannelData(1);
      
      // Detect who is speaking
      const speaker = this.detectSpeaker();
      
      // Mix audio for transcription (simple average)
      const mixedData = new Float32Array(micData.length);
      for (let i = 0; i < micData.length; i++) {
        mixedData[i] = (micData[i] + displayData[i]) / 2;
      }
      
      // Convert to PCM16
      const pcm16 = this.convertFloat32ToPCM16(mixedData);
      
      // Send audio with speaker information
      onAudioData(pcm16.buffer as ArrayBuffer, speaker);
    };
    
    // Connect merger to processor
    this.merger.connect(this.processor);
    this.processor.connect(this.audioContext.destination);
    
    // Start speaker detection
    this.startSpeakerDetection();
  }

  /**
   * Detect who is currently speaking
   */
  private detectSpeaker(): string {
    if (!this.micAnalyser || !this.displayAnalyser) {
      return 'Silent';
    }
    
    const micLevel = this.getAudioLevel(this.micAnalyser);
    const displayLevel = this.getAudioLevel(this.displayAnalyser);
    
    const threshold = 0.01; // Adjust based on testing
    
    if (micLevel > threshold && micLevel > displayLevel * 1.5) {
      return 'You';
    } else if (displayLevel > threshold) {
      return 'Others';
    } else {
      return 'Silent';
    }
  }

  /**
   * Get audio level from analyser
   */
  private getAudioLevel(analyser: AnalyserNode): number {
    const dataArray = new Uint8Array(analyser.frequencyBinCount);
    analyser.getByteFrequencyData(dataArray);
    
    let sum = 0;
    for (let i = 0; i < dataArray.length; i++) {
      sum += dataArray[i];
    }
    
    return sum / (dataArray.length * 255); // Normalize to 0-1
  }

  /**
   * Start continuous speaker detection
   */
  private startSpeakerDetection(): void {
    const detectInterval = setInterval(() => {
      if (!this.isCapturing) {
        clearInterval(detectInterval);
        return;
      }
      
      const newSpeaker = this.detectSpeaker();
      if (newSpeaker !== this.currentSpeaker && newSpeaker !== 'Silent') {
        this.currentSpeaker = newSpeaker as 'You' | 'Others' | 'Silent';
        console.log('Speaker changed to:', this.currentSpeaker);
        
        if (this.speakerCallback) {
          this.speakerCallback(this.currentSpeaker);
        }
      }
    }, 100); // Check every 100ms
  }

  /**
   * Convert Float32Array to PCM16
   */
  private convertFloat32ToPCM16(float32Array: Float32Array): Int16Array {
    const int16Array = new Int16Array(float32Array.length);
    for (let i = 0; i < float32Array.length; i++) {
      const sample = Math.max(-1, Math.min(1, float32Array[i]));
      int16Array[i] = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
    }
    return int16Array;
  }

  /**
   * Stop capture and cleanup
   */
  stopCapture(): void {
    if (this.processor) {
      this.processor.disconnect();
      this.processor = null;
    }

    if (this.merger) {
      this.merger.disconnect();
      this.merger = null;
    }

    if (this.micAnalyser) {
      this.micAnalyser.disconnect();
      this.micAnalyser = null;
    }

    if (this.displayAnalyser) {
      this.displayAnalyser.disconnect();
      this.displayAnalyser = null;
    }

    if (this.micSource) {
      this.micSource.disconnect();
      this.micSource = null;
    }

    if (this.displaySource) {
      this.displaySource.disconnect();
      this.displaySource = null;
    }

    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }

    if (this.micStream) {
      this.micStream.getTracks().forEach(track => track.stop());
      this.micStream = null;
    }

    if (this.displayStream) {
      this.displayStream.getTracks().forEach(track => track.stop());
      this.displayStream = null;
    }

    this.isCapturing = false;
    this.currentSpeaker = 'Silent';
    console.log('Dual audio capture stopped');
  }

  getIsCapturing(): boolean {
    return this.isCapturing;
  }

  getCurrentSpeaker(): string {
    return this.currentSpeaker;
  }
}