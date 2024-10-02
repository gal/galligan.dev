import { ReactElement } from "react";

export interface Experience {
  role?: string;
  company?: string;
  years?: string;
  url?: string;
  stack?: string[];
  text?: string | ReactElement;
}

const ExperienceSection = (props: { experience: Array<Experience> }) => {
  return (
    <section id="experience" className="sec">
      <div>
        <h1 className="text-2xl">Experience</h1>
      </div>
      <div className="col-span-4">
        {props.experience.map((exp, i) => (
          <div key={`exp-${exp.text}`} className="grid md:grid-cols-4">
            <div className="md:col-span-1 md:grid md:grid-cols-3">
              <div className="px-2 light col-span-2 text-sm md:border-solid md:border-r border-black dark:border-white">
                {exp.years}
              </div>
              <div></div>
            </div>
            <div className="mb-4 md:col-span-3 ">
              <div className="flex justify-between">
                <h1 className="text-lg font-bold">{exp.role}</h1>
                {exp.stack !== undefined && (
                  <ul>
                    {exp.stack?.map((tech, j) => (
                      <span key={`exp-${i}-tech-${j}`}>
                        <i className="padding-1 bg-grey-200 dark:bg-grey-500">
                          {tech}
                        </i>
                        {exp.stack!.length - 1 == j ? "" : ", "}
                      </span>
                    ))}
                  </ul>
                )}
              </div>

              <h2 className="flex">
                {exp.url !== undefined ? (
                  <a className="underline ml-[-4px]" href={exp.url}>
                    {exp.company}
                  </a>
                ) : (
                  <>{exp.company}</>
                )}
              </h2>
              <p className="mt-1 text-sm light">{exp.text}</p>
              <div className="w-[60%] my-4 mx-auto h-[1px] light"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSection;
