import firebase from '../../utils/db';
import { getFirestore, collection, getDocs } from "firebase/firestore";import { Metadata } from "next"

const firestore = getFirestore(firebase)

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

export default async function About() {
  const res = await getDocs(collection(firestore, "homepage"));
  const data = res.docs.map((doc) => doc.data()) as { id: string, body: string; }[];

  return (
    <main>
      <div id="aboutme" className="h-screen flex flex-col items-middle justify-center text-center px-2">
        <h1 className="animate-fade-up text-2xl">Thomas Daniel Galligan</h1>
        <h2 className="animate-fade-up">Software Engineer</h2>
        <nav className="mt-4" aria-label="quick links for portfolio">
          <ul
            className="animate-fade-up flex flex-row justify-evenly align-middle max-w-lg mx-auto"
          >
            <li>
              <a className="px-2 underline" href="https://github.com/gal/">
                GitHub
              </a>
            </li>
            <li>
              <a className="px-2 underline" href="https://linked.in/gal1/">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="px-2 underline" href="/resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <section className="mt-8">
          {data.map((paragraph) => (
            <p key={paragraph.id} className="animate-fade-up mt-2 text-sm max-w-2xl mx-auto">
              {paragraph.body}
            </p>
          ))}
        </section>
      </div>
    </main>
  )
}

export const revalidate = 300;
// async function getStaticProps() {

//   return {
//     props: {
//       data: getData()
//     }
//   }
// }

// async function getData() {
//   const res = await getDocs(collection(firestore, "homepage"));
//   const data = res.docs.map((doc) => doc.data()) as { id: string, body: string; }[];
//   return data;
// }
