import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/main/Header";
import Script from "next/script";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script defer src="https://app.tinyanalytics.io/pixel/pMjnA3kjmbDLkn3h"></Script>
      </head>
      <body
        className="antialiased scrollbar-thin md:scrollbar scrollbar-track-gray-400/20"
      >
        <Header />
        {children}
      </body>
    </html>
  );
}
