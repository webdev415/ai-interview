# OpenAI Whisper API Research

## Overview
Whisper is OpenAI's general-purpose speech recognition model, trained on a large dataset of diverse audio. It's a multitasking model that can perform:
- Multilingual speech recognition
- Speech translation 
- Language identification

## API Access
- Available through OpenAI API platform
- Uses the open-source Whisper large-v2 model
- Requires OpenAI API key
- Accessed via REST API endpoints

## Pricing (2024)
- **Whisper API**: $0.006 per minute of audio
- **GPT-4o Transcribe**: $0.006 per minute (alternative)
- **GPT-4o Mini Transcribe**: $0.003 per minute (budget option)
- **Realtime API**: $100.00 per 1M input tokens (for streaming)

## File Limitations
- **Maximum file size**: 25 MB per file
- **Supported formats**: m4a, mp3, webm, mp4, mpga, wav, mpeg
- **No explicit duration limit** (constrained by file size)

## Rate Limits
- Minutes-based restrictions to encourage paced requests
- Specific limits not publicly detailed
- Designed to avoid server overloading

## Models Available
1. **tiny** - Fastest, least accurate
2. **base** - Good balance
3. **small** - Better accuracy
4. **medium** - High accuracy
5. **large** - Highest accuracy
6. **turbo** - Default for English (recommended)

For non-English speech translation to English, use multilingual models (tiny, base, small, medium, large) instead of turbo.

## Key Capabilities
- **High Accuracy**: 95-98% for English
- **Multilingual**: Supports 100+ languages
- **Timestamps**: Provides word-level and segment-level timestamps
- **Language Detection**: Automatic language identification
- **Robust**: Handles background noise and various accents

## Implementation Examples

### Python Library (Local)
```python
import whisper

# Load model
model = whisper.load_model("turbo")

# Load and process audio
audio = whisper.load_audio("audio.mp3")
audio = whisper.pad_or_trim(audio)

# Transcribe
result = model.transcribe("audio.mp3")
print(result["text"])
```

### API Call (Server)
```python
import openai

# Set API key
openai.api_key = "your-api-key"

# Transcribe audio file
with open("audio.mp3", "rb") as audio_file:
    transcript = openai.Audio.transcriptions.create(
        model="whisper-1",
        file=audio_file,
        response_format="verbose_json",
        timestamp_granularities=["word"]
    )

print(transcript.text)
```

### Next.js Implementation
```javascript
// Frontend upload
const formData = new FormData();
formData.append('file', audioBlob, 'audio.wav');
formData.append('model', 'whisper-1');

const response = await fetch('/api/transcribe', {
  method: 'POST',
  body: formData
});

// Backend API route
export async function POST(request) {
  const formData = await request.formData();
  const audioFile = formData.get('file');
  
  const transcript = await openai.audio.transcriptions.create({
    file: audioFile,
    model: 'whisper-1',
    response_format: 'verbose_json'
  });
  
  return Response.json({ text: transcript.text });
}
```

## Real-Time Streaming Limitations
- **Whisper API does NOT support streaming**
- **Processes complete files only**
- For real-time needs, use OpenAI's **Realtime API** (beta)

## Realtime API Alternative
- **New in 2024**: OpenAI Realtime API for streaming
- **Low-latency**: Direct audio streaming
- **Multimodal**: Handles audio inputs/outputs
- **Model**: gpt-4o-realtime-preview
- **Price**: $100/1M input tokens (much more expensive)

## Best Practices for Interview Transcription

### Batch Processing Approach
1. **Buffer audio** in 5-10 second chunks
2. **Send to Whisper API** for high accuracy
3. **Combine with real-time preview** using Web Speech API
4. **Cost-effective** at $0.006/minute

### File Preparation
- **Convert to supported format** (preferably wav/mp3)
- **Optimize file size** (stay under 25MB)
- **Use mono audio** when possible to reduce size
- **Sample rate**: 16kHz or 44.1kHz work well

### Response Handling
```json
{
  "text": "The full transcript text",
  "segments": [
    {
      "id": 0,
      "start": 0.0,
      "end": 4.0,
      "text": "Hello, how are you today?",
      "tokens": [50364, 50365, ...],
      "temperature": 0.0,
      "avg_logprob": -0.1,
      "compression_ratio": 1.0,
      "no_speech_prob": 0.01
    }
  ],
  "language": "en"
}
```

## Advantages for Interview Transcription
1. **Highest accuracy** (95-98%)
2. **Excellent punctuation** and formatting
3. **Handles technical terms** well
4. **Multi-language support**
5. **Timestamp precision** for speaker timing
6. **Cost-effective** at $0.006/minute

## Limitations
1. **No real-time streaming** (batch only)
2. **2-5 second latency** per chunk
3. **25MB file size limit**
4. **No built-in speaker diarization** (need custom solution)
5. **Internet connection required**

## Recommendation for Interview Use Case
- **Primary**: Use Whisper API for final, accurate transcripts
- **Secondary**: Use Web Speech API for real-time preview
- **Hybrid approach**: Best user experience + maximum accuracy
- **Cost**: Very reasonable at $0.006/minute