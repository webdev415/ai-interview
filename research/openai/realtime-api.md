# OpenAI Realtime API Research (2024-2025)

## Overview
The Realtime API was introduced in 2024 as a public beta for building low-latency, multimodal experiences. It enables natural speech-to-speech conversations similar to ChatGPT's Advanced Voice Mode.

**Latest Update**: Now generally available (2024-2025) with new features and the most advanced speech-to-speech model: **gpt-realtime**.

## Key Features
- **Real-time streaming**: Direct audio input/output via WebSocket
- **Low-latency**: Optimized for conversational experiences
- **Multimodal**: Handles text, audio, and images
- **Function calling**: Tool integration with improved accuracy
- **Asynchronous operations**: Non-blocking function calls

## Models Available
1. **gpt-4o-realtime-preview-2024-10-01** - Original beta model
2. **gpt-realtime** - Latest and most advanced (2024-2025)
3. **gpt-4o-transcribe** - For speech-to-text only
4. **gpt-4o-mini-transcribe** - Budget speech-to-text option

## Pricing (2024-2025)
- **Realtime API**: $100.00 per 1M input tokens
- **GPT-4o Transcribe**: $0.006 per minute
- **GPT-4o Mini Transcribe**: $0.003 per minute

**Note**: Significantly more expensive than Whisper API ($0.006/minute)

## Connection Methods

### WebSocket (Recommended for Web Apps)
```javascript
const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-realtime-preview-2024-10-01";
const ws = new WebSocket(url, {
  headers: {
    "Authorization": "Bearer " + process.env.OPENAI_API_KEY,
    "OpenAI-Beta": "realtime=v1",
  },
});
```

### WebRTC (Recommended for Client-Side)
Microsoft/Azure recommends WebRTC for real-time audio streaming in client applications due to its low-latency design.

## Implementation Examples

### Basic WebSocket Setup (Node.js)
```javascript
import WebSocket from 'ws';

class RealtimeTranscription {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.ws = null;
  }

  connect() {
    const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-transcribe";
    this.ws = new WebSocket(url, {
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "OpenAI-Beta": "realtime=v1",
      },
    });

    this.ws.on('open', () => {
      console.log('Connected to Realtime API');
    });

    this.ws.on('message', (data) => {
      const response = JSON.parse(data.toString());
      this.handleResponse(response);
    });
  }

  sendAudio(audioBuffer) {
    if (this.ws && this.ws.readyState === WebSocket.OPEN) {
      this.ws.send(JSON.stringify({
        type: 'input_audio_buffer.append',
        audio: audioBuffer
      }));
    }
  }

  handleResponse(response) {
    if (response.type === 'conversation.item.created') {
      console.log('Transcript:', response.item.content);
    }
  }
}
```

### Python Implementation for Speech Transcription
```python
import websocket
import json
import base64

class RealtimeTranscription:
    def __init__(self, api_key, model="gpt-4o-transcribe"):
        self.api_key = api_key
        self.model = model
        self.ws = None
        
    def connect(self):
        url = f"wss://api.openai.com/v1/realtime?model={self.model}"
        headers = {
            "Authorization": f"Bearer {self.api_key}",
            "OpenAI-Beta": "realtime=v1"
        }
        
        self.ws = websocket.create_connection(url, header=headers)
        
    def send_audio(self, audio_data):
        # Convert audio to base64
        audio_b64 = base64.b64encode(audio_data).decode()
        
        message = {
            "type": "input_audio_buffer.append",
            "audio": audio_b64
        }
        
        self.ws.send(json.dumps(message))
        
    def receive_transcript(self):
        response = json.loads(self.ws.recv())
        
        if response.get("type") == "conversation.item.created":
            return response["item"]["content"]
        
        return None
```

### Browser Implementation
```javascript
class RealtimeBrowserTranscription {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.ws = null;
    this.mediaRecorder = null;
  }

  async startRecording() {
    // Get microphone access
    const stream = await navigator.mediaDevices.getUserMedia({ 
      audio: {
        sampleRate: 16000,
        channelCount: 1
      }
    });

    // Connect to Realtime API
    this.connectWebSocket();

    // Start recording
    this.mediaRecorder = new MediaRecorder(stream, {
      mimeType: 'audio/webm;codecs=pcm'
    });

    this.mediaRecorder.ondataavailable = (event) => {
      if (event.data.size > 0) {
        this.sendAudioChunk(event.data);
      }
    };

    this.mediaRecorder.start(100); // Send chunks every 100ms
  }

  connectWebSocket() {
    const url = "wss://api.openai.com/v1/realtime?model=gpt-4o-transcribe";
    
    this.ws = new WebSocket(url, [], {
      headers: {
        "Authorization": `Bearer ${this.apiKey}`,
        "OpenAI-Beta": "realtime=v1"
      }
    });

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.handleTranscript(data);
    };
  }

  async sendAudioChunk(audioBlob) {
    const arrayBuffer = await audioBlob.arrayBuffer();
    const base64Audio = btoa(String.fromCharCode(...new Uint8Array(arrayBuffer)));
    
    this.ws.send(JSON.stringify({
      type: 'input_audio_buffer.append',
      audio: base64Audio
    }));
  }

  handleTranscript(data) {
    if (data.type === 'conversation.item.created') {
      console.log('Real-time transcript:', data.item.content);
      // Update UI with transcript
    }
  }
}
```

## Azure OpenAI Integration
Azure supports the GPT-4o Realtime API with additional enterprise features:

```javascript
// Azure OpenAI endpoint
const azureUrl = "wss://<your-resource-name>.openai.azure.com/openai/realtime?api-version=2024-10-01-preview&deployment=gpt-4o-realtime";

const ws = new WebSocket(azureUrl, {
  headers: {
    "api-key": process.env.AZURE_OPENAI_API_KEY,
  },
});
```

## Audio Requirements
- **Format**: PCM16 preferred
- **Sample Rate**: 16kHz recommended
- **Channels**: Mono (1 channel)
- **Encoding**: Base64 for WebSocket transmission
- **Latency**: Ultra-low (sub-100ms typical)

## Advanced Features

### Function Calling
```javascript
// Configure function calling
const sessionConfig = {
  type: 'session.update',
  session: {
    tools: [
      {
        type: 'function',
        name: 'save_transcript',
        description: 'Save transcript with speaker info',
        parameters: {
          type: 'object',
          properties: {
            text: { type: 'string' },
            speaker: { type: 'string' },
            timestamp: { type: 'string' }
          }
        }
      }
    ]
  }
};

ws.send(JSON.stringify(sessionConfig));
```

### Asynchronous Operations
The latest gpt-realtime model supports non-blocking function calls, allowing conversations to continue while background operations execute.

## Advantages for Interview Transcription
1. **Ultra-low latency** (sub-100ms)
2. **Real-time streaming** - no buffering delays
3. **High accuracy** with latest models
4. **Function calling** for structured data extraction
5. **Multimodal** - can handle audio + text instructions

## Limitations
1. **Very expensive** ($100/1M tokens vs $0.006/minute for Whisper)
2. **Complex implementation** compared to simple HTTP API
3. **Requires WebSocket management**
4. **Beta stability** (though now GA)
5. **No speaker diarization** built-in

## Recommendation for Interview Use Case

### When to Use Realtime API:
- **Budget is not a constraint**
- **Ultra-low latency required**
- **Interactive voice features needed**
- **Function calling integration required**

### When to Use Whisper API:
- **Cost-conscious implementation**
- **Batch processing acceptable**
- **Simple transcription needs**
- **High accuracy at low cost**

### Hybrid Approach:
- **Web Speech API** for instant preview
- **Whisper API** for cost-effective accuracy
- **Realtime API** only for premium features

## Cost Comparison (1 hour interview)
- **Whisper API**: ~$0.36 (60 minutes × $0.006)
- **Realtime API**: ~$60-100+ (depending on token usage)
- **Web Speech API**: Free (built into Chrome)

**Conclusion**: For most interview transcription use cases, Whisper API provides the best accuracy-to-cost ratio, while Realtime API is better suited for interactive voice applications where cost is not a primary concern.