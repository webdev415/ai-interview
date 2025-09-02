# OpenAI Whisper API Reference

## API Endpoint
- **URL**: `https://api.openai.com/v1/audio/transcriptions`
- **Method**: POST
- **Authentication**: Bearer token (API Key)

## Models
- **whisper-1**: The only available model currently
  - Supports multiple languages
  - Automatic language detection
  - 95-98% accuracy on clear audio

## Audio Format Support
### Supported Formats
- mp3
- mp4
- mpeg
- mpga
- m4a
- wav
- webm
- ogg
- flac

### File Size Limits
- **Maximum file size**: 25 MB
- For longer audio, split into chunks

## API Parameters

### Required Parameters
- **file** (multipart/form-data): The audio file to transcribe
- **model** (string): Must be "whisper-1"

### Optional Parameters
- **language** (string): ISO-639-1 language code (e.g., "en", "es", "fr")
  - Improves accuracy and latency
  - If omitted, language is auto-detected
  
- **prompt** (string): Optional text to guide the model's style
  - Max 224 tokens
  - Can include correct spellings for specific words
  - Example: "ZyntriQix, Digique Plus, CynapseFive"

- **response_format** (string): Format of the transcript output
  - `json` (default): JSON object with "text" field
  - `text`: Plain text transcript
  - `srt`: SubRip subtitle format
  - `verbose_json`: JSON with segments, timestamps, and confidence
  - `vtt`: WebVTT subtitle format

- **temperature** (number): Sampling temperature (0-1)
  - Default: 0
  - Lower = more deterministic
  - Higher = more random/creative

- **timestamp_granularities[]** (array): For verbose_json format
  - `word`: Word-level timestamps
  - `segment`: Segment-level timestamps
  - Example: `timestamp_granularities[]=word&timestamp_granularities[]=segment`

## Rate Limits
### Default Limits (Tier 1)
- **RPM (Requests per minute)**: 3
- **RPD (Requests per day)**: 200

### Tier 2
- **RPM**: 50
- **RPD**: No limit

### Tier 3+
- **RPM**: 150-500+
- **RPD**: No limit

## Pricing
- **Cost**: $0.006 per minute of audio
- Rounded to the nearest second

## Language Support
Whisper supports 98 languages including:
- English (en)
- Spanish (es)
- French (fr)
- German (de)
- Italian (it)
- Portuguese (pt)
- Russian (ru)
- Japanese (ja)
- Korean (ko)
- Chinese (zh)
- Arabic (ar)
- Hindi (hi)
- And many more...

## Response Formats

### JSON Response (default)
```json
{
  "text": "The transcribed text appears here"
}
```

### Verbose JSON Response
```json
{
  "task": "transcribe",
  "language": "english",
  "duration": 8.47,
  "text": "The transcribed text",
  "segments": [
    {
      "id": 0,
      "seek": 0,
      "start": 0.0,
      "end": 3.0,
      "text": " The transcribed text",
      "tokens": [50364, 440, 1137, ...],
      "temperature": 0.0,
      "avg_logprob": -0.45,
      "compression_ratio": 0.98,
      "no_speech_prob": 0.01
    }
  ],
  "words": [
    {
      "word": "The",
      "start": 0.0,
      "end": 0.23
    }
  ]
}
```

## Best Practices

### 1. Audio Quality
- Use high-quality audio (16kHz or higher sample rate)
- Minimize background noise
- Ensure clear speech

### 2. File Preparation
- Convert to supported format if needed
- Keep files under 25MB
- For long audio, split into segments with overlap

### 3. Language Specification
- Always specify language when known for better accuracy
- Use ISO-639-1 codes

### 4. Error Handling
- Implement retry logic for 429 (rate limit) errors
- Use exponential backoff
- Handle network timeouts (requests can take up to 30s)

### 5. Cost Optimization
- Batch short clips together when possible
- Use appropriate audio quality (not excessive)
- Consider caching transcriptions

## Example Implementation

### Basic Request (Node.js)
```javascript
const formData = new FormData();
formData.append('file', audioBlob, 'audio.wav');
formData.append('model', 'whisper-1');
formData.append('language', 'en');
formData.append('response_format', 'verbose_json');

const response = await fetch('https://api.openai.com/v1/audio/transcriptions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${apiKey}`
  },
  body: formData
});

const data = await response.json();
```

### With Timestamps
```javascript
formData.append('timestamp_granularities[]', 'segment');
formData.append('timestamp_granularities[]', 'word');
```

### With Prompt for Terminology
```javascript
formData.append('prompt', 'The transcript is about AI technology. Terms: GPT-4, LangChain, vector embeddings');
```

## Common Issues and Solutions

### 1. Rate Limiting (429)
- **Solution**: Implement exponential backoff
- Wait 1s, 2s, 4s, 8s between retries
- Consider upgrading tier for higher limits

### 2. File Too Large
- **Solution**: Split audio into <25MB chunks
- Process chunks separately
- Maintain context with prompts

### 3. Poor Accuracy
- **Solutions**:
  - Specify language explicitly
  - Improve audio quality
  - Use prompt parameter for domain-specific terms
  - Ensure proper audio encoding

### 4. Timeout Errors
- **Solution**: Increase client timeout to 60s
- Whisper can take up to 30s for processing

## Comparison with Real-time Solutions

### Whisper (Batch)
- **Pros**: Highest accuracy (95-98%), cost-effective
- **Cons**: Higher latency (5-30s), not real-time

### Deepgram (Streaming)
- **Pros**: Real-time (<300ms), good for live transcription
- **Cons**: Slightly lower accuracy (90-95%)

### Hybrid Approach
- Use Web Speech API for real-time preview
- Use Whisper for final accurate transcript
- Best of both worlds

## Updates and Changelog
- **2024**: Whisper-1 model released
- **2024**: Added timestamp_granularities parameter
- **2024**: Improved language detection
- **2025**: Enhanced accuracy and speed optimizations