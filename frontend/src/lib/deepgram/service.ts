/**
 * Deepgram WebSocket Service
 * Based on research from /research/deepgram/page2.md, page15.md, page16.md
 * Implements real-time transcription with keep-alive and interim results
 */

import { createClient, LiveTranscriptionEvents, LiveClient } from '@deepgram/sdk';

export interface DeepgramConfig {
  apiKey: string;
  model: string;
  language: string;
  smartFormat: boolean;
  interimResults: boolean;
  punctuate: boolean;
  endpointing: number;
  vadEvents: boolean;
  encoding: string;
  sampleRate: number;
  channels: number;
}

export interface TranscriptSegment {
  id: string;
  text: string;
  timestamp: number;
  confidence: number;
  isFinal: boolean;
  speaker?: string;  // Added speaker identification
  words?: Array<{
    word: string;
    start: number;
    end: number;
    confidence: number;
    punctuated_word: string;
  }>;
}

export class DeepgramService {
  private client: any;
  private connection: LiveClient | null = null;
  private keepAliveInterval: NodeJS.Timeout | null = null;
  private reconnectAttempts: number = 0;
  private maxReconnectAttempts: number = 5;
  private isConnected: boolean = false;

  constructor(private config: DeepgramConfig = {
    apiKey: process.env.NEXT_PUBLIC_DEEPGRAM_API_KEY || '',
    model: 'nova-2',
    language: 'en-US',
    smartFormat: true,
    interimResults: true,
    punctuate: true,
    endpointing: 300,
    vadEvents: true,
    encoding: 'linear16',
    sampleRate: 16000,
    channels: 1
  }) {
    // Initialize Deepgram client
    // Based on /research/deepgram/page3.md
    this.client = createClient(this.config.apiKey);
  }

  /**
   * Connect to Deepgram WebSocket
   * Based on /research/deepgram/page2.md and page5.md
   */
  async connect(
    onTranscript: (segment: TranscriptSegment) => void,
    onError?: (error: Error) => void,
    onStatusChange?: (status: string) => void
  ): Promise<void> {
    return new Promise((resolve, reject) => {
      try {
        console.log('Creating Deepgram connection with API key:', this.config.apiKey ? 'Present' : 'Missing');
        
        if (!this.config.apiKey) {
          throw new Error('Deepgram API key is missing. Please check your .env.local file.');
        }
        
        // Create live transcription connection
        // Configuration based on /research/deepgram/page8.md - Live API reference
        this.connection = this.client.listen.live({
          model: this.config.model,
          language: this.config.language,
          smart_format: this.config.smartFormat,
          interim_results: this.config.interimResults,
          punctuate: this.config.punctuate,
          endpointing: this.config.endpointing,
          vad_events: this.config.vadEvents,
          encoding: this.config.encoding,
          sample_rate: this.config.sampleRate,
          channels: this.config.channels,
          // Additional options from research
          utterance_end_ms: '1000',
          filler_words: false,
          numerals: true
        });

        // Setup event listeners
        // Based on /research/deepgram/page2.md - Event handling patterns
        this.setupEventListeners(onTranscript, onError, onStatusChange);

        // Wait for connection to open before resolving
        this.connection.on(LiveTranscriptionEvents.Open, () => {
          console.log('Deepgram WebSocket connection successfully opened');
          this.isConnected = true;
          this.reconnectAttempts = 0; // Reset reconnect attempts on successful connection
          onStatusChange?.('connected');
          
          // Start keep-alive mechanism after connection is open
          // Based on /research/deepgram/page16.md - Keep-alive documentation
          this.startKeepAlive();
          
          resolve();
        });

        // Handle connection errors
        this.connection.on(LiveTranscriptionEvents.Error, (error: any) => {
          if (!this.isConnected) {
            // Connection failed to establish
            console.error('Failed to establish Deepgram connection:', error);
            reject(new Error(error.message || 'Failed to connect to Deepgram'));
          }
        });

      } catch (error) {
        console.error('Failed to connect to Deepgram:', error);
        onError?.(error as Error);
        
        // Implement reconnection logic
        if (this.reconnectAttempts < this.maxReconnectAttempts) {
          this.reconnectAttempts++;
          onStatusChange?.(`reconnecting (attempt ${this.reconnectAttempts})`);
          setTimeout(() => this.connect(onTranscript, onError, onStatusChange), 3000);
        }
        
        reject(error);
      }
    });
  }

  /**
   * Setup WebSocket event listeners
   * Based on /research/deepgram/page2.md
   */
  private setupEventListeners(
    onTranscript: (segment: TranscriptSegment) => void,
    onError?: (error: Error) => void,
    onStatusChange?: (status: string) => void
  ): void {
    if (!this.connection) return;

    // Transcript received
    // Based on /research/deepgram/page15.md - Interim results handling
    this.connection.on(LiveTranscriptionEvents.Transcript, (data: any) => {
      console.log('Transcript event received from Deepgram:', JSON.stringify(data, null, 2));
      
      const transcript = data.channel?.alternatives?.[0];
      
      if (!transcript) {
        console.log('No transcript in alternatives');
        return;
      }
      
      if (!transcript.transcript) {
        console.log('Empty transcript text');
        return;
      }

      // Process transcript segment
      const segment: TranscriptSegment = {
        id: crypto.randomUUID(),
        text: transcript.transcript,
        timestamp: Date.now(),
        confidence: transcript.confidence || 0,
        isFinal: data.is_final || false,
        words: transcript.words
      };

      console.log('Processing transcript:', segment.text, 'Final:', segment.isFinal);

      // Only emit non-empty transcripts
      if (segment.text.trim()) {
        onTranscript(segment);
      }

      // Handle speech_final for natural speech endings
      // Based on /research/deepgram/page10.md - End of speech detection
      if (data.speech_final) {
        console.log('Natural speech ending detected');
      }
    });

    // Metadata received
    this.connection.on(LiveTranscriptionEvents.Metadata, (data: any) => {
      console.log('Deepgram metadata:', data);
    });

    // VAD events for voice activity detection
    // Based on /research/deepgram/live_streaming.md
    this.connection.on(LiveTranscriptionEvents.SpeechStarted, () => {
      onStatusChange?.('speech_started');
    });

    // Error handling
    this.connection.on(LiveTranscriptionEvents.Error, (error: any) => {
      console.error('Deepgram error:', error);
      
      // Handle specific error codes
      // Based on /research/deepgram/page16.md
      if (error.code === 'NET-0001') {
        console.error('Connection timeout - no audio or keep-alive received');
        this.handleReconnection(onTranscript, onError, onStatusChange);
      } else {
        onError?.(new Error(error.message || 'Unknown Deepgram error'));
      }
    });

    // Connection closed
    this.connection.on(LiveTranscriptionEvents.Close, () => {
      console.log('Deepgram connection closed');
      this.isConnected = false;
      onStatusChange?.('disconnected');
      this.stopKeepAlive();
    });
  }

  /**
   * Start keep-alive mechanism
   * Based on /research/deepgram/page16.md
   * Sends keep-alive message every 3 seconds to prevent timeout
   */
  private startKeepAlive(): void {
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
    }

    this.keepAliveInterval = setInterval(() => {
      if (this.connection && this.isConnected) {
        try {
          // Send keep-alive message as JSON
          const keepAliveMsg = JSON.stringify({ type: 'KeepAlive' });
          // Note: In browser context, send as text frame
          this.connection.keepAlive();
          console.debug('Sent KeepAlive message');
        } catch (error) {
          console.error('Failed to send keep-alive:', error);
        }
      }
    }, 3000); // Every 3 seconds
  }

  /**
   * Stop keep-alive mechanism
   */
  private stopKeepAlive(): void {
    if (this.keepAliveInterval) {
      clearInterval(this.keepAliveInterval);
      this.keepAliveInterval = null;
    }
  }

  /**
   * Send audio data to Deepgram
   * Based on /research/deepgram/page2.md
   */
  sendAudio(audioData: ArrayBuffer): void {
    if (this.connection && this.isConnected) {
      try {
        // Verify we have valid audio data
        if (audioData.byteLength === 0) {
          console.warn('Attempting to send empty audio buffer');
          return;
        }
        
        // Send audio data as binary
        console.log('Sending audio to Deepgram, size:', audioData.byteLength, 'bytes');
        
        // Send directly as ArrayBuffer - the SDK will handle the conversion
        this.connection.send(audioData);
        
        console.log('Audio data sent successfully');
      } catch (error) {
        console.error('Failed to send audio:', error);
      }
    } else {
      console.warn('Cannot send audio - connection not ready. Connected:', this.isConnected, 'Connection:', !!this.connection);
    }
  }

  /**
   * Handle reconnection logic
   */
  private async handleReconnection(
    onTranscript: (segment: TranscriptSegment) => void,
    onError?: (error: Error) => void,
    onStatusChange?: (status: string) => void
  ): Promise<void> {
    this.disconnect();
    
    if (this.reconnectAttempts < this.maxReconnectAttempts) {
      this.reconnectAttempts++;
      onStatusChange?.(`reconnecting (attempt ${this.reconnectAttempts})`);
      setTimeout(() => this.connect(onTranscript, onError, onStatusChange), 3000);
    } else {
      onError?.(new Error('Max reconnection attempts reached'));
    }
  }

  /**
   * Disconnect from Deepgram
   */
  disconnect(): void {
    this.stopKeepAlive();
    
    if (this.connection) {
      try {
        this.connection.finish();
      } catch (error) {
        console.error('Error closing connection:', error);
      }
      this.connection = null;
    }
    
    this.isConnected = false;
  }

  /**
   * Get connection status
   */
  getIsConnected(): boolean {
    return this.isConnected;
  }
}