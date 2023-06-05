"use client";

import { GalleryImage } from "@/types";
import { useState } from "react";

interface GalleryProps {
  domain: string;
  images: GalleryImage[];
}

const Gallery = (props: GalleryProps) => {
  const [modalImg, setModalImg] = useState<null | string>(null)
  const [currentIndex, setCurrentIndex] = useState<null | number>(null)

  const goRight = () => {
    if (currentIndex != null) {
      var nextIndex = currentIndex;

      if (currentIndex < props.images.length - 1) {
        nextIndex++
        setModalImg(`https://${props.domain}/preview/${props.images[nextIndex].url}`)
        setCurrentIndex(nextIndex)
      }
    }
  }

  const goLeft = () => {
    if (currentIndex != null) {
      var nextIndex = currentIndex;

      if (currentIndex > 0) {
        nextIndex--
        setModalImg(`https://${props.domain}/preview/${props.images[nextIndex].url}`)
        setCurrentIndex(nextIndex)
      }
    }
  }

  return (
    <>
      <main tabIndex={0}
        onKeyDown={(e) => {
          if (currentIndex != null) {
            switch (e.key) {
              case "ArrowRight":
                goRight()
                break;
              case "ArrowLeft":
                goLeft()
            }
          }
        }}
        className="py-20 max-w-5xl mx-auto ">

        <div className='columns-1 md:columns-3 lg:columns-4 gap-2'>
          {props.images.map((image, i) => (
            <img
              src={`https://${props.domain}/preview/${image.url}`}
              alt={image.alt}
              className='w-full h-fit mb-2 cursor-pointer'
              key={i} data-index={i}
              onClick={(e) => {
                setModalImg(e.currentTarget.getAttribute("src"))
                setCurrentIndex(parseInt(e.currentTarget.getAttribute("data-index") as string))
              }}
            />
          ))}
        </div>

        <div id="modal"
          onClick={() => { setModalImg(null) }}

          className={`${modalImg == null ? "hidden" : "block"} fixed z-0 flex items-center justify-center left-0 right-0 
            top-0 bottom-0 w-[calc(100dvw)] h-[calc(100dvh)] bg-black bg-opacity-60 backdrop-blur-sm`}>

          <div id="wrapper" className="relative max-w-6xl max-h-full" onClick={(e) => { e?.stopPropagation() }}>

            <img src={modalImg as string}
              className="object-cover" alt="modal" />

            <a
              className="absolute top-[100%] text-gray-300 bg-black bg-opacity-10 py-1 px-2 rounded"
              href={(modalImg as string)?.replace("preview", "fullsize")} target="_blank"
            >Open full image</a>

            <button disabled={currentIndex == 0} className={`absolute -left-20 top-0 bottom-0 text-3xl ${currentIndex == 0 ? "text-gray-400" : ""}`}
              onClick={(_) => {
                goLeft()
              }}
            >&larr;</button>
            <button disabled={currentIndex == (props.images.length - 1)}
              className={`absolute -right-20 top-0 bottom-0 text-3xl ${currentIndex == (props.images.length - 1) ? "text-gray-400" : ""}`}
              onClick={(_) => {
                goRight()
              }}
            >&rarr;</button>
          </div>

        </div>
      </main>
    </>
  )
}

export default Gallery
