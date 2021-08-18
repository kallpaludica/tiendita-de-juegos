import React from "react"
import { Link } from "gatsby"
import { navigate } from "gatsby"
import Fade from "react-reveal/Fade"
import ComunidadWidgets from "./HomeWidgets"
import World from "../../assets/connected_world.svg"
import { AwesomeButton } from "react-awesome-button"
import { FiChevronRight } from "react-icons/fi"
import { FcGlobe } from "react-icons/fc"
const HeroComunidad = ({ children }) => {
  return (
    <>
      <div className="relative text-green-900 bg-fixed bg-white pattern-grid-lg">
        <div className="relative px-2 pb-12 bg-white">
          <div className="grid max-w-4xl grid-cols-1 gap-3 px-3 py-6 pb-6 mx-auto">
            <div className="relative z-50 flex flex-col items-center justify-center text-center">
              <FcGlobe className="mb-1 text-6xl" />
              <h1 className="w-full font-mono text-4xl text-blue-600 md:text-6xl">
                Comunidad
              </h1>
            </div>
          </div>
          <h2 className="w-full mt-1 mb-3 font-sans text-2xl font-bold text-gray-800">
            Conocé un espacio de redes que nos potencian
          </h2>
          <div className="relative z-10">
            <Fade bottom delay={100}>
              <AwesomeButton
                action={() => {
                  navigate(`/comunidad`)
                }}
                type="secondary"
              >
                Entrar a la comunidad
                <FiChevronRight className="inline-block mt-1 ml-3" />
              </AwesomeButton>
            </Fade>
          </div>
          <div className="relative z-50 grid grid-cols-1 gap-3 px-2 mx-auto mt-12 mb-12 text-center max-w-7xl md:grid-cols-3">
            <ComunidadWidgets />
          </div>
        </div>
        <Fade>
          <div className="absolute left-0 right-0 z-0 flex items-center justify-center overflow-hidden -top-40">
            <World className="w-auto h-1/2 opacity-5" />
          </div>
        </Fade>
      </div>
    </>
  )
}

export default HeroComunidad
