import { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import NavigationList from "@/components/NavigationList";

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
      <body className="scrollbar-thin bg-lightbg scrollbar-track-gray-400/20 scrollbar-thumb-white/30">
        <header className="fixed w-full h-12 backdrop-blur-sm bg-lightbg z-50">
          <nav className="h-full">
            <NavigationList />
          </nav>
        </header>
        <div className="pt-12 min-h-[100dvh]">{children}</div>
      </body>
    </html>
  );
}
