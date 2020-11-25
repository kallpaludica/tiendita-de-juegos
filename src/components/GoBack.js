import React from "react"
import { navigate } from "gatsby"
import AnimatedBack from "../animations/goBack"
import "twin.macro"
const goBack = () => {
  navigate(-1)
}

const goBackButton = () => {
  return (
    <>
      <button
        onClick={goBack}
        tw="flex items-center py-5 text-gray-800 outline-none md:pt-0  focus:outline-none hover:text-gray-900"
        className="lottie-left-arrow"
      >
        <AnimatedBack />
        <span tw="ml-2 font-sans font-bold">Retrodecer una página</span>
      </button>
    </>
  )
}

export default goBackButton
