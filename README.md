# Blazing Paddles Pickleball Tournament 2026

Static landing site for the 2026 Round Rock Fire Foundation pickleball tournament.

## Files

- `index.html` — main tournament site (Home, Event, Players, Volunteer, Location, Registration, FAQ).
- `sponsor.html` — dedicated sponsor and raffle-prize donation information page.
- `styles.css` — design system (dark default + light mode).
- `script.js` — sticky header, theme toggle, mobile menu, footer year.
- `assets/images/` — supplied artwork (logo, flyer, reverse flyer).

No build step. Open `index.html` directly or serve with any static host.

## Updating event details

Search and replace these strings in `index.html`:

| What                | Where                                                              |
| ------------------- | ------------------------------------------------------------------ |
| Date                | `Saturday, October 10, 2026` / `2026-10-10` (JSON-LD)              |
| Location name       | `Tejas Pickleball Club`                                            |
| Location            | `Tejas Pickleball Club` / `Georgetown, TX 78626`                   |
| RRFF email          | `info@roundrockfirefoundation.org`                                 |
| RRFF phone          | `(512) 967-1007`                                                   |
| Sponsor levels      | `sponsor.html` only                                                |
| Raffle details      | `sponsor.html` only for prize donations; main page stays general   |
| TBD copy            | Final bracket start times, division splits                         |
| Entry fee           | $55 per player                                                     |
| Registration link   | https://app.fluidpb.com/tournaments/blazing-paddles-pickleball-fundraiser-tournament-2 (FluidPB — live and accepting sign-ups). |

JSON-LD `SportsEvent` schema is in the `<head>` — keep `startDate` / `endDate` / `location` in sync with the visible copy.

## Notes & assumptions

- Public registration is live on FluidPB. All “Register Now” CTAs link to https://app.fluidpb.com/tournaments/blazing-paddles-pickleball-fundraiser-tournament-2. Divisions, entry details, and check-in schedule will be published as they are finalized.
- Financial goals from the committee dashboard should not appear on the public tournament page.
- Sponsor tiers, sponsor-packet details, and raffle-prize donation details belong on `sponsor.html`, not the main public tournament page.
- Raffle prizes can be donated anytime before the tournament.
- Entry fee is confirmed at $55 per player. Registration is live at https://app.fluidpb.com/tournaments/blazing-paddles-pickleball-fundraiser-tournament-2.
- Final bracket start times, division splits, sponsor-packet PDF, and EIN/tax language are still open items; do not invent them.
- Sponsor page and volunteer CTAs use prefilled `mailto:info@roundrockfirefoundation.org` links where a confirmed public form is not supplied.
- Sponsor links point to `https://www.roundrockfirefoundation.org/sponsor` (the unified RRFF sponsor page on the main site).
- The old November 14 language in internal outreach scripts should not be used on the public site; the public date is Saturday, October 10, 2026.

## Quality

- No console errors on load (verified with Playwright).
- Anchor navigation, sticky header scroll-state, theme toggle, and mobile menu all functional.
- Responsive at 1280px, 1024px, 760px, and 390px.
- Light + dark themes both verified.
- JSON-LD `SportsEvent` schema, Open Graph, and Twitter Card meta included.
- Custom inline SVG brand mark + SVG paddle/flame favicon.
- Accessible: skip link, aria-labels, semantic landmarks, `prefers-reduced-motion` respected, WCAG-AA contrast on body and CTAs.
