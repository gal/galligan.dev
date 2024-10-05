"use client"

import Image, { ImageLoaderProps } from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react"

export default function ImageGallery() {
  const [zoomedImage, setZoomedImage] = useState<number | undefined>();


  const CLOUDFRONT_BASE_URL = "https://d2kxt83yjeiafa.cloudfront.net/albums2"
  const photographs = [
    "A7401740", "DSC00232", "DSC00231", "DSC00268",
    "A7401752", "DSC00503", "DSC00432", "DSC00709",
    "A7403158", "DSC00789", "DSC00294", "DSC00278",
    "DSC00632", "DSC00777", "DSC00630", "DSC00616",
    "DSC00103", "DSC01119", "DSC00658", "DSC00650",
    "DSC00656", "DSC00674", "DSC00785", "DSC00749",
    "DSC00958", "DSC00954", "DSC00975", "DSC00421",
    "DSC00705", "DSC00626", "DSC00708"]

  const getPreview = (photo: string) => {
    return `${CLOUDFRONT_BASE_URL}/preview/${photo}.webp`
  }
  const getRegular = (photo: string) => {
    return `${CLOUDFRONT_BASE_URL}/regular/${photo}.webp`
  }

  const getHd = (photo: string) => {
    return `${CLOUDFRONT_BASE_URL}/hd/${photo}.jpg`
  }

  const cloudfrontLoader = (
    { src, quality }: ImageLoaderProps) => {

    switch (quality) {
      case 50:
        return getPreview(src);
      case 100:
        return getHd(src);
      default:
        return getRegular(src);
    }
  }

  const handleKeyDown = (e: KeyboardEvent) => {
    const key = e.key;
    switch (key) {
      case "Escape":
        setZoomedImage(undefined)
        break;
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown, true);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [zoomedImage])

  useEffect(() => {
    console.log(`Changed to ${zoomedImage}`)
  }, [zoomedImage])

  return (
    <div>
      <div className="flex flex-col items-center gap-24 pb-32" >
        <div className="w-full border-box p-4 grid-flow-row-dense columns-2 md:columns-3 lg:columns-5 gap-1 md:gap-2">
          {photographs.map((photo, i) => {
            return (
              <div title={photo} key={photo} className="cursor-pointer transition-all duration-100 hover:scale-[101%] photo-container w-full mb-1 md:mb-2 relative" onClick={() => { setZoomedImage(i) }}>
                <Image loading="lazy" className='mx-auto' width={500} height={500} src={photo} alt="asdf" quality={50} loader={cloudfrontLoader} />
              </div>
            );
          })}
        </div>
      </div>

      {zoomedImage !== undefined && (
        <div onKeyDown={(e) => { if (e.key == "Escape") setZoomedImage(undefined) }} onClick={() => setZoomedImage(undefined)} className="z-50 fixed top-[10dvh] right-0 left-0 bottom-0 bg-black/90 w-full h-[100dvh]">
          <header className='w-full top-[10dvh] h-[5dvh] left-0 right-0 '>
            <div className='px-4 w-full h-full flex justify-between items-center text-lg'>
              <Link target='_blank' href={getHd(photographs[zoomedImage])} >
                <h1 className='inline mx-2'>
                  {photographs[zoomedImage]}
                </h1>
                <span className='light text-xs'>
                  Click to see full image in new tab
                </span>
              </Link>

              <button onClick={() => setZoomedImage(undefined)}>X</button>
            </div>
          </header>
          <div className='relative w-full'>
            <main onClick={() => { setZoomedImage(undefined) }} className='cursor-zoom-out relative h-[85dvh]'>
              <Image
                placeholder='blur'
                blurDataURL={getPreview(photographs[zoomedImage])}
                className='object-contain' src={photographs[zoomedImage]} fill={true} alt={''} loader={cloudfrontLoader} quality={100} />
            </main>
          </div>
        </div>
      )}
    </div>
  )
}