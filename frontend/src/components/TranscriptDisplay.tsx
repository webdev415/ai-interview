'use client';

import React, { useEffect, useRef } from 'react';
import { TranscriptSegment } from '@/lib/deepgram/service';

interface TranscriptDisplayProps {
  transcripts: TranscriptSegment[];
  interimTranscript: string;
}

export function TranscriptDisplay({ 
  transcripts, 
  interimTranscript 
}: TranscriptDisplayProps) {
  const scrollRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom when new transcripts arrive
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [transcripts, interimTranscript]);

  return (
    <div className="mt-8 bg-white dark:bg-gray-800 rounded-lg shadow-lg">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700">
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
          Live Transcript
        </h2>
      </div>
      
      <div 
        ref={scrollRef}
        className="p-4 h-96 overflow-y-auto space-y-2"
      >
        {transcripts.length === 0 && !interimTranscript && (
          <p className="text-gray-500 dark:text-gray-400 text-center py-8">
            Transcripts will appear here as people speak...
          </p>
        )}

        {/* Display final transcripts */}
        {transcripts.map((segment) => (
          <div 
            key={segment.id} 
            className="p-3 bg-gray-50 dark:bg-gray-700 rounded-lg"
          >
            <div className="flex items-start justify-between mb-1">
              <span className="text-xs text-gray-500 dark:text-gray-400">
                {new Date(segment.timestamp).toLocaleTimeString()}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400">
                Confidence: {(segment.confidence * 100).toFixed(1)}%
              </span>
            </div>
            <p className="text-gray-900 dark:text-white">
              {segment.text}
            </p>
          </div>
        ))}

        {/* Display interim transcript */}
        {interimTranscript && (
          <div className="p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <p className="text-blue-900 dark:text-blue-300 italic">
              {interimTranscript}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}