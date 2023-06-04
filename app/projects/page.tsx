import { headers } from 'next/headers'

export default async function Projects() {
  const data = await getData() as {id: string, name: string, description: string, image: string}[];
  return (
    <main className="pt-20">
      {data.map((project) => (
        <div
          key={project.id}
          className="max-w-md my-2 mx-auto bg-white dark:bg-opacity-5 rounded shadow-neutral-900 shadow-lg overflow-hidden md:max-w-5xl"
        >
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-64 w-full object-cover md:h-full md:w-80" src={project.image} alt={`Image for ${project.name}`} />
            </div>
            <div className="p-6">
              <div className="tracking-wide text-2xl">
                {project.name}
              </div>
              <p className="mt-2">{project.description}</p>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}

async function getData() {
  try {
    const data = await fetch(`${process.env.NEXT_BASE_URL}/api/projects`, { next: { revalidate: 300 }}).then((res) => res.json());
    return data;
  } catch (error) {
    console.log(error);
    return [];
  }
}


