import React from "react"
import { navigate } from "gatsby"
import AnimatedBack from "@animations/goBack"

const goBack = () => {
  navigate(-1)
}

const goBackButton = () => {
  return (
    <>
      <button
        onClick={goBack}
        className="btn "
      >
        <AnimatedBack />
        <span className="flex items-start justify-start ml-2 font-sans font-bold text-left md:flex-col">Retroceder una página</span>
      </button>
    </>
  )
}

export default goBackButton
