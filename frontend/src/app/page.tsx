'use client';

/**
 * Main application page
 * Based on /research/nextjs/page2.md - App Router patterns
 */

import dynamic from 'next/dynamic';

// Dynamically import the Whisper transcription assistant with no SSR
// Based on /research/nextjs/page10.md - Lazy loading
const WhisperTranscriptionAssistant = dynamic(
  () => import('@/components/WhisperTranscriptionAssistant'),
  { 
    ssr: false,
    loading: () => (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading OpenAI Whisper Transcription Assistant...</p>
        </div>
      </div>
    )
  }
);

export default function Home() {
  return <WhisperTranscriptionAssistant />;
}