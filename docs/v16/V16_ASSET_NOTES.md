# Mascot assets and rig

## Runtime files

`public/assets/mascot/approved-poses.png` is a byte-identical copy of the supplied transparent four-pose sheet. The actual component renders four clipped native SVG viewports over that one cached PNG, rather than downloading four duplicate sheets. Coordinates normalize the art to a shared 360×560 frame. No background mockup is used.

`think-cutout.png` is the transparent cutout prepared with the built-in image tool from your supplied 121×312 Think reference. It retains the approved thoughtful pose, clothing and character identity. Because the source was small, the cutout involves reconstruction/upscaling, not recovery of original high-resolution detail. Its height and feet are normalized to the same body frame; slight differences in proportions reflect the separate reference.

`idle.svg`, `greeting.svg`, `explaining.svg`, `closing.svg`, and `thinking.svg` are portable, self-contained pose assets with embedded raster art and a common frame. They are not required for runtime downloads: the React component uses the shared original PNGs for efficiency. A standalone pose is a static base, not an already rigged talking character.

`mouth-shapes.svg` contains seven vector symbols: rest, aa, ee, oh, oo, mbp and fv. They were drawn as native SVG UI rig elements based on the mouth/expression reference. `MouthRig.tsx` places the same shapes on the original face, masking the printed mouth with a feathered skin patch. The runtime combines these rig elements, the pose artwork and animation state. The Think rig is smaller and aligned separately.

`GreetingArt.tsx` clips the approved waving hand from the same original sheet and gives it a small wrist rotation. Pose changes use opacity crossfades; idle uses small breathing and blink effects. The rig avoids heavy new animation dependencies.

## Speech timing

The mouth changes only between real synthesis `onstart` and `onend`/error/cancel. Word-boundary events correct the current character index when the engine provides them; a text/pacing estimate fills gaps. Character/vowel mapping and rhythmic shape changes are approximate visual speech, **not** a phoneme/viseme alignment service. Silent captions leave the mouth resting. Device voice speed and boundary support vary.

## Think preparation prompt

Built-in image tool; transparent background requested; input: `image(20261103-010750).png`.

> Use case: background-extraction. Edit target: the supplied approved Think pose. Prepare a transparent full body cutout for a website mascot. Remove ONLY white background, ground shadow and the printed Think label below the feet. Preserve this exact character, thoughtful hand-on-chin pose, facial expression, black hair, black polo, cargo pants and white shoes. Do not redesign, change proportions, add accessories or text. Center full body in portrait frame with clear transparent padding, both shoes at same baseline; crisp edges and actual transparent alpha. This is a production asset, not a mockup.

The four main poses were not regenerated. The original reference assets remain unmodified in the upload; the deliverable adds project-ready copies/rig files.
