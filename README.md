# Securex (React)

Modern React rebuild of the legacy Securex CCTV HTML template.

## Run

```bash
npm install
npm run dev
```

## Structure

- `src/components/layout` — Spinner, Topbar, Navbar, Footer, Copyright, PageHeader, BackToTop
- `src/components/sections` — shared page sections (Hero, About, Services, etc.)
- `src/pages` — route pages composed from sections
- `public/css`, `public/img`, `public/lib` — original template assets (UI preserved)

## Notes

UI/UX matches the legacy template. React Router handles navigation; original jQuery plugins power carousels, counters, filters, and animations.
