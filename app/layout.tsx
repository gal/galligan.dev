import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Thomas Daniel Galligan",
  description:
    "Thomas Daniel Galligan is a software engineer based in Ireland.",
  openGraph: {
    type: "profile",
    countryName: "Republic of Ireland",
    description:
      "Thomas Daniel Galligan is a software engineer based in Ireland.",
    locale: "en_IE",
    alternateLocale: "en_US",
    url: "https://gal.ie/about",
    emails: ["thomas@galligan.dev"],
    firstName: "Thomas",
    lastName: "Galligan",
    gender: "male",
    username: "gal | thomas007g",
  },
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-white/30">
        <header className="fixed w-full h-10 backdrop-blur-sm z-50">
          <nav className="h-full">
            <ul className="h-full flex flex-row justify-between items-center w-11/12 max-w-3xl m-auto">
              <li>
                <Link href="/about" className="animate-fade-down">
                  About
                </Link>
              </li>
              <li>
                <Link href="/projects" className="animate-fade-down">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/albums" className="animate-fade-down">
                  Albums
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
