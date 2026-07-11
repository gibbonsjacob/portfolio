"""sqlite3 connection helpers — no domain SQL here."""

from __future__ import annotations

import sqlite3
from pathlib import Path


def get_connection(database_path: Path) -> sqlite3.Connection:
    database_path.parent.mkdir(parents=True, exist_ok=True)
    conn = sqlite3.connect(database_path)
    conn.row_factory = sqlite3.Row
    return conn
