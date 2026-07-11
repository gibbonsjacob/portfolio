"""Persistence for contact messages — SQL lives in db/sql_scripts/messages/."""

from __future__ import annotations

from pathlib import Path

from portfolio_api.db.connection import get_connection
from portfolio_api.db.sql import load_sql

_INSERT = load_sql("messages", "insert_message.sql")
_LIST = load_sql("messages", "list_messages.sql")


def insert_message(database_path: Path, name: str, email: str, message: str) -> int:
    with get_connection(database_path) as conn:
        cursor = conn.execute(_INSERT, (name, email, message))
        conn.commit()
        return int(cursor.lastrowid)


def list_messages(database_path: Path) -> list[dict]:
    with get_connection(database_path) as conn:
        rows = conn.execute(_LIST).fetchall()
        return [dict(row) for row in rows]
