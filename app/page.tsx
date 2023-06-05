import { redirect } from "next/navigation"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "About Thomas Daniel Galligan",
  description: "Thomas Daniel Galligan is a software engineer based in Ireland.",
  openGraph: {
    type: "profile",
    countryName: "Republic of Ireland",
    description: "Thomas Daniel Galligan is a software engineer based in Ireland.",
    locale: "en_IE",
    alternateLocale: "en_US",
    url: "https://gal.ie/about",
    emails: [
      "thomas@galligan.dev",
    ],
    firstName: "Thomas",
    lastName: "Galligan",
    gender: "male",
    username: "gal | thomas007g",
  },
}

export default function Home() {
  redirect('/about')
  //   return (

  //     // <main>
  //     //   <div id="jumbo">
  //     //     {/* <h1 className="text-2xl">Thomas Daniel Galligan</h1>
  //     //     <h2>Software Engineer</h2>
  //     //     <nav aria-label="quick links for portfolio">
  //     //       <ul
  //     //         className="flex flex-row justify-evenly align-middle"
  //     //       >
  //     //         <li>
  //     //           <a className="px-2 text-blue-500 hover:text-blue-600 transition" href="https://github.com/gal">
  //     //             GitHub
  //     //           </a>
  //     //         </li>
  //     //         <li>
  //     //           <a className="px-2 text-blue-500 hover:text-blue-600 transition" href="https://linked.in/gal1/">
  //     //             LinkedIn
  //     //           </a>
  //     //         </li>
  //     //         <li>
  //     //           <a className="px-2 text-blue-500 hover:text-blue-600 transition" href="/cv.pdf">
  //     //             Resume
  //     //           </a>
  //     //         </li>
  //     //       </ul>
  //     //     </nav>
  //     //     <p className="text-center mt-8 w-11/12 whitespace-pre-line">

  //     //     </p> */}
  //     //   </div>
  //     // </main>
  //   )
}
