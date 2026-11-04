# Chovy Portfolio Tour V2.0 — Verification report

Date: 2026-11-04. Local implementation and downloadable exports only; no deployment, Git push or remote commit.

## Authoritative baseline

Recovered the immediately preceding delivered Complete Source ZIP (SHA-256 479da4eef6cde5ed90117bc9dc955fefcde10ae356dc15cf9abf8466fe88d406) and Production Source ZIP (SHA-256 99b5e8494fa7a5e7711f03470047487943710f666bb3f5e63eace56633a94411). Both archives passed CRC checks. No older V15/V16 baseline was substituted.

## Actual technical results

| Check | Actual result |
|---|---|
| Complete TypeScript project check | PASS: `npx tsc -b --force` |
| Mascot fixture TypeScript check | PASS: TSX fixture with ES2022/DOM/bundler resolution, no emit |
| Production build | PASS: `npm run build`, Vite 5.4.21, 449 modules |
| Existing model/audio/priority Node tests | PASS: 29 tests, 0 failures |
| Existing controlled-media browser mascot regressions | PASS: 36 assertions |
| Actual homepage mobile narration/chrome stability | PASS: 116 assertions |
| Final responsive tour/contact/card matrix | PASS: 1,326 assertions across 56 combinations |
| Final native MP4/MP3, VTT, CC, chapters and priority checks | PASS: 47 assertions using the finalized local video |
| Production mask/cue/hash/compositing checks | PASS: 533 assertions in the sibling-project integration (531 when run standalone without homepage mask comparison) |
| Actual encoded cue frames | PASS: all 79 first cue frames compared to the V2 composition; maximum mean RGB difference 1.7003/255, threshold 4 |
| MP4 full video/audio decode | PASS for both exports with FFmpeg `-xerror` |
| Audio timeline | PASS: original eleven MP3 hashes unchanged, no speed changes; all eleven zero-lag waveform windows in both exports correlate at least 0.999386 |
| Container structure | PASS: moov precedes mdat in both files for progressive playback |

The build retains a bundle-size advisory (560.92 kB main JS, above Vite's 500 kB advisory). This is not a build or TypeScript failure. Existing React Router future-flag notices were observed. No unexpected portfolio JavaScript error was observed in the exercised flows; the unavailable-video test intentionally generated a missing-resource error. Browser extension metadata errors are outside the portfolio.

## Final media

Both exports are 1920×1080, 16:9, 30 fps, H.264/yuv420p with AAC audio, exactly 7,032 frames and 234.400 seconds. Video starts at 0.000000 seconds. The source recording timeline is 234.396735 seconds; the difference is final-frame rounding. Video-only segments are joined before the complete master narration is muxed once, avoiding per-segment AAC priming drift.

The Final MP4 has burned subtitles in a reserved bottom rail. The Web MP4 uses the same revised footage and selectable English VTT. Inline captions occupy their own stable row below the player, with CC on/off. Native fullscreen uses the same VTT track, but fullscreen permission was not granted in this browser session, so its final visual placement remains unverified.

Both new sections appear in the new tour. Twenty-two updated/replacement browser views include the refreshed hero, matching poster, AI Voice section, Contact CTA, exact workflow evidence, academic/finance features and HRMS Employee Directory. The AI Voice player remains paused on the updated poster during capture, preventing recursive playback. Unaffected authentic project footage is reused.

## Website and interaction checks

The 56 layout combinations used 14 viewport sizes (1920×1080, 1440×900, 1280×800, 1100×800, 1024×768, 834×900, 768×900, 600×700, 430×760, 393×652, 390×724, 375×667, 320×568 and 844×390) with CSS zoom simulations at 80%, 90%, 100% and 125%. These are not native browser-zoom tests. Native zoom shortcuts produced no change in browser metrics, so actual zoom is not claimed.

Checks covered player/chapter top alignment, 16:9 sizing, caption row below the video, no horizontal overflow, chapter wrapping, Contact text/button containment, four/two/one expertise columns, equal card heights and aligned icons/headings/descriptions/bottom tags. Live mobile playback at 393×652 showed readable, unclipped captions in the reserved row while audio continued during scrolling.

The 47 native media assertions exercised all 11 chapter seeks and active states, actual 1080p decoding, CC off/on, preventing duplicate native/inline captions, play/pause/resume, mute/volume, scroll continuity, natural end, real missing-video error/retry, homepage intro/inquiry suppression while the tour plays, no automatic mascot restart and media cleanup when leaving the homepage.

The 36 controlled-media mascot checks cover autoplay denial, voice restart at zero, state/caption progress, early-inquiry blocking, hover/focus/tap interactions, repeated activation, mute/unmute, scrolling, errors and cleanup. They use a controlled transport; the separate native media checks exercise real local audio/video. The 116 homepage checks retain the original mobile speech-cloud layout stability across changing heights and scrolling.

Contact was also checked directly in Chrome: Email Me retains `mailto:latcharlesjacob@gmail.com`; WhatsApp opens the existing number/copy dialog and closes correctly. The #contact anchor and navbar/footer actions remain intact.

## Animation and synchronization evidence

The arm mask excludes the ear, face, hair and torso. Pixel comparisons in the rig coordinate space prove those regions do not inherit arm motion; the arm itself moves. Original blue strokes have an independent transform layer. Homepage and production arm masks match. Rendered, encoded wave frames were visually inspected; the approved appearance, mouth movement and rigid breathing/lean remain.

The final map contains 79 visual cues and 87 caption cues. Each visual row identifies audio time, phrase, route, actual screenshot, scroll position, target, transition and Chovy's side/direction. Workflow 03 and Workflow 04 have separate, settled browser captures, verified visually, and separate cuts. Capture waits for the requested scroll panel instead of recording its previous sticky state.

The approved FlowDesk recording describes workflow functions without speaking workflow numbers. The map uses 01/02 for intake/category routing, 06/08 for resolution/reopening and distinct 03/04 examples during the controlled-workflows phrase. No new voice content was added. Pipeline, custom-field, LeadSense, Velora, CSQUARED, Lakbay, CampusFlow, Pengpeng, HRMS and Contact views follow their corresponding script topics.

Eight crossing samples kept the opaque website content in front of Chovy. Maximum changed viewport fraction was 0.2960% (thin target outline), below the 1.5% threshold. Encoded cue frames/contact sheets were reviewed across all eleven scenes, with specific review of the wave, workflow changes and updated section/HRMS views.

## Preservation and remaining limits

The exact website diff and per-file hashes are in CHOVY_TOUR_FILE_MANIFEST.json. All baseline case-study implementations, project screenshots, original mascot images, introduction/inquiry MP3s, blue-wave CSS, navigation, App scroll restoration and scroll-memory implementation are preserved. No new dependency, API key or recurring ElevenLabs service was introduced. Tour narration is prerecorded ElevenLabs audio served as local static files, not a live conversational agent.

- Physical iOS Safari, Messenger and other embedded browsers were unavailable. Local device validation is still needed.
- Native browser zoom and native fullscreen caption placement were not verified in this session; CSS zoom simulations are explicitly identified above.
- Phrase cues use measured recording pauses and estimated subdivisions within phrases. Long caption splits use word weighting inside those anchors. This is not forced word/phoneme alignment, and no zero-error word synchronization is claimed.
- Mouth movement uses the recording amplitude envelope with approximate text-derived shapes. It is not phoneme-accurate lip sync.
- The footage uses authentic browser captures with measured scroll interpolation and animated compositing, not a continuous OS screen recording.
- No human listening audit of pronunciation/timbre or continuous audiovisual semantic review was available. Original approved recordings were preserved; full decode, waveform timing, cue-frame comparisons and sampled visual/browser review were performed.

These limits prevent a blanket claim that every device and every spoken word was verified. The implementation, tests and deliverables are concrete and complete within the documented checks.
