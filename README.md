# Knotty Oak Baptist Church

The public website for Knotty Oak Baptist Church — Coventry, Rhode Island.

Built on Next.js 16 (App Router) + React 19 + Tailwind CSS 4. Deployed to Vercel.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Content to wire up

- **Tithe.ly form ID** — set `TITHELY_URL` in [src/app/give/page.tsx](src/app/give/page.tsx).
- **Events** — edit [src/lib/events.ts](src/lib/events.ts) directly, or swap `getEvents()` to fetch a published Google Sheet CSV.
- **Photos** — replace the Unsplash placeholder URLs in `Hero.tsx`, `Welcome.tsx`, `Ministries.tsx`, and `ministries/page.tsx` with real photos from `public/`.

## Routes

- `/` — homepage
- `/ministries` — children, teens, young adults, men's & ladies' Bible study, VBS
- `/mission` — mission statement + core beliefs
- `/give` — giving page (Tithe.ly embed when wired)
