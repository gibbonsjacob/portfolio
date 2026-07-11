"use client";

import { useState } from "react";

// Frontend-only contact form. Submit is mocked until Flask piping (E7/E8).
export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | loading | success | error

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
    // Mock round-trip until backend exists
    await new Promise((resolve) => setTimeout(resolve, 600));
    setStatus("success");
    setName("");
    setEmail("");
    setMessage("");
    setErrors({});
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
          Form UI works. Backend wiring comes later — nothing was stored.
        </p>
      )}
      {status === "error" && (
        <p className="contact-status contact-status--err" role="alert">
          Something went wrong. Try again or use the links below.
        </p>
      )}
    </form>
  );
}
