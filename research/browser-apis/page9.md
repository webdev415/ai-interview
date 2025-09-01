# W3C Screen Capture Specification

**URL**: https://w3c.github.io/mediacapture-screen-share/

## Status: 
Editor's Draft - Not complete, subject to major changes, not intended for implementation yet.

## Key System Audio Information:

### SystemAudioPreferenceEnum:
- **include**: Browser should include system audio in list of choices
- **exclude**: Browser should exclude system audio  
- Default value not mandated by specification

### Audio Capture Requirements:
- User agent MAY present end-user with audio sources to share
- Audio sources not necessarily same as video sources
- Audio source may be particular window, browser, entire system audio, or combination
- User agent allowed NOT to return audio even if audio constraint present
- User agent MUST reject audio-only requests
- MUST include at most one audio track

### Display Surface Types:
1. **Monitor**: Physical display (may be multiple monitors aggregated)
2. **Window**: Single contiguous surface used by single application  
3. **Browser**: Rendered form of browsing context

### Logical vs Visible Display Surfaces:
- **Logical**: Surface OS makes available to application for rendering
- **Visible**: Portion of logical surface rendered to monitor
- Visible is strict subset of logical (due to occlusion)

### Permission Requirements:
- Transient user activation required
- User must choose display surface every time
- "granted" permissions CANNOT be persisted
- User agent encouraged to warn against sharing browser/monitor surfaces

### Audio Processing Notes:
- Browser may include system audio among possible sources
- Choice of audio sources up to user agent
- Audio may be window-specific, browser-specific, or system-wide