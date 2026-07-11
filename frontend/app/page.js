import Link from "next/link";

// Home → "/" — typographic hero + project field strip (E3 structure)
export default function Home() {
  return (
    <main className="home-hero">
      <div className="home-hero__inner">
        <h1 className="home-hero__brand">
          <span className="home-hero__brand-line">Jacob</span>
          <span className="home-hero__brand-line">Gibbons</span>
        </h1>

        <p className="home-hero__headline">
          I build tools I use myself. Workout logs. Music libraries. Small
          automations that save a week of busywork.
        </p>

        <div className="home-hero__ctas">
          <Link href="/work" className="home-cta">
            See the work
          </Link>
          <Link href="/contact" className="home-cta">
            Say hello
          </Link>
        </div>
      </div>

      <div className="home-hero__field" aria-label="Selected projects">
        <span className="home-hero__field-rule" aria-hidden="true" />
        <p className="home-hero__field-strip font-mono">
          <span>fitness-tracker</span>
          <span className="home-hero__field-sep" aria-hidden="true">
            ·
          </span>
          <span>songs_db</span>
          <span className="home-hero__field-sep" aria-hidden="true">
            ·
          </span>
          <span>automate_life</span>
        </p>
      </div>
    </main>
  );
}
