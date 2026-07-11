"""POST /api/contact — validate and store a message."""

from __future__ import annotations

from flask import Blueprint, current_app, jsonify, request

from portfolio_api.repositories import messages as messages_repo
from portfolio_api.validators.contact import validate_contact

bp = Blueprint("contact", __name__)


@bp.post("/api/contact")
def contact():
    payload = request.get_json(silent=True) or {}
    cleaned, errors = validate_contact(payload)
    if errors:
        return jsonify({"ok": False, "errors": errors}), 400

    message_id = messages_repo.insert_message(
        current_app.config["DATABASE_PATH"],
        cleaned["name"],
        cleaned["email"],
        cleaned["message"],
    )
    return jsonify({"ok": True, "id": message_id}), 201
