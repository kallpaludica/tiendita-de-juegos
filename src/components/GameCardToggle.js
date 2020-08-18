import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { IoMdEye } from "react-icons/io"
import { kebabCase } from "lodash"
import { Link } from "gatsby"

const Toggle = (props) => {
  const [isToggled, setToggle] = useState(false)
  const fade = useSpring({
    transform: isToggled ? "translateY(0px)" : "translateY(300px)",
    config: { mass: 3, tension: 500, friction: 80 },
  })
  return (
    <div>
      <animated.div
        className="absolute inset-0 z-40 flex flex-col items-center justify-center px-4 pt-4 pb-2 bg-white"
        style={fade}
      >
        <h2>{props.title}</h2>
        <div className="w-full text-left md:pl-3 sm:text-center">
          {props.age && (
            <div className="block pb-3 font-serif text-lg font-bold text-green-800">
              Edad {props.age}+
            </div>
          )}
        </div>
        <div className="w-full text-left md:pl-3 sm:text-center">
          <div className="block pb-3 font-serif text-lg font-bold text-green-800">
            {props.duration} min.
          </div>
        </div>
        <div className="w-full text-left md:pl-3 sm:text-center">
          <div className="block pb-3 font-serif text-lg font-bold text-green-800">
            {props.players} jugadores
          </div>
        </div>
      </animated.div>
      <button
        className="relative z-50 flex justify-center w-full px-1 py-1 text-green-500 border-none outline-none hover:text-red-500"
        onClick={() => setToggle(!isToggled)}
      >
        Detalle
      </button>
    </div>
  )
}

export default Toggle
