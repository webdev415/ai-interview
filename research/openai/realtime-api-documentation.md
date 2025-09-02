# OpenAI Realtime API Documentation

## Overview
OpenAI's Realtime API enables low-latency, streaming speech-to-text transcription with direct WebSocket connections. Unlike the batch Whisper API, this provides true real-time transcription capabilities.

## Key Features
- **WebSocket Connection**: Persistent connection for continuous streaming
- **Low Latency**: Near-instantaneous transcription
- **Bidirectional**: Can handle both input and output audio
- **Interruption Handling**: Automatic handling of speaker interruptions
- **Multi-modal**: Supports both text and audio in the same session

## Models Available

### gpt-realtime (Latest - 2025)
- **Accuracy**: 82.8% on Big Bench Audio eval
- **Instruction Following**: 30.5% on MultiChallenge benchmark
- **Significant improvement over December 2024 model**

### gpt-4o-transcribe
- **Purpose**: Optimized for speech-to-text transcription
- **Low-latency state-of-the-art performance**

### whisper-1 (for transcription)
- Can be used with Realtime API for transcription events

## Connection Methods

### 1. WebSocket Connection
```javascript
const ws = new WebSocket('wss://api.openai.com/v1/realtime?model=gpt-4o-realtime');

ws.on('open', () => {
  ws.send(JSON.stringify({
    type: 'session.update',
    session: {
      input_audio_transcription: {
        model: 'whisper-1'  // Enable transcription
      }
    }
  }));
});
```

### 2. WebRTC Connection
- Alternative to WebSocket for browser-based applications
- Better for peer-to-peer connections

## Session Configuration

### Enable Transcription
```json
{
  "type": "session.update",
  "session": {
    "input_audio_transcription": {
      "model": "whisper-1"
    },
    "voice": "alloy",
    "instructions": "You are a helpful assistant.",
    "modalities": ["text", "audio"],
    "temperature": 0.8
  }
}
```

## Event Types

### Transcription Events
- `conversation.item.audio_transcription.completed`: Fired when transcription is complete
- `conversation.item.audio_transcription.failed`: Transcription error
- `input_audio_buffer.speech_started`: Speech detection started
- `input_audio_buffer.speech_stopped`: Speech detection stopped

### Example Event Handling
```javascript
ws.on('message', (data) => {
  const event = JSON.parse(data);
  
  switch(event.type) {
    case 'conversation.item.audio_transcription.completed':
      console.log('Transcription:', event.transcript);
      break;
    case 'input_audio_buffer.speech_started':
      console.log('User started speaking');
      break;
    case 'input_audio_buffer.speech_stopped':
      console.log('User stopped speaking');
      break;
  }
});
```

## Audio Format Requirements
- **Format**: PCM16 (16-bit PCM audio)
- **Sample Rate**: 24kHz (optimal), 16kHz supported
- **Channels**: Mono
- **Encoding**: Base64 when sending over WebSocket

## Sending Audio Data
```javascript
// Convert audio to base64 PCM16
function audioToBase64(audioBuffer) {
  // Convert Float32Array to Int16Array
  const int16Array = new Int16Array(audioBuffer.length);
  for (let i = 0; i < audioBuffer.length; i++) {
    const s = Math.max(-1, Math.min(1, audioBuffer[i]));
    int16Array[i] = s < 0 ? s * 0x8000 : s * 0x7FFF;
  }
  
  // Convert to base64
  return btoa(String.fromCharCode(...new Uint8Array(int16Array.buffer)));
}

// Send audio chunk
ws.send(JSON.stringify({
  type: 'input_audio_buffer.append',
  audio: audioToBase64(audioChunk)
}));
```

## Complete Implementation Example

```javascript
class RealtimeTranscription {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.ws = null;
  }

  connect() {
    this.ws = new WebSocket(
      'wss://api.openai.com/v1/realtime?model=gpt-4o-realtime',
      {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
          'OpenAI-Beta': 'realtime=v1'
        }
      }
    );

    this.ws.on('open', () => {
      console.log('Connected to Realtime API');
      this.configureSession();
    });

    this.ws.on('message', (data) => {
      this.handleEvent(JSON.parse(data));
    });
  }

  configureSession() {
    this.ws.send(JSON.stringify({
      type: 'session.update',
      session: {
        input_audio_transcription: {
          model: 'whisper-1'
        },
        modalities: ['audio', 'text'],
        instructions: 'Transcribe the audio accurately.',
        temperature: 0.3
      }
    }));
  }

  sendAudio(audioBuffer) {
    const base64Audio = this.audioToBase64(audioBuffer);
    this.ws.send(JSON.stringify({
      type: 'input_audio_buffer.append',
      audio: base64Audio
    }));
  }

  handleEvent(event) {
    switch(event.type) {
      case 'conversation.item.audio_transcription.completed':
        this.onTranscription(event.transcript);
        break;
      case 'error':
        console.error('Realtime API error:', event.error);
        break;
    }
  }

  onTranscription(transcript) {
    console.log('Transcription:', transcript);
    // Handle the transcription
  }
}
```

## Pricing (2025)

### Standard Pricing
- **Text Input**: $5.00 per 1M tokens
- **Audio Input**: $100.00 per 1M tokens
- **Text Output**: $15.00 per 1M tokens
- **Audio Output**: $200.00 per 1M tokens

### Cached Pricing (New)
- **Cached Text Input**: $2.50 per 1M tokens
- **Cached Audio Input**: $20.00 per 1M tokens

## Limitations
- **Maximum Session Duration**: 30 minutes
- **Connection Timeout**: 15 minutes of inactivity
- **Audio Buffer Limit**: 15 minutes of audio
- **No simultaneous session limits** (as of Feb 2025)

## Advantages Over Batch Whisper API

### Realtime API
- **Latency**: < 500ms
- **Streaming**: Continuous transcription
- **Interruptions**: Automatic handling
- **Cost**: Higher ($100/1M audio tokens)
- **Use Case**: Live conversations, meetings

### Whisper Batch API
- **Latency**: 5-30 seconds
- **Batch Processing**: Process complete files
- **Accuracy**: Slightly higher (95-98%)
- **Cost**: Lower ($0.006/minute)
- **Use Case**: Post-processing, accuracy-critical

## Best Practices

### 1. Connection Management
- Implement reconnection logic
- Handle connection drops gracefully
- Monitor WebSocket state

### 2. Audio Optimization
- Use 24kHz sample rate for best quality
- Implement VAD (Voice Activity Detection) client-side
- Buffer audio chunks appropriately (100-200ms)

### 3. Error Handling
- Implement exponential backoff for reconnections
- Handle rate limits appropriately
- Log all error events for debugging

### 4. Cost Optimization
- Use VAD to avoid sending silence
- Consider hybrid approach (Realtime + Batch)
- Cache common responses when possible

## Integration with Interview Transcription

### Hybrid Approach Benefits
1. **Realtime API**: For immediate feedback during interview
2. **Whisper Batch**: For final high-accuracy transcript
3. **Cost-Effective**: Use Realtime sparingly, batch for archives

### Implementation Strategy
```javascript
// Use Realtime for live preview
realtimeAPI.on('transcription', (text) => {
  updateLivePreview(text);
});

// Use Whisper batch for final transcript
setInterval(() => {
  processWithWhisper(audioBuffer);
}, 30000); // Every 30 seconds
```

## Comparison Summary

| Feature | Realtime API | Whisper Batch |
|---------|-------------|---------------|
| Latency | <500ms | 5-30s |
| Cost | $100/1M tokens | $0.006/min |
| Accuracy | 82.8% | 95-98% |
| Streaming | Yes | No |
| Max Duration | 30 min session | 25MB file |
| Use Case | Live transcription | Post-processing |

## Conclusion
The Realtime API is ideal for live interview transcription where immediate feedback is crucial. For cost-effective, high-accuracy transcription, combining it with the Whisper batch API provides the best of both worlds.