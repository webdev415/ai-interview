# ScriptProcessorNode - MDN Documentation (DEPRECATED)

**URL**: https://developer.mozilla.org/en-US/docs/Web/API/ScriptProcessorNode

## CRITICAL WARNING:
**DEPRECATED**: This feature is no longer recommended and was replaced by AudioWorklets and AudioWorkletNode interface.

## What it was:
ScriptProcessorNode allowed generation, processing, or analyzing of audio using JavaScript. It was an AudioNode with two buffers (input/output) and fired AudioProcessingEvent when input contained new data.

## Technical Details:
- **Buffer sizes**: Power of 2 between 256-16384 (256, 512, 1024, 2048, 4096, 8192, 16384)
- **Latency**: Small numbers = lower latency, large numbers prevent audio breakup
- **Recommendation**: Let browser pick buffer size with heuristics

### Properties:
- **bufferSize**: Read-only integer for input and output buffer size

### Events:
- **audioprocess**: Fired when input buffer ready for processing (deprecated)

## Migration Path:
Use **AudioWorkletProcessor** and **AudioWorkletNode** instead for modern audio processing.

## Channel Configuration:
- Number of inputs: 1
- Number of outputs: 1  
- Channel count mode: "max"
- Channel count: 2
- Channel interpretation: "speakers"

## Why Deprecated:
- Performance issues
- Blocking main thread
- AudioWorklet provides better performance and non-blocking processing