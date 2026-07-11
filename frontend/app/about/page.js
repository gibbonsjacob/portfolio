import Link from "next/link";
import { about } from "@/content/about";
import { isCopyPending } from "@/content/copy";
import CopySlot from "@/components/CopySlot";

export const metadata = {
  title: "About",
  description: "About Jacob Gibbons",
};

export default function AboutPage() {
  const hasParagraphs = about.paragraphs.some((p) => !isCopyPending(p));
  const hasSkills = !isCopyPending(about.skills);

  return (
    <main className="page">
      <header className="page__header">
        <p className="page__eyebrow font-mono">{about.eyebrow}</p>
        <h1 className="page__title font-display">
          {isCopyPending(about.title) ? (
            <CopySlot label="about title — content/about.js" />
          ) : (
            about.title
          )}
        </h1>
      </header>

      <div className="page__body">
        <div className="prose">
          {hasParagraphs ? (
            about.paragraphs
              .filter((p) => !isCopyPending(p))
              .map((paragraph, index) => <p key={index}>{paragraph}</p>)
          ) : (
            <p>
              <CopySlot label="about bio paragraphs — content/about.js" />
            </p>
          )}
        </div>

        <aside className="about-aside" aria-label="Focus areas">
          <h2 className="about-aside__label font-mono">{about.skillsLabel}</h2>
          {hasSkills ? (
            <ul className="about-aside__list">
              {about.skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          ) : (
            <p className="about-aside__pending">
              <CopySlot label="skills list — content/about.js" />
            </p>
          )}
        </aside>
      </div>

      <p className="page__footer-link">
        <Link href="/work" className="home-cta">
          See the work
        </Link>
      </p>
    </main>
  );
}
