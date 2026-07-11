"""
sqlite3 helpers for contact messages.

stdlib only — no SQLAlchemy. The database file lives under backend/data/
(gitignored) and is created on first use.
"""

from __future__ import annotations

import sqlite3
from pathlib import Path

# backend/data/messages.db — folder is created if missing
DATA_DIR = Path(__file__).resolve().parent / "data"
DB_PATH = DATA_DIR / "messages.db"


def get_connection() -> sqlite3.Connection:
    DATA_DIR.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(DB_PATH)
    conn.row_factory = sqlite3.Row
    return conn


def init_db() -> None:
    """Create the messages table if it does not exist yet."""
    with get_connection() as conn:
        conn.execute(
            """
            CREATE TABLE IF NOT EXISTS messages (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                name TEXT NOT NULL,
                email TEXT NOT NULL,
                message TEXT NOT NULL,
                created_at TEXT NOT NULL DEFAULT (datetime('now'))
            )
            """
        )
        conn.commit()


def insert_message(name: str, email: str, message: str) -> int:
    with get_connection() as conn:
        cursor = conn.execute(
            """
            INSERT INTO messages (name, email, message)
            VALUES (?, ?, ?)
            """,
            (name, email, message),
        )
        conn.commit()
        return int(cursor.lastrowid)


def list_messages() -> list[dict]:
    with get_connection() as conn:
        rows = conn.execute(
            """
            SELECT id, name, email, message, created_at
            FROM messages
            ORDER BY id DESC
            """
        ).fetchall()
        return [dict(row) for row in rows]
