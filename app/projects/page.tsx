// import firebase from '../../utils/db';
// import { getFirestore, collection, getDocs } from "firebase/firestore";

// const firestore = getFirestore(firebase)

import { Project } from "@/types";
import { client } from "@/sanity/lib/client";
import { groq } from "next-sanity";

export default async function Projects() {

  // const res = await getDocs(collection(firestore, "projects"));
  // const data = res.docs.map((doc) => doc.data()) as Project[];
  const projectQuery = groq`*[_type == "project"]`
  const data = await client.fetch(projectQuery) as Project[];

  return (
    <main className="pt-20">
      {data.map((project) => (
        <div
          key={project.id}
          className="max-w-md px-4 py-2 my-4 mx-auto bg-gray-50 shadow-neutral-500 dark:bg-gray-600 dark:shadow-neutral-900 dark:bg-opacity-5 shadow-md overflow-hidden md:max-w-5xl"
        >
          <div className="md:flex md:items-center">
            <div className="md:shrink-0 h-48">
              <img className="object-cover md:h-full md:w-80" src={project.image} alt={`Image for ${project.title}`} />
            </div>
            <div className="p-6">
              <div className="tracking-wide text-2xl">
                {project.title}
              </div>
              <p className="mt-2">{project.description}</p>
              <div className='flex justify-between items-center'>
                <ul className='mt-4 flex flex-wrap text-sm'>
                  {project.keywords?.map((keyword) => (
                    <li key={keyword} className="inline-block bg-gray-300 rounded-full px-3 py-1 text-xs font-semibold text-gray-700 mr-2 mb-2">
                      {keyword}
                    </li>
                  ))}
                </ul>

                <nav>
                  <ul className="flex flex-wrap">
                    {project.repo &&
                      <li>
                        <a className="text-blue-600 dark:text-blue-400 mx-2" href={project.repo}>
                          Repository
                        </a>
                      </li>
                    }
                    {project.demo &&
                      <li>
                        <a className="text-blue-600 dark:text-blue-400 mx-2" href={project.demo}>
                          Demo
                        </a>
                      </li>
                    }
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      ))}
    </main>
  )
}

export const revalidate = 300;
