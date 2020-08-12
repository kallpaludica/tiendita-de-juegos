import React from "react"
import { useLightbox } from "simple-react-lightbox"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { IoIosImages } from "react-icons/io"

const OpenGallery = (props) => {
  // Custom Hook
  const { openLightbox } = useLightbox()

  return (
    <>
      <Button onClick={() => openLightbox()}>
        <IoIosImages className="mr-3 text-2xl " />
        Ver galería de fotos
      </Button>
    </>
  )
}

export default OpenGallery

const Button = styled.button`
  ${tw`flex flex-row items-center justify-start pr-6 my-2 text-sm font-bold text-center text-orange-500 transition-all duration-500 md:flex-col hover:text-orange-600 sm:flex-row`}
`
