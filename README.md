# Sigma Phi Delta (ΣΦΔ) — Psi Chapter Website

A React + TypeScript (Vite) single-page site for the University of Delaware’s ΣΦΔ (Psi Chapter). It uses a light hash-router, responsive cards, custom “side-gutter” stripes, and an image-backed hero. Pages include: Home, Rush, Philanthropy, UDance, Highlights, and Brothers.

---

## Features

* Hash-based navigation (no external router)
* Responsive hero with overlay + call-to-action buttons
* Reusable “event card” layout with image on the right
* Brothers grid with role badges and class year
* UDance section with 3×3 photo collage + chapter total
* Highlights section for member accomplishments
* Custom bullet styles (`.bulletdash`, `.bulletdot`, `.bulletarrow`, `.bulletsquare`, `.bulletcaret`)
* Decorative diagonal background stripes on page + side gutters
* Instagram feed component (simple grid)
* Accessible keyboard nav for brand button, focus rings on links/buttons
* Pure CSS theming via variables (`:root`) for colors, radii, shadows

## Tech Stack

* Frontend: React, TypeScript, Vite
* Styling: Hand-rolled CSS with CSS variables (no framework)
* Assets: Local images in `/src/assets/**` and `/public/**`

---

## Setup

```bash
npm install
npm run dev
```

* Opens at: [http://localhost:5173](http://localhost:5173)

---

## Build

```bash
npm run build
npm run preview
```

---

## Project Structure (high level)

```
src/
  App.tsx                 # Hash router + page shell
  App.css                 # Theme variables, layout, stripes, components
  components/InstagramFeed.tsx
  assets/
    logos/                # spd-logo.png, ud-logo.svg
    brother-pics/         # profile photos (e.g., tom-ingenito.jpg)
    rush-pics/            # classroom.jpg, westmain.jpg, grottos.jpg
    phila-pics/           # icecream.jpg, pumpkin.jpg
    general-pics/         # e.g., spd-flag.jpg (Contact image)
public/
  insta3.jpg              # Hero background (served from /insta3.jpg)
```

---

## Pages & Content

* **Home**
  Hero title + subtitle, CTA buttons. About section with two cards. “Latest Event” split card with image on the right. Instagram grid. Contact split card with image.

* **Rush**
  Stack of event cards with dates, description, and event image.

* **Philanthropy**
  Upcoming philanthropy events (card layout reused).

* **UDance**
  What UDance is, Who we raise for, Why it matters, ΣΦΔ’s role, last year’s total, and a 3×3 collage.

* **Highlights**
  Accomplishments by brothers (each highlight uses the event card layout).

* **Brothers**
  Responsive grid with photo, name, role badge, and class year.

---

## Notes

* Static site (no backend). All content is authored in code.
* Keep image sizes reasonable and compressed for performance.
* If you change filenames in `public/`, update any hard-coded URLs (e.g., hero).
* The diagonal background uses `background-attachment: fixed`—disable on very old/low-power devices if needed.

---

## License

Internal chapter project. If you intend to open-source, contact me via email - ethfass74@gmail.com.
