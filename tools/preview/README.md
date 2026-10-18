# Timeline previews

Editable source for `assets/previews/timeline-light.png` and `timeline-dark.png`.
Both themes share the same layout, memo content, official lockup, and Lucide icons.

## Build and export

Requires Node.js 18 or later and a Chromium browser. No package installation is needed.
From the repository root:

```sh
node tools/preview/build.mjs
```

Open `tools/preview/dist/timeline-light.html` and `timeline-dark.html` in the browser.
Each page is self-contained and works without a server. Click **Download PNG** to
export its 1448 × 1086 image, then copy the downloaded file into `assets/previews/`.
The generated HTML in `dist/` is ignored by Git.

Use the PNG download button for published assets. A browser screenshot may use
lossy encoding even when its filename ends in `.png`. The exporter draws the
HTML/CSS through an SVG `foreignObject` onto a canvas and explicitly encodes PNG.
Fonts use the app's system sans-serif stack; text rasterization can vary with
the operating system and browser. The exported stage carries its own font styles.

## Edit

| File | Purpose |
| --- | --- |
| `build.mjs` | Shared layout, memo content, dates, and sidebar data; builds both themes. |
| `preview.css` | Geometry and light colors. |
| `dark.css` | Dark color overrides. |
| `export.js` | In-browser lossless PNG export. |
| `notebook-sketch.png` | Notebook illustration used in the design memo. |
| `icons.json` | The 15 Lucide icon definitions used by the preview. |
| `LICENSE.lucide` | Lucide and Feather copyright notices and licenses. |

The builder reads the official lockup from `../../assets/brand/lockup-small.svg`.
The icon definitions were copied from `lucide-react` 1.34.0 without changing their
geometry; the build includes their license notices in each generated HTML file.
The notebook illustration was extracted from the approved generated mockup.

Keep tag and Save backgrounds opaque and uniform. The notebook illustration is
the only raster content inside the app frame. After edits, export and inspect both
themes, checking the content, layout, logo, icons, and flat control fills before
replacing the published PNGs.
