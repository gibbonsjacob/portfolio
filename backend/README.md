# Backend — Flask + sqlite3

Contact-form API for the portfolio site. The Next.js frontend talks to these
JSON endpoints over HTTP (wired in Epic 8).

Managed with **uv** from the **repo root** (`pyproject.toml` workspace + `uv.lock` + `.venv`).
No `requirements.txt`. The Flask app code lives in `backend/`.

## Setup (first time)

From the repo root:

```bash
uv sync
```

That creates `./.venv` and installs backend deps from `backend/pyproject.toml`.

## Run

From `backend/` (uses the root `.venv` via the workspace):

```bash
cd backend
uv run flask --app app run --debug --port 5001
```

Or from the repo root:

```bash
uv run --directory backend flask --app app run --debug --port 5001
```

API base: http://127.0.0.1:5001

## Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/health` | Liveness check → `{"ok": true}` |
| POST | `/api/contact` | Body: `{name, email, message}` → 201 or 400 |
| GET | `/api/messages` | **Dev only** — list rows in sqlite |

## Database

- File: `backend/data/messages.db` (created automatically, gitignored)
- Table: `messages (id, name, email, message, created_at)`

## Quick smoke test

```bash
curl http://127.0.0.1:5001/api/health
curl -X POST http://127.0.0.1:5001/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
curl http://127.0.0.1:5001/api/messages
```
