import AboutMe from "@/components/AboutMe";
import ExperienceCarousel from "@/components/ExperienceCarousel";
import ExperienceSection from "@/components/ExperienceSection";
import Landing from "@/components/Landing";
import { client } from "@/sanity/lib/client";
import { Experience } from "@/types";
import { groq } from "next-sanity";

export default async function About() {
  const homepageQuery = groq`*[_type == "homepage"][0]`;
  const homepage = (await client.fetch(homepageQuery)) as { body: string[] };

  const experienceQuery = groq`*[_type == "experience"] | order(order asc) {..., technologies[] ->}`;
  const experienceList = (await client.fetch(experienceQuery)) as Experience[];

  return (
    <main>
      <Landing />
      <AboutMe body={homepage.body[0]} />
      <ExperienceSection experiences={experienceList} />
    </main>
  );
}

export const revalidate = 300;
