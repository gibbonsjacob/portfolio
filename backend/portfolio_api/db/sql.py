"""Load SQL script text from backend/db/sql_scripts/."""

from __future__ import annotations

from pathlib import Path

from portfolio_api.config import backend_root


def sql_scripts_dir() -> Path:
    return backend_root() / "db" / "sql_scripts"


def load_sql(*parts: str) -> str:
    """
    Read a SQL file relative to db/sql_scripts/.

    Example: load_sql("messages", "insert_message.sql")
    """
    path = sql_scripts_dir().joinpath(*parts)
    return path.read_text(encoding="utf-8")
