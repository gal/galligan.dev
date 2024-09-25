import { ReactElement } from "react";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export interface Project {
    title: string
    text: string | ReactElement<any, any>
}

const ProjectsSection = (props: {projects: Project[]}) => {
    return (
        <div className="mx-auto w-full sm:w-[60%] max-w-[1280px]">
            <div className="w-full grid grid-cols-3 h-full justify-center items-center text-center">
                <div className="col-span-1 text-left">
                    <h1 className="text-5xl">Projects.</h1>
                </div>
                <div className="text-left col-span-2 w-full">
                   {props.projects.map((proj, i) => (
                    <div>
                        <h1 className="text-4xl font-bold">{proj.title}</h1>
                        <p>{proj.text}</p>
                    </div>
                   ))}
                </div>
            </div>
        </div>
    )
}

export default ProjectsSection;
