"""GET /api/messages — dev-only list of stored contact rows."""

from __future__ import annotations

from flask import Blueprint, current_app, jsonify

from portfolio_api.repositories import messages as messages_repo

bp = Blueprint("messages", __name__)


@bp.get("/api/messages")
def messages():
    if not current_app.config.get("ENABLE_DEBUG_MESSAGE_LIST", False):
        return jsonify({"ok": False, "error": "Not found"}), 404

    rows = messages_repo.list_messages(current_app.config["DATABASE_PATH"])
    return jsonify({"ok": True, "messages": rows, "dev_only": True})
