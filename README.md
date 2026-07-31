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

**Vercel:** `npx vercel` from the project root (or import the repo at vercel.com).
Framework preset: *Vite*. Build command `npm run build`, output directory `dist`.

**Netlify:** `npx netlify deploy --prod` (or import the repo at netlify.com).
Build command `npm run build`, publish directory `dist`.

**GitHub Pages:** build, then push `dist/` with your tool of choice. If serving from a
subpath (e.g. `username.github.io/portfolio`), set `base: '/portfolio/'` in
`vite.config.js` first.

## Updating content

Everything the site displays — bio, jobs, projects, skills, education, links — lives
in [`src/data/resume.js`](src/data/resume.js). Components only render that
data, so copy edits never require touching JSX. To swap the resume PDF, replace
`public/Meghana_Koduru_Resume.pdf` (keep the filename, or update `resumeFile` in
`resume.js`). To swap the headshot, replace `src/assets/profile.jpg`.
