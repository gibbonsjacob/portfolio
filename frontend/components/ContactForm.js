"use client";

import { useState } from "react";

// Browser → Flask: NEXT_PUBLIC_API_BASE_URL (default local :5001)
const API_BASE =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://127.0.0.1:5001";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [serverMessage, setServerMessage] = useState("");

  function validate() {
    const next = {};
    if (!name.trim()) next.name = "Name is required";
    if (!email.trim()) next.email = "Email is required";
    if (!message.trim()) next.message = "Message is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  async function handleSubmit(event) {
    event.preventDefault();
    if (!validate()) return;

    setStatus("loading");
    setServerMessage("");

    try {
      const response = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim(),
          message: message.trim(),
        }),
      });

      const data = await response.json().catch(() => ({}));

      if (!response.ok) {
        if (data.errors && typeof data.errors === "object") {
          setErrors(data.errors);
        }
        setStatus("error");
        setServerMessage(
          data.errors
            ? "Check the fields above and try again."
            : "Something went wrong. Try again or use the links below.",
        );
        return;
      }

      setStatus("success");
      setServerMessage("Message sent — thanks.");
      setName("");
      setEmail("");
      setMessage("");
      setErrors({});
    } catch {
      // Network / CORS / server down
      setStatus("error");
      setServerMessage(
        "Could not reach the API. Is Flask running on port 5001?",
      );
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="contact-field">
        <label htmlFor="contact-name">Name</label>
        <input
          id="contact-name"
          name="name"
          type="text"
          autoComplete="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          aria-invalid={Boolean(errors.name)}
        />
        {errors.name && <p className="contact-error">{errors.name}</p>}
      </div>

      <div className="contact-field">
        <label htmlFor="contact-email">Email</label>
        <input
          id="contact-email"
          name="email"
          type="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          aria-invalid={Boolean(errors.email)}
        />
        {errors.email && <p className="contact-error">{errors.email}</p>}
      </div>

      <div className="contact-field">
        <label htmlFor="contact-message">Message</label>
        <textarea
          id="contact-message"
          name="message"
          rows={6}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          aria-invalid={Boolean(errors.message)}
        />
        {errors.message && <p className="contact-error">{errors.message}</p>}
      </div>

      <button
        type="submit"
        className="contact-submit"
        disabled={status === "loading"}
      >
        {status === "loading" ? "Sending…" : "Send message"}
      </button>

      {status === "success" && (
        <p className="contact-status contact-status--ok" role="status">
          {serverMessage}
        </p>
      )}
      {status === "error" && (
        <p className="contact-status contact-status--err" role="alert">
          {serverMessage}
        </p>
      )}
    </form>
  );
}
