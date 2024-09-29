import AboutSection, { AboutLink } from "@/components/main/AboutSection";
import ExperienceSection, {
  Experience,
} from "@/components/main/ExperienceSection";
import ProjectsSection, { Project } from "@/components/main/ProjectsSection";
import { FaFileAlt, FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export default function Home() {
  const aboutLinks: AboutLink[] = [
    {
      icon: <FaFileAlt aria-label="CV icon" />,
      label: "CV",
      url: "/cv.pdf",
      aria: "Link to my CV",
    },
    {
      icon: <FaRegEnvelope aria-label="Email icon" />,
      label: "Email",
      url: "mailto://thomas@galligan.dev",
      aria: "Link to my Email address",
    },
    {
      icon: <FaGithub aria-label="GitHub icon" />,
      label: "GitHub",
      url: "https://github.com/gal",
      aria: "Link to my GitHub profile",
    },
    {
      icon: <FaLinkedin aria-label="LinkedIn icon" />,
      label: "LinkedIn",
      url: "https://linkedin.com/in/gal1",
      aria: "Link to LinkedIn profile",
    },
  ];

  const experience: Experience[] = [
    {
      role: "Software Engineer",
      company: "IBM",
      years: "2023 - Present",
      stack: ["Java", "Python", "TypeScript"],
      url: "https://ibm.com",
      text: "Led the containerization of a new microservice, integrating CI/CD pipelines for automated testing and deployment to a private Docker registry. I implemented observability and metrics for the microservice, facilitating monitoring for SREs, and worked on feature development, bug fixes, and vulnerability resolution. Additionally, I provided L3 support to address customer issues using my backend expertise.",
    },
    {
      role: "Chairperson / Champion",
      company: "CoderDojo",
      years: "2023 - Present",
      url: "https://corkairportdojo.ie",
      text: "I run a coding club at the IBM office in Cork, where I teach HTML, CSS, and JavaScript to children. For older students, I introduce more advanced web technologies such as React.",
    },
    {
      role: "Chairperson",
      company: "UCC Netsoc",
      url: "https://netsoc.co/rk",
      years: "2023 - 2024",
      stack: ["NextJS", "TypeScript"],
      text: "Grew society membership by 300 in one year, hosted Tech talks, workshops, and a game jam. Also hosted, and built the website (using NextJS integrated with Stripe for ticketing) for Cork DevCon, a Tech conference in Cork.",
    },
    {
      role: "Software Engineer Intern",
      company: "IBM",
      years: "Mar. - Sep. 2023",
      stack: ["Java", "React", "TypeScript", "Kubernetes"],
      url: "https://ibm.com",
      text: "Resolved UI inconsistencies in a React codebase to improve user experience. I led the development of a new build infrastructure environment, reducing downtime and ensuring data integrity. Additionally, I created Ansible playbooks for K3s cluster deployment and implemented secrets management using HashiCorp Vault to secure sensitive data.",
    },
    {
      role: "SysAdmin",
      company: "UCC Netsoc",
      url: "https://netsoc.co/rk",
      years: "2019 - 2023",
      stack: ["Golang", "Docker", "Ansible", "TypeScript", "Python"],
      text: "Maintained and managed a datacenter of servers with Proxmox hypervisor with dozens of docker containers provisioned via Ansible. Built software to support UCC students, primarily in Computer Science with our infrastructure.",
    },
  ];

  const projects: Project[] = [
    {
      title: "Timber - A Social Network",
      github: "https://github.com/tnyie",
      text: "Timber is a social networking platform to connect professionals and hobbyists together. It's main purpose is to join people who are looking to work on projects in their spare time. It can be ostensible nowadays for a student or a person aspiring to join the industry; to find and collaborate with and gain team building skills. Our purpose is to mediate these worries of finding a team and allow the users to match with each other based on their personal similarities and interests. Our goal is to allow people to access this in a digestible fashion. Removing high barriers to entry such as CVs, lengthy cover letters and experience prerequisites. Users on this platform not only can match with these projects but can also use them to gain and show their experience on their professional portfolios.",
      imgs: ["/img/timber/1.png"],
      stack: ["Golang", "TypeScript", "VueJS", "PostgresQL"],
    },
    {
      title: "Tny.ie - URL Shortener",
      github: "https://github.com/tnyie",
      text: "Built a from-the-ground-up URL shortener using Golang as a backend, with a VueJS frontend for managing links.",
      imgs: ["/img/tnyie/1.png", "/img/tnyie/2.png"],
      stack: ["Golang", "TypeScript", "VueJS", "PostgresQL"],
    },
  ];

  return (
    <div className="min-h-[90dvh] flex flex-col items-center justify-center gap-24 pb-32">
      <AboutSection links={aboutLinks} />
      <ExperienceSection experience={experience}></ExperienceSection>
      <ProjectsSection projects={projects} />
    </div>
  );
}
