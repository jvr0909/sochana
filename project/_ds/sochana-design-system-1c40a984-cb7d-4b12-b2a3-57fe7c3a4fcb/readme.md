# Sochana Design System

Sochana is a B2B fraud consultancy. It helps businesses **detect, investigate and prevent fraud**: finding where money is lost, strengthening controls and detection systems, and responding fast when incidents happen — without slowing down legitimate customers.

Brand idea (from the logo sheet): **TRACE — "Following the money, hop by hop."** The mark is an S drawn as an orthogonal path with nodes: a hollow ring where the trail starts, ink joints at each hop, and a solid teal node where the money lands.

## Sources
- `uploads/Sochana Logo.pdf` — 4-page logo exploration sheet (01 The Outlier, 02 Trace, 03 Reticle, 04 Two Halves). **Only 02 · TRACE is used**, per the brief. Page images extracted to `scratch/page1-4.jpg`.
- No codebase, Figma, website, decks or font files were provided. UI kits are therefore *composed* from the brand, not recreated from a live product.

## Surfaces
- **Marketing website** (`ui_kits/website/`) — services, approach, contact / incident intake.
- **Client portal** (`ui_kits/portal/`) — proposed surface for clients to follow cases, losses and controls.

---

## Content fundamentals
- **Voice:** a calm senior investigator. Direct, specific, unexcited. Confidence comes from numbers and plain verbs, not adjectives.
- **Person:** "we" (Sochana) and "you" (the client). Never "I". Never "our solution".
- **Casing:** sentence case for headings, buttons and nav ("Book a loss diagnostic"). ALL CAPS only in tracked mono eyebrows/labels ("02 · APPROACH", "FRAUD CONSULTING").
- **Numbering:** sections and steps are numbered like the logo sheet — `01 · Detect`, `02 · Trace`. The middle dot `·` is the house separator.
- **Numbers:** always concrete and in mono: "$412,800", "38h", "within 30 minutes". Prefer a figure to a claim.
- **Verbs first on actions:** "Report an incident", "Request a call back", "Export". No "Click here", no "Learn more →" as a headline.
- **Tone on incidents:** reassuring and procedural — "Call us now. Paperwork later." / "An investigator will call you back within 30 minutes."
- **Avoid:** fear-mongering ("hackers are coming"), hype ("revolutionary AI"), jargon without a definition, exclamation marks, emoji.
- Examples: "Find where fraud is costing you. Stop it without stopping customers." · "Follow the money, hop by hop." · "Refund abuse accounted for 61% of confirmed losses."

## Visual foundations
- **Color:** navy ink (`--ink-900 #111a24`) is the brand ground; light surfaces are cool off-white (`--ink-50 #f1f5f8`) and white. **Teal (`--teal-500 #3bc6a7`) is the only accent** — it marks the end of a trace: the active step, the key CTA on dark, a selected state, the peak bar. Use it sparingly (≈5% of any view). Red/amber/blue exist only for risk and status.
- **Type:** monospace grotesque for identity — wordmark, display headlines, eyebrows, IDs, figures (IBM Plex Mono). Humanist sans for reading (IBM Plex Sans). Wordmark tracking 0.18em; eyebrows 0.14em uppercase; display slightly negative.
- **Backgrounds:** flat solid fields — ink bands for hero, CTA, footer, sidebar; off-white for content. No gradients, no photos by default, no textures. Section rhythm alternates ink / off-white / white bands, like the logo sheet's split panels.
- **Motif:** the trace — 2px orthogonal lines with round nodes (hollow start, solid ink hops, teal end). Used in `TraceSteps` for processes and timelines. Never curves or diagonals. Don't use the S mark itself as decoration.
- **Corners:** small and squared-off: 4px badges, 6px controls, 10px cards/dialogs, 22% on the app tile. Pills only for filter tags.
- **Borders & cards:** 1px hairline (`--border-subtle`) on white, 10px radius, no shadow at rest. Interactive cards darken the border and gain `--shadow-2` on hover. Inverse cards: ink-850 fill + ink-700 hairline.
- **Shadows:** hairline-first system. Real elevation (`--shadow-3`) only for dialogs, toasts, menus.
- **Hover:** darken/lighten one step (ink-900→ink-800; teal-500→teal-400); ghost items get an ink-100 fill; nav text brightens to ink-100. **Press:** one step darker again, no scale/shrink.
- **Focus:** 2px white + 2px teal ring (`--shadow-focus`); inputs get ink border + teal-100 halo.
- **Motion:** short and functional — 120ms hover, 180ms tabs/switches, 320ms dialogs; `cubic-bezier(.2,0,0,1)`. No bounce, no parallax. A trace may "draw" left-to-right once on reveal.
- **Transparency/blur:** only the dialog scrim (`rgba(10,17,24,.62)`). No glassmorphism.
- **Imagery:** none supplied. If used: cool, desaturated, documentary (desks, ledgers, screens), never stock hackers-in-hoodies. Prefer data (charts, tables) to photos.
- **Layout:** 1200px max container, 24px gutter, generous vertical bands (72–96px). Sticky ink header on the site; fixed ink sidebar in the portal. Tables are the primary data surface — mono figures, right-aligned, tabular numerals.

## Iconography
- **Lucide** (CDN, `lucide@0.460.0`), 2px stroke, round caps/joins — matches the mark's rounded 2-weight line. Rendered through the `Icon` component (needs `window.lucide`). **Substitution:** no icon set was provided; Lucide was chosen as the closest match.
- Sizes: 14 inline, 15–16 in buttons, 18 default, 20 in feature tiles (inside a 40px ink-100 square, 8px radius).
- Colour: `currentColor` — ink on light, ink-100/ink-300 on dark, teal only for an active or emphasised icon.
- No emoji. Unicode only for `·` (separator), `▲ ▼` (deltas), `×` (dismiss), `→` sparingly in copy.
- Logos: `assets/logo-lockup-on-dark.png` (with FRAUD CONSULTING), `assets/logo-lockup-on-light.png`, `assets/logo-mark-on-{light,dark}.png` (transparent, keyed from the sheet), `assets/app-icon.png`, `assets/app-icon-small.png`. Raster only — **request vector (SVG) originals.**

---

## Index
- `styles.css` — entry point (imports only)
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand)
- `assets/` — logo PNGs + app icon
- `components/` — React primitives (below), one card per folder
- `ui_kits/website/`, `ui_kits/portal/` — click-through screens
- `thumbnail.html`, `SKILL.md`

### Components
- **core/**: Button, IconButton, Icon, Logo, Card, Badge, Tag, Stat, TraceSteps
- **forms/**: Input, Select, Checkbox, Radio, Switch
- **navigation/**: Tabs
- **feedback/**: Dialog, Toast, Tooltip

No source component inventory existed, so this is a standard set sized to a consultancy site + client portal.

### Intentional additions
- **Icon** — wrapper for Lucide so icons render consistently.
- **Logo** — serves the extracted raster logo files by surface.
- **TraceSteps** — the TRACE motif as a reusable step/timeline.
- **Stat** — headline figures are central to the brand voice.

### Font substitution
No font files supplied. IBM Plex Mono + IBM Plex Sans loaded from Google Fonts as the nearest match to the logo sheet. Replace with licensed files if the wordmark uses a different face.
