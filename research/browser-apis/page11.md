# Using Screen Capture API - MDN Documentation

**URL**: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API/Using_Screen_Capture

## Basic Usage Pattern:
```javascript
captureStream = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
```

## Display Surface Types:
- **Visible Display Surface**: Entirely visible on screen (frontmost window/tab, entire screen)
- **Logical Display Surface**: Partially/completely obscured, hidden, or offscreen
  - Browser may blur or replace hidden portions for security
  - May include obscured content with user permission

## Audio Capture Configuration:

### Basic Audio Request:
```javascript
const displayMediaOptions = {
  video: true,
  audio: true
};
```

### Advanced Audio Configuration:
```javascript
const displayMediaOptions = {
  video: true,
  audio: {
    echoCancellation: true,
    noiseSuppression: true,
    sampleRate: 44100,
    suppressLocalAudioPlayback: true
  },
  surfaceSwitching: "include",  // Allow dynamic tab switching
  selfBrowserSurface: "exclude", // Hide current tab from options
  systemAudio: "exclude"  // Don't include system audio in choices
};
```

### Audio Capture Notes:
- Audio is always optional
- Even when requested, returned stream may have only video
- Check browser compatibility - audio support varies significantly
- Audio sources can be: selected window, entire computer audio system, user microphone, or combination

## Complete Implementation Example:

### JavaScript Setup:
```javascript
const videoElem = document.getElementById("video");
const logElem = document.getElementById("log");
const startElem = document.getElementById("start");
const stopElem = document.getElementById("stop");

const displayMediaOptions = {
  video: {
    displaySurface: "window", // Capture whole window
  },
  audio: false
};

// Event listeners
startElem.addEventListener("click", () => { startCapture(); });
stopElem.addEventListener("click", () => { stopCapture(); });
```

### Start Capture:
```javascript
async function startCapture() {
  logElem.innerHTML = "";
  
  try {
    videoElem.srcObject = await navigator.mediaDevices.getDisplayMedia(displayMediaOptions);
    dumpOptionsInfo();
  } catch(err) {
    console.error("Error: " + err);
  }
}
```

### Stop Capture:
```javascript
function stopCapture() {
  let tracks = videoElem.srcObject.getTracks();
  
  tracks.forEach(track => track.stop());
  videoElem.srcObject = null;
}
```

## Security Requirements:
- Permissions Policy: `display-capture`
- For iframe: `<iframe allow="display-capture" src="/some-other-document.html">`
- HTTP Header: `Permissions-Policy: display-capture=self`

## Privacy Considerations:
- Users may inadvertently share sensitive content in background windows
- Password managers, personal info may be visible
- Logical surfaces may contain hidden content user doesn't know about
- User agents should obfuscate non-visible content unless specifically authorized