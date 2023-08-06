import { urlForImage } from "@/sanity/lib/image";
import { Experience } from "@/types";

interface ExperienceCarouselProps {
  experiences: Experience[];
}

export default function ExperienceCarousel(props: ExperienceCarouselProps) {
  return (
    <div id="experience" className="h-full">
      <div className="scrollbar-none md:p-10 flex flex-nowrap overflow-x-auto snap-mandatory snap-x md:snap-none">
        {props.experiences.map((experience, i) => (
          <div
            key={i}
            className={`scrollbar-none inline-block flex-shrink-0 mx-[12px] w-[calc(100dvw-2rem)] md:w-[400px] lg:w-[600px] 
          sm:snap-center ${i == 0 ? "ml-auto" : ""} ${i == props.experiences.length - 1 ? "mr-auto" : ""
              }`}
          >
            <div className="w-36 h-36 md:h-52 md:w-52 lg:w-64 lg:h-64 flex justify-center items-center rounded-full mx-auto bg-white">
              <img
                className="mx-auto h-16 w-16 md:h-24 md:w-24 lg:h-40 lg:w-40 object-cover object-center"
                src={urlForImage(experience.logo).url()}
                alt={`Logo for ${experience.organization}`}
              />
            </div>

            <div className="mt-4 p-2 md:p-5">
              <h1 className="text-xl">{experience.organization}</h1>

              <h2 className="text-lg font-semibold">{experience.title}</h2>

              <p className="whitespace-pre-line">{experience.description}</p>

              <ul className="mt-2 space-x-4 flex">
                {experience.technologies?.map((technology, j) => (
                  <li key={i} className="inline">
                    <img src={urlForImage(technology.logo).url()} alt={`Logo for ${technology.name}`}
                      title={technology.name} className="h-8 w-8 grayscale bg-white rounded-full p-1"
                    />
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
