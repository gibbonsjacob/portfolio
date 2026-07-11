import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getAllProjectSlugs,
  getProjectBySlug,
} from "@/content/projects";
import { isCopyPending } from "@/content/copy";
import CopySlot from "@/components/CopySlot";

export function generateStaticParams() {
  return getAllProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) {
    return { title: "Not found" };
  }
  return {
    title: project.title,
    description: isCopyPending(project.summary)
      ? `${project.title} — project notes`
      : project.summary,
  };
}

export default async function ProjectPage({ params }) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  const { sections } = project;
  const sectionEntries = [
    { key: "problem", label: "Problem" },
    { key: "approach", label: "Approach" },
    { key: "outcome", label: "Outcome" },
  ];

  return (
    <main className="page">
      <header className="page__header">
        <p className="page__eyebrow font-mono">
          <Link href="/work" className="work-back">
            Work
          </Link>
          <span aria-hidden="true"> / </span>
          {project.kind}
        </p>
        <h1 className="page__title font-display">{project.title}</h1>
        <p className="project-summary">
          {isCopyPending(project.summary) ? (
            <CopySlot label={`summary — content/projects.js (${project.slug})`} />
          ) : (
            project.summary
          )}
        </p>
      </header>

      <div className="project-actions">
        {project.codeUrl && (
          <a
            href={project.codeUrl}
            className="home-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Code
          </a>
        )}
        {project.recreationUrl && (
          <a
            href={project.recreationUrl}
            className="home-cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Recreation
          </a>
        )}
      </div>

      <div className="project-sections">
        {sectionEntries.map(({ key, label }) => (
          <section key={key} className="project-section">
            <h2 className="project-section__label font-mono">{label}</h2>
            <div className="prose">
              <p>
                {isCopyPending(sections[key]) ? (
                  <CopySlot
                    label={`${label.toLowerCase()} — ${project.slug}`}
                  />
                ) : (
                  sections[key]
                )}
              </p>
            </div>
          </section>
        ))}
      </div>
    </main>
  );
}
