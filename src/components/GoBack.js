import React from "react"
import { navigate } from "gatsby"
import AnimatedBack from "../animations/goBack"

const goBack = () => {
  navigate(-1)
}

const goBackButton = () => {
  return (
    <>
      <button
        onClick={goBack}
        className="flex items-center text-gray-800 outline-none lottie-left-arrow focus:outline-none hover:text-gray-900"
      >
        <AnimatedBack />
        <span className="ml-2 font-sans font-bold">Retrodecer una página</span>
      </button>
    </>
  )
}

export default goBackButton
