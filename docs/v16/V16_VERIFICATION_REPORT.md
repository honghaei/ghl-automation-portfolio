# Portfolio V16 — verification report

Date: 3 November 2026 (Asia/Manila)

## Scope and preservation

The implementation uses the uploaded `ghl-automation-portfolio(9).zip` as its sole source baseline. It adds the mascot only through `src/pages/Home.tsx`; the blue-wave component/styles, router, project data, other page components, galleries, scrolling systems and timelines remain byte-identical to that ZIP. All 177 original `public` assets and all nine non-homepage TSX page files are preserved.

Existing hero text and both hero CTAs remain. The mascot occupies the other hero column; the four existing expertise cards are retained in a row below, stacking responsively. This is an integration into the existing portfolio, not a rebuilt site. No push or deployment was performed.

## Checks actually run

| Check | Result and extent |
| --- | --- |
| TypeScript application/project check | `npx tsc -b --force` passed. |
| TypeScript browser fixture check | Standalone `tsc --noEmit` with React JSX, DOM, ES2022 and Bundler resolution passed. |
| Production build | `npm run build` passed. Vite reports the existing shared bundle above its 500 kB warning threshold; no build errors. |
| State and script tests | Seven Node tests passed: verbatim approved scripts, inquiry guards at every initial step, pose sequence, opt-in/dismiss behavior, duplicate start, intro duration estimate, and multiple mouth shapes. |
| Browser lifecycle suite | 23 assertions passed using controlled speech events on the real React component, including early interaction guard, all initial poses, idle return, mouth start/stop, hover/leave, focus/Escape, simulated touch open/close, cooldown, mute, no-start/error fallbacks, slow-speech completion and unmount cancellation. |
| Responsive layout matrix | 56 assertions passed across 28 combinations: widths 1920, 1440, 1280, 1024, 768, 390 and 320 px, each at 80%, 90%, 100% and 125% CSS zoom. Mascot stays horizontally inside the viewport and does not overlap hero copy. |
| Reduced motion | Browser stylesheet inspection confirmed the reduced-motion media rule disables animations. Actual OS preference emulation was not available. |
| Native browser speech | Real synthesis requests were made through the browser API. This cloud browser exposes zero voices and returns `synthesis-failed`; captions remain available and the mouth rests. Audible playback could not be verified in this environment. |
| Real homepage keyboard placement | After the full captioned intro, keyboard focus opens inquiry. Its viewport position clears navigation; when focus scrolls its original slot away, it moves over the lower character body so the thinking face stays visible. |
| Real inquiry CTA | Clicking it navigates to `#contact` and dismisses inquiry. |
| Existing homepage behavior | View My Work reaches `#projects`; FAQ toggle changes expanded state; WhatsApp opens the existing contact dialog. No message was sent. |
| Representative routes | FlowDesk, CampusFlow and LeadSense load with expected headings, shared wave background, and zero mascot components. CampusFlow renders its existing screenshot images. |
| Browser console | No application runtime errors observed during these checks. Existing React Router future warnings and browser-extension metadata errors were observed; these are not mascot errors. |
| Asset/source audit | Original project assets and non-homepage page sources compare byte-for-byte with the upload. New assets resolve from the project's public directory. |
| Credential-pattern scan | No common API/private-key credential patterns found in eligible source text. Git history, dependencies, caches, environment secrets and generated compiler output are excluded from deliverables. |

The preserved case-study galleries/timelines were not exhaustively replayed; their source and existing assets are unchanged, with representative route smoke checks as described above.

## Behavior and limitations

- The initial four caption segments preserve the approved script exactly. The nominal silent visual introduction is approximately 15–20 seconds; real voice durations depend on the installed voice.
- Audio is opt-in through a discreet control. Enabling during the intro speaks the current line and subsequent lines; no prominent replay control is added.
- Inquiry cannot render during the initial intro, including the initial idle delay. Completion alone does not open it. Hover/focus/tap must occur after completion.
- Word-boundary events help correct mouth timing where supported. Otherwise a character/pacing estimate selects seven SVG mouth shapes. This is **approximate visual speech**, not phoneme-accurate lip synchronization. No prerecorded narrator, forced-alignment service or external voice API is claimed.
- The four main pose pixels are preserved from the supplied sheet. The 121×312 Think reference needed a reconstructed transparent cutout; its exact high-resolution detail was not available. The prepared Think pose is normalized to the same body height and foot baseline.
- Responsive checks use iframes and CSS zoom. An attempted cloud-browser zoom shortcut did not change the measured viewport, so **native browser-toolbar zoom is not claimed as tested**. Real Windows/macOS voice output, Safari/iOS, physical mobile touch, device performance/FPS and actual OS reduced-motion switching remain local review items.
- Mobile events were exercised with synthetic pointer/focus/click events against the real component. They are not a substitute for physical-device tests.
- Silent captions intentionally do not move the mouth. Speech cancellation, missing voices, mute and navigation stop the mouth rather than running fake talking loops.
- A temporary preview-host allowance was used only for cloud QA. Original Vite configuration is restored in the delivery.

## Local review and reproducibility

See `V16_APPLY_INSTRUCTIONS.md`. The source includes the Node model tests and development-only `/tests/mascot-browser.html` harness. The production entry does not import the fixture or its speech mocks. Supporting browser result logs are included under `docs/v16/`.
