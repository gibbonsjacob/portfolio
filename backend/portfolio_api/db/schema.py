"""Apply schema SQL scripts from db/sql_scripts/schema/ in sorted order."""

from __future__ import annotations

from pathlib import Path

from portfolio_api.db.connection import get_connection
from portfolio_api.db.sql import sql_scripts_dir


def ensure_schema(database_path: Path) -> None:
    schema_dir = sql_scripts_dir() / "schema"
    scripts = sorted(schema_dir.glob("*.sql"))
    if not scripts:
        raise FileNotFoundError(f"No schema SQL files found in {schema_dir}")

    with get_connection(database_path) as conn:
        for script in scripts:
            conn.executescript(script.read_text(encoding="utf-8"))
        conn.commit()
