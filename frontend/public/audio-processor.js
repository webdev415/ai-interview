/**
 * AudioWorklet Processor for efficient audio processing
 * Based on /research/browser-apis/page8.md
 */
class PCMProcessor extends AudioWorkletProcessor {
  constructor() {
    super();
    this.bufferSize = 128; // AudioWorklet quantum size
    this.buffer = [];
  }

  process(inputs, outputs, parameters) {
    const input = inputs[0];
    
    if (input && input[0]) {
      // Accumulate samples
      this.buffer.push(...input[0]);
      
      // Send data when buffer is full
      if (this.buffer.length >= 1024) {
        this.port.postMessage({
          audioData: new Float32Array(this.buffer.splice(0, 1024))
        });
      }
    }
    
    return true; // Keep processor alive
  }
}

registerProcessor('pcm-processor', PCMProcessor);