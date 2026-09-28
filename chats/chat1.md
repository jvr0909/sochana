# Sochana fraud consultancy website

_Started 2026-09-28 01:51 UTC_

---

## User

Make UI mockups for my new fraud consultancy website, Sochana.

About Sochana:
Sochana is a B2B fraud consultancy that helps businesses detect, investigate, and prevent fraud. We find where clients are losing money to fraud, strengthen their controls and detection systems, and help them respond fast when incidents happen, without slowing down legitimate customers.

Brand:
- Logo: "Trace", an S drawn as a path running through connected nodes, ending in a teal endpoint
- Colors: dark navy as the primary background, teal as the accent (buttons, highlights, key data points), white/light gray for text
- Feel: sharp, trustworthy, investigative, quietly confident. Think security firm meets modern analytics tool, not flashy startup
- Visual motif: node-and-path lines (echoing the logo) used sparingly as background detail or section dividers

Screens to design:
1. Home / landing page: hero with a clear one-line value proposition and "Book a consultation" CTA, short services overview, how we work (3–4 steps), trust signals (results, industries served), final CTA
2. Services page: fraud risk assessments, detection and controls, incident response, ongoing advisory
3. About page: who we are and why clients trust us
4. Contact / book a consultation page: short form (name, company, role, fraud concern, message)

Audience: [founders, heads of risk, and operations leads at fintechs, e-commerce companies, and marketplaces]

Requirements:
- Desktop and mobile versions of the home page
- Clean typography, generous whitespace, strong visual hierarchy
- Real, plausible copy rather than lorem ipsum
- Accessible contrast for text on navy



Use https://www.designjoy.co/ as a template. I love clean UIs. Clean images and stuff

## Assistant

_[tool: list_files]_

_[tool: read_skill_prompt]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: list_files]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: read_file]_

_[tool: copy_starter_component]_

_[tool: copy_files]_

_[tool: view_image]_

_[tool: read_file]_

_[tool: tool_search_tool_bm25]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: show_html]_

_[tool: read_file]_

_[tool: dc_html_str_replace]_

Now the remaining pages.

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

I've built five screens on the Sochana design system: home on desktop (1440px) and mobile (390px), plus services, about and contact. They're laid out side by side in **Sochana Website.dc.html**. Each page is also its own file, and the header, buttons and footer link between them. A final check is still running.

- **Designjoy influence:** I took the general approach (a big centred headline, a row of cards under the hero that runs into the next section, lots of white space) without copying their layout or visual details.
- **Hero cards:** two of the three cards under the headline are mock data (a chart of losses by fraud type and an incident timeline), not photos. That keeps the page clean and shows your work rather than describing it.
- **Photos:** all photos are empty placeholders labelled with the kind of shot they need. You can drag your own images straight onto them.
- **Contact form:** it works in the mockup. You can pick a fraud concern, and submitting shows a confirmation message.
- **Text on navy:** body text uses the lighter greys only, so it stays readable against the dark background.

**Please check before using:** all figures, the testimonial, the team names and bios, and the phone number are invented placeholders. Replace them with real ones, or remove them, before anything goes live.

## User

Found issues — fixing…

## Assistant

_[tool: dc_html_str_replace]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I've fixed the three issues from the review; a final check is running now.
- **Footer logo:** it no longer stretches across the footer, on every page.
- **Contact form:** the two-field rows now fit inside the card, so "Work email" stays inside the card and the Role dropdown no longer cuts off its text.
- **"Active incident?" label:** it now fits its text instead of spanning the whole box.

## User

Not the biggest fan of the hero. I would rather have something like this. Also I dont like the How the background colors mismatch. Could we just do one consient color. Then the images can have like animations with colors

## Assistant

_[tool: copy_files]_

_[tool: dc_write]_

_[tool: show_html]_

_[tool: dc_html_str_replace]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

I've made a new desktop home page, **Home v2** (2a). It sits at the top of the overview, and the original is still there below it. A final check is running.

- **Hero:** a big headline on the left, with a teal dot as full stop. On the right is a navy card with slowly drifting teal and blue colour. It holds the "Book a consultation" button, a small tilted card showing a dollar figure, and an incident call line.
- **One background:** the whole page is now off-white, with no more navy bands. The only strong colour is inside the animated tiles.
- **Three animated tiles:** each sits under the big "Follow the money" headline and shows one service:
  - **01 · Assess:** a breakdown of losses by fraud type.
  - **02 · Prevent:** rows of fraud-type tags scrolling past the Sochana app icon.
  - **03 · Respond:** an incident timeline.
- **More colour:** the testimonial and the final call to action use the same moving colour. The rest of the page is white cards on the off-white background.

The animation stops for visitors whose device is set to reduce motion. The design system says no gradients, so this breaks its rules, but only inside the tiles, as you asked.

Next, I can apply this style to the mobile home page and to the services, about and contact pages. Say if you'd like that.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I've fixed both problems on Home v2; a final check is running.
- **Text on the colour:** in the hero card, the testimonial and the final call to action, the bright teal and blue now stay at the top edges and corners. Only dark navy and dark teal sit behind the text, so the text stays readable as the colour moves.
- **Hero card top row:** the tilted "Recoverable / yr" card is now pinned to the top-right corner, so the dollar figure is no longer cut off at narrower widths.

## User

Found issues — fixing…

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

"Report an incident" is the emergency route. It's for someone whose business is being hit by fraud right now, like an account takeover or a sudden spike in refunds. They need your 24/7 incident response straight away, not a consultation next week.

Right now the button just goes to the same contact form as "Book a consultation", which isn't right for someone in a hurry. Some options:

1. **Make it call you:** the button dials +44 20 3940 7712 on mobile, and shows the number on desktop.
2. **Give it its own page:** a short urgent form (what's happening, rough losses, a callback number) with the phone number shown large, promising a callback within 30 minutes.
3. **Remove it from the header:** the hero card already shows the incident line, so the header would keep only "Book a consultation".

I'd suggest 1 or 2, because an incident path you can always see builds trust for a fraud firm. Which would you like?

Separately, I moved the small tilted card below the "Taking 3 clients" label so they no longer overlap, and made the hero stack on narrower screens. A final check on that is running.

## User

Nah can you drop the report an incident button and all of that. We dont want that feature

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I've removed the "Report an incident" button and everything tied to it from every page. A final check is running.

- **Buttons:** it's gone from all three home pages (desktop, mobile and Home v2).
- **Emergency phone line:** removed from the footers, the home call-to-action sections and the Contact page, along with the "Active incident?" box.
- **Hero card on Home v2:** the bottom row now reads "Speak to a partner · Reply within one business day" and links to the contact page.
- **Promises:** I removed all mentions of 24/7 cover and 30-minute callbacks.

I kept incident response as one of your four services, now listed as "On demand", and the sample incident timeline tile. Say if you'd like that service removed too.

## User

First launched in 2017, Designjoy revolutionized the design industry with its subscription-based model. To this day, Designjoy is run entirely by Brett. Designjoy doesn’t hire extra designers or outsource work—instead, it focuses on delivering top-notch quality to a limited roster of clients at a time.


This is the best line of the designjoy website. Can we also Follow this. I dont like the "speak with a partner". It want it to be apparent that its me

## Assistant

_[tool: grep]_

_[tool: read_file]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Every page now presents Sochana as run by you alone, with "[Your name]" standing in for your name. A final check is still running.

- **Home v2, new section:** under the three animated tiles there's a card with your portrait and a line written in the spirit of the Designjoy one: "Founded in 2026, Sochana is run entirely by [Your name]. There are no junior analysts and nothing is outsourced…" It ends with a "Book a call with [Your name]" button.
- **Home v2 hero card:** the bottom row now reads "Book a call with [Your name] · Founder · replies personally" in place of "Speak to a partner".
- **About:** I removed the four made-up partners. The headline is now "One investigator. A small number of clients." The bio has gaps for your background: [X] years, [previous companies] and one line on your most relevant experience.
- **Services, Contact and the original home page:** all mentions of "partner" or "senior team" now point to you.

Send me your name and a line or two of background, and I'll fill them in everywhere. I'd also suggest cutting the About page stats ("60+ engagements", "82% come back") because they don't fit a firm founded this year. They, and the other figures, are still invented placeholders.

## User

Hmm I dont want my name out. actually can you find a way to do it.

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

Your name and photo are gone from every page. The site now just says Sochana is run by its founder, and makes the point with numbers. A final check is running.

- **Home v2 founder section:** your portrait is replaced by a navy tile with the brand's line-and-dot motif and three figures: **1** investigator on every engagement, **0** subcontractors or junior analysts, **4** clients at a time, at most. Next to it: "Sochana is run entirely by its founder, a fraud investigator…", with a "Book a call with the founder" button.
- **Home v2 hero card:** it shows the Sochana app icon instead of a photo, with "Talk to the founder directly · No sales team · replies personally".
- **Other pages:** Contact, About and the original home page now say "the founder" throughout. The About photo placeholder now asks for a workspace shot with no faces.

The About bio still has gaps for you: [X] years in fraud across [banking / payments / marketplaces], plus one line on your most relevant experience. Please also check "4 clients at a time" is right.

## User

Should we even say "founder" like. Also everything should be the same color scheme. Also I dont think we need so many tabs. Could we just have a single page. With alll the info there

## Assistant

_[tool: dc_write]_

_[tool: dc_html_str_replace]_

_[tool: ready_for_verification]_

I agree, and I dropped "founder". The site now says "Sochana is run by one fraud investigator", and the booking button says "Book a call". It's clearly one person without a title or a name.

Everything is now one scrolling page, **Sochana.dc.html**. It's at the top of the overview at desktop (3a) and mobile (3b) width. A final check is running.

- **One colour scheme:** the off-white background and white cards run the whole way down. Navy and the moving colour appear only inside the animated tiles.
- **Page order:** hero, then the three animated tiles, About, the four services (each with "what you get"), How it works, Results with the quote, and finally the booking form.
- **Navigation:** the menu links jump to sections of the page. The Book a call button scrolls to the form.
- **Mobile:** the same file rearranges itself to fit narrow screens, so there's no separate mobile page. On mobile the menu links are hidden and only Book a call shows.

The older multi-page designs are still lower down the overview for reference. The About section's figures (1 investigator, 0 subcontractors, 4 clients at a time), the results stats and the quote are still placeholders, so check them before launch.

## User

Drop all the NDA stuff please

## Assistant

_[tool: grep]_

_[tool: run_script]_

_[tool: ready_for_verification]_

I've removed every NDA mention from the single page, in six places. It loads with no errors.

- **Hero card:** "Under NDA" is gone.
- **Booking form:** removed the line "Everything you share is covered by NDA".
- **Confirmation message:** no longer mentions a "standard NDA".
- **"Your data stays yours":** now reads "Read-only access, deleted at close."
- **How it works, step 1:** "Under NDA" is gone.
- **What happens next, step 1:** now "With a few times that suit you."

## User

Could you also minimze the number of pages please

## Assistant

_[tool: delete_file]_

_[tool: dc_write]_

_[tool: ready_for_verification]_

I deleted the old separate pages, so the project now has just two files:
- **Sochana.dc.html**: the website itself, one scrolling page.
- **Sochana Website.dc.html**: the overview, which now shows only that page at desktop and mobile width.

The deleted files were the old home, services, about and contact pages, the shared header and footer, and the photo placeholder they used. They can't be recovered. If by "pages" you meant fewer sections on the single page, tell me which to cut and I'll do that too.

## User

I think the biggest issue people are suffering with is Fraud Disputes

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I've refocused the page on fraud disputes. A final check is running.

- **Hero:** the headline is now "Stop losing money to fraud disputes." Below it: "Chargebacks, friendly fraud and first-party claims, traced to the source and fought with evidence."
- **Three tiles:**
  - **Dispute diagnostic:** shows losses by type, led by friendly fraud at 61%.
  - **Scrolling tags:** now dispute terms, like chargebacks, item not received and representment.
  - **Dispute case timeline:** runs from "Chargeback received" to "$18,400 recovered".
- **Services, now all about disputes:**
  - **Dispute assessment**
  - **Dispute prevention**
  - **Dispute response**
  - **Ongoing advisory**, which now includes a warning before you near the card networks' dispute limit.
- **Results:** the lead figures are now −47% in dispute rate and twice as many disputes won. The quote is about a dispute rate near the card networks' limit.
- **Form:** "Fraud disputes" is the default concern, and the example message is about chargebacks.

All the figures and the quote are still invented, so please replace them with real ones before launch.

## User

can we drop the about section maybe?

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I've removed the About section and its menu link. The page now goes: animated tiles, then Services, How it works, Results and the booking form. It loads with no errors.

This also took out the only line saying Sochana is run by one investigator. A few lines still hint at it: "the same investigator runs it from first call to handover" in Services, and "No sales team, no hand-offs" on the hero card.

## User

drop For fintechs, e-commerce companies and marketplaces.

## Assistant

_[tool: dc_html_str_replace]_

I've removed that line, so the hero text now ends at "…traced to the source and fought with evidence."

## User

also maybe for now we drop the testimonial and the metrics since they are not true yet

## Assistant

_[tool: run_script]_

_[tool: ready_for_verification]_

I've removed the four metrics, the testimonial and the "Results" menu link. The "Built for: Payments · Neobanks · …" line stays, as a small strip just above the booking form. The page loads with no errors.

The mock-ups on the page still show sample figures, like "$1,412,800 recovered / yr" on the hero card and the amounts in the dispute tiles. They read as example screens rather than claims, but I can make them more obviously illustrative or remove them if you'd prefer.

