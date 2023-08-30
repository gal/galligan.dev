'use client'

import { Album } from "@/types"
import { useState } from "react"

export default function ShareBtn(props: { album: Album }) {

  const [copied, setCopied] = useState(false)

  const afterCopied = async () => {
    console.log("Copied");
    
    setCopied(true)
    await setTimeout(function(){ setCopied(false) }, 3000)
    // setCopied(false)
    console.log("Ended");
    
  }

  return (
    <>
      <button
        className="outline-none border-none my-6"
        onClick={() => {
          if (navigator.share) {
            navigator.share({
              title: props.album.name,
              text: props.album.description,
              url: window.location.href,
            })
          } else {
            navigator.clipboard.writeText(window.location.href);
            afterCopied();
          }
        }}
      >
        Share
      </button>

      <div className={`bg-black flex justify-center items-center fixed bottom-0 left-0 w-full h-16 ${copied ? "" : "hidden"}`}>
        Link copied to clipboard
      </div>
    </>
  )
}