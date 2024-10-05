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
        <section id="projects" className="sec">
                <div>
                    <h1 className="text-2xl">Projects</h1>
                </div>
                <div className="col-span-4">
                    {props.projects.map((proj) => (
                        <a href={proj.github} key={`proj-${proj.title}`} className="mb-4 p-2 grid grid-cols-4 rounded-sm">
                            <Image width={400} height={200} className="col-span-1 w-[95%] rounded max-h-[16dvh]" src={proj.imgs![0]} alt="" />
                            <div className="col-span-3">
                                <h1 className="text-2xl font-bold">{proj.title}</h1>
                                {proj.stack && (
                                    <ul className="mb-1">
                                        {proj.stack.map((tech, j) => (
                                            <li key={tech} className="text-xs">
                                                <i className="padding-1 bg-grey-200 dark:bg-grey-500">
                                                    {tech}
                                                </i>
                                                {proj.stack!.length - 1 == j ? "" : ", "}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                                <p className="text-sm light whitespace-pre-wrap">{proj.text}</p>
                            </div>
                        </a>
                    ))}
                </div>
        </section>
    )
}

export default ProjectsSection;
