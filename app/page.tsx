import AboutSection from "@/components/main/AboutSection";
import ExperienceSection, { Experience } from "@/components/main/ExperienceSection";
import ProjectsSection, { Project } from "@/components/main/ProjectsSection";

export default function Home() {

  const experience: Experience[] = [
    {
      "role": "Software Engineer",
      "company": "IBM",
      "years": "2023 - Present",
      "stack": [
        "Java", "Python", "TypeScript"
      ],
      "url": "https://ibm.com",
      "text": "Led the containerization of a new microservice, integrating CI/CD pipelines for automated testing and deployment to a private Docker registry. I implemented observability and metrics for the microservice, facilitating monitoring for SREs, and worked on feature development, bug fixes, and vulnerability resolution. Additionally, I provided L3 support to address customer issues using my backend expertise."
    },
    {
      "role": "Chairperson / Champion",
      "company": "Cork Airport CoderDojo",
      "years": "2023 - Present",
      "url": "https://corkairportdojo.ie",
      "text": "I run a coding club at the IBM office in Cork, where I teach HTML, CSS, and JavaScript to children. For older students, I introduce more advanced web technologies such as React."
    },
    {
      "role": "Software Engineer Intern",
      "company": "IBM",
      "years": "Mar. - Sep. 2023",
      "stack":
        [
          "Java", "React", "TypeScript", "Kubernetes"
        ],
      "url": "https://ibm.com",
      "text": "Resolved UI inconsistencies in a React codebase to improve user experience. I led the development of a new build infrastructure environment, reducing downtime and ensuring data integrity. Additionally, I created Ansible playbooks for K3s cluster deployment and implemented secrets management using HashiCorp Vault to secure sensitive data."
    },
    {
      "role": "Chairperson",
      "company": "UCC Netsoc",
      "url": "https://netsoc.co/rk",
      "years": "2023 - 2024",
      "stack":
        [
          "NextJS", "TypeScript"
        ],
      "text": "Grew society membership by 300 in one year, hosted Tech talks, workshops, and a game jam. Also hosted, and built the website (using NextJS integrated with Stripe for ticketing) for Cork DevCon, a Tech conference in Cork."
    },
    {
      "role": "SysAdmin",
      "company": "UCC Netsoc",
      "url": "https://netsoc.co/rk",
      "years": "2019 - 2023",
      "stack":
        [
          "Golang", "Docker", "Ansible", "TypeScript", "Python"
        ],
      "text": "Maintained and managed a datacenter of servers with Proxmox hypervisor with dozens of docker containers provisioned via Ansible. Built software to support UCC students, primarily in Computer Science with our infrastructure."
    },
  ]

  const projects: Project[] = [
    {
      "title": "Tny.ie - URL Shortener",
      "text": "Built a from-the-ground-up URL shortener using Golang as a backend, with a VueJS frontend for managing links."
    }
  ]

  return (
    <div className="min-h-[90dvh] flex flex-col items-center justify-center gap-24 pb-32">
      <AboutSection />
      <ExperienceSection experience={experience}></ExperienceSection>
      <ProjectsSection projects={projects}/>
    </div>
  );
}
