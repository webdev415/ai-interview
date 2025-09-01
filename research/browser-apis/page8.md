# AudioWorkletProcessor - MDN Documentation

**URL**: https://developer.mozilla.org/en-US/docs/Web/API/AudioWorkletProcessor

## Overview:
AudioWorkletProcessor represents audio processing code behind a custom AudioWorkletNode. Lives in AudioWorkletGlobalScope and runs on Web Audio rendering thread (not main thread).

**Status**: Baseline Widely available since April 2021

## Constructor:
- **AudioWorkletProcessor()**: Cannot be instantiated directly. Created internally by AudioWorkletNode creation.

## Key Properties:
- **port**: Read-only MessagePort for bidirectional communication between processor and AudioWorkletNode

## Required Implementation:
Must provide a **process()** method that gets called for each block of 128 sample-frames.

### process() Method Parameters:
- **inputs**: Input audio arrays
- **outputs**: Output audio arrays  
- **parameters**: Calculated values of custom AudioParams

## Usage Pattern:

### 1. Create Processor File:
```javascript
// audio-processor.js
class MyProcessor extends AudioWorkletProcessor {
  process(inputs, outputs, parameters) {
    const output = outputs[0];
    // Process audio here
    return true; // Continue processing
  }
}

registerProcessor('my-processor', MyProcessor);
```

### 2. Load and Use:
```javascript
const audioContext = new AudioContext();
await audioContext.audioWorklet.addModule('audio-processor.js');
const workletNode = new AudioWorkletNode(audioContext, 'my-processor');
workletNode.connect(audioContext.destination);
```

## Custom AudioParams:
- Supply **parameterDescriptors** as static getter
- Returns array of AudioParamDescriptor objects
- Creates AudioParams accessible via node.parameters

## Benefits over ScriptProcessorNode:
- Runs on audio rendering thread (not main thread)
- No blocking of main thread
- Better performance
- Modern replacement for deprecated ScriptProcessorNode

## Processing Audio Algorithm:
1. Create separate processor file
2. Extend AudioWorkletProcessor with process() method
3. Register processor with registerProcessor()
4. Load file with audioContext.audioWorklet.addModule()
5. Create AudioWorkletNode based on processor
6. Connect node to audio graph