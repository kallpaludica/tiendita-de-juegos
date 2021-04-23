import lottie from "lottie-web"
import React, { useEffect } from "react"
import AnimateBack from "./left-arrow.json"

const AnimateBackComponent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animate-arrow-back"),
      animationData: AnimateBack,
    })
  }, [])
  return (
    <div className="text-gray-800 lottie-left-arrow ">
      <div id="animate-arrow-back" style={{ width: 25, height: 25 }} />
    </div>
  )
}

export default AnimateBackComponent

