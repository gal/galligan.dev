import { ReactElement } from "react"

export interface Experience {
    role?: string
    company?: string
    years?: string
    url?: string
    stack?: string[]
    text?: string | ReactElement
}

const ExperienceSection = (props: { experience: Array<Experience> }) => {
    return (
        <section id="experience" className="mx-auto w-[95dvw] max-w-[1280px]">
            <div className="grid md:grid-cols-3 h-full justify-center">
                <div className="text-5xl mb-4 mr-16 text-right">
                    <h1 className="text-5xl">Experience</h1>
                </div>
                <div className="col-span-2">
                    {props.experience.map((exp, i) => (
                        <div key={`exp-${exp.text}`} className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1 grid grid-cols-4 md:border-solid md:border-r border-black dark:border-white">
                                <div className="hidden md:block"></div>
                                <div className="mt-2 px-2 light md:mt-0 md:col-span-3">{exp.years}</div>
                            </div>
                            <div className="mb-4 md:col-span-2 grid grid-col-span-2">
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
                                        <a className="underline ml-[-4px]" href={exp.url}>{exp.company}</a>
                                    ) : <>{exp.company}</>}
                                </h2>
                                <p className="mt-1 text-sm light">
                                    {exp.text}
                                </p>
                                <div className="w-[60%] my-4 mx-auto h-[1px] light"></div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default ExperienceSection;
