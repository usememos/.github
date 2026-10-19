# Brand previews

Editable source for `assets/previews/timeline-light.png` and `timeline-dark.png`.
Both themes share the same layout, memo content, official lockup, and Lucide icons.
The celadon social card exports to `assets/previews/social-preview.png`.

## Social preview

From the repository root:

```sh
node tools/preview/build-social.mjs
```

Open `tools/preview/dist/social-preview.html` and click **Download PNG**, then copy the downloaded `social-preview.png` into `assets/previews/`. The page is self-contained and works without a server. It exports exactly 1280 × 640 pixels, independent of the displayed preview size or device pixel ratio. The PNG is ready to upload as a repository's social preview in GitHub settings.

`build-social.mjs` defines the flat celadon background (`#c8dfd5`), dark ink (`#25363e`), and brand-first layout. The lockup has an 820 px canvas width; the smaller 48 px headline sits on one line below it. Their visible left edges align, and the group is centered on the card. It reads the Headline copy cell from `BRAND.md` and embeds `assets/brand/lockup.svg`, preserving its official paths, viewBox, padding, and proportions. Only the headline uses live text (Arial, with Helvetica and sans-serif fallbacks); its rasterization can vary by operating system. No font or image service is required.

The builder also writes `dist/social-preview.svg` for vector inspection. Both generated sources in `dist/` are ignored by Git. Export through **Download PNG** for the published asset; browser screenshots may be lossy. Inspect the PNG at full size and at a small sharing size before replacing it.

## Timeline build and export

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
| `icons.json` | The 16 Lucide icon definitions used by the preview. |
| `LICENSE.lucide` | Lucide and Feather copyright notices and licenses. |

The builder reads the official lockup from `../../assets/brand/lockup.svg`.
The same outlines and proportions are used at every size. The preview sets its
width to 145 px and lets its height follow the SVG aspect ratio.
The icon definitions were copied from `lucide-react` 1.34.0 without changing their
geometry; the build includes their license notices in each generated HTML file.
The notebook illustration was extracted from the approved generated mockup.

Keep tag and Save backgrounds opaque and uniform. The notebook illustration is
the only raster content inside the app frame. After edits, export and inspect both
themes, checking the content, layout, logo, icons, and flat control fills before
replacing the published PNGs.
