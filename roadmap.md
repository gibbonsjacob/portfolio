# Portfolio Site — Roadmap

**Source of truth is now Jira:** [PORT backlog](https://gibbonsjacob.atlassian.net/jira/software/projects/PORT/boards/35/backlog)

This file is a short pointer only. Do not maintain a second backlog here.

## Project

| | |
|--|--|
| **Jira project** | [Portfolio Management (`PORT`)](https://gibbonsjacob.atlassian.net/browse/PORT) |
| **Board** | [Scrum backlog](https://gibbonsjacob.atlassian.net/jira/software/projects/PORT/boards/35/backlog) |
| **Repo** | `~/portfolio` |

## How we work

1. Pick the next story from the Jira backlog (usually under the current epic).
2. Move it to **In Progress**.
3. Implement + explain as we go.
4. You verify locally.
5. Move it to **Done**.
6. New work → create a Jira issue (Story / Spike / Research) under the right epic.

## Labels (content areas)

Use these instead of separate Jira projects:

- `frontend` · `backend` · `content` · `infra` · `design` · `later`

## Stack (locked for now)

- Frontend: Next.js (App Router) + JavaScript + Tailwind
- Backend: Python (Flask) + sqlite3
- Local only first; hosting/domain later (Epic E10)

## Progress snapshot

| Epic | Status |
|------|--------|
| E0 — Project foundation | Done |
| E1 — Frontend scaffold | Done |
| E2 — Design system & chrome | Done |
| E3 — Home page | Done (structure; hero polish parked in [PORT-62](https://gibbonsjacob.atlassian.net/browse/PORT-62)) |
| E4 — About | Scaffold done; copy owned by Jacob (see content tickets) |
| E5 — Work | Scaffold done; copy in [PORT-64](https://gibbonsjacob.atlassian.net/browse/PORT-64) |
| E6 — Contact UI | Scaffold done; wired to Flask in E8 |
| E7 — Backend | Flask + sqlite3 + uv workspace |
| E8 — Piping | Form → `POST /api/contact` → SQLite |
| E9–E10 | Backlog (hero polish [PORT-62](https://gibbonsjacob.atlassian.net/browse/PORT-62)) |

## Where to write copy

All fillable prose lives under `frontend/content/`:

| File | What you write |
|------|----------------|
| `home.js` | Hero headline |
| `about.js` | Title, bio paragraphs, skills list |
| `projects.js` | Each project’s summary + problem / approach / outcome |
| `contact.js` | Title, intro, email |
| `site.js` | Footer line, meta description |

Empty slots render as `[[…]]` on the site until you fill them.

## Parking lot

Promote to Jira when ready (or already filed):

- Blog / notes section
- Dark/light toggle
- Analytics
- CMS instead of `content/projects.js`
- **Home hero pass** — feels too AI-templated; moodboard at [21st.dev](https://21st.dev) (Themes / Heroes). Tracked: [PORT-62](https://gibbonsjacob.atlassian.net/browse/PORT-62) (E9 Research).
