import { site } from "@/content/site";
import { isCopyPending } from "@/content/copy";
import CopySlot from "@/components/CopySlot";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner">
        <span>
          {isCopyPending(site.footerLine) ? (
            <CopySlot label="footer line — content/site.js" />
          ) : (
            site.footerLine
          )}
        </span>
        <a
          href="https://github.com/gibbonsjacob"
          target="_blank"
          rel="noopener noreferrer"
        >
          github.com/gibbonsjacob
        </a>
      </div>
    </footer>
  );
}
