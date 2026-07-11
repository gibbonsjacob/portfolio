import Link from "next/link";

export default function WorkNotFound() {
  return (
    <main className="page">
      <header className="page__header">
        <p className="page__eyebrow font-mono">404</p>
        <h1 className="page__title font-display">Project not found</h1>
      </header>
      <p className="prose">
        That slug isn’t in the project list. Check the URL or go back to Work.
      </p>
      <p className="page__footer-link">
        <Link href="/work" className="home-cta">
          Back to work
        </Link>
      </p>
    </main>
  );
}
