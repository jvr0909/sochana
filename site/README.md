# Sochana website

A one-page Astro site. It's built from the Claude Design handoff in `../project/`.

## Run it

```bash
npm install
npm run dev       # http://localhost:4321, reloads when you save
npm run build     # static site in dist/, ready for any host
npm run preview   # serve the built dist/ locally
npm run check     # type-check
```

## Where things are

```
src/
  content.ts              all copy and sample figures: edit wording here
  pages/index.astro       the page: lists the sections in order
  layouts/Layout.astro    <head>, fonts, global CSS
  styles/global.css       design tokens (colours, fonts) + shared .wrap / .eyebrow
  components/
    Header, Hero, BookingCard, Tiles, Services, ServiceCard,
    HowItWorks, BuiltFor, Contact, BookingForm, Footer, SectionIntro
    tiles/                the three animated tiles (Assess, Prevent, Respond)
    ui/                   design-system pieces: Button, Badge, Field, TraceSteps, Aurora
public/                   logo and app icon
```

Each component keeps its own styles in a `<style>` block. Those styles only apply to that component.

## Booking form

To have submissions delivered, create `.env` with a form service URL (for example Formspree):

```
PUBLIC_FORM_ENDPOINT=https://formspree.io/f/xxxxxxx
```

Without it, submitting only shows the confirmation message. No request is sent.
