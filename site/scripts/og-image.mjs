// Renders the social share image (public/og-image.png, 1200×630) with headless Chromium.
// Run: npm run og-image   (set CHROMIUM_PATH if Chromium isn't found automatically)
//
// Instagram and some other apps crop link previews to a square from the centre, so the
// logo and tagline stay inside the middle 600×600.
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright-core";

const publicDir = new URL("../public/", import.meta.url);
const logo = await readFile(new URL("logo-lockup-on-light.png", publicDir));
// Font embedded from @fontsource so the render doesn't depend on fetching Google Fonts
const font = await readFile(
  new URL("../node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2", import.meta.url),
);

// No vector logo exists yet (see project/_ds/.../readme.md), so this uses the 610×130 PNG
// lockup, drawn at or below its native size so it stays sharp. Swap in an SVG when available.
const html = `<!doctype html>
<html>
  <head>
    <style>
      @font-face {
        font-family: "IBM Plex Mono"; font-weight: 500;
        src: url(data:font/woff2;base64,${font.toString("base64")}) format("woff2");
      }
      html, body { margin: 0; width: 1200px; height: 630px; }
      body {
        background: #f1f5f8; /* --ink-50, the site background */
        display: flex; flex-direction: column; align-items: center; justify-content: center;
        gap: 36px;
      }
      img { width: 540px; height: auto; display: block; }
      p {
        margin: 0;
        font: 500 26px/1 "IBM Plex Mono", monospace;
        letter-spacing: 0.14em; text-transform: uppercase;
        color: #56697c; /* --ink-500 */
      }
    </style>
  </head>
  <body>
    <img src="data:image/png;base64,${logo.toString("base64")}" alt="" />
    <p>Fraud Management Agency</p>
  </body>
</html>`;

const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH || undefined,
});
try {
  const page = await browser.newPage({ viewport: { width: 1200, height: 630 }, deviceScaleFactor: 1 });
  await page.setContent(html);
  const fontLoaded = await page.evaluate(async () => (await document.fonts.load('500 26px "IBM Plex Mono"')).length > 0);
  if (!fontLoaded) throw new Error("IBM Plex Mono failed to load");
  const out = fileURLToPath(new URL("og-image.png", publicDir));
  await page.screenshot({ path: out, type: "png" });
  console.log(`Wrote ${out}`);
} finally {
  await browser.close();
}
