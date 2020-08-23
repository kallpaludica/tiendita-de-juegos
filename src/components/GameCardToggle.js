import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { GiTabletopPlayers } from "react-icons/gi"
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
    <>
      <animated.div
        className="absolute inset-0 z-40 flex flex-col items-start justify-start px-3 pt-4 pb-2 bg-gray-100"
        style={fade}
      >
        <h2 className="w-full pb-2 mb-3 font-serif text-lg font-bold text-left text-gray-900 border-b border-gray-500">
          {props.title}
        </h2>
        <div className="w-full text-left">
          {props.age && (
            <div className="flex pb-3 font-serif text-lg font-bold text-gray-800 ">
              <FaUserFriends className="w-6 mt-1 mr-3 text-base " />
              Edad {props.age}+
            </div>
          )}
        </div>
        <div className="w-full text-left">
          <div className="flex pb-3 font-serif text-lg font-bold text-gray-800 ">
            <IoMdTime className="w-6 mt-1 mr-3 text-lg " />
            {props.duration} min.
          </div>
        </div>
        <div className="w-full text-left">
          <div className="flex pb-3 font-serif text-lg font-bold text-gray-800 ">
            <GiTabletopPlayers className="w-6 mt-1 mr-3 text-xl " />
            {props.players} jugadores
          </div>
        </div>
        <Link
          className="absolute bottom-0 left-0 right-0 py-2 font-serif text-sm font-bold text-center text-white uppercase transition-all duration-500 bg-green-500 hover:text-white hover:bg-green-600"
          to={`/juegos/${kebabCase(props.slug)}/`}
        >
          Hacé tu consulta
        </Link>
      </animated.div>
      <button
        className="absolute top-0 right-0 z-50 flex justify-center w-8 px-1 py-4 text-gray-800 border-none focus:outline-none hover:text-green-800 "
        onClick={() => setToggle(!isToggled)}
      >
        <animated.span style={rotate}>
          <AiOutlinePlusCircle className="text-2xl " />
        </animated.span>
      </button>
    </>
  )
}

export default Toggle
