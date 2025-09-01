/**
 * Audio Capture Service
 * Based on research from /research/browser-apis/page4.md and page11.md
 * Implements getDisplayMedia with system audio capture
 */

export interface AudioCaptureConfig {
  sampleRate: number;
  channelCount: number;
  echoCancellation: boolean;
  noiseSuppression: boolean;
  systemAudio: boolean;
}

export class AudioCaptureService {
  private stream: MediaStream | null = null;
  private audioContext: AudioContext | null = null;
  private source: MediaStreamAudioSourceNode | null = null;
  private processor: AudioWorkletNode | ScriptProcessorNode | null = null;
  private isCapturing: boolean = false;
  private debugRecorder: MediaRecorder | null = null;
  private debugChunks: Blob[] = [];
  private pcmBuffer: Int16Array[] = [];
  private enablePCMRecording: boolean = true; // Enable PCM recording for debugging

  constructor(private config: AudioCaptureConfig = {
    sampleRate: 16000,
    channelCount: 1,
    echoCancellation: false,
    noiseSuppression: false,
    systemAudio: true
  }) {}

  /**
   * Start capturing audio from screen share with system audio
   * Implementation based on /research/browser-apis/page1.md
   */
  async startCapture(onAudioData: (data: ArrayBuffer) => void): Promise<void> {
    try {
      // Use simple constraints - Chrome will handle the audio properly
      // The key is that the user must check "Share tab audio" in the dialog
      const displayMediaOptions: any = {
        video: true,
        audio: true
      };

      // Get display media with fallback for compatibility
      this.stream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
      console.log('Got display media stream:', this.stream);

      // Verify audio track exists
      const audioTracks = this.stream.getAudioTracks();
      const videoTracks = this.stream.getVideoTracks();
      console.log('Audio tracks found:', audioTracks.length);
      console.log('Video tracks found:', videoTracks.length);
      
      if (audioTracks.length === 0) {
        throw new Error('No audio track available. Please ensure you selected "Share tab audio" checkbox when sharing your screen.');
      }
      
      // Log detailed audio track information
      audioTracks.forEach((track, index) => {
        console.log(`Audio track ${index}:`, {
          label: track.label,
          enabled: track.enabled,
          muted: track.muted,
          readyState: track.readyState,
          settings: track.getSettings(),
          capabilities: track.getCapabilities ? track.getCapabilities() : 'Not available',
          constraints: track.getConstraints()
        });
      });
      
      // Test if we're getting audio data
      const audioTrack = audioTracks[0];
      if (audioTrack) {
        // Create a simple analyzer to check audio levels
        const tempContext = new AudioContext();
        const tempSource = tempContext.createMediaStreamSource(new MediaStream([audioTrack]));
        const analyzer = tempContext.createAnalyser();
        tempSource.connect(analyzer);
        
        const dataArray = new Uint8Array(analyzer.frequencyBinCount);
        
        // Check audio levels for 1 second
        let checkCount = 0;
        const checkInterval = setInterval(() => {
          analyzer.getByteFrequencyData(dataArray);
          const average = dataArray.reduce((a, b) => a + b, 0) / dataArray.length;
          console.log(`Audio level check ${checkCount}: Average frequency data: ${average.toFixed(2)}`);
          
          checkCount++;
          if (checkCount >= 10) {
            clearInterval(checkInterval);
            tempContext.close();
          }
        }, 100);
      }

      // Setup audio processing pipeline
      // Based on /research/browser-apis/page6.md - AudioContext documentation
      await this.setupAudioProcessing(audioTracks[0], onAudioData);
      
      // Start debug recording
      this.startDebugRecording();
      
      this.isCapturing = true;
      
      // Handle stream ending
      this.stream.addEventListener('inactive', () => {
        console.log('Stream became inactive');
        this.stopCapture();
      });

    } catch (error: any) {
      console.error('Failed to start audio capture:', error);
      
      // Provide more specific error messages
      if (error?.name === 'NotAllowedError') {
        throw new Error('Permission denied by user');
      } else if (error?.name === 'NotFoundError') {
        throw new Error('No audio source found. Please ensure you have a microphone or system audio available.');
      } else if (error?.name === 'NotReadableError') {
        throw new Error('Could not access audio source. It may be in use by another application.');
      } else if (error?.name === 'OverconstrainedError') {
        throw new Error('Audio constraints could not be satisfied by available devices.');
      } else {
        throw error;
      }
    }
  }

  /**
   * Setup audio processing pipeline
   * Based on /research/browser-apis/page8.md - AudioWorkletProcessor
   */
  private async setupAudioProcessing(
    audioTrack: MediaStreamTrack,
    onAudioData: (data: ArrayBuffer) => void
  ): Promise<void> {
    // Get audio track settings to check channel count
    const settings = audioTrack.getSettings();
    console.log('Audio processing setup - Track settings:', settings);
    
    // Create audio context - let it use the default sample rate first
    // We'll resample later if needed
    this.audioContext = new AudioContext();
    console.log('AudioContext sample rate:', this.audioContext.sampleRate);

    // Create media stream source
    const stream = new MediaStream([audioTrack]);
    this.source = this.audioContext.createMediaStreamSource(stream);
    
    // If we have stereo audio, convert to mono
    let audioNode: AudioNode = this.source;
    if (settings.channelCount && settings.channelCount > 1) {
      console.log('Converting stereo audio to mono for Deepgram');
      // Use a gain node to mix stereo to mono
      const splitter = this.audioContext.createChannelSplitter(2);
      const merger = this.audioContext.createChannelMerger(1);
      
      this.source.connect(splitter);
      // Connect both L and R channels to the single mono channel
      splitter.connect(merger, 0, 0); // Left channel to mono
      splitter.connect(merger, 1, 0); // Right channel to mono
      
      audioNode = merger;
    }

    // Use AudioWorklet for processing (modern approach)
    // Fallback to ScriptProcessor if needed
    try {
      // Load and use AudioWorklet
      await this.audioContext.audioWorklet.addModule('/audio-processor.js');
      this.processor = new AudioWorkletNode(this.audioContext, 'pcm-processor', {
        channelCount: 1,
        channelCountMode: 'explicit'
      });
      
      this.processor.port.onmessage = (event) => {
        if (event.data.audioData) {
          // Convert Float32Array to PCM16 for Deepgram
          const pcm16 = this.convertFloat32ToPCM16(event.data.audioData);
          
          // Save PCM data for debugging
          if (this.enablePCMRecording) {
            this.pcmBuffer.push(new Int16Array(pcm16));
          }
          
          // Check if we have non-silent audio
          let hasAudio = false;
          for (let i = 0; i < pcm16.length; i++) {
            if (Math.abs(pcm16[i]) > 100) {  // Threshold for silence
              hasAudio = true;
              break;
            }
          }
          
          if (!hasAudio) {
            console.debug('Silent audio chunk detected');
          }
          
          onAudioData(pcm16.buffer as ArrayBuffer);
        }
      };

      audioNode.connect(this.processor);
      this.processor.connect(this.audioContext.destination);
      
    } catch (error) {
      console.warn('AudioWorklet not supported, falling back to ScriptProcessor');
      // Fallback to deprecated ScriptProcessor
      this.setupScriptProcessor(onAudioData, audioNode);
    }
  }

  /**
   * Fallback to ScriptProcessor for older browsers
   * Based on /research/browser-apis/page7.md
   */
  private setupScriptProcessor(onAudioData: (data: ArrayBuffer) => void, audioNode?: AudioNode): void {
    if (!this.audioContext || !this.source) return;

    const bufferSize = 4096;
    // @ts-ignore - deprecated but needed for fallback
    this.processor = this.audioContext.createScriptProcessor(bufferSize, 1, 1);

    (this.processor as any).onaudioprocess = (event: any) => {
      const inputData = event.inputBuffer.getChannelData(0);
      const pcm16 = this.convertFloat32ToPCM16(inputData);
      
      // Save PCM data for debugging
      if (this.enablePCMRecording) {
        this.pcmBuffer.push(new Int16Array(pcm16));
      }
      
      // Check if we have non-silent audio
      let hasAudio = false;
      for (let i = 0; i < pcm16.length; i++) {
        if (Math.abs(pcm16[i]) > 100) {  // Threshold for silence
          hasAudio = true;
          break;
        }
      }
      
      if (!hasAudio) {
        console.debug('Silent audio chunk detected (ScriptProcessor)');
      }
      
      onAudioData(pcm16.buffer as ArrayBuffer);
    };

    const nodeToConnect = audioNode || this.source;
    nodeToConnect.connect(this.processor);
    this.processor.connect(this.audioContext.destination);
  }

  /**
   * Convert Float32Array to PCM16 (Int16Array) for Deepgram
   * Based on /research/browser-apis/page12.md
   */
  private convertFloat32ToPCM16(float32Array: Float32Array): Int16Array {
    const int16Array = new Int16Array(float32Array.length);
    
    // Calculate RMS for audio level monitoring
    let sum = 0;
    for (let i = 0; i < float32Array.length; i++) {
      sum += float32Array[i] * float32Array[i];
    }
    const rms = Math.sqrt(sum / float32Array.length);
    const dbLevel = 20 * Math.log10(rms);
    
    // Only log if there's significant audio
    if (rms > 0.001) {
      console.log('Audio level (RMS):', rms.toFixed(4), 'dB:', dbLevel.toFixed(1));
    }
    
    for (let i = 0; i < float32Array.length; i++) {
      // Clamp values between -1 and 1
      let sample = Math.max(-1, Math.min(1, float32Array[i]));
      // Convert to 16-bit PCM
      int16Array[i] = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
    }
    return int16Array;
  }

  /**
   * Start debug recording of the raw audio stream
   */
  private startDebugRecording(): void {
    if (!this.stream) return;
    
    try {
      // Get only audio tracks for recording
      const audioStream = new MediaStream(this.stream.getAudioTracks());
      
      // Create MediaRecorder for debugging
      this.debugRecorder = new MediaRecorder(audioStream, {
        mimeType: 'audio/webm'
      });
      
      this.debugChunks = [];
      
      this.debugRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          this.debugChunks.push(event.data);
        }
      };
      
      this.debugRecorder.onstop = () => {
        this.downloadDebugRecording();
      };
      
      this.debugRecorder.start();
      console.log('Debug recording started - will save audio when stopped');
    } catch (error) {
      console.error('Failed to start debug recording:', error);
    }
  }
  
  /**
   * Download the debug recording
   */
  private downloadDebugRecording(): void {
    if (this.debugChunks.length === 0) {
      console.log('No audio recorded for debugging');
      return;
    }
    
    const blob = new Blob(this.debugChunks, { type: 'audio/webm' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `debug-audio-${Date.now()}.webm`;
    a.click();
    URL.revokeObjectURL(url);
    
    console.log('Debug audio saved - check your downloads folder');
    
    // Also save the PCM data as WAV
    this.savePCMAsWAV();
  }
  
  /**
   * Convert PCM buffer to WAV and download
   */
  private savePCMAsWAV(): void {
    if (this.pcmBuffer.length === 0) {
      console.log('No PCM data to save');
      return;
    }
    
    // Calculate total length
    const totalLength = this.pcmBuffer.reduce((acc, chunk) => acc + chunk.length, 0);
    
    // Combine all chunks
    const combinedPCM = new Int16Array(totalLength);
    let offset = 0;
    for (const chunk of this.pcmBuffer) {
      combinedPCM.set(chunk, offset);
      offset += chunk.length;
    }
    
    // Create WAV file - use the actual AudioContext sample rate
    const sampleRate = this.audioContext?.sampleRate || this.config.sampleRate;
    const wav = this.encodeWAV(combinedPCM, sampleRate);
    const blob = new Blob([wav], { type: 'audio/wav' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `pcm-audio-${Date.now()}.wav`;
    a.click();
    URL.revokeObjectURL(url);
    
    console.log('PCM audio saved as WAV - this is exactly what was sent to Deepgram');
    
    // Clear the buffer
    this.pcmBuffer = [];
  }
  
  /**
   * Encode PCM16 data as WAV file
   */
  private encodeWAV(pcmData: Int16Array, sampleRate: number): ArrayBuffer {
    const length = pcmData.length * 2; // 2 bytes per sample
    const arrayBuffer = new ArrayBuffer(44 + length); // 44 byte WAV header
    const view = new DataView(arrayBuffer);
    
    // WAV header
    const writeString = (offset: number, str: string) => {
      for (let i = 0; i < str.length; i++) {
        view.setUint8(offset + i, str.charCodeAt(i));
      }
    };
    
    writeString(0, 'RIFF');
    view.setUint32(4, 36 + length, true);
    writeString(8, 'WAVE');
    writeString(12, 'fmt ');
    view.setUint32(16, 16, true); // fmt chunk size
    view.setUint16(20, 1, true); // PCM format
    view.setUint16(22, 1, true); // Mono
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * 2, true); // byte rate
    view.setUint16(32, 2, true); // block align
    view.setUint16(34, 16, true); // bits per sample
    writeString(36, 'data');
    view.setUint32(40, length, true);
    
    // Write PCM data
    let offset = 44;
    for (let i = 0; i < pcmData.length; i++) {
      view.setInt16(offset, pcmData[i], true);
      offset += 2;
    }
    
    return arrayBuffer;
  }

  /**
   * Stop audio capture and cleanup resources
   */
  stopCapture(): void {
    // Stop debug recording first
    if (this.debugRecorder && this.debugRecorder.state !== 'inactive') {
      this.debugRecorder.stop();
      this.debugRecorder = null;
    }
    
    if (this.processor) {
      this.processor.disconnect();
      this.processor = null;
    }

    if (this.source) {
      this.source.disconnect();
      this.source = null;
    }

    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }

    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }

    this.isCapturing = false;
  }

  /**
   * Check browser compatibility
   * Based on /research/browser-apis/summary.md
   */
  static checkBrowserCompatibility(): {
    supported: boolean;
    systemAudioSupported: boolean;
    browser: string;
    message: string;
  } {
    const userAgent = navigator.userAgent.toLowerCase();
    
    // Check for getDisplayMedia support
    if (!navigator.mediaDevices?.getDisplayMedia) {
      return {
        supported: false,
        systemAudioSupported: false,
        browser: 'unknown',
        message: 'Your browser does not support screen sharing.'
      };
    }

    // Chrome/Edge - Full support
    if (userAgent.includes('chrome') || userAgent.includes('edg')) {
      return {
        supported: true,
        systemAudioSupported: true,
        browser: 'chrome',
        message: 'Full support for system audio capture.'
      };
    }

    // Firefox - Limited support
    if (userAgent.includes('firefox')) {
      return {
        supported: true,
        systemAudioSupported: false,
        browser: 'firefox',
        message: 'Limited support. System audio may not be available.'
      };
    }

    // Safari - No system audio support
    if (userAgent.includes('safari')) {
      return {
        supported: false,
        systemAudioSupported: false,
        browser: 'safari',
        message: 'Safari does not support system audio capture.'
      };
    }

    return {
      supported: true,
      systemAudioSupported: false,
      browser: 'other',
      message: 'Unknown browser. System audio support may be limited.'
    };
  }

  getIsCapturing(): boolean {
    return this.isCapturing;
  }
}