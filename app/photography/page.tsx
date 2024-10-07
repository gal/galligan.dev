import ImageGallery from '@/components/photography/ImageGallery';
import { Metadata } from 'next';
import Head from 'next/head';
import Image from 'next/image'


const TITLE = "Photography | Thomas Galligan"
const DESC = `Amateur photography`

export const metadata: Metadata = {
  title: TITLE,
  authors: [{name: "Thomas Galligan", url: "https://galligan.dev"}],
  description: DESC,
  robots: "index, follow", 
  openGraph: {
    type: "profile",
    description: DESC,
    firstName: "Thomas",
    lastName: "Galligan",
    title: TITLE,
    url: "https://galligan.dev"
  },
  keywords: "photography, amateur photography, lens art, personal website, portfolio"
};

export default function Photography() {
  const HERO_PHOTO = "https://d2kxt83yjeiafa.cloudfront.net/albums2/regular/DSC00658.webp";

  return (
    <div className=''>
      <Head>
        <link rel="preload" href={HERO_PHOTO} as="image" />
      </Head>
      <div className='h-[90dvh] w-full relative'>
        <div className='overlay relative w-full h-full flex items-center justify-center'>
          <Image
            className='absolute object-cover'
          src={HERO_PHOTO} fill={true} priority loading="eager" alt='Hero image, showing a photo of stained glass' />
          <h1 className='z-30 text-white text-bold text-5xl md:text-7xl lg:text-9xl text-center'>
            Photography
          </h1>

        </div>
      </div>

      <ImageGallery />
    </div>
  );
}
