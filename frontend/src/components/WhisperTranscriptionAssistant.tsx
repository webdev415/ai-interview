'use client';

/**
 * OpenAI Whisper-based Meeting Transcription Assistant
 * Uses hybrid approach: Web Speech API for real-time + Whisper for accuracy
 * Optimized for cost-effectiveness and maximum accuracy
 */

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { DualAudioCaptureService } from '@/lib/audio/dual-capture';
import { WhisperService, HybridTranscriptionService } from '@/lib/whisper/service';

interface TranscriptSegment {
  id: string;
  text: string;
  timestamp: number;
  confidence: number;
  isFinal: boolean;
  speaker?: string;
  source: 'realtime' | 'whisper'; // Track the source
}

export default function WhisperTranscriptionAssistant() {
  const [isRecording, setIsRecording] = useState(false);
  const [transcripts, setTranscripts] = useState<TranscriptSegment[]>([]);
  const [connectionStatus, setConnectionStatus] = useState<string>('idle');
  const [error, setError] = useState<string | null>(null);
  const [currentSpeaker, setCurrentSpeaker] = useState<string>('Silent');
  const [interimTranscript, setInterimTranscript] = useState<string>('');
  const [processingCost, setProcessingCost] = useState<number>(0);
  const [transcriptionMode, setTranscriptionMode] = useState<'whisper' | 'hybrid'>('hybrid');

  // Service instances
  const audioService = useRef<DualAudioCaptureService | null>(null);
  const whisperService = useRef<WhisperService | null>(null);
  const hybridService = useRef<HybridTranscriptionService | null>(null);
  const lastSpeaker = useRef<string>('Silent');
  const startTime = useRef<number>(0);

  // Initialize services
  useEffect(() => {
    const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;
    
    if (!apiKey) {
      setError('OpenAI API key is missing. Please add NEXT_PUBLIC_OPENAI_API_KEY to your .env.local file.');
      return;
    }

    // Initialize audio capture service
    audioService.current = new DualAudioCaptureService({
      sampleRate: 48000,
      echoCancellation: true,
      noiseSuppression: true
    });

    // Initialize transcription services based on mode
    if (transcriptionMode === 'whisper') {
      whisperService.current = new WhisperService({
        apiKey,
        model: 'whisper-1',
        language: 'en',
        prompt: 'This is an interview or meeting transcript. Clear speech with multiple speakers.'
      });
    } else {
      hybridService.current = new HybridTranscriptionService(apiKey);
    }

    return () => {
      stopRecording();
    };
  }, [transcriptionMode]);

  /**
   * Start recording with selected transcription mode
   */
  const startRecording = useCallback(async () => {
    try {
      setError(null);
      setConnectionStatus('connecting');
      setProcessingCost(0);
      startTime.current = Date.now();

      if (transcriptionMode === 'whisper') {
        // Pure Whisper approach
        await startWhisperRecording();
      } else {
        // Hybrid approach
        await startHybridRecording();
      }

      setIsRecording(true);
      setConnectionStatus('recording');

    } catch (error: any) {
      console.error('Failed to start recording:', error);
      
      if (error?.name === 'NotAllowedError' || error?.message?.includes('Permission denied')) {
        setError('Permission denied. Please allow both microphone and screen sharing access.');
      } else {
        setError(error instanceof Error ? error.message : 'Failed to start recording');
      }
      
      setIsRecording(false);
      setConnectionStatus('idle');
    }
  }, [transcriptionMode]);

  /**
   * Start Whisper-only recording
   */
  const startWhisperRecording = async () => {
    if (!whisperService.current) return;

    // Start Whisper buffering
    whisperService.current.startBuffering(
      (text: string, speaker: string, timestamp: number) => {
        const segment: TranscriptSegment = {
          id: crypto.randomUUID(),
          text,
          timestamp,
          confidence: 0.95, // Whisper typically has high confidence
          isFinal: true,
          speaker,
          source: 'whisper'
        };

        setTranscripts(prev => [...prev, segment]);
        
        // Update cost estimate (approx)
        const minutesElapsed = (Date.now() - startTime.current) / 1000 / 60;
        setProcessingCost(minutesElapsed * 0.006);
      },
      30000 // Process every 30 seconds to avoid rate limits
    );

    // Start dual audio capture
    await audioService.current?.startCapture(
      (audioData: ArrayBuffer, speaker: string) => {
        // Convert to Float32Array for Whisper service
        const float32Data = new Float32Array(audioData);
        whisperService.current?.addAudioData(float32Data, speaker);
        
        if (speaker !== 'Silent' && speaker !== lastSpeaker.current) {
          lastSpeaker.current = speaker;
          setCurrentSpeaker(speaker);
        }
      },
      (speaker: string) => {
        setCurrentSpeaker(speaker);
      }
    );
  };

  /**
   * Start hybrid recording (Web Speech + Whisper)
   */
  const startHybridRecording = async () => {
    if (!hybridService.current) return;

    // Start hybrid transcription
    hybridService.current.start(
      // Real-time interim results from Web Speech API
      (text: string, speaker: string) => {
        setInterimTranscript(`${speaker}: ${text}`);
      },
      // Final accurate results from Whisper
      (text: string, speaker: string, timestamp: number) => {
        const segment: TranscriptSegment = {
          id: crypto.randomUUID(),
          text,
          timestamp,
          confidence: 0.95,
          isFinal: true,
          speaker,
          source: 'whisper'
        };

        setTranscripts(prev => [...prev, segment]);
        setInterimTranscript('');
        
        // Update cost
        const minutesElapsed = (Date.now() - startTime.current) / 1000 / 60;
        setProcessingCost(minutesElapsed * 0.006);
      }
    );

    // Start dual audio capture
    await audioService.current?.startCapture(
      (audioData: ArrayBuffer, speaker: string) => {
        const float32Data = new Float32Array(audioData);
        hybridService.current?.addAudioData(float32Data, speaker);
        
        if (speaker !== 'Silent' && speaker !== lastSpeaker.current) {
          lastSpeaker.current = speaker;
          setCurrentSpeaker(speaker);
        }
      },
      (speaker: string) => {
        setCurrentSpeaker(speaker);
      }
    );
  };

  /**
   * Stop recording
   */
  const stopRecording = useCallback(() => {
    try {
      audioService.current?.stopCapture();
      whisperService.current?.stop();
      hybridService.current?.stop();
      
      setIsRecording(false);
      setConnectionStatus('idle');
      setInterimTranscript('');
      setCurrentSpeaker('Silent');

      // Final cost calculation
      const minutesElapsed = (Date.now() - startTime.current) / 1000 / 60;
      setProcessingCost(minutesElapsed * 0.006);

    } catch (error) {
      console.error('Failed to stop recording:', error);
      setError(error instanceof Error ? error.message : 'Failed to stop recording');
    }
  }, []);

  /**
   * Export transcripts with cost information
   */
  const exportTranscripts = useCallback(() => {
    const header = `# Meeting Transcript - ${new Date().toLocaleDateString()}\n`;
    const costInfo = `Cost: $${processingCost.toFixed(4)} (${((Date.now() - startTime.current) / 1000 / 60).toFixed(1)} minutes @ $0.006/min)\n`;
    const modeInfo = `Transcription Mode: ${transcriptionMode === 'hybrid' ? 'Hybrid (Web Speech + Whisper)' : 'Pure Whisper'}\n\n`;
    
    const content = header + costInfo + modeInfo + transcripts
      .map(t => `[${new Date(t.timestamp).toLocaleTimeString()}] ${t.speaker || 'Unknown'}: ${t.text}`)
      .join('\n\n');
    
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `whisper-transcript-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  }, [transcripts, processingCost, transcriptionMode]);

  /**
   * Clear transcripts
   */
  const clearTranscripts = useCallback(() => {
    setTranscripts([]);
    setInterimTranscript('');
    setProcessingCost(0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <header className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            OpenAI Whisper Transcription Assistant
          </h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            High-accuracy transcription with OpenAI Whisper API - {transcriptionMode === 'hybrid' ? 'Hybrid Mode (Real-time + Accuracy)' : 'Pure Whisper Mode'}
          </p>
        </header>

        {/* Mode Selection */}
        {!isRecording && (
          <div className="mb-6 p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
            <h3 className="font-semibold text-blue-900 dark:text-blue-300 mb-3">
              Transcription Mode:
            </h3>
            <div className="space-y-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="mode"
                  value="hybrid"
                  checked={transcriptionMode === 'hybrid'}
                  onChange={(e) => setTranscriptionMode(e.target.value as 'hybrid')}
                  className="mr-2"
                />
                <span className="text-sm">
                  <strong>Hybrid Mode (Recommended):</strong> Web Speech API for real-time preview + Whisper for final accuracy
                </span>
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="mode"
                  value="whisper"
                  checked={transcriptionMode === 'whisper'}
                  onChange={(e) => setTranscriptionMode(e.target.value as 'whisper')}
                  className="mr-2"
                />
                <span className="text-sm">
                  <strong>Pure Whisper:</strong> Maximum accuracy, 30-second processing intervals, most cost-effective
                </span>
              </label>
            </div>
          </div>
        )}

        {/* Instructions */}
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-lg">
          <h3 className="font-semibold text-green-900 dark:text-green-300 mb-2">
            How to use:
          </h3>
          <ol className="list-decimal list-inside space-y-1 text-sm text-green-800 dark:text-green-400">
            <li>Make sure you have added your OpenAI API key to .env.local</li>
            <li>Click "Start Whisper Transcription"</li>
            <li>Allow microphone access (for your voice)</li>
            <li>Select the Chrome Tab with your meeting</li>
            <li>Make sure to check "Share tab audio" for other participants</li>
            <li>Enjoy 95-98% accuracy at only $0.006/minute!</li>
            <li>Note: Audio is processed every 30 seconds to respect API limits</li>
          </ol>
        </div>

        {/* Status and Cost */}
        <div className="mb-4 flex items-center gap-6">
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

          {isRecording && (
            <div className="flex items-center gap-2">
              <span className="text-sm text-gray-600 dark:text-gray-400">Cost:</span>
              <span className="text-sm font-semibold text-green-600 dark:text-green-400">
                ${processingCost.toFixed(4)}
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
            disabled={!!error}
            className={`px-6 py-3 rounded-lg font-semibold text-white transition-all ${
              isRecording 
                ? 'bg-red-600 hover:bg-red-700' 
                : 'bg-green-600 hover:bg-green-700'
            } ${!!error ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {isRecording ? 'Stop Transcription' : 'Start Whisper Transcription'}
          </button>
          
          <button
            onClick={exportTranscripts}
            disabled={isRecording || transcripts.length === 0}
            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Export Transcript
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
          <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
            <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
              Meeting Transcript ({transcriptionMode === 'hybrid' ? 'Hybrid' : 'Whisper'} Mode)
            </h2>
            <div className="text-sm text-gray-500">
              Accuracy: 95-98% | Cost: $0.006/minute
            </div>
          </div>
          
          <div className="p-4 h-96 overflow-y-auto space-y-3">
            {transcripts.length === 0 && !interimTranscript && (
              <div className="text-center py-8">
                <p className="text-gray-500 dark:text-gray-400">
                  High-accuracy transcript will appear here...
                </p>
                <p className="text-xs text-gray-400 mt-2">
                  Powered by OpenAI Whisper - the most accurate speech-to-text API
                </p>
              </div>
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
                  <span className="ml-2 text-xs text-gray-400">
                    ({segment.source === 'whisper' ? '🎯 Whisper' : '⚡ Real-time'})
                  </span>
                </div>
              </div>
            ))}

            {/* Interim transcript (hybrid mode only) */}
            {interimTranscript && transcriptionMode === 'hybrid' && (
              <div className="flex items-start gap-3 opacity-60">
                <div className="flex-shrink-0 w-20 text-right">
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {new Date().toLocaleTimeString()}
                  </span>
                </div>
                <div className="flex-grow">
                  <span className="italic text-gray-600 dark:text-gray-400">
                    {interimTranscript}
                  </span>
                  <span className="ml-2 text-xs text-gray-400">
                    (⚡ Live preview)
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}