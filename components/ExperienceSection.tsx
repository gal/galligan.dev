import { Experience } from "@/types";
import ExperienceCarousel from "./ExperienceCarousel";

export default function ExperienceSection(props: { experiences: Experience[] }) {
  return (

    <div className="min-h-[100dvh]">
      <h1 className="text-center text-xl">Experience &rarr;</h1>
      <ExperienceCarousel experiences={props.experiences} />
    </div>
  )
}