// Home page → URL "/"
// Epic 3 will turn this into a real hero; for now it just proves the chrome works.
export default function Home() {
  return (
    <main>
      <p className="font-mono" style={{ color: "var(--paper-muted)", fontSize: "0.875rem" }}>
        Epic 2 — design chrome
      </p>
      <h1
        className="font-display"
        style={{ fontSize: "clamp(2.5rem, 8vw, 4.5rem)", lineHeight: 1.05, margin: "0.5rem 0 1rem" }}
      >
        Jacob Gibbons
      </h1>
      <p style={{ maxWidth: "32rem", color: "var(--paper-muted)" }}>
        Site shell is in place: colors, fonts, nav, and footer. Next up is a proper home hero.
      </p>
    </main>
  );
}
