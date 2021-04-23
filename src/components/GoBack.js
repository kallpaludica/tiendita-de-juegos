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
        className="flex items-center py-5 text-gray-800 outline-none lottie-left-arrow md:pt-0 focus:outline-none hover:text-gray-900"
      >
        <AnimatedBack />
        <span className="ml-2 font-sans font-bold">Retrodecer una página</span>
      </button>
    </>
  )
}

export default goBackButton
