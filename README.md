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

`frontend/` is set up. `backend/` is the Flask API (Python deps via **uv** at the repo root).

For a guided tour of Next.js folders and scripts, see [`frontend/README.md`](./frontend/README.md).
For the API, see [`backend/README.md`](./backend/README.md).

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

```bash
uv sync                                          # first time (repo root → creates ./.venv)
uv run --directory backend flask --app app run --debug --port 5001
```

Details: [`backend/README.md`](./backend/README.md).

## End-to-end: contact form → SQLite

This is the “piping” path — why the backend exists. The browser form POSTs JSON to Flask; Flask writes a row you can inspect.

1. **Terminal A — API**
   ```bash
   uv run --directory backend flask --app app run --debug --port 5001
   ```
2. **Terminal B — site**
   ```bash
   cd frontend && npm run dev
   ```
3. Open http://localhost:3000/contact, submit the form.
4. Confirm the row:
   ```bash
   curl -s http://127.0.0.1:5001/api/messages
   ```
   Or open that URL in a browser. You should see your name/email/message in JSON.

Optional: set `NEXT_PUBLIC_API_BASE_URL` in `frontend/.env.local` (see `frontend/.env.example`). Default is already `http://127.0.0.1:5001`.

## Links

- GitHub: [gibbonsjacob](https://github.com/gibbonsjacob)
