'use client';

import React from 'react';

interface ControlPanelProps {
  isRecording: boolean;
  onStart: () => void;
  onStop: () => void;
  onExport: () => void;
  onClear: () => void;
  disabled?: boolean;
}

export function ControlPanel({
  isRecording,
  onStart,
  onStop,
  onExport,
  onClear,
  disabled
}: ControlPanelProps) {
  return (
    <div className="space-y-4 my-6">
      <div className="flex flex-col sm:flex-row gap-4">
        {/* Main Recording Button */}
        <button
          onClick={isRecording ? onStop : onStart}
          disabled={disabled}
          className={`
            px-8 py-4 rounded-lg font-semibold text-white transition-all
            ${isRecording 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-green-600 hover:bg-green-700'}
            ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
            flex items-center justify-center gap-2
          `}
        >
          {isRecording ? (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <rect x="6" y="6" width="8" height="8" />
              </svg>
              Stop Recording
            </>
          ) : (
            <>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <circle cx="10" cy="10" r="6" />
              </svg>
              Start Meeting Assistant
            </>
          )}
        </button>

      {/* Secondary Actions */}
      <div className="flex gap-2">
        <button
          onClick={onExport}
          disabled={disabled || isRecording}
          className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Export
        </button>
        
        <button
          onClick={onClear}
          disabled={disabled || isRecording}
          className="px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Clear
        </button>
      </div>
      </div>
      
      {/* Instructions */}
      {!isRecording && (
        <div className="bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
          <div className="flex items-start">
            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <div className="text-sm">
              <p className="font-semibold text-blue-900 dark:text-blue-300 mb-1">
                How to share audio from your meeting:
              </p>
              <ol className="list-decimal list-inside space-y-1 text-blue-800 dark:text-blue-400">
                <li>Click "Start Meeting Assistant"</li>
                <li>In the share dialog, select the "Chrome Tab" option</li>
                <li>Choose the tab with your meeting (Google Meet, Zoom, etc.)</li>
                <li>
                  <strong className="font-semibold">Important:</strong> Check the "Share tab audio" checkbox at the bottom
                </li>
                <li>Click "Share" to begin transcription</li>
              </ol>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}