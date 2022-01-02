
import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'

import matter from 'gray-matter'
import { marked } from 'marked'
import fs from 'fs'
import path from 'path'

import styles from './[slug].module.css'


interface Props {
  meta: {
    [key: string]: string;
  },
  content: string
}

export default function Post(props: Props) {
  return (
    <>
      <Head>
        <link rel="preload" as="font" href="https://fonts.googleapis.com/css?family=Open+Sans:400,300,300italic,400italic,600,600italic,700,700italic&display=swap" />

        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Thomas Daniel Galligan" />
        <meta name="robots" content="index, follow" />

        <title>{props.meta.title}</title>

        <meta name="description" content={props.meta.description} />

        <meta property="og:title" content={props.meta.title} />
        <meta property="og:description" content={props.meta.description} />
        <meta property="og:url" content={props.meta.url} />
        <meta property="og:site_name" content="Thomas Daniel Galligan's Blog" />


        <meta property="og:image" content={props.meta.cover_image} />

        <meta property="og:type" content="article" />
        <meta property="article:author" content="Thomas Daniel Galligan" />
        <meta property="article:published_time" content={props.meta.published} />
        <meta property="article:modified_time" content={props.meta.modified} />
        <meta property="article:section" content={props.meta.tags.split(",")[0]} />

        // meta entry for each tag
        {props.meta.tags.split(",").map((tag) => (
          <meta key={tag} property="article:tag" content={tag} />
        ))}


        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={props.meta.title} />
        <meta name="twitter:description" content={props.meta.description} />
        <meta name="twitter:image" content={props.meta.cover_image} />
        <meta name="twitter:creator" content="@thomas007g" />

        <meta name="twitter:domain" content="galligan.dev" />
        <meta name="twitter:image:alt" content="Thomas Daniel Galligan's Blog" />
        <Script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2145602537507302"
          crossOrigin="anonymous"></Script>
      </Head>
      <figure style={{ position: 'relative', width: '100%', height: '50vh', left: 0, right: 0, margin: 0, padding: 'none' }}>
        <Image
          src={props.meta.cover_image}
          blurDataURL={props.meta.cover_image_blur}
          placeholder="blur"
          loading="eager"
          layout="fill"
          objectFit='cover'
          alt=""
        />
      </figure>
      <article className={styles.content}>
        <div id="content">
          <h1>{props.meta.title}</h1>
          <div className={styles.meta}>
            <p>{props.meta.author}</p>
            <p>Published: {props.meta.published}</p>
          </div>
          <section dangerouslySetInnerHTML={{ __html: props.content }} />
        </div>
      </article>
      <Script src="/static/prism.js" strategy='lazyOnload' />
      <link rel="stylesheet" href="/static/prism.css" />
    </>
  )
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
  const bytes = fs.readFileSync(path.join(process.cwd(), "_posts", params.slug + ".md"), 'utf8')
  const { data, content } = matter(bytes)

  return {
    props: {
      meta: data,
      content: marked(content)
    },
    revalidate: 10,
  }
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join(process.cwd(), '_posts'))
  return {
    paths: files.map(file => {
      return {
        params: {
          slug: file.replace('.md', '')
        }
      }
    }),
    fallback: false
  }
}
