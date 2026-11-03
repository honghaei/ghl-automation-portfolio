# Portfolio V16 — talking mascot

Based only on the uploaded `ghl-automation-portfolio(9).zip`.

- Added a reusable homepage-only React/TypeScript mascot with Idle → Greeting → Explaining → Closing → Idle, then opt-in Thinking/inquiry.
- Kept the exact approved four-pose sheet pixels; normalized native SVG viewports align the body/feet. Added a transparent Think cutout prepared from the supplied small Think reference.
- Added breathing, idle blinking, a clipped greeting hand motion, pose crossfades, seven vector mouth shapes, caption bubbles and an audio control. No replay button.
- Added browser speech synthesis with actual start/end gating, word-boundary corrections when supported, approximate timing when boundaries are missing, no-start/error fallbacks, mute, hover cooldown, interruption and unmount cleanup.
- Inquiry is guarded during every initial intro state. After completion it opens only on character hover, keyboard focus or tap. It closes on mouse leave, focus exit, Escape, a second touch tap, outside interaction, or contact navigation.
- Connected the inquiry CTA to the existing `#contact` section. Kept existing hero copy and both CTAs; retained all four expertise cards below the hero row.
- Added responsive styles scoped to the mascot/homepage, including room for existing reveal transforms and removal of the inherited 320px body minimum on narrow homepage viewports. The inquiry adjusts within the viewport below navigation.
- Preserved the blue-wave implementation, routes, project and case-study content, screenshots, navigation, contact actions, galleries and timelines.
- Added local model tests and a development-only browser QA harness. No new runtime dependencies.

No GitHub push or Netlify deployment was performed.
