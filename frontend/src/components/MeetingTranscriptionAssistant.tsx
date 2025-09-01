'use client';

/**
 * Meeting Transcription Assistant with Dual Audio Capture
 * Captures both user microphone and tab audio for complete meeting transcription
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DualAudioCaptureService } from '@/lib/audio/dual-capture';
import { DeepgramService, TranscriptSegment } from '@/lib/deepgram/service';

export default function MeetingTranscriptionAssistant() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcripts, setTranscripts] = useState<TranscriptSegment[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<string>('idle');
  const [error, setError] = useState<string | null>(null);
  const [currentSpeaker, setCurrentSpeaker] = useState<string>('Silent');
  const [interimTranscript, setInterimTranscript] = useState<string>('');

  // Service instances
  const audioService = useRef<DualAudioCaptureService | null>(null);
  const deepgramService = useRef<DeepgramService | null>(null);
  const lastSpeaker = useRef<string>('Silent');

  // Initialize services
  useEffect(() => {
    // Initialize dual audio capture service
    audioService.current = new DualAudioCaptureService({
      sampleRate: 48000,
      echoCancellation: true,
      noiseSuppression: true
    });

    // Initialize Deepgram service
    deepgramService.current = new DeepgramService({
      apiKey: process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY || '',
      model: 'nova-2',
      language: 'en-US',
      smartFormat: true,
      interimResults: true,
      punctuate: true,
      endpointing: 300,
      vadEvents: false,
      encoding: 'linear16',
      sampleRate: 48000,
      channels: 1
    });

    return () => {
      stopRecording();
    };
  }, []);

  /**
   * Start recording both microphone and tab audio
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
          
          // Add speaker information
          const enhancedSegment = {
            ...segment,
            speaker: lastSpeaker.current !== 'Silent' ? lastSpeaker.current : 'Unknown'
          };
          
          if (segment.isFinal) {
            setTranscripts(prev => [...prev, enhancedSegment]);
            setInterimTranscript('');
          } else {
            setInterimTranscript(`${enhancedSegment.speaker}: ${segment.text}`);
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

      // Start dual audio capture
      console.log('Starting dual audio capture...');
      await audioService.current?.startCapture(
        // Handle audio data
        (audioData: ArrayBuffer, speaker: string) => {
          // Update speaker if changed
          if (speaker !== 'Silent' && speaker !== lastSpeaker.current) {
            lastSpeaker.current = speaker;
            setCurrentSpeaker(speaker);
          }
          
          // Send audio to Deepgram
          deepgramService.current?.sendAudio(audioData);
        },
        // Handle speaker changes
        (speaker: string) => {
          setCurrentSpeaker(speaker);
          console.log('Current speaker:', speaker);
        }
      );

      setIsRecording(true);
      setConnectionStatus('recording');

    } catch (error: any) {
      console.error('Failed to start recording:', error);
      
      if (error?.name === 'NotAllowedError' || error?.message?.includes('Permission denied')) {
        setError('Permission denied. Please allow both microphone and screen sharing access.');
      } else {
        setError(error instanceof Error ? error.message : 'Failed to start recording');
      }
      
      deepgramService.current?.disconnect();
      audioService.current?.stopCapture();
      
      setIsRecording(false);
      setConnectionStatus('idle');
    }
  }, []);

  /**
   * Stop recording
   */
  const stopRecording = useCallback(() => {
    try {
      audioService.current?.stopCapture();
      deepgramService.current?.disconnect();
      
      setIsRecording(false);
      setConnectionStatus('idle');
      setInterimTranscript('');
      setCurrentSpeaker('Silent');

    } catch (error) {
      console.error('Failed to stop recording:', error);
      setError(error instanceof Error ? error.message : 'Failed to stop recording');
    }
  }, []);

  /**
   * Export transcripts in Google Meet style format
   */
  const exportTranscripts = useCallback(() => {
    const content = transcripts
      .map(t => `[${new Date(t.timestamp).toLocaleTimeString()}] ${t.speaker || 'Unknown'}: ${t.text}`)
      .join('\n\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `meeting-transcript-${Date.now()}.txt`;
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
            Meeting Transcription Assistant
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Captures both your voice and other participants for complete meeting transcription
          </p>
        </header>

        {/* Instructions */}
        <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
          <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-2">
            How to use:
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-blue-800 dark:text-blue-400">
            <li>Click "Start Meeting Transcription"</li>
            <li>First, allow microphone access (for your voice)</li>
            <li>Then select the Chrome Tab with your meeting</li>
            <li>Make sure to check "Share tab audio" for other participants</li>
            <li>The transcript will show who is speaking (You vs Others)</li>
          </ol>
        </div>

        {/* Status */}
        <div className="mb-4 flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className={`w-3 h-3 rounded-full ${
              connectionStatus === 'recording' ? 'bg-green-500 animate-pulse' : 
              connectionStatus === 'connecting' ? 'bg-yellow-500 animate-pulse' : 
              'bg-gray-400'
            }`} />
            <span className="text-sm font-medium">
              {connectionStatus === 'recording' ? 'Recording' : 
               connectionStatus === 'connecting' ? 'Connecting...' : 
               'Not Recording'}
            </span>
          </div>
          
          {currentSpeaker !== 'Silent' && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Speaker:</span>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                {currentSpeaker}
              </span>
            </div>
          )}
        </div>

        {/* Error Display */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <div className="flex items-start justify-between">
              <div>
                <strong>Error:</strong> {error}
              </div>
              <button
                onClick={() => setError(null)}
                className="ml-4 text-red-700 hover:text-red-900"
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Controls */}
        <div className="flex gap-4 mb-6">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all ${
              isRecording 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-green-600 hover:bg-green-700'
            }`}
          >
            {isRecording ? 'Stop Transcription' : 'Start Meeting Transcription'}
          </button>
          
          <button
            onClick={exportTranscripts}
            disabled={isRecording || transcripts.length === 0}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Export
          </button>
          
          <button
            onClick={clearTranscripts}
            disabled={isRecording}
            className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Clear
          </button>
        </div>

        {/* Transcript Display */}
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg">
          <div className="p-4 border-b border-gray-200 dark:border-gray-700">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Meeting Transcript
            </h2>
          </div>
          
          <div className="p-4 h-96 overflow-y-auto space-y-3">
            {transcripts.length === 0 && !interimTranscript && (
              <p className="text-gray-500 dark:text-gray-400 text-center py-8">
                Transcript will appear here...
              </p>
            )}

            {/* Display transcripts in Google Meet style */}
            {transcripts.map((segment) => (
              <div key={segment.id} className="flex items-start gap-3">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date(segment.timestamp).toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex-grow">
                  <span className={`font-semibold ${
                    segment.speaker === 'You' 
                      ? 'text-blue-600 dark:text-blue-400' 
                      : 'text-green-600 dark:text-green-400'
                  }`}>
                    {segment.speaker || 'Unknown'}:
                  </span>
                  <span className="ml-2 text-gray-900 dark:text-white">
                    {segment.text}
                  </span>
                </div>
              </div>
            ))}

            {/* Interim transcript */}
            {interimTranscript && (
              <div className="flex items-start gap-3 opacity-60">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex-grow italic text-gray-600 dark:text-gray-400">
                  {interimTranscript}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}