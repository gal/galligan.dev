import ExperienceCarousel from "@/components/ExperienceCarousel";
import { client } from "@/sanity/lib/client";
import { Experience } from "@/types";
import { groq } from "next-sanity";

export default async function About() {
  const homepageQuery = groq`*[_type == "homepage"][0]`;
  const homepage = (await client.fetch(homepageQuery)) as { body: string[] };

  const experienceQuery = groq`*[_type == "experience"] | order(order asc)`;
  const experienceList = (await client.fetch(experienceQuery)) as Experience[];

  return (
    <main>
      <div
        id="aboutme"
        className="min-h-screen flex flex-col items-middle justify-center text-center px-2"
      >
        <h1 className="animate-fade-up text-2xl">Thomas Daniel Galligan</h1>
        <h2 className="animate-fade-up">Software Engineer</h2>
        <nav className="mt-4" aria-label="quick links for portfolio">
          <ul className="animate-fade-up flex flex-row justify-evenly align-middle max-w-lg mx-auto">
            <li>
              <a target="_blank" className="px-2 underline" href="https://github.com/gal/">
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="px-2 underline"
                href="https://linkedin.com/in/gal1/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" className="px-2 underline" href="/resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        <article className="mt-8">
          {homepage?.body?.map((paragraph, i) => (
            <p
              key={i}
              className="animate-fade-up mt-2 text-sm max-w-2xl mx-auto"
            >
              {paragraph}
            </p>
          ))}
        </article>
      </div>
      <div className="">
        <ExperienceCarousel experiences={experienceList} />
      </div>
    </main>
  );
}

export const revalidate = 300;
