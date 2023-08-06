import { Metadata } from "next";
import "./globals.css";
import NavigationList from "@/components/NavigationList";
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  weight: "400",
  subsets: ['latin'],
  display: 'swap'
})

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
      <body className="scrollbar-thin bg-lightbg scrollbar-track-black/90 scrollbar-thumb-white">
        <div aria-label="font provider" className={poppins.className}>

          <header className="fixed bg-black w-full h-14 z-50 opacity-75">
            <nav className="h-full">
              <NavigationList />
            </nav>
          </header>
          <div className="pt-14 min-h-[100dvh]">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
