# Frontend (Next.js)

The browser-facing part of the portfolio.

## Scripts

| Command | What it does |
|---------|----------------|
| `npm run dev` | Start local dev server (usually http://localhost:3000). Hot-reloads when you edit files. |
| `npm run build` | Create a production build (we'll use this later before hosting). |
| `npm start` | Serve the production build (after `build`). |
| `npm run lint` | Check code for common problems. |

```bash
cd frontend
npm install   # first time / after pulling dependency changes
npm run dev
```

## Folder walkthrough (the mental model)

```
frontend/
  app/              # ROUTES live here. Folder names become URL paths.
    layout.js       # Shared shell around every page (html/body, later nav/footer)
    page.js         # The home page → URL "/"
    globals.css     # Global styles + CSS variables
  public/           # Static files (images, icons) served as-is at /filename
  package.json      # Project name, scripts, and npm dependencies
  next.config.mjs   # Next.js settings (rarely touch at first)
  jsconfig.json     # Lets imports like @/something mean "from project root"
  node_modules/     # Installed packages (gitignored — never edit by hand)
```

### How a URL maps to a file

| File | URL |
|------|-----|
| `app/page.js` | `/` (home) |
| `app/about/page.js` | `/about` (we'll add this later) |
| `app/work/page.js` | `/work` |
| `app/work/[slug]/page.js` | `/work/fitness-tracker` (dynamic) |

**Rule of thumb:** a `page.js` file inside a folder under `app/` becomes a page people can visit.

### layout.js vs page.js

- **`layout.js`** — chrome that stays put (later: header, footer, fonts). Wraps pages.
- **`page.js`** — the unique content for that URL.

We'll add `components/` later for reusable pieces (Header, Footer, forms) that aren't routes themselves.
