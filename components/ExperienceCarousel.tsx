"use client";

import { urlForImage } from "@/sanity/lib/image";
import { Experience } from "@/types"

interface ExperienceCarouselProps {
  experiences: Experience[];
}

export default function ExperienceCarousel(props: ExperienceCarouselProps) {

  return (

    <div id="experience"
      className='w-full'
    >
      <div className='p-5 md:p-10 flex flex-nowrap overflow-x-auto sm:snap-mandatory sm:snap-x'>
        {/* <div className='grid grid-flow-col grid-rows-1 justify-center overflow-auto sm:snap-x sm:snap-always'> */}
        {props.experiences.map((experience, i) => (
          <div key={i} className={`inline-block flex-shrink-0 mx-[12px] w-[calc(100dvw-2rem)] md:w-[400px] sm:snap-center ${i == 0 ? "ml-auto" : ""} ${i == (props.experiences.length - 1) ? 'mr-auto' : ""}`}>
            <div className='aspect-video px-2 bg-black flex justify-center items-center'>
              <img
                className='max-w-full aspect-video h-auto object-contain'
                src={urlForImage(experience.logo).url()} alt={`Logo for ${experience.organization}`} />
            </div>
            <div className="mt-4 p-2 md:p-5">
              <h1 className="text-2xl">
                {experience.organization}
              </h1>
              <h2 className="text-xl font-semibold">
                {experience.title}
              </h2>

              <p className='text-lg whitespace-pre-line'>
                {experience.description}
              </p>
            </div>
          </div>
        ))}
      </div>

    </div >

    // <div id="experience" 
    //   className={`overflow-x-auto flex flex-shrink-0 min-w-[100vw]
    //   md:px-[475.5px]`}
    // >
    //   {props.experiences.map((experience, i) => (
    //     <div key={i} className='mx-[12px] flex flex-shrink-0 flex-col items-center w-[calc(100dvh-2rem)] md:max-w-[450px]' >
    //       <div className="aspect-video px-2 bg-black">
    //         <img 
    //           className='max-w-full aspect-video h-auto object-contain'
    //           src={urlForImage(experience.logo).url()} alt={`Logo for ${experience.organization}`} />
    //       </div>
    //       <div className="mt-4">
    //         <h1 className="text-xl">
    //           {windowSize.current[0]}
    //         </h1>
    //         <h2 className="font-semibold">
    //           {}
    //         </h2>

    //         <p className='whitespace-pre-line'>
    //           {`md:px-[${(windowSize.current[0] - (num * 450 + 4))/8}px]`}
    //         </p>
    //       </div>
    //     </div>
    //   ))}

    // </div>
  )
}