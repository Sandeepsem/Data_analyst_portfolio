# Sandeep Semwal: Portfolio

React + TypeScript + Vite + Framer Motion. Two completely different portfolios behind one welcome page.

| Route | What it is | Files |
|---|---|---|
| `#/` | Welcome gateway (speaks the welcome, two doors) | `src/pages/Gateway.tsx`, `src/styles.css` |
| `#/analyst` | **Data Analyst** portfolio: light, clean BI-dashboard look | `src/pages/AnalystSite.tsx`, `src/analyst.css` |
| `#/vibecoder` | **Vibe Coder + Data Analytics with AI + Agentic AI**: dark terminal/neon look | `src/pages/VibeSite.tsx`, `src/vibe.css` |

## Run
```
npm install
npm run dev      # http://localhost:5173
npm run build    # output in dist/
```

## Edit content
All text is in `src/data/content.ts` (bio, skills, experience, projects, AI workflow, agent pipeline).

## Banners
The three banner images are in `public/banners/`. Replace a file with the same name to change it.

## Add your dashboard screenshots
1. Put images in `public/projects/`.
2. In `src/data/content.ts`, change a project's `image` to `'./projects/your-file.webp'`.

## Welcome voice
The gateway speaks `profile.welcome` with the browser's built-in text-to-speech. Browsers block sound until the visitor interacts, so it plays on the first click, tap or key press, or via "Play welcome".

## Contact form
It opens the visitor's email app (mailto). For direct delivery, create a free Formspree form and post to it.

## Deploy
Upload `dist/` to Netlify (drag and drop) or publish with GitHub Pages. Routes use the URL hash, so they work on any static host.

# Data_analyst_portfolio
