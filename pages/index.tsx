import Head from 'next/head'

import * as React from 'react';


import { Link, Container, Tooltip } from '@mui/material';

import StarBorderIcon from '@mui/icons-material/StarBorder';

export default function Index() {
  return (
    <>
      <Head>
        <title>About - Thomas D. Galligan</title>
        <meta name="description" content="About page for Thomas D. Galligan" />

        {/* opengraph metadatas */}
        <meta property="og:title" content="About - Thomas D. Galligan" />
        <meta property="og:description" content="About page for Thomas D. Galligan, a software developer in Cork, Ireland" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:url" content="https://galligan.dev" />
        <meta property="og:type" content="profile" />

        <meta property="og:profile:first_name" content="Thomas" />
        <meta property="og:profile:last_name" content="Galligan" />
        <meta property="og:profile:username" content="gal" />
        <meta property="og:profile:gender" content="male" />

      </Head>
      <Container maxWidth="md" style={{ paddingBottom: '2em' }}>
        <section style={{ width: '90%', margin: '4em auto 2em auto', fontSize: '1.1rem' }}>
          <h1>Who am I?</h1>
          <p style={{ textAlign: 'center' }}>
            My name is Thomas Daniel Galligan (gal on Github). I am a student software developer studying at <Link color="inherit" href="https://www.ucc.ie">University College Cork</Link> in my 3<sup>rd</sup> year (of 4).
            I mainly dabble in devops, but also make full stack web applications using mostly React, Vue and Golang. I hold the voluntary role of Sysadmin for <Link color="inherit" href="https://netsoc.co">Netsoc</Link>.
            I also teach various languages and technologies at Coderdojo (voluntarily) at IBM in Cork and really enjoy learning from teaching.
          </p>
        </section>

        <section style={{ width: '80%', margin: '2em auto' }}>
          <h3 style={{marginBottom: '1em'}}>What am I doing now?</h3>
          <p>Learning about cloud technologies, learning about networking at scale and distributed systems.</p>
        </section>

        <section style={{ width: '80%', margin: '2em auto' }}>
          <h3>Programming Languages</h3>
          <ul>
            <li>Golang</li>
            <li>Typescript/Javascript</li>
            <li>Python</li>
            <li>Java</li>
          </ul>
        </section>

        <section style={{ width: '80%', margin: '2em auto' }}>
          <h3>Technologies</h3>

          <ul>
            <li>Linux</li>
            <li>Docker/Docker Compose</li>
            <li>Git/Github</li>
            <li>Ansible</li>
            <li>Vue</li>
            <li>React</li>
            <li>REST</li>
            <li>SQL</li>
          </ul>
        </section>

        <section style={{ width: '80%', margin: '2em auto' }}>
          <h3>Reading List</h3>
          <ul>
            <li>
              <Link color="inherit" href="https://www.amazon.co.uk/Programming-Language-Addison-Wesley-Professional-Computing/dp/0134190440">
                The Go Programming Language
              </Link>
            </li>
            <li>
              <Link color="inherit" href="https://sre.google/sre-book">
                Site Reliability Engineering - Free Ebook
              </Link>
            </li>
            <li>
              <Link color="inherit" href="https://goalkicker.com/AlgorithmsBook/">
                GoalKicker Algorithms Book
              </Link>
            </li>
            <li>
              <Link color="inherit" href="https://www.amazon.com/Grokking-Algorithms-illustrated-programmers-curious/dp/1617292230">
                Grokking Algorithms
              </Link>
              <Tooltip title="I recommend this, especially for beginners to software development">
                <StarBorderIcon fontSize="inherit" style={{ margin: '0 0.2em' }} />
              </Tooltip>
            </li>
            <li>
              <Link color="inherit" href="https://www.amazon.co.uk/Cloud-Native-Data-Center-Networking-Architecture/dp/1492045608">
                Cloud Native data-Center Networking
              </Link>
            </li>
            <li>
              <Link color="inherit" href="https://www.amazon.co.uk/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321">
                Designing Data-Intensive Applications
              </Link>
            </li>
          </ul>
        </section>

        <section>
          <h3>Stats</h3>
          <iframe src="https://github-readme-stats.vercel.app/api/wakatime?username=gal&hide=other&langs_count=5&theme=gruvbox" frameBorder="0" />
          <iframe src="https://github-readme-stats.vercel.app/api?username=gal&countprivate=true&count_private=true&show_icons=true&theme=gruvbox" frameBorder="0" />
          <iframe src="https://github-readme-stats.vercel.app/api/top-langs/?username=gal&layout=compact&theme=gruvbox" frameBorder="0" />
        </section>
      </Container>
    </>
  );
}
