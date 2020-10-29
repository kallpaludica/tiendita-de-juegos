import React, { useState } from "react"
import { useSpring, animated } from "react-spring"
import { AiOutlineZoomIn } from "react-icons/ai"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { GiTabletopPlayers } from "react-icons/gi"
import { FaCaretRight } from "react-icons/fa"
//import ReactTooltip from "react-tooltip"

const Toggle = (props) => {
  const [isToggled, setToggle] = useState(false)
  const fade = useSpring({
    transform: isToggled ? "translateX(0px)" : "translateX(500px)",
    config: { mass: 3, tension: 500, friction: 80 },
  })
  const rotate = useSpring({
    transform: `scale(${isToggled ? 1.2 : 1}) rotate(${
      isToggled ? -135 : 0
    }deg) `,
    color: isToggled ? "#3182ce" : "#999",
    config: { mass: 3, tension: 500, friction: 80 },
  })

  return (
    <>
      <animated.div
        className="absolute inset-0 z-40 flex flex-col items-start justify-start px-3 pt-4 pb-2 pr-4 overflow-hidden bg-blue-100 border-2 border-blue-600 rounded-lg"
        style={fade}
      >
        <h2 className="w-full pb-1 mb-3 font-sans text-lg text-left text-blue-600 border-b border-blue-600">
          <span className="pr-2">{props.title}</span>
          {props.publisher && (
            <div className="flex items-center justify-start ">
              <Link
                to={`/editoriales/${kebabCase(props.publisher.slug)}/`}
                className="flex flex-col py-1 mr-2 text-sm opacity-75"
                key={props.publisher.slug}
              >
                <b className="font-sans text-gray-800 underline hover:text-dblue-600">
                  Editorial {props.publisher.title}
                </b>
              </Link>
            </div>
          )}
        </h2>
        {props.age && (
          <div className="w-full text-left">
            <div className="flex justify-center pb-1 font-sans text-lg font-bold text-left text-gray-800 ">
              <FaUserFriends className="w-6 mx-auto mb-1 text-base text-blue-600" />
              <div className="flex flex-col flex-1 pl-3">
                {props.age}+ años
                <small className="text-xs ">Edades sugeridas</small>
              </div>
            </div>
          </div>
        )}
        {props.duration && (
          <div className="w-full text-left">
            <div className="flex justify-center pb-1 font-sans text-lg font-bold text-left text-gray-800 ">
              <IoMdTime className="w-6 mx-auto mb-1 text-2xl text-blue-600" />
              <div className="flex flex-col flex-1 pl-3">
                {props.duration} min.
                <small className="text-xs ">Tiempos de partida</small>
              </div>
            </div>
          </div>
        )}

        {props.players && (
          <div className="w-full text-left">
            <div className="flex justify-center pb-1 font-sans text-lg font-bold text-left text-gray-800 ">
              <GiTabletopPlayers className="w-6 mx-auto mb-1 text-2xl text-blue-600" />
              <div className="flex items-baseline flex-1 pl-3">
                {props.players}{" "}
                <span className="pl-1 text-xs ">jugadores/as</span>
              </div>
            </div>
          </div>
        )}

        <Link
          to={`/juegos/${kebabCase(props.slug)}/`}
          className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 px-3 font-sans text-sm font-bold text-left text-white transition-all duration-500 bg-blue-600 hover:text-white hover:bg-blue-500"
        >
          {props.stock ? (
            <span>Pedilo por encargo</span>
          ) : (
            <span>Consulta este juego</span>
          )}
          <FaCaretRight className="text-lg text-blue-200" />
        </Link>
      </animated.div>

      <button
        className="top-0 right-0 z-40 flex justify-center px-1 py-1 text-gray-800 duration-500 transform border-none rounded-bl-lg focus:outline-none hover:text-blue-500 hover:bg-gray-600"
        onClick={() => setToggle(!isToggled)}
        style={{ backgroundColor: "rgba(255,255,255,.3)" }}
      >
        <animated.span style={rotate}>
          <AiOutlineZoomIn className="text-2xl " />
        </animated.span>
      </button>
    </>
  )
}

export default Toggle
