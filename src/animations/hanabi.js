import lottie from "lottie-web"
import React, { useEffect } from "react"
import Fade from "react-reveal/Fade"
import animateHanabi from "./hanabi.json"

const AnimateHanabiCompoent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animate-hanabi"),
      animationData: animateHanabi,
    })
  }, [])
  return (
    <>
      <Fade delay={100}>
        <div className="flex justify-center opacity-50 ">
          <div id="animate-hanabi" style={{ width: 200, height: 200 }} />
        </div>
      </Fade>
    </>
  )
}

export default AnimateHanabiCompoent
