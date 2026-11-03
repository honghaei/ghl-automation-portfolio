# Apply Portfolio V16 locally

Use **one** of these methods. Both are based on your uploaded portfolio (9), rather than an older V15 export.

## Option A — changed files

1. Back up your current local portfolio folder. If it has changed since the uploaded ZIP, compare those changes before overwriting `src/pages/Home.tsx`.
2. Extract `Portfolio_V16_Changed_Files.zip` into a temporary folder.
3. Copy the contents of its `ghl-automation-portfolio` folder into your existing portfolio root, the folder containing `package.json`. Merge folders and replace the included files. Do not create an extra nested portfolio folder.
4. Keep your local `.git` folder. The patch contains no Git history, dependencies, secrets or build cache.
5. In a terminal opened in that portfolio root, run:

```powershell
npm ci
npx tsc -b --force
npm run build
npm run dev
```

If dependencies are already installed from the unchanged lockfile, `npm ci` is optional. Open the local URL printed by Vite.

## Option B — complete source

Extract `Portfolio_V16_Complete_Source.zip` into a **new** folder and run the same commands there. Its `public` and `src` include all your original project assets/content plus V16. It excludes `.git`, `node_modules`, old `dist`, generated compiler output and caches. If you want to keep your current GitHub Desktop repository, use Option A instead.

## Review in your browser

- Reload the homepage. The first ~15–20 seconds show the approved captioned greeting, titles, explanation and closing, followed by idle. Exact duration with voice depends on the installed voice.
- Choose the small **Enable voice** control while the introduction is active to speak the current line and remaining lines. Without a working speech engine, captions continue; the mouth does not pretend to speak.
- Hover, focus or tap during the introduction: no inquiry cloud should appear.
- After completion, hover over or Tab to the character, or tap on mobile. The Think pose and inquiry appear. Choose **Send me a message** to reach your existing contact section.
- Mouse away, Tab away, press Escape, tap again or tap outside to dismiss. Rapid re-entry does not repeatedly restart inquiry audio. Inquiry speech has a 12-second cooldown and a brief hover dwell.
- Review at 80%, 90%, 100% and 125% **actual browser zoom**, and on a real phone. The provided browser QA used responsive iframe widths and CSS zoom simulations; physical-device and toolbar zoom checks remain local review items.
- Check the existing View My Work/About Me buttons, navigation, FAQs, WhatsApp dialog and your case-study galleries/timelines.

## Repeat automated checks

After `npm run dev`, open `/tests/mascot-browser.html` on the local Vite URL. Its buttons run controlled browser lifecycle/speech mocks, a responsive matrix and a reduced-motion stylesheet inspection. Tests do not import into the production app. The native fixture is `/tests/mascot-fixture.html?mode=native`; it records actual speech-engine events without mocks.

Run the pure model tests from the portfolio root:

```powershell
npx tsc src/components/mascot/mascotModel.ts --target ES2022 --module ES2022 --skipLibCheck --outDir tests/.compiled
node --test tests/mascot-model.test.mjs
```

## Files and customization

- Main component: `src/components/mascot/TalkingMascot.tsx`
- Approved scripts/state reducer: `src/components/mascot/mascotModel.ts`
- Mouth and greeting rigs: `MouthRig.tsx`, `GreetingArt.tsx`
- Styles: `src/components/mascot/TalkingMascot.css`
- Assets: `public/assets/mascot/`
- Homepage integration: `src/pages/Home.tsx`

The default contact target is `#contact`. Speech uses the browser/OS voice engine, with an English voice selected when available; no API key or subscription is required by the implementation. Browser/OS voices can vary. Audio is opt-in for reliable autoplay behavior.

Lip movement is approximate, corrected by word-boundary events where available. It is not phoneme-aligned audio or prerecorded narration. Silent captions intentionally keep the mouth resting. Reduced-motion preferences disable body, hand, blink, bar and transition animations; speech-driven mouth changes remain as captions' visual companion.

No deployment or push is needed for local review. Review and publish later through your normal GitHub Desktop/Netlify process if desired.
