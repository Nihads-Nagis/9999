┌────────────────────────────────────────────┐
│              LEVEL 7: PLAYBACK PIPELINE    │
│────────────────────────────────────────────│
│ • Output Devices (Display, Speakers, VR, etc.)              │
│ • Decoders (GPU/CPU/SoC)                                    │
│ • Perceptual Rendering (Color mapping, HDR tone, 3D sound)  │
│ → Where Dolby Vision / Atmos / HDR10+ are interpreted        │
└────────────────────────────────────────────┘
                    ▲
                    │
┌────────────────────────────────────────────┐
│              LEVEL 6: CONTAINER LAYER      │
│────────────────────────────────────────────│
│ • Combines Video, Audio, Text, Metadata                     │
│ • Examples: MP4, MKV, MOV, WEBM, AVI                        │
│ • Holds codec streams + timing + Dolby metadata             │
└────────────────────────────────────────────┘
                    ▲
                    │
┌────────────────────────────────────────────┐
│           LEVEL 5: ENCODED STREAMS         │
│────────────────────────────────────────────│
│  🎥 Video Stream: H.264, HEVC, AV1, ProRes  │
│  🔊 Audio Stream: AAC, FLAC, AC3, TrueHD    │
│  📝 Text Stream: SRT, TTML, WebVTT          │
│ • Temporal compression, motion vectors, psychoacoustic models │
│ • Dolby Vision / Atmos metadata embedded here                │
└────────────────────────────────────────────┘
                    ▲
                    │
┌────────────────────────────────────────────┐
│          LEVEL 4: FRAME & CHANNEL LAYER    │
│────────────────────────────────────────────│
│ 🎥 Frames: Image units per time (24–60 fps) │
│ 🔊 Channels: Left, Right, Center, etc.      │
│ 📝 Caption Lines: Time-coded text segments  │
│ • Combines into synchronized A/V/T sequences │
└────────────────────────────────────────────┘
                    ▲
                    │
┌────────────────────────────────────────────┐
│     LEVEL 3: PIXELS, SAMPLES, CHARACTERS   │
│────────────────────────────────────────────│
│ 🎥 Pixels: RGB, YUV values (8–64-bit)       │
│ 🔊 Audio Samples: Amplitude per time slice   │
│ 📝 Characters: Encoded symbols (UTF-8, etc.) │
│ • Atomic building blocks of all media        │
└────────────────────────────────────────────┘
                    ▲
                    │
┌────────────────────────────────────────────┐
│       LEVEL 2: BIT & BYTE REPRESENTATION   │
│────────────────────────────────────────────│
│ • Binary 0/1 encoding of data              │
│ • 8 bits = 1 byte, foundation for storage  │
└────────────────────────────────────────────┘
                    ▲
                    │
┌────────────────────────────────────────────┐
│         LEVEL 1: PHYSICAL SIGNAL DOMAIN    │
│────────────────────────────────────────────│
│ • Electric, optical, or acoustic waveform  │
│ • Analog domain (continuous states)        │
│ • Converts to/from digital bits (ADC/DAC)  │
└────────────────────────────────────────────┘
