import type { APIRoute } from "astro";

// Every .astro page under src/pages is listed, so new pages show up without editing this file.
const pages = Object.keys(import.meta.glob("./**/*.astro"));

const toPath = (file: string) =>
  file
    .replace(/^\.\//, "/")
    .replace(/\.astro$/, "")
    .replace(/\/index$/, "/");

export const GET: APIRoute = ({ site }) => {
  const urls = pages
    .filter((file) => !file.includes("["))
    .map(toPath)
    .sort()
    .map((path) => `  <url><loc>${new URL(path, site).href}</loc></url>`)
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls}
</urlset>
`;

  return new Response(body, { headers: { "Content-Type": "application/xml; charset=utf-8" } });
};
