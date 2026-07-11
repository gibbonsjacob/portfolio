"""Contact form field validation — no Flask imports."""

from __future__ import annotations

import re

EMAIL_RE = re.compile(r"^[^@\s]+@[^@\s]+\.[^@\s]+$")


def validate_contact(payload: dict) -> tuple[dict | None, dict]:
    """
    Returns (cleaned_fields, errors).

    cleaned_fields is None when errors is non-empty.
    """
    name = (payload.get("name") or "").strip()
    email = (payload.get("email") or "").strip()
    message = (payload.get("message") or "").strip()

    errors: dict[str, str] = {}
    if not name:
        errors["name"] = "Name is required"
    if not email:
        errors["email"] = "Email is required"
    elif not EMAIL_RE.match(email):
        errors["email"] = "Email looks invalid"
    if not message:
        errors["message"] = "Message is required"

    if errors:
        return None, errors

    return {"name": name, "email": email, "message": message}, {}
