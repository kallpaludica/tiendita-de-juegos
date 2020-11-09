import lottie from "lottie-web"
import React, { useEffect } from "react"
import AnimateBack from "./left-arrow.json"
import tw from "twin.macro"
import styled from "@emotion/styled"
const AnimateBackComponent = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#animate-arrow-back"),
      animationData: AnimateBack,
    })
  }, [])
  return (
    <Button className="lottie-left-arrow">
      <div id="animate-arrow-back" style={{ width: 30, height: 30 }} />
    </Button>
  )
}

export default AnimateBackComponent

const Button = styled.div`
  ${tw`text-green-500 `}

  .lottie-left-arrow path {
    stroke: #48bb78 !important;
  }
`
