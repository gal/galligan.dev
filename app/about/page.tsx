import { cache } from "react";

export default async function About() {
  const data = await getData() as { id: string, body: string; }[];

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

        <section className="mt-8">
          {data.map((paragraph) => (
            <p key={paragraph.id} className="animate-fade-up mt-2 text-sm max-w-2xl mx-auto">
              {paragraph.body}
            </p>
          ))}
        </section>
      </div>
    </main>
  )
}

async function getData() {
  return await cache(async () => {
    try {
      const data = await fetch(`${process.env.NEXT_BASE_URL}/api/about`, { next: { revalidate: 300 } }).then((res) => res.json());
      return data;
    } catch (error) {
      console.log(error);
      return [];
    }
  })()
}
