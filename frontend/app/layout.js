import { Syne, Source_Sans_3, IBM_Plex_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/content/site";
import { isCopyPending } from "@/content/copy";
import "./globals.css";

// next/font loads these efficiently and gives us CSS variables we use in globals.css
const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-source-sans",
  display: "swap",
});

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-ibm-plex-mono",
  display: "swap",
});

export const metadata = {
  title: "Jacob Gibbons",
  description: isCopyPending(site.metaDescription)
    ? "Personal portfolio site"
    : site.metaDescription,
};

// RootLayout wraps EVERY page. Header + Footer show on all routes.
export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${sourceSans.variable} ${ibmPlexMono.variable}`}
    >
      <body>
        <div className="site-shell">
          <Header />
          <div className="site-content">{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
