"use client";

import { useState } from "react";

interface GalleryProps {
  domain: string;
  columns: GalleryImage[][];
}

const Gallery = (props: GalleryProps) => {
  const [modalImg, setModalImg] = useState<null | string>(null)
  const [currentIndex, setCurrentIndex] = useState<null | number>(null)
  const flattened = props.columns.flat();
  flattened.sort((a, b) => a.index as number - (b.index as number))

  const goRight = () => {
    console.log(currentIndex)
    if (currentIndex != null) {
      var nextIndex = currentIndex;
      for (let i = 0; i < flattened.length; i++) {
        if (currentIndex == flattened[i].index && currentIndex < flattened.length - 1) {
          nextIndex = (currentIndex + 1)
        }
      }
      const nextImg = flattened[nextIndex]

      setModalImg(`https://${props.domain}/preview/${nextImg.url}`)
      setCurrentIndex(nextIndex)
    } else {
      console.log("no current index")
    }
  }

  const goLeft = () => {
    if (currentIndex != null) {
      var nextIndex = currentIndex;
      for (let i = 0; i < flattened.length; i++) {
        if (currentIndex == flattened[i].index && currentIndex > 0) {
          nextIndex = (currentIndex - 1)
        }
      }
      console.log(nextIndex)
      const nextImg = flattened[nextIndex]
      console.log(flattened[nextIndex])

      setModalImg(`https://${props.domain}/preview/${nextImg.url}`)
      setCurrentIndex(nextIndex)
    } else {
      console.log("no current index")
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
        className="py-20 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto ">
        {props.columns.map((column, i) => (
          <div key={i} className="grid gap-4 float-left">
            {column.map((image, j) => (
              <div key={`${i}${j}`}>
                <img data-index={image.index}
                  onClick={(e) => {
                    console.log(parseInt(e.currentTarget?.getAttribute("data-index") as string))
                    setModalImg(e.currentTarget.getAttribute("src"))
                    setCurrentIndex(parseInt(e.currentTarget?.getAttribute("data-index") as string))
                  }} className="cursor-pointer w-full h-auto" src={`https://${props.domain}/preview/${image.url}`} alt=""></img>
              </div>
            ))}
          </div>
        ))}
        <div id="modal"
          onClick={() => { setModalImg(null) }}

          className={`${modalImg == null ? "hidden" : "block"} fixed z-0 flex items-center justify-center left-0 right-0 
            top-0 bottom-0 w-[calc(100dvw)] h-[calc(100dvh)] bg-black bg-opacity-60 backdrop-blur-sm`}>

          <div id="wrapper" className="relative max-w-6xl max-h-full" onClick={(e) => { e?.stopPropagation() }}>

            <img src={modalImg as string}
              className="object-cover" alt="modal" />

            <a
              className="absolute top-[100%] text-gray-300 bg-black bg-opacity-10 py-2 px-4 rounded"
              href={(modalImg as string)?.replace("preview", "fullsize")} target="_blank"
            >Open full image</a>

            <button className="absolute -left-20 top-0 bottom-0 text-3xl"
              onClick={(_) => {
                console.log({ currentIndex })
                goLeft()
              }}
            >&larr;</button>
            <button className="absolute -right-20 top-0 bottom-0 text-3xl"
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