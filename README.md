# HAVEN — Real Estate, Reimagined

A cinematic, scroll-driven real-estate landing page built with **React 19**, **Vite**, **GSAP** (with ScrollTrigger), **Lenis** smooth scrolling, and **Tailwind CSS 4**.

The experience opens with a loading reveal, runs a pinned hero transition that resolves architectural imagery into the HAVEN monogram, and continues through long-form editorial sections that alternate light and dark surfaces.

---

## Requirements

- **Node.js** `^20.19.0 || >=22.12.0` (required by Vite 8)
- **npm** (ships with Node)

## Getting started

```bash
npm install     # install dependencies
npm run dev     # start dev server at http://localhost:5173
```

## Scripts

| Command           | Description                                                        |
| ----------------- | ------------------------------------------------------------------ |
| `npm run dev`     | Start the Vite dev server with HMR.                                 |
| `npm run build`   | Create an optimized production build in `dist/`.                    |
| `npm run preview` | Serve the production build locally to verify the output.            |
| `npm run lint`    | Run ESLint across the project.                                      |


## Deployment (Vercel)

The app is ready for zero-config Vercel deployment:

- **Framework Preset**: Vite
- **Build Command**: `npm run build`
- **Output Directory**: `dist`
- **SPA Rewrites**: Handled by `vercel.json`

## Project structure

```
├── index.html                 # HTML entry point
├── vite.config.js             # Vite + React + Tailwind plugins
├── eslint.config.js           # Flat ESLint config
├── vercel.json                # Vercel deployment & SPA rewrites configuration
├── DESIGN.md                  # Design system: palette, type, components
├── PRODUCT.md                 # Product brief and scope
├── public/
│   ├── assets/                # Images, video, fonts, and logo SVGs
│   └── favicon.svg
├── scripts/
│   ├── visual-check.mjs       # Playwright visual regression capture
│   └── reference-next-section.mjs  # Reference-site section inspection
└── src/
    ├── main.jsx               # React root
    ├── App.jsx                # Page composition
    ├── styles.css             # Global styles and design tokens
    ├── data/
    │   └── landingData.js     # Data models for services, testimonials, features, posts
    └── components/
        ├── index.js           # Barrel export for all components
        ├── Header.jsx         # Site navigation header
        ├── Hero.jsx           # Pinned hero + monogram mask transition
        ├── LandingSections.jsx# Editorial sections assembly & ScrollTrigger animations
        ├── SmoothScroll.jsx   # Lenis + ScrollTrigger synchronization
        ├── ui/                # Reusable UI primitives
        │   ├── index.js
        │   └── ActionLink.jsx # ActionLink and ArrowIcon components
        └── sections/          # Individual modular sections
            ├── index.js
            ├── WhyHaven.jsx
            ├── IdentitySection.jsx
            ├── RewiredSection.jsx
            ├── AgentsSection.jsx
            ├── TestimonialsSection.jsx
            ├── ServicesSection.jsx
            ├── FeaturesSection.jsx
            ├── BlogSection.jsx
            └── Footer.jsx
```

## How the motion works

- **Smooth scrolling** — `SmoothScroll.jsx` runs [Lenis](https://lenis.darkroom.engineering/) with a restrained `0.085` lerp and drives it from GSAP's ticker, so ScrollTrigger and the scroll position stay in lockstep without changing the scene's scroll distance.
- **Hero transition** — `Hero.jsx` preloads the sky, house, cloud, and smoke layers plus the webfonts before starting. The HAVEN SVG outline draws itself, then becomes a photographic mask while the architecture scales and rises and the smoke plane crosses the frame.
- **Reduced motion** — every animation checks `prefers-reduced-motion: reduce`. When set, the hero renders a stable first frame, the extended scroll track is removed, Lenis is never instantiated, and all content stays fully readable and navigable.

## Accessibility

- Keyboard focus is visible throughout via `:focus-visible` outlines.
- Interactive reveals (such as the service-row image reveals) respond to both `:hover` and `:focus-visible`, so keyboard users get the same treatment as pointer users.
- Controls meet accessible touch sizes, and motion degrades safely when reduced motion is requested.

## Visual QA

`scripts/visual-check.mjs` drives Playwright across desktop (1440×1000) and mobile (390×844), capturing the hero at multiple scroll ratios and every section into `qa/`, then reports console errors, section geometry, scroll/transform motion samples, and any failed images.

```bash
npm run dev                  # in one terminal
node scripts/visual-check.mjs
```

> **Note:** both scripts hardcode a Windows Edge `executablePath`
> (`C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe`). On macOS or Linux,
> remove that `executablePath` line to use Playwright's bundled Chromium, or point it at
> your local browser binary.

## Notes

- `qa/`, `dist/`, `node_modules/`, and reference captures are git-ignored — they are all
  reproducible artifacts, not source.
- Fonts (Instrument Sans, Lora) and imagery are self-hosted in `public/assets/`; the page
  makes no third-party font or asset requests.
