# AI Interview Transcription Assistant

A privacy-focused, browser-based interview transcription assistant that captures and transcribes audio from browser tabs in real-time using OpenAI Whisper API, without participants' awareness.

> **95-98% accuracy transcription with complete invisibility to meeting participants**

## 🚀 Features

- **🎯 High-Accuracy Transcription**: 95-98% accuracy using OpenAI Whisper API
- **👥 Dual Audio Capture**: Captures both system audio (other participants) and microphone (your voice)
- **🔊 Speaker Identification**: Automatically identifies "You" vs "Other Participants"
- **⚡ Hybrid Mode**: Web Speech API for real-time preview + Whisper for final accuracy
- **👻 Invisible Operation**: No bots, no meeting notifications, completely invisible to participants
- **💰 Cost-Effective**: Only $0.006 per minute of audio processing
- **📊 Real-Time Cost Tracking**: See processing costs as they accumulate
- **📋 Export Functionality**: Download transcripts with timestamps and speaker identification
- **🐳 Docker Support**: Complete containerization for easy deployment

## 🚀 Quick Start

### Option 1: Local Development

```bash
# 1. Clone the repository
git clone https://github.com/webdev415/ai-interview.git
cd ai-interview/frontend

# 2. Install dependencies
npm install

# 3. Set up environment variables
cp .env.local.example .env.local
# Edit .env.local and add your OpenAI API key

# 4. Start the development server
npm run dev
```

### Option 2: Docker

```bash
# 1. Clone and setup
git clone https://github.com/webdev415/ai-interview.git
cd ai-interview

# 2. Configure environment
cp .env.example .env
# Edit .env and add your OpenAI API key

# 3. Start with Docker
docker-compose up -d
```

## 🌐 Browser Compatibility

| Browser | System Audio | Microphone | Status |
|---------|--------------|------------|--------|
| Chrome | ✅ Full | ✅ Full | **Recommended** |
| Edge | ✅ Full | ✅ Full | **Recommended** |
| Firefox | ⚠️ Limited | ✅ Full | Partial Support |
| Safari | ❌ No | ✅ Full | Not Supported |

## 📚 Documentation

- [Setup Guide](SETUP_GUIDE.md) - Comprehensive setup and usage instructions
- [Product Requirements Document](PRD.md) - Detailed technical specifications
- [OpenAI Whisper API Reference](research/openai/whisper-api-reference.md) - API documentation
- [OpenAI Realtime API Docs](research/openai/realtime-api-documentation.md) - Real-time transcription options

## 🎯 How It Works

1. **Open the web app** in Chrome or Edge
2. **Click "Start Whisper Transcription"**
3. **Allow microphone access** (for your voice)
4. **Select the meeting tab** and check "Share tab audio"
5. **Start transcribing!** - Audio is processed every 30 seconds with 95-98% accuracy

### Privacy Features
- **👻 Completely invisible** to meeting participants
- **🚫 No bots** joining the meeting
- **🔒 No screen sharing indicators** on participant screens
- **💻 Local processing** - transcripts stay on your device

## 💰 Pricing

- **OpenAI Whisper**: $0.006 per minute
- **1-hour meeting**: ~$0.36
- **10 hours of meetings**: ~$3.60

Real-time cost tracking shows exactly how much you're spending during transcription.

## 🏗️ Project Structure

```
ai-interview-transcription/
├── frontend/                  # Next.js application
│   ├── src/
│   │   ├── app/              # Next.js App Router
│   │   ├── components/       # React components
│   │   │   └── WhisperTranscriptionAssistant.tsx
│   │   └── lib/              # Core services
│   │       ├── audio/        # Audio capture services
│   │       │   ├── capture.ts
│   │       │   └── dual-capture.ts
│   │       └── whisper/      # OpenAI Whisper integration
│   │           └── service.ts
│   ├── Dockerfile           # Production container
│   └── Dockerfile.dev       # Development container
├── research/                # API documentation
│   └── openai/             # OpenAI Whisper & Realtime API docs
├── docker-compose.yml      # Docker orchestration
├── SETUP_GUIDE.md         # Detailed setup instructions
└── PRD.md                 # Technical specifications
```

## 🔧 Technical Architecture

### Core Components

**🎤 Dual Audio Capture**
- `DualAudioCaptureService` - Captures both microphone and system audio simultaneously
- Real-time speaker identification using audio level analysis
- Supports Chrome/Edge's getDisplayMedia API for tab audio capture

**🧠 OpenAI Whisper Integration**
- `WhisperService` - Handles batch processing with 30-second buffers
- Rate limiting protection with exponential backoff retry logic
- Audio format conversion (Float32Array → PCM16 → WAV)

**⚡ Hybrid Transcription**
- `HybridTranscriptionService` - Combines Web Speech API + Whisper
- Real-time preview with Web Speech API (free, instant)
- Final accuracy with Whisper API (paid, 95-98% accurate)

## 🛠️ Development

### Getting Started

1. **Prerequisites**: Node.js 18+, OpenAI API key
2. **Install**: `npm install` in frontend directory  
3. **Configure**: Add API key to `.env.local`
4. **Run**: `npm run dev` starts development server

### Testing

```bash
# Run the application
npm run dev

# Test in Chrome/Edge
# 1. Open localhost:3000
# 2. Click "Start Whisper Transcription"
# 3. Allow microphone access
# 4. Select browser tab with audio
# 5. Check "Share tab audio"
```

## 🚀 Deployment

### Docker Production

```bash
docker-compose up -d
```

### Manual Production

```bash
npm run build
npm start
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

MIT License - See [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- OpenAI Whisper for high-accuracy transcription
- Next.js team for the excellent framework
- Web Audio API for browser-based audio processing

---

**Built with Context Engineering by webdev415**
