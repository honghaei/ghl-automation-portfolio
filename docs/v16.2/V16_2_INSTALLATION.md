# Apply Portfolio V16.2 locally

## Existing GitHub Desktop repository

1. In GitHub Desktop, select your portfolio repository and choose **Repository → Show in Explorer**. Keep a backup or local commit of your current V16.1 work before replacing files.
2. Extract `Portfolio_V16_2_Changed_Files.zip` into a separate temporary folder. Its `src`, `public`, `tests` and `docs` folders are relative to the repository root, where your `package.json` is located.
3. Copy those extracted folders into that repository root and merge folders, replacing matching files. Do not create an extra nested project folder. No existing files need deletion.
4. Include **both** recordings under `public/assets/mascot/audio/v16.2/`. Do not put the MP3s inside `src` or rename them.
5. Review the 16 changed/new files in GitHub Desktop against the changelog. No dependency or lockfile change is needed.

Alternatively, extract `Portfolio_V16_2_Complete_Source.zip` into a fresh review folder. It contains the `ghl-automation-portfolio` project folder. Keep your existing repository's Git metadata in place if you later copy this full source into it; prefer the Changed Files ZIP for your existing repository.

## Run locally

Open a terminal in the project root:

```sh
npm ci
npx tsc -b --force
npm run build
npm run dev
```

`npm ci` is only necessary for a fresh extracted project or if dependencies are not already installed. Open the local URL printed by Vite. Use a web server rather than opening `index.html` directly.

## Check behavior

- Reload the homepage: captions and gestures begin silently. The inquiry cloud stays hidden throughout the introduction and until a later intentional interaction.
- Click **Voice on** during the introduction: the greeting, captions and approved introduction MP3 restart together from zero.
- Scroll down immediately, then return: the recording continues. Cloud dismissal also leaves an already-playing recording running.
- **Mute voice** stops the recording and mouth. **Voice on** starts the full relevant clip again from zero.
- After the introduction completes, hover, keyboard-focus or tap the mascot. The Think cloud appears and the existing **Send me a message** link targets `#contact`. If voice is enabled, inquiry playback starts once; rapid repeated interactions do not keep restarting it.
- On a phone-sized window, the cloud has a separate reserved row above the character, below the hero content and buttons. It scrolls normally with the page; it does not follow the viewport or automatically scroll the visitor back.

## Automated and browser tests

Compile the small Node test modules, then run the preserved model tests and new audio tests:

```sh
npx tsc src/components/mascot/mascotModel.ts src/components/mascot/audioManifest.ts src/components/mascot/audioTimeline.ts src/components/mascot/PlaybackController.ts --target ES2022 --module ESNext --skipLibCheck --outDir tests/.compiled
node --test tests/mascot-model.test.mjs tests/mascot-audio.test.mjs
```

With `npm run dev` active, append these paths to Vite's local URL:

- `/tests/mascot-browser.html`: click **Run MP3 interaction regressions**. This uses controlled media fixtures to test failures, rapid toggles, focus, hover, touch-style events and cleanup.
- `/tests/v16-2-layout.html`: run each test button separately and wait for `DONE` before starting another. The mobile stability check uses the real silent intro duration; the native MP3 check uses the actual recordings. The 72-case matrix uses CSS zoom simulations, not native browser zoom. These pages are development tools and are not production build entry points.
- `/tests/mascot-fixture.html?mode=native-broken`: click Voice on to inspect actual missing-audio feedback. This fixture intentionally requests a nonexistent audio file.

## Audio assets and limitations

No API credentials, ElevenLabs account setup or runtime audio generation is required. Audio starts from an explicit visitor click/tap; a browser may still reject playback. A visible retry message appears when playback is blocked or a file cannot be played. Normal browser/OS interruptions outside the active browsing session cannot be overridden.

The audio manifest is derived from these exact MP3s. Replacing or editing a recording later requires regenerating its duration, phrase cues and amplitude envelope. Do not substitute another recording while retaining this manifest.

See the verification report for the Chrome checks and the remaining physical iPhone Safari/Messenger and native browser-zoom testing limits. No deployment or push is included in these instructions or was performed during implementation.
