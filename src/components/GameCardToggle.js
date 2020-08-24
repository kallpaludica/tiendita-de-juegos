import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { AiOutlinePlusCircle } from "react-icons/ai"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { GiTabletopPlayers } from "react-icons/gi"
import ReactTooltip from "react-tooltip"
import { FaCaretRight } from "react-icons/fa"

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
        className="absolute inset-0 z-40 flex flex-col items-start justify-start px-3 pt-4 pb-2 pr-4 bg-gray-100"
        style={fade}
      >
        <h2 className="w-full h-16 pb-1 mb-3 font-serif text-xl font-bold text-left text-green-600 border-b border-green-600">
          <span className="pr-2">{props.title}</span>
        </h2>
        {props.age && (
          <div className="w-full text-left">
            <div className="flex justify-center pb-1 font-serif text-lg font-bold text-left text-gray-800 ">
              <FaUserFriends className="w-6 mx-auto mb-1 text-base text-green-600" />
              <div className="flex flex-col flex-1 pl-3">
                <small className="text-sm">Edades sugeridas</small>
                {props.age}+ años
              </div>
            </div>
          </div>
        )}
        {props.duration && (
          <div className="w-full text-left">
            <div className="flex justify-center pb-1 font-serif text-lg font-bold text-left text-gray-800 ">
              <IoMdTime className="w-6 mx-auto mb-1 text-2xl text-green-600" />
              <div className="flex flex-col flex-1 pl-3">
                <small className="text-sm">Tiempos de partida</small>
                {props.duration} min.
              </div>
            </div>
          </div>
        )}

        {props.players && (
          <div className="w-full text-left">
            <div className="flex justify-center pb-1 font-serif text-lg font-bold text-left text-gray-800 ">
              <GiTabletopPlayers className="w-6 mx-auto mb-1 text-2xl text-green-600" />
              <div className="flex flex-col flex-1 pl-3">
                {props.players} Jugadores
              </div>
            </div>
          </div>
        )}

        <Link
          to={`/juegos/${kebabCase(props.slug)}/`}
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 px-3 font-serif text-sm font-bold text-left text-green-500 transition-all duration-500 bg-green-100 hover:text-white hover:bg-green-600"
        >
          Consultar por este juego
          <FaCaretRight className="text-lg text-green-200" />
        </Link>
      </animated.div>

      <button
        className="absolute top-0 right-0 z-40 flex justify-center px-1 py-1 text-gray-800 duration-500 transform border-none rounded-bl-lg focus:outline-none hover:text-green-500 hover:bg-gray-600"
        onClick={() => setToggle(!isToggled)}
        data-tip="Más info"
        style={{ backgroundColor: "rgba(255,255,255,.3)" }}
      >
        <ReactTooltip place="left" type="light" effect="solid" />
        <animated.span style={rotate}>
          <AiOutlinePlusCircle className="text-3xl " />
        </animated.span>
      </button>
    </>
  )
}

export default Toggle
