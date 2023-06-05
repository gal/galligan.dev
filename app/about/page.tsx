import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { Experience } from "@/types";
import { groq } from "next-sanity"

export default async function About() {
  const homepageQuery = groq`*[_type == "homepage"][0]`
  const homepage = await client.fetch(homepageQuery) as { body: string[]; };

  const experienceQuery = groq`*[_type == "experience"] | order(end desc)`
  const experienceList = await client.fetch(experienceQuery) as Experience[];

  return (
    <main>
      <div id="aboutme" className="min-h-screen flex flex-col items-middle justify-center text-center px-2">
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

        <article className="mt-8">
          {homepage?.body?.map((paragraph, i) => (
            <p key={i} className="animate-fade-up mt-2 text-sm max-w-2xl mx-auto">
              {paragraph}
            </p>
          ))}
        </article>
      </div>
      <div className='max-w-full overflow-hidden pb-20'>
        <article id="experience"
          className="p-5 md:pl-[30dvh] lg:p-10 mx-auto flex flex-shrink-0 overflow-x-auto scroll snap-x snap-mandatory md:snap-always space-x-8 scrollbar-thin scrollbar-track-gray-400/20">
          {experienceList?.map((experience, i) => (
            <div  key={i} className='flex flex-shrink-0 flex-col items-center snap-center w-[calc(100dvw-2rem)] md:w-[450px]'>
              <div className='w-full aspect-video bg-black flex items-center justify-center'>
                <img className='max-w-full aspect-video h-auto object-contain' src={urlForImage(experience.logo).url()} alt="" />
              </div>
              <section className='mt-4'>
                <h1 className='text-xl'>{experience.organization}</h1>
                <h2 className='text-base font-semibold'>{experience.title}</h2>
                <p className='whitespace-pre-line'>{experience.description}</p>
              </section>
            </div>
          ))}
          {/* {experienceList?.map((experience, i) => (
          <div className='flex flex-shrink-0 flex-col items-center snap-center w-1/3 py-2 p-8 dark:bg-neutral-900/75 mx-4 '>
            <div className='w-full aspect-video bg-black flex items-center justify-center'>
              <img className='max-w-full aspect-video h-auto object-contain' src={urlForImage(experience.logo).url()} alt="" />
            </div>
            <section className='mt-4'>
              <h1 className='text-xl'>{experience.organization}</h1>
              <h3 className='text-base font-semibold'>{experience.title}</h3>
              <p className='whitespace-pre-line'>{experience.description}</p>
            </section>
          </div>
        ))} */}
        </article>
      </div>

    </main >
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
