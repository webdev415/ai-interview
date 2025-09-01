'use client';

import React from 'react';

interface StatusIndicatorProps {
  status: string;
  isRecording: boolean;
}

export function StatusIndicator({ status, isRecording }: StatusIndicatorProps) {
  const getStatusColor = () => {
    switch (status) {
      case 'connected':
      case 'recording':
        return 'bg-green-500';
      case 'connecting':
      case 'reconnecting':
        return 'bg-yellow-500';
      case 'disconnected':
      case 'error':
        return 'bg-red-500';
      default:
        return 'bg-gray-500';
    }
  };

  const getStatusText = () => {
    if (isRecording && status === 'recording') {
      return 'Recording Active';
    }
    return status.charAt(0).toUpperCase() + status.slice(1);
  };

  return (
    <div className="flex items-center gap-2 mb-4">
      <div className={`w-3 h-3 rounded-full ${getStatusColor()} animate-pulse`} />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Status: {getStatusText()}
      </span>
    </div>
  );
}