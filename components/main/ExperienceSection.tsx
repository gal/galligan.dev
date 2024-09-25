import { ReactElement } from "react"

export interface Experience {
    role?: string
    company?: string
    years?: string
    url?: string
    stack?: string[]
    text?: string | ReactElement<any, any>
}

const ExperienceSection = (props: { experience: Array<Experience> }) => {
    return (
        <div className="mx-auto w-full sm:w-[60%] max-w-[1280px]">
            <div className="grid grid-cols-3 h-full justify-center items-center">
                <div className="col-span-1">
                    <h1 className="text-5xl">Experience.</h1>
                </div>
                <div className="col-span-2">
                    {props.experience.map((exp, i) => (
                        <div key={`exp-${1}`} className="grid sm:grid-cols-8">
                            <div className="sm:col-span-2 p-2" style={{ borderRight: "1px solid white" }}>
                                {exp.years}
                            </div>
                            <div className="pl-8 mb-4 sm:col-span-6">
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
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ExperienceSection;
