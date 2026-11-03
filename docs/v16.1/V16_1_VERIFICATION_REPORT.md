# Portfolio V16.1 — verification report

Date: 3 November 2026, Asia/Manila.

## Baseline and scope

Used the completed `Portfolio_V16_Complete_Source.zip` from this conversation as the authoritative V16 baseline, alongside the four new screenshots. The original V16 archive remains untouched.

Only two existing source files change: `src/components/mascot/TalkingMascot.css` and `src/components/mascot/TalkingMascot.tsx`. The new acceptance harness and documentation are listed in the changelog/manifest. All V16 pose images, lip/hand rigs, state reducer, approved scripts, speech controller, project content/assets, background, navbar, routing and scroll-restoration implementation remain intact.

## Root causes and corrections

- Initial vertical gap: V16 centered the hero copy against a much taller right column consisting of a 160–185px caption spacer, the character and controls. The copy also had a 24px reveal translation. Scrolling moved that already-offset content up; it was not a correct initial layout. V16.1 top-aligns the hero, replaces the desktop spacer with a side caption rail and makes the hero entrance an opacity fade. Other scroll/reveal behavior stays unchanged. No artificial initial scroll is applied.
- Clipped/overlapping captions: V16 handled inquiry and narration differently, with a caption area above the character and inquiry sometimes moved over the body. V16.1 gives both messages the same navy/cyan cloud shell and responsive rail, with viewport/navbar clearance calculations. Phones stack the cloud above the art. Deliberate focus/audio interaction can reveal the presentation if native control focus moved its caption out of view; wheel/touch scrolling is not intercepted.
- Uneven cards: content-flow tag rows followed descriptions of different lengths. Shared subgrid rows now align icons, headings, description starts and tag bottoms. Text heights remain natural. A Flexbox fallback supports engines without subgrid.
- Small-phone focus: when the caption plus character exceeded the available height, native focus could scroll the figure up and force the cloud over it. Compact phones now budget the caption row and character size against viewport height. No pose art or animation sequence changes.

## Actual results

| Check | Result |
| --- | --- |
| Application/project TypeScript | `npx tsc -b --force` passed. |
| Browser fixture TypeScript | Standalone `tsc --noEmit` for the existing React browser fixture passed. |
| Production build | `npm run build` passed. The shared bundle still produces Vite's above-500kB warning; it is not a build error. |
| Existing state/script tests | 7/7 Node tests passed, including exact approved scripts, inquiry guards, pose order, duration estimate and mouth shapes. |
| Repeated loads and narration | 35 browser assertions passed: three reloads consistently place the hero 24px below navigation at the default desktop browser scale; no initial reveal/asset position shift was measured. Greeting, both explanation segments and closing clouds clear navigation/text/art. Hero position and mascot-stage height remain stable across the full actual caption sequence. Inquiry stays hidden and does not appear on completion alone. |
| Responsive matrix | 780 assertions passed over 36 combinations: widths 1920, 1440, 1280, 1100, 1024, 768, 540, 390 and 320px, each at 80%, 90%, 100% and 125% **CSS zoom simulation**. Checks cover cloud viewport/navbar clearance, no overlap with hero/character, responsive tails, content padding, horizontal overflow, 4/2/1 expertise columns, matching row heights, aligned icons/headings/descriptions, bottom-aligned tags and unclipped content. |
| Compact screens | 28 assertions passed for 844×390, 568×320, 390×640 and 320×568: inquiry fully visible below navigation, clear of hero and character, responsive tail, readable/padded caption and CTA, no horizontal overflow. |
| Existing mascot interactions | 23 browser assertions passed using the unchanged controlled speech fixture: early-inquiry prevention, all initial states, return to idle, mouth start/stop, hover/leave, keyboard focus/Escape, synthetic touch open/close, cooldown, mute, no-start/error fallbacks, slow-speech completion and unmount cancellation. |
| Reduced motion | Browser stylesheet inspection passed. Original animation-disable rules remain; actual OS preference switching was not emulated. |
| Real contact flow | On the actual homepage, keyboard focus after the intro opened the inquiry below the navbar. Clicking its CTA reached `#contact` and dismissed it. No message was sent. |
| Preserved case-study routes | FlowDesk, CampusFlow and LeadSense loaded with their expected headings, exactly one blue-wave backdrop and zero mascot components. No application-origin console errors were observed in those checks. |
| Native browser zoom controls | The cloud browser shortcut did not change its measured viewport (1348px before/after). Actual 80/90/125% toolbar zoom is **not claimed as tested**. |
| Source/package preservation | Byte comparisons and patch reconstruction verify all other V16 files and all original assets are retained. Temporary preview-host changes are restored. ZIP integrity and exclusion checks pass. |

## Limits and local review

- Width and zoom tests use same-origin browser iframes and CSS zoom. These are real DOM/layout checks, not physical-device or native toolbar zoom tests. Review actual toolbar zoom and your phone before publishing.
- Mobile interaction regression checks use synthetic pointer/focus/click events on the real React component. Physical touch hardware and Safari/iOS were not tested.
- Speech selection, playback code and lip rig remain from V16. This environment has not verified audible OS/browser voice playback. Mouth timing remains approximate word/timing-driven lip movement, not phoneme-accurate alignment.
- The shared bundle warning is retained; unrelated project code was not split or redesigned.
- Source/asset equality plus representative route smoke tests establish preservation. Every existing gallery/timeline was not exhaustively replayed.
- On short screens decorative caption labels/bars hide; the actual caption, speech/mouth behavior and functional contact CTA remain. Small portrait screens scale the existing character frame to fit the caption/figure budget.
- The baseline includes V16 documentation and its historical reports. Current V16.1 evidence is under `docs/v16.1/`; earlier reports describe their original verification scope.

No GitHub push, Netlify deployment, external voice integration, subscription or secret was introduced. See `V16_1_INSTALLATION.md` for the local GitHub Desktop workflow.
