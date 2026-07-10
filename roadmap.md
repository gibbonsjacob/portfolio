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
| E3 — Home page | Next |
| E4–E10 | Backlog |

## Parking lot

Promote to Jira when ready:

- Blog / notes section
- Dark/light toggle
- Analytics
- CMS instead of `content/projects.js`
