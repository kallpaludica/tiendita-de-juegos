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
        className="flex text-green-500 outline-none lottie-left-arrow focus:outline-none"
      >
        <AnimatedBack />
      </button>
    </>
  )
}

export default goBackButton
