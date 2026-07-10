# Portfolio

Personal website for Jacob Gibbons — portfolio, about, work, and contact.

We build this **slowly**, one Jira story at a time. See [`roadmap.md`](./roadmap.md) for the board link — **Jira PORT is the source of truth**.

**Board:** [PORT backlog](https://gibbonsjacob.atlassian.net/jira/software/projects/PORT/boards/35/backlog)

## What’s in this repo

```
portfolio/
  frontend/     # Next.js site (JavaScript + Tailwind) — the pages you see in the browser
  backend/      # Python (Flask) + sqlite3 — contact form API (added later)
  roadmap.md    # Agile backlog (epics & stories)
  README.md     # You are here
```

`frontend/` is set up. `backend/` appears in Epic 7.

For a guided tour of Next.js folders and scripts, see [`frontend/README.md`](./frontend/README.md).

## Stack

| Layer | Tech | Role |
|-------|------|------|
| Frontend | Next.js + JavaScript + Tailwind | UI and pages |
| Backend | Flask + sqlite3 | Store contact messages |
| Local | Two processes | Browser talks to Python via HTTP |

No TypeScript for now. Hosting and a custom domain come later (Epic 10).

## How we work

1. Pick the next `todo` story in `roadmap.md`
2. Implement it and explain as we go
3. You run it locally and ask questions
4. Mark the story `done`, then continue

## Running things (filled in as we go)

### Frontend

```bash
cd frontend
npm install   # first time only
npm run dev   # usually http://localhost:3000
```

### Backend

*(Added in Epic 7 — not set up yet.)*

## Links

- GitHub: [gibbonsjacob](https://github.com/gibbonsjacob)
