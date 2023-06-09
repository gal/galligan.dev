import { urlForImage } from "@/sanity/lib/image";
import { Experience } from "@/types"

interface ExperienceCarouselProps {
  experiences: Experience[];
}

export default function ExperienceCarousel(props: ExperienceCarouselProps) {
  return (
    <div id="experience" className='w-full'>
      <div className='p-5 md:p-10 flex flex-nowrap overflow-x-auto snap-mandatory snap-x md:snap-none'>
        {props.experiences.map((experience, i) => (
          <div key={i} className={`inline-block flex-shrink-0 mx-[12px] w-[calc(100dvw-2rem)] md:w-[400px] lg:w-[450px] 
          sm:snap-center ${i == 0 ? "ml-auto" : ""} ${i == (props.experiences.length - 1) ? 'mr-auto' : ""}`}>
            <div className='aspect-video px-2 bg-black flex justify-center items-center'>
              <img 
                className='max-w-full aspect-video h-auto object-contain'
                src={urlForImage(experience.logo).url()} alt={`Logo for ${experience.organization}`} />
            </div>
            <div className="mt-4 p-2 md:p-5">
              <h1 className="text-xl">
                {experience.organization}
              </h1>

              <h2 className="text-lg font-semibold">
                {experience.title}
              </h2>

              <p className='whitespace-pre-line'>
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div >
 )
}
