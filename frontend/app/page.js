import Link from "next/link";
import { home } from "@/content/home";
import { isCopyPending } from "@/content/copy";
import CopySlot from "@/components/CopySlot";

// Home → "/" — typographic hero + project field strip (structure only)
export default function Home() {
  return (
    <main className="home-hero">
      <div className="home-hero__inner">
        <h1 className="home-hero__brand">
          <span className="home-hero__brand-line">Jacob</span>
          <span className="home-hero__brand-line">Gibbons</span>
        </h1>

        <p className="home-hero__headline">
          {isCopyPending(home.headline) ? (
            <CopySlot label="home headline — content/home.js" />
          ) : (
            home.headline
          )}
        </p>

        <div className="home-hero__ctas">
          <Link href="/work" className="home-cta">
            {home.ctaWork}
          </Link>
          <Link href="/contact" className="home-cta">
            {home.ctaContact}
          </Link>
        </div>
      </div>

      <div className="home-hero__field" aria-label="Selected projects">
        <span className="home-hero__field-rule" aria-hidden="true" />
        <p className="home-hero__field-strip font-mono">
          {home.fieldProjects.map((name, index) => (
            <span key={name}>
              {index > 0 && (
                <span className="home-hero__field-sep" aria-hidden="true">
                  {" "}
                  ·{" "}
                </span>
              )}
              <span>{name}</span>
            </span>
          ))}
        </p>
      </div>
    </main>
  );
}
