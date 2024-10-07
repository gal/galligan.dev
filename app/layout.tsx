import "./globals.css";
import Header from "@/components/main/Header";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased scrollbar-thin md:scrollbar scrollbar-track-gray-400/20">
        <Header />
        {children}
        <Analytics />
        <Script defer src="https://app.tinyanalytics.io/pixel/pMjnA3kjmbDLkn3h"></Script>
      </body>
    </html>
  );
}
