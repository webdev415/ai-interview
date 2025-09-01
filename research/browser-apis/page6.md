# AudioContext - MDN Documentation

**URL**: https://developer.mozilla.org/en-US/docs/Web/API/AudioContext

## Overview:
AudioContext represents an audio-processing graph built from audio modules (AudioNodes) linked together. Controls creation of nodes and execution of audio processing/decoding.

**Recommendation**: Create one AudioContext and reuse it instead of initializing new ones. OK to use single AudioContext for multiple audio sources and pipelines concurrently.

## Constructor:
- **AudioContext()**: Creates and returns new AudioContext object

## Key Properties (inherits from BaseAudioContext):
- **baseLatency**: Read-only seconds of processing latency from AudioDestinationNode to audio subsystem
- **outputLatency**: Read-only estimation of output latency
- **sinkId**: Read-only sink ID of current output audio device (experimental)

## Critical Methods for MediaStream Processing:

### MediaStream Integration:
- **createMediaStreamSource(MediaStream)**: Creates MediaStreamAudioSourceNode from MediaStream (for getDisplayMedia streams)
- **createMediaStreamDestination()**: Creates MediaStreamAudioDestinationNode 
- **createMediaStreamTrackSource(MediaStreamTrack)**: Creates MediaStreamTrackAudioSourceNode

### Media Element Integration:
- **createMediaElementSource(HTMLMediaElement)**: Creates MediaElementAudioSourceNode for <video>/<audio>

### Context Control:
- **close()**: Closes audio context, releases system audio resources
- **resume()**: Resumes time progression after suspend
- **suspend()**: Suspends time progression, reduces CPU/battery usage
- **getOutputTimestamp()**: Returns AudioTimestamp object with timing values

### Output Device Control (Experimental):
- **setSinkId()**: Sets output audio device for AudioContext

## Events:
- **sinkchange**: Fired when output audio device changes (experimental)

## Usage Pattern for Screen Capture Audio:
1. Create AudioContext
2. Use createMediaStreamSource() with getDisplayMedia() stream
3. Process audio through Web Audio API nodes
4. Output to destination or createMediaStreamDestination() for further processing