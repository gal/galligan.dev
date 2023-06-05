import { Metadata } from 'next'
import './globals.css'
import Link from 'next/link'


// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  viewport: "width=device-width, initial-scale=1", 
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className="fixed w-full h-10 backdrop-blur-sm">
          <nav className="h-full">
            <ul 
              className="h-full flex flex-row justify-between items-center w-11/12 max-w-3xl m-auto"
            >
              <li>
                <Link href="/about" className="animate-fade-down">About</Link>
              </li>
              <li>
                <Link href="/projects" className="animate-fade-down">Projects</Link>
              </li>
              <li>
                <Link href="/gallery" className="animate-fade-down">Gallery</Link>
              </li>
            </ul>
          </nav>
        </header>
        {children}
      </body>
    </html>
  )
}
