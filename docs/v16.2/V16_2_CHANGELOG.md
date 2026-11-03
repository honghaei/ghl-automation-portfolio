# Portfolio V16.2 changelog

Date: 2026-11-03. Baseline: the V16.1 source retained from the preceding implementation in this conversation, verified against its V16.1 changed-file manifest. No older portfolio version was substituted.

## Delivered behavior

- Replaced browser speech synthesis with the two supplied, unchanged MP3 recordings, served locally from a versioned static directory. No ElevenLabs API, key, SDK, account connection or additional package is used.
- Voice on synchronously starts the complete introduction from zero, restarting its caption and gesture sequence. When the inquiry is open, Voice on starts the inquiry recording from zero instead.
- One audio element and one playback controller own narration. Scrolling, resizing, ordinary React renders and cloud dismissal do not stop or replace the recording. Explicit mute, page navigation/unmount and natural completion stop playback. Repeated inquiry activations are guarded, with a 12-second cooldown.
- Caption/pose changes use the media clock. Mouth movement uses a compact, precomputed amplitude envelope of the actual recordings, plus approximate text-based mouth shapes. Silence, mute, buffering, error and completion close the mouth. This is not phoneme alignment.
- Narrow mobile layouts reserve a natural-height cloud row above the character, including sufficient space for the longest caption and contact CTA. The same space remains reserved while idle. Height changes from browser chrome do not resize or translate the character. No automatic scrolling or focus-based cloud repositioning remains.
- Preserved the cloud artwork, approved character images, animation poses, reduced-motion rule, contact link, homepage content, blue-wave background, expertise grid and all case studies.

## Every modified baseline file (5)

| File | Change |
| --- | --- |
| `src/components/mascot/TalkingMascot.tsx` | Single audio/controller lifetime, silent-first introduction, intentional inquiry playback, click-triggered restart, retry feedback, normal-flow caption reservation and page-exit cleanup. |
| `src/components/mascot/TalkingMascot.css` | Natural caption reservation, phone cloud above character, safe-area padding, height-stable character sizing, compact landscape treatment and reserved playback feedback. Existing expertise alignment and animation rules remain. |
| `src/components/mascot/MouthRig.tsx` | Reads the real playback frame and amplitude; retains approved SVG mouth shapes and blink rig. |
| `tests/mascot-fixture.tsx` | MP3 media fixtures for allowed, denied, broken and native playback; rerender/unmount controls. |
| `tests/mascot-browser.html` | Component regressions updated from browser TTS to local MP3 behavior. |

## Every added file (11)

| File | Purpose |
| --- | --- |
| `public/assets/mascot/audio/v16.2/mascot-intro.mp3` | Supplied introduction recording, byte-identical. |
| `public/assets/mascot/audio/v16.2/mascot-inquiry.mp3` | Supplied inquiry recording, byte-identical. |
| `src/components/mascot/PlaybackController.ts` | Single-transport playback, silent fallback clock, state/cue updates, cooldown, error handling and cleanup. |
| `src/components/mascot/audioManifest.ts` | Versioned asset paths, recording hashes/durations, phrase cues and 20 ms amplitude samples. |
| `src/components/mascot/audioTimeline.ts` | Media-time caption/pose cues and mouth animation frames. |
| `tests/mascot-audio.test.mjs` | 18 new playback-controller regressions. |
| `tests/v16-2-layout.html` | Actual homepage responsive, viewport-height stability and native-MP3 acceptance checks. |
| `docs/v16.2/V16_2_CHANGELOG.md` | This file. |
| `docs/v16.2/V16_2_VERIFICATION_REPORT.md` | Actual results and testing limitations. |
| `docs/v16.2/V16_2_INSTALLATION.md` | Local replacement and verification instructions. |
| `docs/v16.2/V16_2_FILE_MANIFEST.json` | Changed-file checksums and source packaging inventory. |

No baseline files were deleted. The other 272 baseline files are unchanged, including package manifests, router, project pages, images, hero copy, contact functionality and Vite configuration. Historical V16/V16.1 documentation remains historical; use the V16.2 report and current test pages for this release.

No deployment, GitHub push or Netlify change was performed.
