# Thomas Schaad — Portfolio

Statische Portfolio-Website (React + Vite + Tailwind). Läuft ohne Backend und ohne Base44.

## Lokal starten

Voraussetzung: Node.js ab Version 18.

```bash
npm install
npm run dev
```

Dann http://localhost:5173 öffnen. Nicht mit «Live Server» öffnen: JSX muss durch Vite übersetzt werden.

## Veröffentlichen

```bash
npm run build
```

Der fertige Ordner `dist/` lässt sich auf jedem statischen Hosting veröffentlichen (Netlify, Vercel, Cloudflare Pages, GitHub Pages).
Wichtig: Das Hosting muss alle unbekannten Pfade auf `index.html` umleiten, damit `/projekte/...` beim direkten Aufruf funktioniert.

## Struktur

- `src/lib/projects.js` — alle Projekte (Texte, Bilder, Videos)
- `src/lib/i18n.js` — Texte DE/EN
- `src/components/portfolio/` — Abschnitte und Bausteine der Seite
- `src/pages/` — Startseite und Projektseite
- `public/media/` — Bilder und Videos (früher auf media.base44.com)

Neue Medien in `public/media/` ablegen und mit `/media/dateiname.jpg` referenzieren.
