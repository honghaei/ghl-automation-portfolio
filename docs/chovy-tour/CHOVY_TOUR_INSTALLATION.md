# Chovy Portfolio Tour V2.0 — Local installation

Nothing was deployed, pushed or committed to a remote repository.

1. In GitHub Desktop, select your existing portfolio repository and create a local backup or commit your current work.
2. Extract Portfolio_Chovy_Tour_V2_Changed_Files.zip to a temporary folder. Its paths are relative to your repository root (the folder containing package.json).
3. Copy its contents into that repository, merging folders and replacing only matching files. Do not replace or delete your .git directory, environment files or unrelated local work. Review GitHub Desktop's diff before making a local commit.
4. Run `npm ci`, `npx tsc -b --force`, and `npm run build`. No new dependencies or API credentials are required.
5. Run `npm run dev`, then open the URL Vite prints. Hard-refresh to pick up the replacement Web MP4, VTT and poster.
6. Review the AI Voice section, CC toggle, all 11 chapters, home mascot voice, contact actions and the existing case studies. Confirm physical iPhone/Messenger behavior locally; this environment provided Chrome viewport tests only.

Portfolio_Chovy_Tour_V2_Complete_Source.zip is a complete alternative for a separate local folder. Its top-level folder is ghl-automation-portfolio. Do not extract it over the parent of an existing Git repository and assume Git history has been merged; use the Changed Files ZIP for your current repository.

The website assets are under public/assets/chovy-tour/. The Web MP4 has selectable captions; the standalone Final MP4 has burned subtitles. Keep the filenames, VTT and poster together when applying the patch.

To reproduce the video, extract Chovy_Portfolio_Tour_V2_Production_Source.zip and follow its README.md. All 11 original MP3s, original approved character pixels, actual browser captures, phrase cues and scripts are included. The production package is an editing archive, not a runtime website dependency.

Do not rerun the old V1 capture-plan generator over the V2 phrase map. See PHRASE_SYNC_MAP.md and phrase-sync-map.json for every visual cue and the timing limitations.
