import ImageGallery from '@/components/photography/ImageGallery';
import Head from 'next/head';
import Image from 'next/image'

export default function Photography() {
  const HERO_PHOTO = "https://d2kxt83yjeiafa.cloudfront.net/albums2/regular/DSC00658.webp";

  return (
    <div className=''>
      <Head>
        <link rel="preload" href={HERO_PHOTO} as="image" />
      </Head>
      <div className='min-h-[90dvh] w-full relative'>
        <Image loading="eager" priority fill={true} alt='' src={HERO_PHOTO} className='object-cover' />
        <div className='absolute w-full h-full flex items-center justify-center bg-black/40'>
          <h1 className='text-5xl md:text-7xl lg:text-9xl text-center'>
            Photography
          </h1>

        </div>
      </div>

      <ImageGallery />
    </div>
  );
}
