# Install Portfolio V16.1 in your GitHub Desktop project

Use the **Changed Files ZIP** for the existing local V16 repository. Use the Complete Source ZIP only to open a separate clean source copy.

## Merge the changed files

1. Back up your current portfolio folder, including any uncommitted work.
2. Extract `Portfolio_V16_1_Changed_Files.zip` into a temporary folder.
3. Open its `ghl-automation-portfolio` folder. Copy its **contents** into your local portfolio root, the folder containing `package.json`. Merge directories and replace the two included component files. Do not create an extra nested portfolio folder.
4. Keep your existing `.git`, `.env` and `node_modules`. The patch does not contain or overwrite those folders/files. If you edited the same two mascot files after V16, compare those edits before replacing them.
5. Open a terminal in your local portfolio root and run:

```powershell
npx tsc -b --force
npm run build
npm run dev
```

No dependencies changed. If dependencies are missing, run `npm ci` first.

6. Open the Vite URL printed in the terminal. Reload the homepage with the browser zoom set to 100%.
7. Review the edits in GitHub Desktop. The two existing source changes should be `TalkingMascot.css` and `TalkingMascot.tsx`; new files are the layout QA page and V16.1 documentation/logs. Commit/push later only when you choose to publish. Nothing has been deployed for you.

## What to review locally

- Before scrolling, the opportunities label should begin close below navigation. The hero and mascot stay in place through greeting, explanation, closing and idle.
- Desktop/tablet: the cloud sits beside the character, with a small tail pointing toward it. Phone: the cloud stacks above the character. Narration and inquiry should stay below the navbar and clear the page text/buttons.
- The inquiry cloud stays hidden throughout the introduction and after completion until hover, focus or tap. Check mouse leave, Escape, Tab away, tap again and the existing contact link.
- A deliberate focus/tap/audio action can reveal the presentation if the browser scrolled only its control into view. Normal wheel/touch page scrolling is not intercepted.
- The four expertise cards use four columns on desktop, two at 1100px and below, and one at 540px and below. Within each row, icons, headings, descriptions and tag bottoms align.
- On short screens, decorative caption labels/bars hide to leave room for the text and contact CTA. Small portrait phones also size the same mascot frame to the available height.
- Review actual browser-toolbar zoom at 80%, 90%, 100% and 125%, plus a physical phone. The supplied zoom matrix is CSS simulation, not a claim of native toolbar or physical-device testing.

## Repeat the tests

While `npm run dev` is running:

- `/tests/v16-1-layout.html`: V16.1 reload/initial-state checks, 36 width/CSS-zoom combinations, and four short/compact viewport checks. Use the inspection controls for hero/cards/inquiry. This test page is not imported by the production entry.
- `/tests/mascot-browser.html`: original V16 lifecycle/speech mocks and reduced-motion stylesheet check.

Pure state/script tests:

```powershell
npx tsc src/components/mascot/mascotModel.ts --target ES2022 --module ES2022 --skipLibCheck --outDir tests/.compiled
node --test tests/mascot-model.test.mjs
```

The speech implementation and voice selection are unchanged. Browser speech output still depends on the available OS/browser voices and user audio permission. No account, API key or voice-service subscription is added by V16.1.

## Complete source alternative

Extract `Portfolio_V16_1_Complete_Source.zip` into a **new** folder, run `npm ci`, then the check/build/dev commands above. It preserves all V16 source and assets but excludes Git metadata, dependencies, build output, caches and secrets. To keep using your current GitHub Desktop repository, prefer the changed-files merge.
