# Darshan Mang — Portfolio 2026

> World-class developer portfolio built with React + Vite + TypeScript + Tailwind CSS + Framer Motion + Three.js

## Tech Stack
- **React 19** + **Vite 6** + **TypeScript**
- **Tailwind CSS v4** — utility-first styling
- **Framer Motion** — page transitions, scroll animations, magnetic buttons
- **Three.js / React Three Fiber** — 3D floating objects in hero
- **GSAP** — timeline animations
- **Lucide React** — icons

## Features
- 🎨 Full-screen immersive hero with 3D scene + particle field
- 🌊 Animated gradient mesh background
- 🖱️ Custom magnetic cursor with lag ring
- ✍️ Typewriter role animation
- 🌓 Dark / Light mode toggle with persistence
- 📱 Fully responsive on all devices
- 🤖 Floating AI assistant chatbot
- ⚡ Scroll-triggered reveal animations (staggered)
- 🃏 3D tilt effect on project cards
- 📊 Animated skill progress bars
- 🗺️ Interactive experience timeline
- 📬 Contact form (opens mail with pre-filled message)

## Quick Start

```bash
npm install
npm run dev        # http://localhost:5173
npm run build      # production build → dist/
```

## Deploy to Vercel
```bash
npm i -g vercel
vercel --prod
```

## Folder Structure
```
src/
  components/
    sections/     # Hero, About, Skills, Projects, Experience, Contact
    ui/           # Navbar, Cursor, Footer, AIAssistant
    3d/           # HeroScene (Three.js)
  data/           # All content (projects, skills, experience)
  hooks/          # useMousePosition, useMagneticButton, useTheme, useInView
```

## Customization
All content lives in `src/data/index.ts` — edit your name, bio, projects, skills there.
