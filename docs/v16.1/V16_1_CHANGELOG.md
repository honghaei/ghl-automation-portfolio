# Portfolio V16.1 — homepage layout corrections

Baseline: the completed `Portfolio_V16_Complete_Source.zip` delivered in this conversation. All pose assets, scripts, state-machine code and project content are retained.

## Existing files changed (exactly two)

1. `src/components/mascot/TalkingMascot.css`
   - Top-aligns the hero copy and mascot at a consistent 24px desktop gap below navigation (22px on phones), replacing centering against the tall stacked caption/character column.
   - Removes only the hero copy's 24px reveal translation; its opacity fade and all other reveal animations remain.
   - Replaces the empty desktop caption spacer with a caption rail to the character's right. Phones stack the cloud above the character with reserved room to prevent pose/caption layout shifts.
   - Styles friendly navy/cyan cloud outlines and responsive tails, readable wrapping, and compact landscape/phone spacing. Short phones reserve a smaller caption row and size the same character frame to the available viewport height so native focus cannot scroll the cloud over it. Decorative labels/bars hide on short screens; captions, speech, mouth animation and contact CTA remain.
   - Uses shared CSS subgrid rows for the four expertise cards, aligning icons, headings, description starts and tag bottoms with equal row heights. Retains natural text heights and provides a Flexbox fallback.
   - Preserves all existing character animation keyframes and reduced-motion rules.
2. `src/components/mascot/TalkingMascot.tsx`
   - Adds the native SVG cloud shell and left/down tail variants.
   - Applies one viewport-placement calculation to both narration and inquiry, so captions clear the navbar and viewport edges while staying in their own rail.
   - Reveals the presentation once when deliberate keyboard/tap/audio focus has scrolled its caption area out of view. Ordinary page scrolling is never forced or blocked.
   - Preserves scripts, pose assets, state reducer, speech controller, lip rig, cooldown, input handlers, and the completion guard on inquiry.

## New files

- `tests/v16-1-layout.html`: actual-homepage reload, pose stability, caption geometry, expertise alignment, responsive width/CSS-zoom and compact-landscape acceptance checks.
- `docs/v16.1/V16_1_CHANGELOG.md`
- `docs/v16.1/V16_1_VERIFICATION_REPORT.md`
- `docs/v16.1/V16_1_INSTALLATION.md`
- `docs/v16.1/V16_1_FILE_MANIFEST.json`: per-file checksums and baseline fingerprint.
- `docs/v16.1/*-results.txt`: actual acceptance, regression and build logs, enumerated in the manifest.

No other V16 files are edited. Temporary cloud-preview host configuration is restored before packaging. No dependency, Git history, build cache, environment secret, push or deployment is included.
