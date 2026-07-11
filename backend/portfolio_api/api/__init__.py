"""HTTP blueprints for the portfolio API."""

from __future__ import annotations

from flask import Flask

from portfolio_api.api.contact import bp as contact_bp
from portfolio_api.api.health import bp as health_bp
from portfolio_api.api.messages import bp as messages_bp


def register_blueprints(app: Flask) -> None:
    app.register_blueprint(health_bp)
    app.register_blueprint(contact_bp)
    app.register_blueprint(messages_bp)
