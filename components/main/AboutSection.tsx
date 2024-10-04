import Head from "next/head";
import { ReactElement } from "react";

export interface AboutLink {
  icon: ReactElement;
  label: string;
  url: string;
  aria: string;
}

const ABOUT_TEXT = 
`Software Engineer with a strong background in full-stack development
and containerization. Currently at IBM, I work on enhancing
microservices and delivering robust solutions for large enterprises.
With experience spanning backend development, frontend technologies,
and infrastructure automation. I also enjoy sharing my knowledge as
a leader at Cork Airport CoderDojo, teaching young developers the
fundamentals of web technologies.`

const TITLE_TEXT = "Thomas Galligan | Software Engineer"

const AboutSection = (props: { links: AboutLink[] }) => {
  return (
    <section id="about" className="sec">
      <Head>
        <title>{TITLE_TEXT}</title>
        <meta name="robots" content="index, follow"></meta>


        <meta name="description" content={ABOUT_TEXT}></meta>
        <meta name="author" content="Thomas Galligan"/>
        <meta name="keywords" content="software developer, Thomas Daniel Galligan, software engineer, personal website, portfolio"></meta>

        <meta property="og:title" content={TITLE_TEXT}></meta>
        <meta property="og:description" content={ABOUT_TEXT}></meta>
        <meta property="og:url" content="https://galligan.dev"></meta>
      </Head>

      <div className="col-span-1">
        <h1 className="text-2xl">About</h1>
      </div>

      <nav className="flex flex-col my-2 justify-end">
        {props.links.map((link) => (
          <li key={link.label}>
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
          </li>
        ))}
      </nav>
      <div className="col-span-3">
        <h1 className="text-6xl font-bold">Thomas Galligan</h1>
        <div className="ml-2 mt-2">
          <h2 className="text-lg">Software Engineer</h2>
          <h3 className="font-bold">
            IBM
            <span className="m-4">2023 - Present</span>
          </h3>
          <div>
            <p className="light">
              {ABOUT_TEXT}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
