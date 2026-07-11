import ContactForm from "@/components/ContactForm";
import CopySlot from "@/components/CopySlot";
import { contact } from "@/content/contact";
import { isCopyPending } from "@/content/copy";

export const metadata = {
  title: "Contact",
  description: "Get in touch with Jacob Gibbons",
};

export default function ContactPage() {
  return (
    <main className="page">
      <header className="page__header">
        <p className="page__eyebrow font-mono">{contact.eyebrow}</p>
        <h1 className="page__title font-display">
          {isCopyPending(contact.title) ? (
            <CopySlot label="contact title — content/contact.js" />
          ) : (
            contact.title
          )}
        </h1>
        <p className="project-summary">
          {isCopyPending(contact.intro) ? (
            <CopySlot label="contact intro — content/contact.js" />
          ) : (
            contact.intro
          )}
        </p>
      </header>

      <div className="contact-layout">
        <ContactForm />

        <aside className="contact-fallbacks" aria-label="Other ways to reach me">
          <h2 className="about-aside__label font-mono">Also</h2>
          <ul className="about-aside__list">
            <li>
              <a
                href={contact.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            </li>
            <li>
              {isCopyPending(contact.email) ? (
                <CopySlot label="email — content/contact.js" />
              ) : (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              )}
            </li>
          </ul>
        </aside>
      </div>
    </main>
  );
}
