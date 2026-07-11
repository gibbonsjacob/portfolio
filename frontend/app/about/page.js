import Link from "next/link";

// About → "/about" — structure first; copy is draft (E4)
export const metadata = {
  title: "About",
  description: "How Jacob Gibbons likes to build software.",
};

export default function AboutPage() {
  return (
    <main className="page">
      <header className="page__header">
        <p className="page__eyebrow font-mono">About</p>
        <h1 className="page__title font-display">How I like to build</h1>
      </header>

      <div className="page__body">
        <div className="prose">
          <p>
            Most of what I ship starts as a problem I hit myself. A workout log
            that didn&apos;t fit how I train. A music library that got messy. Busywork
            that ate a week and should have been a script.
          </p>
          <p>
            I care about clear data and interfaces that still make sense months
            later. This site is the notebook for that work.
          </p>
        </div>

        <aside className="about-aside" aria-label="Focus areas">
          <h2 className="about-aside__label font-mono">Usually working with</h2>
          <ul className="about-aside__list">
            <li>Python</li>
            <li>JavaScript / web apps</li>
            <li>Data pipelines &amp; SQLite</li>
            <li>iOS (Swift) when the problem fits</li>
            <li>Automation around daily life</li>
          </ul>
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
