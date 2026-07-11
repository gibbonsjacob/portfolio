import Link from "next/link";
import { projects } from "@/content/projects";
import { isCopyPending } from "@/content/copy";
import CopySlot from "@/components/CopySlot";

export const metadata = {
  title: "Work",
  description: "Selected projects and case studies",
};

export default function WorkPage() {
  return (
    <main className="page page--wide">
      <header className="page__header">
        <p className="page__eyebrow font-mono">Work</p>
        <h1 className="page__title font-display">Selected projects</h1>
      </header>

      <ul className="work-list">
        {projects.map((project) => (
          <li key={project.slug} className="work-row">
            <Link href={`/work/${project.slug}`} className="work-row__link">
              <div className="work-row__main">
                <h2 className="work-row__title font-display">{project.title}</h2>
                <p className="work-row__summary">
                  {isCopyPending(project.summary) ? (
                    <CopySlot label={`summary — ${project.slug}`} />
                  ) : (
                    project.summary
                  )}
                </p>
              </div>
              <div className="work-row__meta font-mono">
                <span className="work-row__kind">{project.kind}</span>
                {project.tags.length > 0 && (
                  <span className="work-row__tags">{project.tags.join(" · ")}</span>
                )}
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
