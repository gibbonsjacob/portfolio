"""
Flask application factory for the portfolio API.

Run (from repo root):
  uv run --directory backend flask --app portfolio_api.app:app run --debug --port 5001
"""

from __future__ import annotations

from flask import Flask
from flask_cors import CORS

from portfolio_api.api import register_blueprints
from portfolio_api.config import load_settings
from portfolio_api.db.schema import ensure_schema


def create_app() -> Flask:
    settings = load_settings()
    app = Flask(__name__)

    app.config["DATABASE_PATH"] = settings.database_path
    app.config["ENABLE_DEBUG_MESSAGE_LIST"] = settings.enable_debug_message_list
    app.config["BACKEND_ROOT"] = settings.backend_root

    CORS(app, resources={r"/api/*": {"origins": settings.cors_origins}})

    ensure_schema(settings.database_path)
    register_blueprints(app)
    return app


# `flask --app portfolio_api.app:app run` looks for this
app = create_app()


if __name__ == "__main__":
    app.run(debug=True, port=5001)
