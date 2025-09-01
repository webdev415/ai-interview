'use client';

import React, { useEffect, useState } from 'react';
import { AudioCaptureService } from '@/lib/audio/capture';

export function BrowserCompatibilityCheck() {
  const [compatibility, setCompatibility] = useState<any>(null);

  useEffect(() => {
    const result = AudioCaptureService.checkBrowserCompatibility();
    setCompatibility(result);
  }, []);

  if (!compatibility) return null;

  if (!compatibility.supported) {
    return (
      <div className="mb-4 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
        <strong>Browser Not Supported:</strong> {compatibility.message}
        <p className="mt-2">Please use Chrome or Edge for the best experience.</p>
      </div>
    );
  }

  if (!compatibility.systemAudioSupported) {
    return (
      <div className="mb-4 p-4 bg-yellow-100 border border-yellow-400 text-yellow-700 rounded-lg">
        <strong>Limited Support:</strong> {compatibility.message}
      </div>
    );
  }

  return null;
}