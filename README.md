# NexusForge — Swarm AI Engine

Cinematic single-page marketing site for **NexusForge** and its flagship
product, the **Swarm AI Engine**. Built as a scroll-driven experience with a
persistent 3D particle background, GSAP-pinned storytelling, and animated
data visualizations pulled from the product architecture briefing.

This is a standalone marketing site — it does not call the live Swarm AI
Engine backend. It's meant to sit at its own domain/subdomain, separate from
the product dashboard.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** — design tokens for the dark/violet palette
- **Framer Motion** — scroll-triggered reveals, stagger animations
- **GSAP + ScrollTrigger** — pinned scroll storytelling (Pipeline section)
- **Lenis** — smooth inertia scrolling
- **React Three Fiber + drei + Three.js** — the persistent 3D swarm
  background

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
app/
├── layout.tsx        Root layout, font loading
├── page.tsx           Assembles all sections
└── globals.css        Design tokens, glassmorphism, cursor, scroll bar

components/
├── SwarmCanvas.tsx     Persistent 3D particle-swarm background (R3F)
├── ScrollProgress.tsx  Top scroll-progress indicator
├── CustomCursor.tsx    Desktop glow cursor
└── sections/           One component per page section, in scroll order:
    Hero → ReliabilityCrisis → Benchmarks → ModuleDivider
    → Pipeline → JudgeNode → FidelityChart → Diversity
    → Pillars → ComparisonTable → Founder → Closing

lib/
└── useLenis.ts         Smooth-scroll hook, synced with GSAP ScrollTrigger
```

## Editing content

Section copy and data live directly inside each file in
`components/sections/` — e.g. benchmark numbers in `Benchmarks.tsx`,
pipeline steps in `Pipeline.tsx`, comparison table rows in
`ComparisonTable.tsx`. There's no CMS; edit the arrays/objects at the top of
each file.

## Deployment

Deployed on Vercel. Pushing to the connected branch triggers an automatic
build — no environment variables are required for this site since it makes
no backend calls.

## Notes

- The 3D canvas is loaded with `next/dynamic` and `ssr: false` since it
  needs `window`/WebGL, which don't exist during server rendering.
- Reduced-motion preferences are respected globally in `globals.css`.
- The custom cursor auto-hides on touch devices.
