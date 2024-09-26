import Image from "next/image";
import { ReactElement } from "react";

export interface Project {
    title: string
    text: string | ReactElement
    github: string
    imgs?: string[]
    stack?: string[]
}

const ProjectsSection = (props: { projects: Project[] }) => {
    return (
        <div id="projects" className="mx-auto w-[95dvw] max-w-[1280px]">
            <div className="w-full grid md:grid-cols-3 h-full justify-center items-center">
                <div className="md:col-span-1 mb-4 mr-16 text-right">
                    <h1 className="text-5xl">Projects</h1>
                </div>
                {/* <div className="text-left grid sm:grid-cols-3 sm:col-span-2 w-full gap-8"> */}
                <div className="col-span-2">
                    {props.projects.map((proj) => (
                        <a href={proj.github} key={`proj-${proj.title}`} className="mb-4 p-2 grid grid-cols-3 gap-8 hover:bg-gray-800 rounded-sm">
                            <Image width={400} height={200} className="col-span-1 rounded max-h-[16dvh]" src={proj.imgs![0]} alt="" />
                            <div className="col-span-2">
                                <h1 className="text-2xl font-bold">{proj.title}</h1>
                                {proj.stack && (
                                    <ul>
                                        {proj.stack.map((tech, j) => (
                                            <span key={tech} className="text-xs mb-1">
                                                <i className="padding-1 bg-grey-200 dark:bg-grey-500">
                                                    {tech}
                                                </i>
                                                {proj.stack!.length - 1 == j ? "" : ", "}
                                            </span>
                                        ))}
                                    </ul>
                                )}
                                <p className="text-sm text-slate-600 dark:text-slate-300">{proj.text}</p>
                            </div>
                        </a>
                    ))}
                </div>
                {/* </div> */}
            </div>
        </div>
    )
}

export default ProjectsSection;
