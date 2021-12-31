import { Card, CardActionArea, CardContent, CardHeader, CardMedia, Container } from "@mui/material";
import matter from "gray-matter";
import fs from 'fs'
import path from 'path'
import Image from 'next/image'

export default function Blog(props: { data: { title: string, description: string, cover_image: string, cover_image_blur: string, slug: string, published: string }[] }) {
  return (
    <>
      <Container style={{ margin: '1em auto' }}>
        {props.data.map((post) => (
          <Card key={post.title} >
            <CardActionArea href={"/blog/"+ post.slug}>
              <CardMedia>
                <div style={{ position: 'relative', width: '80vw', height: '40vh', margin: 'auto' }}>
                  <Image
                    src={post.cover_image}
                    placeholder="blur"
                    blurDataURL={post.cover_image_blur}
                    layout="fill"
                    alt=""
                    objectFit="cover" // or objectFit="cover"
                  />
                </div>
              </CardMedia>
              <CardContent style={{ margin: '0 2em' }}>
                <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <CardHeader title={post.title} />
                  <small>{post.published}</small>
                </span>
                <p style={{ margin: '1em 2em' }}>{post.description}</p>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const files = fs.readdirSync(path.join(process.cwd(), '_posts'))

  const blogdata = files.map(file => {
    const markdownWithMetadata = fs.readFileSync(path.join(process.cwd(), '_posts', file), 'utf8')
    const { data } = matter(markdownWithMetadata)
    return {
      title: data.title,
      description: data.description,
      cover_image: data.cover_image,
      cover_image_blur: data.cover_image_blur,
      published: data.published,
      slug: file.replace('.md', '')
    }
  })

  return {
    props: {
      data: blogdata
    }
  }
}
