import Image from "next/image";
import { ReactElement } from "react";

export interface Project {
    title: string
    text: string | ReactElement
    github: string
    imgs: string[]
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
                    <a href={proj.github} key={`proj-${proj.title}`} className="mb-4 pr-2 grid grid-cols-1 md:grid-cols-4 rounded-sm">
                        <div className="col-span-1 md:col-span-3 order-1 md:order-2">
                            <h1 className="text-2xl font-bold">{proj.title}</h1>
                            {proj.stack && (
                                <ul className="flex flex-wrap gap-1 my-1">
                                    {proj.stack.map((tech) => (
                                        <li key={tech}>
                                            <span className="pr-2 py-1 italic text-sm bg-grey-200 dark:bg-grey-500 rounded">
                                                {tech}
                                            </span>
                                        </li>
                                    ))}
                                </ul>
                            )}
                            <Image width={400} height={200} className="w-full max-w-[500px] mx-auto md:hidden rounded my-2" src={proj.imgs![0]} alt="" />
                            <p className="pt-2 text-sm light whitespace-pre-wrap">{proj.text}</p>
                        </div>
                        <Image width={400} height={200} className="col-span-1 w-full md:w-[95%] rounded max-h-[16dvh] mb-2 md:mb-0 hidden md:block order-2 md:order-1" src={proj.imgs![0]} alt="" />
                    </a>
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection;
