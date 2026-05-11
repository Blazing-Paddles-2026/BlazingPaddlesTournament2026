# Blazing Paddles Pickleball Tournament 2026

Static landing site for the 2026 Round Rock Fire Foundation pickleball tournament.

## Files

- `index.html` — single-page site (Home, Event, Players, Sponsor, Raffle, Volunteer, Location, Register, FAQ).
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
| Sponsor levels      | "Sponsor" section — `$500 / $1,000 / $2,500 / $5,000` context      |
| Raffle details      | "Raffle" section — prize goals, ticket rules, and drawings         |
| TBD copy            | Final bracket start times, entry fee, registration link            |
| Registration link   | Registration opens June 1 — add the official URL when it is live. |

JSON-LD `SportsEvent` schema is in the `<head>` — keep `startDate` / `endDate` / `location` in sync with the visible copy.

## Notes & assumptions

- Public registration opens June 1. The site should not display a “Register Now” CTA or team list until the official registration URL and team details are ready.
- Financial goals from the committee dashboard should not appear on the public tournament page.
- Final bracket start times, entry fee, sponsor form/donation URL, EIN/tax language, and public registration link are still open items; do not invent them.
- Sponsor, volunteer, and raffle CTAs use prefilled `mailto:info@roundrockfirefoundation.org` links because no confirmed public form or registration URL was supplied.
- "Learn more" sponsor link points to `https://www.roundrockfirefoundation.org/pickleballsponsor` and the general pickleball page to `https://www.roundrockfirefoundation.org/pickleball`.
- The old November 14 language in internal outreach scripts should not be used on the public site; the public date is Saturday, October 10, 2026.

## Quality

- No console errors on load (verified with Playwright).
- Anchor navigation, sticky header scroll-state, theme toggle, and mobile menu all functional.
- Responsive at 1280px, 1024px, 760px, and 390px.
- Light + dark themes both verified.
- JSON-LD `SportsEvent` schema, Open Graph, and Twitter Card meta included.
- Custom inline SVG brand mark + SVG paddle/flame favicon.
- Accessible: skip link, aria-labels, semantic landmarks, `prefers-reduced-motion` respected, WCAG-AA contrast on body and CTAs.
