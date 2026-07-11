"""
Flask API for the portfolio contact form.

Mental model:
- frontend (Next.js on :3000) sends JSON here
- we validate, insert into sqlite3, return status codes
- piping (E8) wires the form; this file is the backend half

Run (from backend/ with venv active):
  flask --app app run --debug --port 5001
"""

from __future__ import annotations

import re

from flask import Flask, jsonify, request
from flask_cors import CORS

import db

# Simple email shape check — not perfect, good enough for a contact form
EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def create_app() -> Flask:
    app = Flask(__name__)

    # Allow the Next.js dev server to call us from the browser
    CORS(app, resources={r"/api/*": {"origins": ["http://localhost:3000", "http://127.0.0.1:3000"]}})

    db.init_db()

    @app.get("/api/health")
    def health():
        return jsonify({"ok": True})

    @app.post("/api/contact")
    def contact():
        payload = request.get_json(silent=True) or {}
        name = (payload.get("name") or "").strip()
        email = (payload.get("email") or "").strip()
        message = (payload.get("message") or "").strip()

        errors = {}
        if not name:
            errors["name"] = "Name is required"
        if not email:
            errors["email"] = "Email is required"
        elif not EMAIL_RE.match(email):
            errors["email"] = "Email looks invalid"
        if not message:
            errors["message"] = "Message is required"

        if errors:
            return jsonify({"ok": False, "errors": errors}), 400

        message_id = db.insert_message(name, email, message)
        return jsonify({"ok": True, "id": message_id}), 201

    @app.get("/api/messages")
    def messages():
        """
        Dev-only convenience: list stored messages in the browser/curl.
        Do not expose this on a public host without auth.
        """
        return jsonify({"ok": True, "messages": db.list_messages(), "dev_only": True})

    return app


# `flask --app app run` looks for this
app = create_app()


if __name__ == "__main__":
    app.run(debug=True, port=5001)
