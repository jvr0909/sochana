import { defineConfig } from "astro/config";

// Static output: `npm run build` writes plain HTML/CSS/JS to dist/, which any static host can serve.
// `site` is the production origin; the sitemap and robots.txt build absolute URLs from it.
export default defineConfig({
  site: "https://sochana.com",
});
