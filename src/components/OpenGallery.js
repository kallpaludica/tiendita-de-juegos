import React from "react"
import { useLightbox } from "simple-react-lightbox"
import { IoIosImages } from "react-icons/io"

const OpenGallery = (props) => {
  // Custom Hook
  const { openLightbox } = useLightbox()

  return (
    <>
      <button
        onClick={() => openLightbox()}
        className="flex flex-row items-center justify-start pr-6 my-2 text-sm font-bold text-center text-yellow-500 transition-all duration-500 md:flex-col hover:text-yellow-600 sm:flex-row"
      >
        <IoIosImages className="mr-3 text-2xl " />
        Ver galería de fotos
      </button>
    </>
  )
}

export default OpenGallery
