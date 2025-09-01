'use client';

import React, { useState, useRef } from 'react';

export function AudioTest() {
  const [isRecording, setIsRecording] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const chunksRef = useRef<Blob[]>([]);
  const streamRef = useRef<MediaStream | null>(null);

  const startTest = async () => {
    try {
      console.log('Starting audio test...');
      
      // Request screen/tab share with audio
      const stream = await navigator.mediaDevices.getDisplayMedia({
        video: true,
        audio: true
      });
      
      streamRef.current = stream;
      
      // Check what we got
      const videoTracks = stream.getVideoTracks();
      const audioTracks = stream.getAudioTracks();
      
      console.log('Stream ID:', stream.id);
      console.log('Video tracks:', videoTracks.length);
      console.log('Audio tracks:', audioTracks.length);
      
      if (audioTracks.length === 0) {
        alert('No audio track found! Make sure you checked "Share tab audio" in the dialog.');
        stream.getTracks().forEach(track => track.stop());
        return;
      }
      
      // Log audio track details
      audioTracks.forEach((track, i) => {
        console.log(`Audio Track ${i}:`, {
          id: track.id,
          kind: track.kind,
          label: track.label,
          enabled: track.enabled,
          muted: track.muted,
          readyState: track.readyState,
          settings: track.getSettings()
        });
      });
      
      // Create MediaRecorder with just the audio
      const audioOnlyStream = new MediaStream(audioTracks);
      
      // Try different mime types
      const mimeTypes = [
        'audio/webm;codecs=opus',
        'audio/webm',
        'audio/ogg',
        'audio/wav',
        'audio/mp4'
      ];
      
      let selectedMimeType = '';
      for (const mimeType of mimeTypes) {
        if (MediaRecorder.isTypeSupported(mimeType)) {
          selectedMimeType = mimeType;
          console.log('Using mime type:', mimeType);
          break;
        }
      }
      
      if (!selectedMimeType) {
        console.error('No supported audio mime type found');
        selectedMimeType = 'audio/webm'; // fallback
      }
      
      chunksRef.current = [];
      mediaRecorderRef.current = new MediaRecorder(audioOnlyStream, {
        mimeType: selectedMimeType
      });
      
      mediaRecorderRef.current.ondataavailable = (event) => {
        console.log('Data available:', event.data.size, 'bytes');
        if (event.data.size > 0) {
          chunksRef.current.push(event.data);
        }
      };
      
      mediaRecorderRef.current.onstop = () => {
        console.log('Recording stopped, total chunks:', chunksRef.current.length);
        const blob = new Blob(chunksRef.current, { type: selectedMimeType });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        
        // Also download the file
        const a = document.createElement('a');
        a.href = url;
        a.download = `test-audio-${Date.now()}.webm`;
        a.click();
        
        console.log('Audio saved. Size:', blob.size, 'bytes');
      };
      
      mediaRecorderRef.current.onerror = (event: any) => {
        console.error('MediaRecorder error:', event.error);
      };
      
      // Start recording with timeslice to get regular data
      mediaRecorderRef.current.start(1000); // Get data every second
      setIsRecording(true);
      
      console.log('MediaRecorder state:', mediaRecorderRef.current.state);
      
      // Also test with AudioContext to see if we're getting data
      testAudioWithContext(audioTracks[0]);
      
    } catch (error) {
      console.error('Failed to start test:', error);
      alert('Failed to start audio test: ' + error);
    }
  };
  
  const testAudioWithContext = (audioTrack: MediaStreamTrack) => {
    try {
      const audioContext = new AudioContext();
      const source = audioContext.createMediaStreamSource(new MediaStream([audioTrack]));
      const analyser = audioContext.createAnalyser();
      const scriptProcessor = audioContext.createScriptProcessor(4096, 1, 1);
      
      source.connect(analyser);
      analyser.connect(scriptProcessor);
      scriptProcessor.connect(audioContext.destination);
      
      let sampleCount = 0;
      scriptProcessor.onaudioprocess = (e) => {
        const inputData = e.inputBuffer.getChannelData(0);
        
        // Check if we have any non-zero samples
        let hasSound = false;
        let maxValue = 0;
        for (let i = 0; i < inputData.length; i++) {
          if (Math.abs(inputData[i]) > 0.001) {
            hasSound = true;
            maxValue = Math.max(maxValue, Math.abs(inputData[i]));
          }
        }
        
        if (sampleCount % 10 === 0) { // Log every 10th sample
          console.log('Audio sample analysis:', {
            hasSound,
            maxValue: maxValue.toFixed(4),
            bufferLength: inputData.length
          });
        }
        sampleCount++;
      };
      
      // Stop after 5 seconds
      setTimeout(() => {
        scriptProcessor.disconnect();
        analyser.disconnect();
        source.disconnect();
        audioContext.close();
        console.log('Audio context test completed');
      }, 5000);
      
    } catch (error) {
      console.error('Audio context test failed:', error);
    }
  };
  
  const stopTest = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
      mediaRecorderRef.current.stop();
    }
    
    if (streamRef.current) {
      streamRef.current.getTracks().forEach(track => {
        track.stop();
        console.log('Stopped track:', track.kind, track.label);
      });
      streamRef.current = null;
    }
    
    setIsRecording(false);
  };
  
  return (
    <div className="p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg">
      <h3 className="text-lg font-semibold mb-2 text-yellow-900 dark:text-yellow-300">
        Audio Capture Test
      </h3>
      <p className="text-sm text-yellow-800 dark:text-yellow-400 mb-4">
        Use this to test if audio capture is working correctly
      </p>
      
      <div className="flex gap-2">
        <button
          onClick={isRecording ? stopTest : startTest}
          className={`px-4 py-2 rounded text-white font-medium ${
            isRecording 
              ? 'bg-red-600 hover:bg-red-700' 
              : 'bg-blue-600 hover:bg-blue-700'
          }`}
        >
          {isRecording ? 'Stop Test' : 'Start Audio Test'}
        </button>
        
        {audioUrl && (
          <audio controls src={audioUrl} className="ml-4" />
        )}
      </div>
      
      <div className="mt-4 text-xs text-yellow-700 dark:text-yellow-500">
        <p>1. Click "Start Audio Test"</p>
        <p>2. Select Chrome Tab and check "Share tab audio"</p>
        <p>3. Play some audio in that tab</p>
        <p>4. Click "Stop Test" after a few seconds</p>
        <p>5. Check console for detailed logs</p>
        <p>6. An audio file will be downloaded automatically</p>
      </div>
    </div>
  );
}