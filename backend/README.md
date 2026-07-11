# Backend — Flask + sqlite3

Contact-form API for the portfolio site. The Next.js frontend talks to these
JSON endpoints over HTTP (wired in Epic 8).

Managed with **uv** from the **repo root** (`pyproject.toml` workspace + `uv.lock` + `.venv`).
No `requirements.txt`. The installable package is `portfolio_api` under `backend/`.

## Layout

```
backend/
  config/app.toml              # defaults (CORS, DB path, flags)
  db/sql_scripts/
    schema/                    # CREATE TABLE scripts (numbered)
    messages/                  # insert / list queries
  portfolio_api/               # Flask package (orchestration only)
  data/                        # runtime sqlite file (gitignored)
```

SQL and config live in files; Python loads and runs them.

## Setup (first time)

From the repo root:

```bash
uv sync
```

That creates `./.venv` and installs the `portfolio_api` package from `backend/`.

## Run

From the repo root:

```bash
uv run --directory backend flask --app portfolio_api.app:app run --debug --port 5001
```

Or from `backend/`:

```bash
cd backend
uv run flask --app portfolio_api.app:app run --debug --port 5001
```

API base: http://127.0.0.1:5001

## Config

Defaults: [`config/app.toml`](./config/app.toml). Override with env:

| Env | Meaning |
|-----|---------|
| `DATABASE_PATH` | Absolute or backend-relative sqlite path |
| `CORS_ORIGINS` | Comma-separated allowed origins |
| `ENABLE_DEBUG_MESSAGE_LIST` | `true`/`false` — gates `GET /api/messages` |

## Endpoints

| Method | Path | Purpose |
|--------|------|---------|
| GET | `/api/health` | Liveness check → `{"ok": true}` |
| POST | `/api/contact` | Body: `{name, email, message}` → 201 or 400 |
| GET | `/api/messages` | **Dev only** — list rows in sqlite (config-gated) |

## Database

- File: `backend/data/messages.db` (created automatically, gitignored)
- Schema/queries: `backend/db/sql_scripts/`
- Table: `messages (id, name, email, message, created_at)`

## Quick smoke test

```bash
curl http://127.0.0.1:5001/api/health
curl -X POST http://127.0.0.1:5001/api/contact \
  -H 'Content-Type: application/json' \
  -d '{"name":"Test","email":"test@example.com","message":"Hello"}'
curl http://127.0.0.1:5001/api/messages
```
