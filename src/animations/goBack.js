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
    <div className="text-red-800 lottie-left-arrow ">
      <div id="animate-arrow-back" style={{ width: 15, height: 15 }} />
    </div>
  )
}

export default AnimateBackComponent

