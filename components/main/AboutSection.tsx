import { ReactElement } from "react";
import { FaFileAlt, FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export interface AboutLink {
  icon: ReactElement;
  label: string;
  url: string;
  aria: string;
}

const AboutSection = (props: { links: AboutLink[] }) => {
  return (
    <section id="about" className="mx-auto w-[95dvw] max-w-[1280px]">
      <div className="w-full grid md:grid-cols-3 h-full justify-center">
        <div className="col-span-1">
          <h1 className="text-5xl mb-4 mr-16 text-right">About</h1>
        </div>
        <div className="text-left col-span-2 w-full">
          <div className="grid md:grid-cols-3 gap-8">
            <div></div>
            <div className="col-span-2">
              <h1 className="text-6xl font-bold">Thomas Galligan</h1>
              <div className="ml-2 mt-2">
                <h2 className="text-lg">Software Engineer</h2>
                <h3 className="font-bold">
                  IBM{" "}
                  <span className="m-4">2023 - Present</span>
                </h3>
              </div>
            </div>
          </div>
          <div className="grid md:grid-cols-3 mt-12 gap-8">
            <nav>
              {props.links.map((link, i) => (
                <div key={link.label} className="grid grid-cols-4 mt-2">
                  <span className="col-span-1"></span>
                  <span className="col-span-3 flex items-center">
                    <span></span>
                    <a
                      key={link.label}
                      className="flex items-center gap-3"
                      aria-label={link.aria}
                      href={link.url}
                      title="thomas@galligan.dev"
                    >
                      {link.icon} {link.label}
                    </a>
                  </span>
                </div>
              ))}
            </nav>
            <p className="col-span-2 light">
              Software Engineer with a strong background in full-stack
              development and containerization. Currently at IBM, I work on
              enhancing microservices and delivering robust solutions for large
              enterprises. With experience spanning backend development,
              frontend technologies, and infrastructure automation. I also enjoy
              sharing my knowledge as a leader at Cork Airport CoderDojo,
              teaching young developers the fundamentals of web technologies.
            </p>{" "}
            {/* <ul className="flex flex-col gap-2">
              <div></div> */}
            {/* 
              <a
                className=" flex gap-4 items-center grid grid-cols-4"
                aria-label="Link to my CV/Resume"
                href="/cv.pdf"
                title="thomas@galligan.dev"
              >
                <span className="col-span-3">CV</span>
              </a>
              <a
                className=" flex gap-4 items-center"
                aria-label="Mailto: link for my email address at mailto://thomas@galligan.dev"
                href="mailto://thomas@galligan.dev"
                title="thomas@galligan.dev"
              >
                <FaRegEnvelope />
                Email
              </a>
              <a
                className=" flex gap-4 items-center"
                aria-label="Link to my GitHub profile"
                href="https://github.com/gal"
                title="github.com/gal"
              >
                <FaGithub />
                GitHub
              </a>
              <a
                className=" flex gap-4 items-center"
                aria-label="Link to my LinkedIn profile"
                href="https://linkedin.com/in/gal1"
                title="linkedin.com/in/gal1"
              >
                <FaLinkedin />
                LinkedIn
              </a> */}
            {/* </ul> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
