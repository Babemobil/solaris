# Solaris Energie — Premium Website

Demo-Projekt für Studio27 Berlin. Award-würdige Website für ein fiktives Unternehmen für erneuerbare Energien.

## Quick Start

```bash
npm install
npm run dev
```

Öffnen: [http://localhost:3000](http://localhost:3000)

## Tech Stack

| Tool | Version | Zweck |
|------|---------|-------|
| Next.js | 16 | Framework, App Router |
| TypeScript | 5 | Typsicherheit |
| Tailwind CSS | v4 | Styling, Design Tokens |
| shadcn/ui | latest | UI Komponenten |
| Framer Motion | 12 | Animationen, Page Transitions |
| Lenis | 1 | Smooth Scrolling |
| Three.js + R3F | 0.184 / 9 | 3D Hero, 404 |
| React Hook Form + Zod | 7 / 4 | Formulare |

## Seitenstruktur

```
/                     Homepage
/loesungen            Lösungsübersicht
  /privat             Photovoltaik Privat
  /gewerbe            Gewerbe & Industrie
  /speicher           Batteriespeicher
  /wind               Windkraft
/projekte             Projektgalerie (filterbar)
/ueber-uns            Story, Mission, Team
/karriere             Stellenangebote + Bewerbung
/wissen               Blog / Wissens-Hub
/faq                  FAQ mit Suche + Kategorien
/kontakt              Kontaktformular
/impressum /datenschutz /agb   Legal (fiktiv)
```

## Content erweitern

- **Projekte** → `src/lib/data/projects.ts` — Objekt ins `projects`-Array
- **Jobs** → `src/lib/data/jobs.ts` — Objekt ins `jobs`-Array
- **Artikel** → `src/lib/data/blog.ts` — Markdown im `content`-Feld
- **FAQs** → `src/lib/data/faqs.ts` — Kategorien: Technik|Förderung|Kosten|Installation|Wartung

## Design Tokens (`src/app/globals.css`)

```css
--solaris-deep:   #0A1F1C   /* Hauptfarbe */
--solaris-forest: #1B3A36   /* Sekundär */
--solaris-leaf:   #4ADE80   /* CTAs, Akzent */
--solaris-sun:    #FCD34D   /* Highlights */
--solaris-mist:   #F0F4F2   /* Heller BG */
```

## Deployment (Vercel)

```bash
npm i -g vercel && vercel --prod
```

Keine Env-Vars für Demo. Für E-Mail: `RESEND_API_KEY` in Vercel setzen.

## Hinweise

- Alle Daten sind fiktiv (Demo-Zweck)
- DE/EN Toggle rein visuell — für echte i18n: `next-intl`
- 3D benötigt WebGL — Fallback auf Mobile aktiv

---
*Studio27 Berlin — Demo-Projekt*

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
