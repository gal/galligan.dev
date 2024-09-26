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
        <div className="mx-auto w-[95dvw] md:w-[60%] max-w-[1280px]">
            <div className="grid md:grid-cols-3 h-full justify-center items-center">
                <div className="col-span-1 mb-4 mr-16 text-right">
                    <h1 className="text-5xl">Experience</h1>
                </div>
                <div className="col-span-2">
                    {props.experience.map((exp, i) => (
                        <div key={`exp-${exp.text}`} className="grid md:grid-cols-3 gap-8">
                            <div className="md:col-span-1 ml-16" style={{ borderRight: "1px solid white" }}>
                                {exp.years}
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

                                <h2 className="">
                                    {exp.url !== undefined ? (
                                        <a className="underline" href={exp.url}>{exp.company}</a>
                                    ) : <>{exp.company}</>}
                                </h2>
                                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">
                                    {exp.text}
                                </p>
                                <div className="w-[60%] my-4 mx-auto h-[1px] bg-neutral-500"></div>

                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection;
