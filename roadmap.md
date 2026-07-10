# Portfolio Site — Roadmap

Agile backlog for Jacob Gibbons’ personal site.  
Work **one story at a time**. Pause after each story to run it, ask questions, then pick the next.

**Stack (locked for now)**
- Frontend: Next.js (App Router) + JavaScript + Tailwind
- Backend: Python (Flask) + sqlite3
- Local only first; hosting/domain later

**Status key:** `todo` · `in progress` · `done` · `blocked` · `later`

---

## How we work

1. Pick the next `todo` story in order (unless something is blocked).
2. Mark it `in progress`.
3. Implement + explain as we go.
4. You verify locally.
5. Mark `done`, then move on.
6. Anything new we discover → add a story under the right epic (or a new epic).

---

## Epic 0 — Project foundation

Set up the repo so we have a clear place to work and a shared map of the work.

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E0-S1 | Create repo at `~/portfolio` with git | Folder exists; `git` initialized | done |
| E0-S2 | Add this `roadmap.md` with epics & stories | File checked in; backlog readable | done |
| E0-S3 | Add root `README.md` (how this project is organized) | Explains frontend/backend split and that we go slow | todo |
| E0-S4 | Add `.gitignore` for Node, Python, SQLite, env files | Ignores `node_modules`, `.venv`, `*.db`, `.env`, etc. | todo |

---

## Epic 1 — Frontend scaffold & mental model

Create the Next.js app and learn what the folders mean before building pages.

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E1-S1 | Scaffold Next.js app under `frontend/` (JS + Tailwind, no TypeScript) | `npm run dev` starts; default page loads in browser | todo |
| E1-S2 | Walkthrough: what is `app/`, `page.js`, `layout.js`, `public/`? | Short notes in README or comments; you can explain each in your own words | todo |
| E1-S3 | Clean out default boilerplate | No “Create Next App” starter chrome; blank-but-running shell | todo |
| E1-S4 | Confirm project scripts (`dev`, `build`, `start`) | Documented in `frontend/README.md` or root README | todo |

---

## Epic 2 — Design system & site chrome

Establish look-and-feel and shared navigation before content pages.

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E2-S1 | Define CSS variables (ink background, text, copper accent) | Variables in global CSS; used by layout | todo |
| E2-S2 | Load distinctive fonts (display + body + mono) | Fonts applied; not Inter/Roboto/system default stack | todo |
| E2-S3 | Build `Header` with site name + nav links | Links: Home, About, Work, Contact; works on mobile (simple) | todo |
| E2-S4 | Build `Footer` with GitHub link | Links to https://github.com/gibbonsjacob | todo |
| E2-S5 | Wire Header/Footer into root `layout.js` | Every page shows chrome | todo |
| E2-S6 | Subtle atmosphere (grain or soft wash) on body/background | Visible but not noisy; no purple-glow AI look | todo |

---

## Epic 3 — Home page

One strong first viewport before other routes.

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E3-S1 | Hero: name as primary brand signal | Name dominates; not buried in nav only | todo |
| E3-S2 | One headline + one short supporting line | No stats, cards, or secondary promo clutter in first viewport | todo |
| E3-S3 | CTA group (e.g. Work / Contact) | Links navigate correctly | todo |
| E3-S4 | Optional: placeholder for personal visual anchor | Slot ready for a photo later; layout still works without it | todo |

---

## Epic 4 — About page

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E4-S1 | Create `/about` route | Page reachable from nav | todo |
| E4-S2 | Write placeholder bio content (editable later) | Short prose; skills as simple list or sentences—not skill bars | todo |

---

## Epic 5 — Work / projects (content + pages)

Public projects first; work case studies as structured placeholders.

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E5-S1 | Create `content/projects.js` with a shared project shape | Fields include: slug, title, summary, kind (`public` \| `case-study`), tags, `codeUrl`, `recreationUrl`, body sections | todo |
| E5-S2 | Seed 2–4 public projects from GitHub (curated) | e.g. fitness-tracker, songs_db, plus 1–2 more you care about | todo |
| E5-S3 | Seed 1–2 work case-study stubs | `codeUrl` / `recreationUrl` empty; honest “concepts only” copy | todo |
| E5-S4 | Build `/work` index (craft rows, not card grid) | Lists all projects; links to detail pages | todo |
| E5-S5 | Build `/work/[slug]` detail page | Shows problem → approach → outcome; shows Code/Recreation only if URLs exist | todo |
| E5-S6 | Handle unknown slug (simple not-found) | Bad URL doesn’t crash; clear message | todo |

---

## Epic 6 — Contact UI (frontend only)

Form that looks real before it talks to Python.

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E6-S1 | Create `/contact` page with form fields | Name, email, message + submit | todo |
| E6-S2 | Client-side empty-field checks | Inline errors; no submit when invalid | todo |
| E6-S3 | Add fallback links (GitHub, mailto) | Visible if API is down or unused yet | todo |
| E6-S4 | Loading / success / error UI states (mocked) | Can demo states without backend | todo |

---

## Epic 7 — Python backend + SQLite

Backend in the language you know; store contact messages locally.

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E7-S1 | Create `backend/` with venv + `requirements.txt` | Flask (and flask-cors when needed) installable | todo |
| E7-S2 | `db.py`: open sqlite3 DB, create `messages` table | Table: id, name, email, message, created_at | todo |
| E7-S3 | `app.py`: health check route `GET /api/health` | Returns JSON ok | todo |
| E7-S4 | `POST /api/contact`: validate + insert row | Bad input → 400; good input → 201 + row in DB | todo |
| E7-S5 | Document how to run the backend | Commands in README; DB file under `backend/data/` and gitignored | todo |
| E7-S6 | Optional: `GET /api/messages` for local debugging only | Lists rows; clearly “dev only” (we can lock down later) | todo |

---

## Epic 8 — Piping (frontend ↔ backend)

Connect the form to Flask and prove the full path.

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E8-S1 | Enable CORS for local Next.js origin | Browser can call Flask without CORS errors | todo |
| E8-S2 | Point contact form `fetch` at Flask URL | Configurable base URL (e.g. env or constant) | todo |
| E8-S3 | Wire real success/error from API responses | UI matches server result; message lands in SQLite | todo |
| E8-S4 | End-to-end checklist in README | Both servers running; submit form; verify DB row | todo |

---

## Epic 9 — Polish & accessibility

Only after the above feels solid.

| ID | Story | Acceptance criteria | Status |
|----|--------|---------------------|--------|
| E9-S1 | Responsive pass (mobile + desktop) | Nav and pages usable on narrow screens | todo |
| E9-S2 | 2–3 intentional motions (enter / hover / form success) | Subtle; not decorative noise | todo |
| E9-S3 | Basic a11y (labels, focus, contrast) | Form labels tied to inputs; keyboard can navigate | todo |

---

## Epic 10 — Later (out of scope until we say so)

Do not start these until Epics 1–8 (and ideally 9) are done—or you explicitly pull one forward.

| ID | Story | Notes | Status |
|----|--------|-------|--------|
| E10-S1 | Deploy frontend (e.g. Vercel) | Learn hosting | later |
| E10-S2 | Deploy backend + persistent SQLite/hosting choice | Figure out as we go | later |
| E10-S3 | Custom domain + DNS | After hosting | later |
| E10-S4 | Email notify on new contact (Resend, etc.) | Extra backend | later |
| E10-S5 | Real photo / visual assets | Replace placeholders | later |
| E10-S6 | Fill in real About + case-study copy | Content pass | later |
| E10-S7 | Optional sanitized work recreations + `recreationUrl` | Hybrid code-sharing path | later |

---

## Suggested first sprint (Sprint 1)

Goal: **repo ready + frontend running + you understand the tree.**

- [x] E0-S1 — Create repo
- [x] E0-S2 — Roadmap (this file)
- [ ] E0-S3 — Root README
- [ ] E0-S4 — `.gitignore`
- [ ] E1-S1 — Scaffold Next.js under `frontend/`
- [ ] E1-S2 — Folder walkthrough
- [ ] E1-S3 — Remove boilerplate

When Sprint 1 is done, Sprint 2 = Epic 2 (design + chrome), then Epic 3 (home).

---

## Parking lot

Ideas that aren’t stories yet—promote them when ready:

- Blog / notes section
- Dark/light toggle (site is dark-first for now)
- Analytics
- CMS instead of `content/projects.js`
