export default function Landing() {
  return (
    <div
        id="aboutme"
        className="min-h-[100dvh] flex flex-col items-middle justify-center text-center px-2"
      >
        <h1 className="animate-fade-up text-3xl">Thomas Daniel Galligan</h1>
        <h2 className="animate-fade-up text-lg">Software Engineer</h2>
        <nav className="mt-8" aria-label="quick links for portfolio">
          <ul className="animate-fade-up flex flex-row justify-center space-x-10 align-middle max-w-lg mx-auto">
            <li>
              <a target="_blank" className="underline" href="https://github.com/gal/">
                GitHub
              </a>
            </li>
            <li>
              <a
                target="_blank"
                className="underline"
                href="https://linkedin.com/in/gal1/"
              >
                LinkedIn
              </a>
            </li>
            <li>
              <a target="_blank" className="underline" href="/resume.pdf">
                Resume
              </a>
            </li>
          </ul>
        </nav>

        {/* <article className="mt-8">
          {homepage?.body?.map((paragraph, i) => (
            <p
              key={i}
              className="animate-fade-up mt-2 text-sm max-w-2xl mx-auto"
            >
              {paragraph}
            </p>
          ))}
        </article> */}
      </div>
  )
}