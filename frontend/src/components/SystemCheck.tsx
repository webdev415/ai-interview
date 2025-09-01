'use client';

import React, { useState, useEffect } from 'react';

export function SystemCheck() {
  const [checks, setChecks] = useState<Record<string, any>>({});
  
  useEffect(() => {
    runSystemChecks();
  }, []);
  
  const runSystemChecks = async () => {
    const results: Record<string, any> = {};
    
    // 1. Check browser and version
    const userAgent = navigator.userAgent;
    results.browser = {
      userAgent: userAgent,
      isChrome: /Chrome/.test(userAgent) && !/Edg/.test(userAgent),
      isEdge: /Edg/.test(userAgent),
      isFirefox: /Firefox/.test(userAgent),
      version: userAgent.match(/Chrome\/(\d+)/) ? userAgent.match(/Chrome\/(\d+)/)?.[1] : 'Unknown'
    };
    
    // 2. Check mediaDevices API
    results.mediaDevices = {
      available: !!navigator.mediaDevices,
      getDisplayMedia: !!navigator.mediaDevices?.getDisplayMedia,
      getUserMedia: !!navigator.mediaDevices?.getUserMedia,
      enumerateDevices: !!navigator.mediaDevices?.enumerateDevices
    };
    
    // 3. Check permissions
    try {
      if (navigator.permissions) {
        const micPermission = await navigator.permissions.query({ name: 'microphone' as PermissionName });
        results.permissions = {
          microphone: micPermission.state
        };
      }
    } catch (e) {
      results.permissions = { error: 'Could not check permissions' };
    }
    
    // 4. Check audio devices
    try {
      const devices = await navigator.mediaDevices.enumerateDevices();
      const audioInputs = devices.filter(d => d.kind === 'audioinput');
      const audioOutputs = devices.filter(d => d.kind === 'audiooutput');
      
      results.audioDevices = {
        inputs: audioInputs.map(d => ({
          deviceId: d.deviceId,
          label: d.label || 'Unnamed device',
          groupId: d.groupId
        })),
        outputs: audioOutputs.map(d => ({
          deviceId: d.deviceId,
          label: d.label || 'Unnamed device',
          groupId: d.groupId
        })),
        inputCount: audioInputs.length,
        outputCount: audioOutputs.length
      };
    } catch (e) {
      results.audioDevices = { error: 'Could not enumerate devices' };
    }
    
    // 5. Check AudioContext
    results.audioContext = {
      available: typeof AudioContext !== 'undefined',
      sampleRate: new AudioContext().sampleRate,
      state: new AudioContext().state
    };
    
    // 6. Check MediaRecorder
    results.mediaRecorder = {
      available: typeof MediaRecorder !== 'undefined',
      supportedMimeTypes: {
        'audio/webm': MediaRecorder.isTypeSupported?.('audio/webm'),
        'audio/webm;codecs=opus': MediaRecorder.isTypeSupported?.('audio/webm;codecs=opus'),
        'audio/ogg': MediaRecorder.isTypeSupported?.('audio/ogg'),
        'audio/wav': MediaRecorder.isTypeSupported?.('audio/wav'),
        'audio/mp4': MediaRecorder.isTypeSupported?.('audio/mp4')
      }
    };
    
    // 7. Check HTTPS
    results.security = {
      isSecure: window.location.protocol === 'https:' || window.location.hostname === 'localhost',
      protocol: window.location.protocol,
      hostname: window.location.hostname
    };
    
    // 8. Operating System
    results.os = {
      platform: navigator.platform,
      isWindows: /Win/.test(navigator.platform),
      isMac: /Mac/.test(navigator.platform),
      isLinux: /Linux/.test(navigator.platform)
    };
    
    setChecks(results);
  };
  
  const testMicrophone = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const tracks = stream.getAudioTracks();
      console.log('Microphone test successful:', tracks.length, 'tracks');
      tracks.forEach(track => {
        console.log('Track:', track.label, track.getSettings());
        track.stop();
      });
      alert('Microphone access successful! Check console for details.');
    } catch (error) {
      console.error('Microphone test failed:', error);
      alert('Microphone test failed: ' + error);
    }
  };
  
  const testScreenShare = async () => {
    try {
      const stream = await navigator.mediaDevices.getDisplayMedia({ 
        video: true, 
        audio: true 
      });
      
      const audioTracks = stream.getAudioTracks();
      const videoTracks = stream.getVideoTracks();
      
      console.log('Screen share test:', {
        audioTracks: audioTracks.length,
        videoTracks: videoTracks.length,
        audioTrackDetails: audioTracks.map(t => ({
          label: t.label,
          enabled: t.enabled,
          settings: t.getSettings()
        }))
      });
      
      stream.getTracks().forEach(track => track.stop());
      
      if (audioTracks.length === 0) {
        alert('No audio tracks captured! Make sure to check "Share tab audio" in the dialog.');
      } else {
        alert(`Screen share successful! ${audioTracks.length} audio track(s) captured.`);
      }
    } catch (error) {
      console.error('Screen share test failed:', error);
      alert('Screen share test failed: ' + error);
    }
  };
  
  return (
    <div className="my-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">System Compatibility Check</h3>
      
      <div className="space-y-3 text-sm">
        {/* Browser Check */}
        <div>
          <h4 className="font-medium">Browser:</h4>
          <div className="ml-4">
            {checks.browser?.isChrome && <p className="text-green-600">✅ Chrome detected (version {checks.browser.version})</p>}
            {checks.browser?.isEdge && <p className="text-yellow-600">⚠️ Edge detected - should work but Chrome is recommended</p>}
            {checks.browser?.isFirefox && <p className="text-red-600">❌ Firefox detected - tab audio capture may not work</p>}
            {checks.browser && !checks.browser.isChrome && !checks.browser.isEdge && !checks.browser.isFirefox && 
              <p className="text-red-600">❌ Unknown browser - Chrome is required for tab audio capture</p>}
          </div>
        </div>
        
        {/* Security Check */}
        <div>
          <h4 className="font-medium">Security:</h4>
          <div className="ml-4">
            {checks.security?.isSecure ? 
              <p className="text-green-600">✅ Secure context (HTTPS or localhost)</p> :
              <p className="text-red-600">❌ Not secure - HTTPS required for media APIs</p>
            }
          </div>
        </div>
        
        {/* API Check */}
        <div>
          <h4 className="font-medium">Required APIs:</h4>
          <div className="ml-4">
            {checks.mediaDevices?.getDisplayMedia ? 
              <p className="text-green-600">✅ getDisplayMedia available</p> :
              <p className="text-red-600">❌ getDisplayMedia not available</p>
            }
            {checks.audioContext?.available ? 
              <p className="text-green-600">✅ AudioContext available (sample rate: {checks.audioContext?.sampleRate}Hz)</p> :
              <p className="text-red-600">❌ AudioContext not available</p>
            }
            {checks.mediaRecorder?.available ? 
              <p className="text-green-600">✅ MediaRecorder available</p> :
              <p className="text-red-600">❌ MediaRecorder not available</p>
            }
          </div>
        </div>
        
        {/* Audio Devices */}
        <div>
          <h4 className="font-medium">Audio Devices:</h4>
          <div className="ml-4">
            <p>Input devices: {checks.audioDevices?.inputCount || 0}</p>
            <p>Output devices: {checks.audioDevices?.outputCount || 0}</p>
            {checks.audioDevices?.inputs?.map((device: any, i: number) => (
              <p key={i} className="text-xs text-gray-600">- {device.label}</p>
            ))}
          </div>
        </div>
        
        {/* OS Check */}
        <div>
          <h4 className="font-medium">Operating System:</h4>
          <div className="ml-4">
            <p>{checks.os?.platform}</p>
            {checks.os?.isWindows && (
              <div className="mt-2 p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded text-xs">
                <p className="font-semibold">Windows Audio Settings:</p>
                <ol className="list-decimal list-inside mt-1">
                  <li>Open Windows Settings → System → Sound</li>
                  <li>Check "Volume mixer" - ensure Chrome is not muted</li>
                  <li>Under "Advanced sound options" → "App volume and device preferences"</li>
                  <li>Make sure Chrome is allowed to use audio</li>
                  <li>Try disabling "Exclusive mode" for your audio devices</li>
                </ol>
              </div>
            )}
            {checks.os?.isMac && (
              <div className="mt-2 p-2 bg-yellow-100 dark:bg-yellow-900/20 rounded text-xs">
                <p className="font-semibold">macOS Audio Settings:</p>
                <ol className="list-decimal list-inside mt-1">
                  <li>Open System Preferences → Security & Privacy → Privacy</li>
                  <li>Check if Chrome has permission for "Screen Recording"</li>
                  <li>Check if Chrome has permission for "Microphone"</li>
                  <li>You may need to restart Chrome after granting permissions</li>
                </ol>
              </div>
            )}
          </div>
        </div>
        
        {/* Test Buttons */}
        <div className="pt-4 space-y-2">
          <button
            onClick={testMicrophone}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-2"
          >
            Test Microphone Access
          </button>
          <button
            onClick={testScreenShare}
            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
          >
            Test Screen Share with Audio
          </button>
        </div>
        
        {/* Chrome Flags Info */}
        <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded">
          <p className="font-semibold text-blue-900 dark:text-blue-300">Chrome Settings to Check:</p>
          <ol className="list-decimal list-inside text-xs mt-2 space-y-1">
            <li>Go to chrome://flags</li>
            <li>Search for "audio capture"</li>
            <li>Ensure "Audio capture allowed by Policy" is not disabled</li>
            <li>Go to chrome://settings/content/microphone</li>
            <li>Make sure sites can ask to use your microphone</li>
            <li>Check if localhost:3000 is not blocked</li>
          </ol>
        </div>
      </div>
    </div>
  );
}