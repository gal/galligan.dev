import Head from 'next/head';

import * as React from 'react';
import { Grid, Container, Card, CardHeader, CardContent, IconButton, CardMedia, CardActionArea } from '@mui/material';

import { GitHub } from '@mui/icons-material'
export default function Projects() {

  interface Project {
    name: string,
    description: string,
    image: string,
    github: string,
  }

  const myProjects = [
    {
      name: "TnyIE API",
      description: "A Golang API for a fully-featured link shortener, including features such as traffic statistics, password-protected links, and link unlock times.",
      image: "https://opengraph.githubassets.com/1/tnyie/tny-api",
      github: "https://github.com/tnyie/tny-api"
    },
    {
      name: "TnyIE UI",
      description: "Frontend website for TnyIE, made using VueJS, Vuetify and vue-chartjs. It includes functionality to create highly custom shortened links, view all your created links and view traffic statistics for each link.",
      image: "https://opengraph.githubassets.com/1/tnyie/tny-ui",
      github: "https://github.com/tnyie/tny-ui"
    }
  ]

  const groupProjects = [
    {
      name: "Timber",
      description: "A group project undertaken as part of the Software Engineering module at UCC as part of CK401. Timber is a social networking platform focusing on software developer collaboration. It features a Golang backend and a React frontend.",
      image: "https://opengraph.githubassets.com/1/gal/cs3500",
      github: "https://github.com/gal/cs3500"
    }
  ]

  return (
    <>
      <Head>
        <title>Projects - Thomas D. Galligan</title>
        <meta name="description" content="Thomas D. Galligan's Projects" />

        {/* opengraph metadatas */}
        <meta property="og:title" content="Projects - Thomas D. Galligan" />
        <meta property="og:description" content="A page outlining projects contributed to by Thomas D. Galligan" />
        <meta property="og:locale" content="en_IE" />
        <meta property="og:url" content="https://galligan.dev/projects" />
        <meta property="og:type" content="profile" />

        <meta property="og:profile:first_name" content="Thomas" />
        <meta property="og:profile:last_name" content="Galligan" />
        <meta property="og:profile:username" content="gal" />
        <meta property="og:profile:gender" content="male" />
      </Head>

      <Container
        style={{
          paddingBottom: '2rem',
        }}
      >
        <h1>My Projects</h1>
        <Grid container spacing={2}>
          {myProjects.map((project: Project) => (
            <Grid key={project.name} item xs={6}>
              <Card style={{ height: '500px' }}>
                <CardActionArea href={project.github}>
                  <CardMedia
                    component="img"
                    style={{
                      objectFit: 'contain',
                    }}
                    image={project.image}
                    alt="Project OpenGraph image"
                  />
                  <CardHeader
                    titleTypographyProps={{ variant: 'h4' }}
                    title={project.name}
                    avatar={
                      <IconButton
                        href={project.github}
                      >
                        <GitHub color="success" />
                      </IconButton>
                    }
                  ></CardHeader>
                  <CardContent>
                    <p>{project.description}</p>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <h1>Group Projects</h1>

        <Grid container spacing={2}>
          {groupProjects.map((project: Project) => (
            <Grid key={project.name} item xs={6}>
              <Card style={{ height: '500px' }}>
                <CardMedia
                  component="img"
                  style={{
                    objectFit: 'contain',
                  }}
                  image={project.image}
                  alt="Project OpenGraph image"
                />
                <CardHeader
                  titleTypographyProps={{ variant: 'h4' }}
                  title={project.name}
                  avatar={

                    <IconButton
                      href={project.github}
                    >
                      <GitHub color="success" />
                    </IconButton>
                  }
                ></CardHeader>
                <CardContent>
                  <p>{project.description}</p>
                </CardContent>

              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </>
  )
}