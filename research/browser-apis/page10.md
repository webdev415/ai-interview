# Screen Capture API Overview - MDN Documentation

**URL**: https://developer.mozilla.org/en-US/docs/Web/API/Screen_Capture_API

## Core Method:
**MediaDevices.getDisplayMedia()** - Main method to ask user to select screen/portion for capture as MediaStream

## Screen Capture Extensions:

### Element Capture API:
- Restricts captured region to specified rendered DOM element and descendants

### Region Capture API: 
- Crops captured region to area where specified DOM element is rendered

### Captured Surface Control API:
- Allows capturing application to control captured display surface
- Features: zooming, scrolling contents

## Key Interfaces:

### BrowserCaptureMediaStreamTrack:
- Extends MediaStreamTrack with methods to limit captured parts
- For self-capture streams (user's screen/window)

### CaptureController:
- Methods to manipulate captured display surface
- Associated with captured surface by passing into getDisplayMedia() as controller property

### MediaTrackConstraints Extensions:
- **displaySurface**: "browser" | "monitor" | "window"
- **logicalSurface**: Boolean for logical vs visible display surface
- **suppressLocalAudioPlayback**: Boolean to suppress local audio when capturing tabs

### MediaTrackSettings Extensions:
- **cursor**: "always" | "motion" | "never" 
- **displaySurface**: Current surface type being captured
- **logicalSurface**: Boolean if video doesn't correspond to single onscreen area
- **suppressLocalAudioPlayback**: Boolean if audio not played locally
- **screenPixelRatio**: Physical to logical pixel ratio

## Security Considerations:
- Requires Permissions Policy: "display-capture" 
- Captured Surface Control requires: "captured-surface-control"
- Default allowlist: 'self' (same origin)
- User interaction required (transient activation)
- User always prompted for permission (no persistent permissions)