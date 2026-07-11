"""Load settings from config/app.yaml with optional env overrides."""

from __future__ import annotations

import os
from dataclasses import dataclass
from pathlib import Path

import yaml


def backend_root() -> Path:
    """backend/ — parent of the portfolio_api package."""
    return Path(__file__).resolve().parent.parent


@dataclass(frozen=True)
class Settings:
    database_path: Path
    cors_origins: list[str]
    enable_debug_message_list: bool
    backend_root: Path


def load_settings() -> Settings:
    root = backend_root()
    config_path = root / "config" / "app.yaml"
    with config_path.open(encoding="utf-8") as fh:
        raw = yaml.safe_load(fh)

    db_path = Path(os.environ.get("DATABASE_PATH", raw["database_path"]))
    if not db_path.is_absolute():
        db_path = root / db_path

    cors_env = os.environ.get("CORS_ORIGINS")
    if cors_env is not None:
        cors_origins = [origin.strip() for origin in cors_env.split(",") if origin.strip()]
    else:
        cors_origins = list(raw["cors_origins"])

    debug_env = os.environ.get("ENABLE_DEBUG_MESSAGE_LIST")
    if debug_env is not None:
        enable_debug = debug_env.strip().lower() in {"1", "true", "yes", "on"}
    else:
        enable_debug = bool(raw["enable_debug_message_list"])

    return Settings(
        database_path=db_path,
        cors_origins=cors_origins,
        enable_debug_message_list=enable_debug,
        backend_root=root,
    )
