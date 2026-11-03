# Portfolio V16.2 verification report

Test date: 2026-11-03. Implementation performed on the retained authoritative V16.1 source from this conversation. Its V16.1 changed-file manifest was verified before editing. Changes are limited to the mascot implementation, its tests, the supplied audio and V16.2 documentation.

## Executed checks

| Check | Actual result |
| --- | --- |
| Complete TypeScript project check: `npx tsc -b --force` | PASS; no TypeScript diagnostics. |
| Standalone TSX media fixture type check | PASS, using ES2022/DOM, React JSX and Bundler module resolution. |
| Preserved mascot model suite | PASS, 7/7 tests; unchanged test/model source. |
| New playback-controller suite | PASS, 18/18 tests. Combined Node run: 25 passed, 0 failed, 0 skipped. |
| `npm run build` | PASS; TypeScript and Vite production build completed, 444 modules transformed. |
| Built static narration assets | PASS; both files present in `dist/assets/mascot/audio/v16.2/`, byte-identical to the uploads. |
| React component browser regressions | PASS, 36 assertions using the real component with controlled media fixtures in Chrome. |
| Mobile narration and embedded-browser height stability | PASS, 116 assertions against the actual homepage in Chrome. |
| Responsive cloud and expertise-grid matrix | PASS, 72 combinations / 1,804 assertions in Chrome; frame widths plus CSS zoom simulations. |
| Native HTMLAudioElement acceptance suite | PASS, 17 assertions with the real local MP3s, without a media mock. End-event checks in this suite seek near clip end. |
| Additional manual native-media observations | Real introduction ran to its natural 15.490563 s end; real inquiry ran to its natural 4.832625 s end. Both remained active while scrolling. |
| Actual missing-media fixture | PASS; native media loading failure produced visible “Voice file could not be played. Tap Voice on to retry.” feedback, Voice on available, mouth at rest. |
| Route smoke checks | FlowDesk and LeadSense AI rendered their existing case-study content; neither mounted a mascot. Homepage navigation, copy and contact destination were inspected. No external contact message was sent. |
| Source preservation | PASS; 5 existing files changed, 11 added, none deleted; other 272 baseline files byte-identical. Package manifests, router, Vite config, project pages, screenshots, approved mascot art and existing contact implementation unchanged. |
| Final archive integrity | ZIP CRCs and changed-file-to-complete-source reconstruction checked during packaging. No dependencies, build output, compiled test cache, credentials or new raw test logs included. |

Build advisories: Vite reports a 548.61 kB minified main JavaScript chunk exceeding its 500 kB advisory. This is a warning, not a failed build. No animation/audio library or other dependency was added. The environment also prints an npm `http-proxy` configuration warning. Chrome development logs contained existing React Router v7 future-flag warnings and browser-extension metadata errors; these were not mascot runtime errors. No new portfolio application exception was observed during the successful checks. The deliberately broken media fixture is a failure-path test.

## Playback and interaction coverage

The executed tests cover silent initial entry; Voice on during the first visual introduction; completed-introduction replay through Voice on; inquiry-context Voice on; time-zero reset; real-media cue progression; initial inquiry suppression; hover/focus/touch-style activation after completion; Escape, blur and tap dismissal; inquiry cooldown; immediate scrolling away/back; active inquiry continuing after dismissal; mute midway; rapid toggles; React rerenders; one audio element; non-overlapping transport use; natural completion; buffering; stale play-promise rejection; browser playback denial; missing-file errors; retry recovery; page exit and component unmount. No automatic page scroll occurs when starting audio. Layout focus checks use `preventScroll` in the test driver so they can separately detect component-induced scroll changes.

The 36-assertion component suite uses fake media timing (four times normal speed), intentionally denied playback and broken playback to make deterministic regression checks. It is complemented by the separate, unmocked real-MP3 suite and manual clock/ended observations; mocked tests alone are not claimed as proof of native playback.

The real-MP3 suite observed `paused=false` and advancing `currentTime` after scrolling away and back for the intro, and after inquiry dismissal plus scrolling. Navigation away paused the old media element. Browser decoding/playback events were verified; the assistant did not perform a human listening assessment of voice quality. The approved recording bytes were preserved exactly.

## Responsive and visual coverage

Frame dimensions tested: 1920×1080, 1440×900, 1280×800, 1100×800, 1024×768, 834×900, 768×900, 600×700, 568×320, 844×390, 540×720, 430×760, 414×736, 393×652, 390×724, 375×667, 360×640 and 320×568. Each was tested at 80%, 90%, 100% and 125% **CSS zoom simulation**, for 72 combinations. This is not native browser zoom.

Geometry assertions check that the cloud stays inside its own layout rail and horizontal viewport bounds, clear of hero text/CTAs and the visible character. At phone widths it remains above the character. Its complete text and CTA can be read below the fixed navigation when that ordinary content row is scrolled into view. Text wrapping, no horizontal page overflow, four/two/one-column expertise layouts, equal row heights, icon/title/description alignment and bottom-aligned tags were verified.

The actual silent timeline showed greeting, explaining, closing and idle without inquiry appearing early. Hero document position, character position and stage height remained stable across captions. Changing the phone frame from 390×724 to heights of 600, 780, 652 and back to 724 did not move or resize the reserved stage. Additional scroll positions 0, 450, 900 and 1200 did not add any viewport translation. A mobile visual inspection confirmed the cloud/tail sits above the Think pose with a clear gap to the head and hands.

The cloud is ordinary scrolling content. It can naturally leave the viewport as the visitor scrolls away; it is not pinned to the navigation or forced back on screen. On short screens the complete mascot presentation can require normal page scrolling. This avoids obstructing the hero or character to fit everything into one screen.

Reduced-motion CSS and keyboard focus treatment remain in place. The reduced-motion rule disables mascot animations/transitions; this release did not emulate a changed operating-system reduced-motion preference in a physical device.

## Timing method and limits

| Track | Duration used by manifest | Native Chrome duration | Supplied-file SHA-256 |
| --- | --- | --- | --- |
| Introduction | 15.4906122449 s | 15.490563 s | `b0245fe7ce3bf3eee82b73eec6775b85dac827af96693a8acdb7d4f1d9b91a3e` |
| Inquiry | 4.8326530612 s | 4.832625 s | `ae94c2fa91b1e26ddd72cecc777c2c16ce97347cf21c1dc7441c4002134628ab` |

The tiny duration differences are decoder/container rounding. Native `ended` determines audible completion. Caption/pose cue starts are approximately 0.000, 2.401, 8.097 and 13.347 seconds, selected around recording phrase pauses. The silent introduction follows the same recording-based schedule; audible playback reads `audio.currentTime` instead of a wall-clock duration estimate.

Mouth motion samples a precomputed RMS amplitude envelope at 20 ms spacing, with UI sampling roughly every 60–75 ms. Amplitude closes the mouth during recording pauses. Several approved mouth shapes are selected using an estimated position in the corresponding caption. No runtime microphone access, AudioContext permission or external analysis service is needed. This is approximate phrase/amplitude synchronization, **not verified phoneme-accurate viseme alignment**.

## Remaining environment limits

- Physical iOS Safari and Messenger's embedded browser were unavailable. iPhone-like sizes, landscape frames, browser-height changes and touch-style events were tested in desktop Chrome, not on an iPhone. Native iOS autoplay, safe-area rendering, low-power/OS interruptions and Messenger behavior still require device review.
- Native browser zoom controls were unavailable; no actual 80/90/100/125% browser-zoom pass is claimed.
- No Firefox or native WebKit session was available. Browser policy may reject a user-triggered play; that rejection is handled with visible retry feedback. Backgrounding, screen lock or browser/OS suspension can interrupt media and cannot be guaranteed by website code.
- The full production build was executed and its output/assets verified. Browser interaction testing used Vite's development preview. Historical V16/V16.1 evidence remains in the source archive, clearly separate from this release's results; no new raw logs were placed in production assets.

No GitHub push, Netlify deployment, runtime ElevenLabs request, API credential or external audio-generation integration was used.
