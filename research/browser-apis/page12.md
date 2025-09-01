# Browser Audio Capture Implementation Patterns

**Research Summary for Screen Sharing with System Audio**

## Core Implementation Pattern:

### 1. Basic Screen Capture with Audio:
```javascript
async function captureScreenWithAudio() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: {
        echoCancellation: true,
        noiseSuppression: true,
        sampleRate: 44100
      },
      systemAudio: "include"  // Request system audio
    });
    
    return stream;
  } catch (error) {
    console.error('Screen capture failed:', error);
    throw error;
  }
}
```

### 2. Audio Processing Pipeline (MediaStream to PCM16):
```javascript
async function setupAudioProcessing(stream) {
  const audioContext = new AudioContext();
  const source = audioContext.createMediaStreamSource(stream);
  
  // Modern approach - use AudioWorkletProcessor
  await audioContext.audioWorklet.addModule('audio-processor.js');
  const processorNode = new AudioWorkletNode(audioContext, 'pcm-processor');
  
  source.connect(processorNode);
  
  // Get PCM data from processor
  processorNode.port.onmessage = (event) => {
    const pcmData = event.data; // Float32Array PCM data
    // Convert to PCM16 if needed
    const pcm16 = convertToPCM16(pcmData);
  };
}

function convertToPCM16(float32Array) {
  const pcm16 = new Int16Array(float32Array.length);
  for (let i = 0; i < float32Array.length; i++) {
    // Clamp to [-1, 1] and convert to 16-bit
    const sample = Math.max(-1, Math.min(1, float32Array[i]));
    pcm16[i] = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
  }
  return pcm16;
}
```

### 3. AudioWorklet Processor (audio-processor.js):
```javascript
class PCMProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const input = inputs[0];
    if (input && input.length > 0) {
      // Send audio data to main thread
      this.port.postMessage(input[0]); // First channel
    }
    return true; // Keep processor alive
  }
}

registerProcessor('pcm-processor', PCMProcessor);
```

## Browser Compatibility Specifics:

### Chrome/Chromium:
- **System Audio Support**: Experimental via `systemAudio: "include"`
- **Audio Worklet**: Full support (preferred over ScriptProcessor)
- **getDisplayMedia Audio**: Supported but varies by platform
- **Platform Limitations**: 
  - Windows: System audio capture supported
  - macOS: Limited system audio support
  - Linux: Varies by distribution

### Firefox:
- **System Audio**: Limited support
- **Audio Worklet**: Supported
- **getDisplayMedia Audio**: Basic support

### Safari:
- **System Audio**: No support
- **getDisplayMedia Audio**: Limited support

## Error Handling Patterns:

### Permission Handling:
```javascript
async function handleScreenCapturePermissions() {
  try {
    const stream = await navigator.mediaDevices.getDisplayMedia({
      video: true,
      audio: true,
      systemAudio: "include"
    });
    return stream;
  } catch (error) {
    switch(error.name) {
      case 'NotAllowedError':
        console.log('User denied permission');
        break;
      case 'NotFoundError':
        console.log('No screen sources available');
        break;
      case 'NotReadableError':
        console.log('Hardware/OS level error');
        break;
      case 'OverconstrainedError':
        console.log('Constraints cannot be satisfied');
        // Retry with fallback constraints
        return retryWithFallback();
      default:
        console.error('Unknown error:', error);
    }
    throw error;
  }
}

async function retryWithFallback() {
  // Fallback: try without system audio
  return await navigator.mediaDevices.getDisplayMedia({
    video: true,
    audio: true  // No systemAudio constraint
  });
}
```

## Audio Track Analysis:
```javascript
function analyzeAudioTrack(stream) {
  const audioTracks = stream.getAudioTracks();
  
  if (audioTracks.length === 0) {
    console.log('No audio track in stream');
    return null;
  }
  
  const track = audioTracks[0];
  const settings = track.getSettings();
  
  console.log('Audio track info:', {
    label: track.label,
    kind: track.kind,
    enabled: track.enabled,
    muted: track.muted,
    readyState: track.readyState,
    sampleRate: settings.sampleRate,
    channelCount: settings.channelCount,
    echoCancellation: settings.echoCancellation,
    noiseSuppression: settings.noiseSuppression
  });
  
  return track;
}
```

## Complete Integration Example:
```javascript
class ScreenAudioCapture {
  constructor() {
    this.stream = null;
    this.audioContext = null;
    this.processorNode = null;
    this.onAudioData = null; // Callback for PCM data
  }
  
  async start() {
    try {
      // Step 1: Get screen capture stream
      this.stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: {
          echoCancellation: true,
          noiseSuppression: true,
          sampleRate: 44100
        },
        systemAudio: "include"
      });
      
      // Step 2: Setup audio processing
      await this.setupAudioProcessing();
      
      console.log('Screen capture with audio started');
    } catch (error) {
      console.error('Failed to start capture:', error);
      throw error;
    }
  }
  
  async setupAudioProcessing() {
    const audioTracks = this.stream.getAudioTracks();
    if (audioTracks.length === 0) {
      console.warn('No audio track available');
      return;
    }
    
    this.audioContext = new AudioContext();
    const source = this.audioContext.createMediaStreamSource(this.stream);
    
    // Load audio worklet
    await this.audioContext.audioWorklet.addModule('/audio-processor.js');
    this.processorNode = new AudioWorkletNode(this.audioContext, 'pcm-processor');
    
    // Connect audio graph
    source.connect(this.processorNode);
    
    // Handle audio data
    this.processorNode.port.onmessage = (event) => {
      if (this.onAudioData) {
        const pcm16 = this.convertToPCM16(event.data);
        this.onAudioData(pcm16);
      }
    };
  }
  
  convertToPCM16(float32Array) {
    const pcm16 = new Int16Array(float32Array.length);
    for (let i = 0; i < float32Array.length; i++) {
      const sample = Math.max(-1, Math.min(1, float32Array[i]));
      pcm16[i] = sample < 0 ? sample * 0x8000 : sample * 0x7FFF;
    }
    return pcm16;
  }
  
  stop() {
    if (this.stream) {
      this.stream.getTracks().forEach(track => track.stop());
      this.stream = null;
    }
    
    if (this.audioContext) {
      this.audioContext.close();
      this.audioContext = null;
    }
    
    this.processorNode = null;
  }
}

// Usage:
const capture = new ScreenAudioCapture();
capture.onAudioData = (pcm16Data) => {
  // Handle PCM16 audio data
  console.log('Received PCM16 data:', pcm16Data.length, 'samples');
};

capture.start().then(() => {
  console.log('Capture started successfully');
}).catch(error => {
  console.error('Capture failed:', error);
});
```