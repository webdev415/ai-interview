'use client';

/**
 * Main Transcription Assistant Component
 * Based on /research/nextjs/page5.md - Client Components
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { AudioCaptureService } from '@/lib/audio/capture';
import { DeepgramService, TranscriptSegment } from '@/lib/deepgram/service';
import { TranscriptDisplay } from './TranscriptDisplay';
import { ControlPanel } from './ControlPanel';
import { StatusIndicator } from './StatusIndicator';
import { BrowserCompatibilityCheck } from './BrowserCompatibilityCheck';
import { AudioTest } from './AudioTest';
import { SystemCheck } from './SystemCheck';

export default function TranscriptionAssistant() {
  // State management
  const [isRecording, setIsRecording] = useState(false);
  const [transcripts, setTranscripts] = useState<TranscriptSegment[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<string>('idle');
  const [error, setError] = useState<string | null>(null);
  const [interimTranscript, setInterimTranscript] = useState<string>('');

  // Service instances
  const audioService = useRef<AudioCaptureService | null>(null);
  const deepgramService = useRef<DeepgramService | null>(null);

  // Initialize services
  useEffect(() => {
    // Check browser compatibility
    const compatibility = AudioCaptureService.checkBrowserCompatibility();
    if (!compatibility.supported) {
      setError(compatibility.message);
      return;
    }

    // Initialize audio capture service
    audioService.current = new AudioCaptureService({
      sampleRate: 16000,
      channelCount: 1,  // We'll convert to mono in the processing pipeline
      echoCancellation: false,
      noiseSuppression: false,
      systemAudio: true
    });

    // Initialize Deepgram service
    // Note: We'll use 48000 sample rate to match browser's default
    deepgramService.current = new DeepgramService({
      apiKey: process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY || '',
      model: 'nova-2',
      language: 'en-US',
      smartFormat: true,
      interimResults: true,
      punctuate: true,
      endpointing: 300,
      vadEvents: false,  // Disable VAD events for now to reduce noise
      encoding: 'linear16',
      sampleRate: 48000,  // Match browser's typical sample rate
      channels: 1  // We're converting to mono
    });

    // Cleanup on unmount
    return () => {
      stopRecording();
    };
  }, []);

  /**
   * Start recording and transcription
   */
  const startRecording = useCallback(async () => {
    try {
      setError(null);
      setConnectionStatus('connecting');

      // Connect to Deepgram first
      console.log('Connecting to Deepgram...');
      await deepgramService.current?.connect(
        // Handle transcript
        (segment: TranscriptSegment) => {
          console.log('Received transcript:', segment);
          if (segment.isFinal) {
            setTranscripts(prev => [...prev, segment]);
            setInterimTranscript('');
          } else {
            // Handle interim results
            // Based on /research/deepgram/page15.md
            setInterimTranscript(segment.text);
          }
        },
        // Handle errors
        (error: Error) => {
          console.error('Deepgram error:', error);
          setError(error.message);
        },
        // Handle status changes
        (status: string) => {
          setConnectionStatus(status);
        }
      );

      // Start audio capture
      console.log('Starting audio capture...');
      await audioService.current?.startCapture((audioData: ArrayBuffer) => {
        // Send audio to Deepgram
        console.log('Sending audio data to Deepgram, size:', audioData.byteLength);
        deepgramService.current?.sendAudio(audioData);
      });

      setIsRecording(true);
      setConnectionStatus('recording');

    } catch (error: any) {
      console.error('Failed to start recording:', error);
      
      // Handle user cancellation specifically
      if (error?.name === 'NotAllowedError' || error?.message?.includes('Permission denied')) {
        setError('Screen sharing was cancelled. Please click "Start Meeting Assistant" again and allow screen sharing to begin transcription.');
      } else {
        setError(error instanceof Error ? error.message : 'Failed to start recording');
      }
      
      // Clean up any partial connections
      deepgramService.current?.disconnect();
      audioService.current?.stopCapture();
      
      setIsRecording(false);
      setConnectionStatus('idle');
    }
  }, []);

  /**
   * Stop recording and transcription
   */
  const stopRecording = useCallback(() => {
    try {
      // Stop audio capture
      audioService.current?.stopCapture();
      
      // Disconnect from Deepgram
      deepgramService.current?.disconnect();
      
      setIsRecording(false);
      setConnectionStatus('idle');
      setInterimTranscript('');

    } catch (error) {
      console.error('Failed to stop recording:', error);
      setError(error instanceof Error ? error.message : 'Failed to stop recording');
    }
  }, []);

  /**
   * Export transcripts
   */
  const exportTranscripts = useCallback(() => {
    const content = transcripts
      .map(t => `[${new Date(t.timestamp).toLocaleTimeString()}] ${t.text}`)
      .join('\n\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `transcript-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [transcripts]);

  /**
   * Clear transcripts
   */
  const clearTranscripts = useCallback(() => {
    setTranscripts([]);
    setInterimTranscript('');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Interview Transcription Assistant
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Capture and transcribe audio from your browser tabs in real-time
          </p>
        </header>

        {/* Browser Compatibility Check */}
        <BrowserCompatibilityCheck />
        
        {/* System Check Component */}
        <SystemCheck />
        
        {/* Audio Test Component */}
        <AudioTest />

        {/* Error Display */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <div className="flex items-start justify-between">
              <div className="flex items-start">
                <svg className="w-5 h-5 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                </svg>
                <div>
                  <strong className="font-semibold">Error:</strong>
                  <p className="mt-1">{error}</p>
                </div>
              </div>
              <button
                onClick={() => setError(null)}
                className="ml-4 text-red-700 hover:text-red-900"
                aria-label="Dismiss error"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        )}

        {/* Status Indicator */}
        <StatusIndicator 
          status={connectionStatus} 
          isRecording={isRecording} 
        />

        {/* Control Panel */}
        <ControlPanel
          isRecording={isRecording}
          onStart={startRecording}
          onStop={stopRecording}
          onExport={exportTranscripts}
          onClear={clearTranscripts}
          disabled={!!error}
        />

        {/* Transcript Display */}
        <TranscriptDisplay
          transcripts={transcripts}
          interimTranscript={interimTranscript}
        />
      </div>
    </div>
  );
}