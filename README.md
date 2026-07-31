# Meghana Koduru — Portfolio

A single-page portfolio site for a Data Analyst. Dark theme, scroll-triggered
animations, and a subtle data-viz motif (chart-paper hero backdrop, animated bar
chart in About).

**Stack:** [React 18](https://react.dev) · [Vite 5](https://vite.dev) ·
[Tailwind CSS 3](https://tailwindcss.com) · [Framer Motion](https://www.framer.com/motion/)

## Project structure

```
├── index.html                  # Entry HTML (fonts, dark theme class)
├── public/
│   └── Meghana_Koduru_Resume.pdf   # Served as-is; linked by "Download Resume"
└── src/
    ├── assets/profile.jpg      # Headshot used in the hero avatar
    ├── data/resume.js          # ALL site content lives here — edit copy in one place
    ├── components/
    │   ├── Navbar.jsx          # Fixed nav, smooth-scroll links
    │   ├── Hero.jsx            # Name/tagline/CTAs, gradient-ring avatar
    │   ├── About.jsx           # Bio + animated bar-chart motif
    │   ├── Experience.jsx      # Reverse-chronological timeline
    │   ├── Projects.jsx        # Card grid with tech tags
    │   ├── Skills.jsx          # Skills grouped by category
    │   ├── Education.jsx       # Degrees, schools, dates, GPA
    │   ├── Contact.jsx         # mailto CTA + GitHub/LinkedIn
    │   ├── Footer.jsx
    │   └── Section.jsx         # Shared section shell + scroll-reveal wrapper
    ├── App.jsx
    ├── main.jsx
    └── index.css               # Tailwind layers + shared component classes
```

## Run locally

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install
npm run dev
```

Then open http://localhost:5173.

## Build for production

```bash
npm run build
```

Outputs a static site to `dist/`. Preview it locally with `npm run preview`.

## Deploy

The site is fully static — no backend, no environment variables.

**GitHub Pages (current setup):** the site is published from the `gh-pages` branch to
<https://meghanakoduru.github.io/aboutme/>. After making changes, redeploy with:

```bash
npm run deploy
```

That builds the site and pushes `dist/` to `gh-pages` (see `scripts/deploy.sh`).
The `base` option in `vite.config.js` must match the repo name.

**Vercel / Netlify (alternative):** import the repo at vercel.com or netlify.com —
both auto-detect Vite (build `npm run build`, output `dist`). If you switch, change
`base` in `vite.config.js` back to `'/'`.

## Updating content

Everything the site displays — bio, jobs, projects, skills, education, links — lives
in [`src/data/resume.js`](src/data/resume.js). Components only render that
data, so copy edits never require touching JSX. To swap the resume PDF, replace
`public/Meghana_Koduru_Resume.pdf` (keep the filename, or update `resumeFile` in
`resume.js`). To swap the headshot, replace `src/assets/profile.jpg`.
