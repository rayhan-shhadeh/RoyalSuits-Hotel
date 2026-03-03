# Royal Suites Hotel Website (Bilingual EN/AR)

Luxury static website for **RoYal Suites Hotel** in Nablus, Palestine.

## Stack
- Plain HTML, CSS, and JavaScript (no build step)
- Google Fonts
- Google Maps embed

## Quick Start (Local)
1. Open terminal in the project root.
2. Run:
   ```bash
   python3 -m http.server 4173
   ```
3. Open `http://localhost:4173`.

## Project Structure
- `index.html` — Home page
- `rooms.html` — Rooms, package cards, comparison table
- `dining.html` — Restaurant and rooftop sections
- `facilities.html` — Facilities grid
- `about.html` — Story, mission, score highlights
- `gallery.html` — Filterable gallery + lightbox
- `contact.html` — Contact form + map
- `book.html` — Booking form + confirmation reference
- `404.html` — Branded not-found page
- `styles.css` — Design system and components
- `app.js` — Language toggle (RTL/LTR), forms, gallery, cookie, reveal animations

## Language Toggle
- Toggle button stores language in `localStorage` key `lang`
- Auto-updates document attributes:
  - English: `<html lang="en" dir="ltr">`
  - Arabic: `<html lang="ar" dir="rtl">`

## Deployment on Vercel
1. Push this repo to GitHub.
2. Go to Vercel → **Add New Project**.
3. Import the repository.
4. Framework preset: **Other** (static).
5. Build command: *(leave empty)*.
6. Output directory: *(leave empty / root)*.
7. Deploy.

### Optional Domain
- In Vercel Project Settings → Domains, add your custom domain.

## Notes
- Replace placeholder phone/email in `contact.html`.
- Replace Unsplash placeholders with licensed hotel photography/webp assets.
