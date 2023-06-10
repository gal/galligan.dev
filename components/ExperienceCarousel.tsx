import { urlForImage } from "@/sanity/lib/image";
import { Experience } from "@/types";

interface ExperienceCarouselProps {
  experiences: Experience[];
}

export default function ExperienceCarousel(props: ExperienceCarouselProps) {
  return (
    <div id="experience" className="w-full">
      <div className="p-5 md:p-10 flex flex-nowrap overflow-x-auto snap-mandatory snap-x md:snap-none">
        {props.experiences.map((experience, i) => (
          <div
            key={i}
            className={`inline-block flex-shrink-0 mx-[12px] w-[calc(100dvw-2rem)] md:w-[400px] lg:w-[600px] 
          sm:snap-center ${i == 0 ? "ml-auto" : ""} ${i == props.experiences.length - 1 ? "mr-auto" : ""
              }`}
          >
            <img
              className="mx-auto md:h-36 md:w-36 lg:h-64 lg:w-64 object-cover object-center rounded-full bg-white"
              src={urlForImage(experience.logo).url()}
              alt={`Logo for ${experience.organization}`}
            />
            <div className="mt-4 p-2 md:p-5">
              <h1 className="text-xl">{experience.organization}</h1>

              <h2 className="text-lg font-semibold">{experience.title}</h2>

              <p className="whitespace-pre-line">{experience.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
