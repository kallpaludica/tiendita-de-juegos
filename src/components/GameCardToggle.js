import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Link } from "gatsby"
import { kebabCase } from "lodash"

const Toggle = (props) => {
  const [isToggled, setToggle] = useState(false)
  const fade = useSpring({
    transform: isToggled ? "translateY(0px)" : "translateY(-350px)",
    config: { mass: 3, tension: 500, friction: 80 },
  })
  const rotate = useSpring({
    transform: `rotate(${isToggled ? 225 : 0}deg)`,
    config: { mass: 3, tension: 500, friction: 80 },
  })

  return (
    <div>
      <animated.div
        className="absolute inset-0 z-40 flex flex-col items-start justify-start px-4 pt-4 pb-2 bg-green-100"
        style={fade}
      >
        <h2 className="mb-3 font-serif text-lg font-bold text-left text-green-600">
          {props.title}
        </h2>
        <div className="w-full text-left">
          {props.age && (
            <div className="block pb-3 font-serif text-lg font-bold text-green-800">
              Edad {props.age}+
            </div>
          )}
        </div>
        <div className="w-full text-left">
          <div className="block pb-3 font-serif text-lg font-bold text-green-800">
            {props.duration} min.
          </div>
        </div>
        <div className="w-full text-left">
          <div className="block pb-3 font-serif text-lg font-bold text-green-800">
            {props.players} jugadores
          </div>
        </div>
        <Link
          className="font-serif underline uppercase"
          to={`/juegos/${kebabCase(props.slug)}/`}
        >
          Consulta por este juego
        </Link>
      </animated.div>
      <button
        className="relative z-50 flex justify-center w-full px-1 py-1 pb-3 text-green-500 border-none focus:outline-none hover:text-green-800"
        onClick={() => setToggle(!isToggled)}
        style={rotate}
      >
        <animated.span style={rotate}>
          <AiOutlinePlusCircle className="text-3xl" />
        </animated.span>
      </button>
    </div>
  )
}

export default Toggle
