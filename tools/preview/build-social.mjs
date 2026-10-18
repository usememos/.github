import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const dir = path.dirname(fileURLToPath(import.meta.url));
const brand = await fs.readFile(path.resolve(dir, "../../BRAND.md"), "utf8");
const tagline = brand.match(/^\| Tagline \| (.+?) \|/m)?.[1];
if (!tagline) throw new Error("The canonical tagline is missing from BRAND.md.");
const lines = tagline.match(/[^.!?]+[.!?]/g)?.map((line) => line.trim());
if (lines?.length !== 2 || lines.join(" ") !== tagline) {
  throw new Error("The social preview expects a two-sentence tagline.");
}
const escapeXml = (value) => value.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");

// Keep the official paths, viewBox, padding, and alignment together. Only the
// outer placement and uniform scale change; the wordmark is never typeset.
const source = await fs.readFile(path.resolve(dir, "../../assets/brand/lockup.svg"), "utf8");
const [, , , sourceWidth, sourceHeight] = source.match(/viewBox="([\d.]+) ([\d.]+) ([\d.]+) ([\d.]+)"/);
const lockupWidth = 900;
const lockupHeight = (lockupWidth * Number(sourceHeight)) / Number(sourceWidth);
const lockup = source.replace(/<svg\b[^>]*>/, (tag) =>
  tag
    .replace(/width="[^"]+"/, `width="${lockupWidth}"`)
    .replace(/height="[^"]+"/, `height="${lockupHeight}"`)
    .replace("<svg ", '<svg x="51" y="101" '),
);

// Fixed geometry follows the selected celadon concept. Text remains editable;
// the background is a flat fill, with no generated texture or raster artwork.
const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="640" viewBox="0 0 1280 640" color="#25363e" role="img" aria-labelledby="social-title">
  <title id="social-title">Memos — ${escapeXml(tagline)}</title>
  <rect width="1280" height="640" fill="#c8dfd5"/>
  ${lockup.trim()}
  <text fill="currentColor" font-family="Arial, Helvetica, sans-serif" font-size="84" font-weight="400" letter-spacing="-0.5"><tspan x="80" y="424">${escapeXml(lines[0])}</tspan><tspan x="80" y="510">${escapeXml(lines[1])}</tspan></text>
</svg>\n`;
const imageUrl = `data:image/svg+xml;base64,${Buffer.from(svg).toString("base64")}`;
const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Memos social preview</title>
  <style>
    :root { color-scheme: light; font-family: Arial, Helvetica, sans-serif; color: #25363e; background: #f3f1ed; }
    body { margin: 0; padding: 24px; }
    main { max-width: 1280px; margin: 0 auto; }
    img { display: block; width: 100%; height: auto; }
    .controls { display: flex; flex-wrap: wrap; gap: 16px; align-items: center; margin-top: 20px; }
    a { display: inline-block; padding: 12px 18px; border-radius: 6px; color: #fff; background: #25363e; text-decoration: none; }
    a:focus-visible { outline: 3px solid #477fa8; outline-offset: 3px; }
    a[aria-disabled="true"] { opacity: .6; pointer-events: none; }
    p { margin: 0; font-size: 14px; }
    @media (max-width: 600px) { body { padding: 12px; } }
  </style>
</head>
<body>
  <main>
    <img id="preview" src="${imageUrl}" width="1280" height="640" alt="Memos. ${escapeXml(tagline)}">
    <div class="controls">
      <a id="export-png" download="social-preview.png" aria-disabled="true">Download PNG</a>
      <p id="status" role="status">Preparing PNG…</p>
    </div>
  </main>
  <script>
    (async () => {
      const status = document.querySelector("#status");
      try {
        const image = document.querySelector("#preview");
        await image.decode();
        const canvas = document.createElement("canvas");
        canvas.width = 1280;
        canvas.height = 640;
        const context = canvas.getContext("2d");
        if (!context) throw new Error("Canvas rendering is unavailable.");
        context.drawImage(image, 0, 0, 1280, 640);
        const link = document.querySelector("#export-png");
        link.href = canvas.toDataURL("image/png");
        link.removeAttribute("aria-disabled");
        status.textContent = "1280 × 640 · PNG ready";
      } catch (error) {
        status.textContent = "Export failed: " + error.message;
        console.error(error);
      }
    })();
  </script>
</body>
</html>\n`;

await fs.mkdir(path.join(dir, "dist"), { recursive: true });
await fs.writeFile(path.join(dir, "dist/social-preview.svg"), svg);
await fs.writeFile(path.join(dir, "dist/social-preview.html"), html);
process.stdout.write("Built social-preview.html and social-preview.svg (1280 × 640) with the official SVG lockup.\n");
