export default function About() {
  return (
    <main>
      <div id="aboutme" className="h-screen flex flex-col items-middle justify-center text-center px-2">
        <h1 className="animate-fade-up text-2xl">Thomas Daniel Galligan</h1>
        <h2 className="animate-fade-up">Software Engineer</h2>
        <nav className="mt-4" aria-label="quick links for portfolio">
          <ul
            className="animate-fade-up flex flex-row justify-evenly align-middle max-w-lg mx-auto"
          >
            <li>
              <a className="px-2 underline" href="https://github.com/gal/">
                GitHub
              </a>
            </li>
            <li>
              <a className="px-2 underline" href="https://linked.in/gal1/">
                LinkedIn
              </a>
            </li>
            <li>
              <a className="px-2 underline" href="/resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <p className="animate-fade-up mt-12 text-sm max-w-2xl mx-auto">
        Welcome to my portfolio website! I am an enthusiastic software engineer with a diverse skill set and a deep love for technology. Currently, I work as an associate software engineer at IBM, where I contribute to the development of QRadar SOAR, an innovative product. My programming journey has exposed me to various languages, and I particularly enjoy working with languages like Golang and TypeScript. I have a keen interest in system design, always striving to create efficient and scalable solutions. Additionally, I find great satisfaction in full-stack web development, combining my knowledge of both frontend and backend technologies to craft seamless user experiences. With a strong foundation in programming principles and an insatiable curiosity for new challenges, I am constantly seeking opportunities to grow and make a meaningful impact in the world of software engineering.
        </p>
      </div>
    </main>
  )
}