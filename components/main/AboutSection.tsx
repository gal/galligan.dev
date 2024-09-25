import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

const AboutSection = () => {
    return (
        <div className="mx-auto w-full sm:w-[60%] max-w-[1280px]">
            <div className="w-full grid grid-cols-3 h-full justify-center items-center text-center">
                <div className="col-span-1 text-left">
                    <h1 className="text-5xl">About.</h1>
                </div>
                <div className="text-left col-span-2 w-full">
                    <h1 className="text-8xl">Thomas Galligan</h1>
                    <h2 className="text-lg ml-4">Software Engineer</h2>
                    <h3 className="font-bold ml-4">IBM <i className="m-4 font-normal non-italic">2023 - Present</i></h3>
                    <p className="text-slate-600 dark:text-slate-300 mt-4 ml-4">
                        Software Engineer with a strong background in full-stack development and containerization.
                        Currently at IBM, I work on enhancing microservices and delivering robust solutions for large enterprises.
                        With experience spanning backend development, frontend technologies, and infrastructure automation. I also enjoy
                        sharing my knowledge as a leader at Cork Airport CoderDojo, teaching young developers the fundamentals of web technologies.
                    </p>
                    <ul className="ml-4 mt-2 text-2xl flex gap-4">
                        <a href="mailto://thomas@galligan.dev" title="thomas@galligan.dev"><FaRegEnvelope /></a>
                        <a href="https://github.com/gal" title="github.com/gal"><FaGithub /></a>
                        <a href="https://linkedin.com/in/gal1" title="linkedin.com/in/gal1"><FaLinkedin /></a>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default AboutSection;
