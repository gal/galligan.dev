'use client'

import Link from "next/link"
import { usePathname } from 'next/navigation'

export default function NavigationList() {

  const pathname = usePathname()
  
  return (
    <ul className="h-full flex flex-row justify-between items-center w-11/12 m-auto md:px-16 lg:px-20 md:text-xl md:justify-start">
      <li>
        <Link href="/about" className={`mx-1 animate-fade-down underline-offset-4 p-1 ${pathname == "/about" ? "underline": ""}`}>
          About
        </Link>
      </li>
      <li>
        <Link href="/projects" className={`mx-1 animate-fade-down underline-offset-4 p-1 ${pathname == "/projects" ? "underline": ""}`} >
          Projects
        </Link>
      </li>
      <li>
        <Link href="/albums" className={`mx-1 animate-fade-down underline-offset-4 hp-1 ${pathname.startsWith("/albums") ? "underline": ""}`}>
          Photography
        </Link>
      </li>
    </ul>
  )
}
