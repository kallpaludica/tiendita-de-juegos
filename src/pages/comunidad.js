//import React, { useEffect } from "react"
import React from "react"
import {  navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import Fade from "react-reveal/Fade"
import Contact from "../components/About/Contact"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FcIdea, FcDocument, FcEngineering } from "react-icons/fc"
import ComunidadNotas from "../components/Queries/QueriesComunidadNotas"
import ComunidadProyectos from "../components/Queries/QueriesComunidadProyectosLast"
import ComunidadRecursos from "../components/Queries/QueriesRecursosLast"
import World from "../assets/connected_world.svg"
import ComunidadWidgets from "../components/Comunidad/HomeWidgets"

const ComunidadPage = () => {
  return (
    <Layout>
      <Seo title="Comunidad" />
      <div className="text-green-800 bg-green-900 pattern-grid-lg">
        <div className="relative px-2 py-12 bg-gradient-to-b from-blue-900 to-transparent">
          <div className="grid max-w-xl grid-cols-1 gap-3 px-3 py-24 pb-12 mx-auto">
            <div className="text-center">
              <h1 className="w-full font-mono text-5xl text-white">
                Bienvenides a la Comunidad Kallpa.
              </h1>
              <h2 className="w-full mt-4 mb-3 font-sans text-xl font-bold text-white">
                Generando redes que nos potencien.
              </h2>
              <h2 className="w-full mt-4 font-sans text-xl text-white">
                Un espacio donde compartimos valiosos proyectos que nos rodean.
                Recursos lúdicos al alcance de las manos, noticias, entrevistas
                del campo de la Recreación, Educación y los Juegos de Mesa.
              </h2>
            </div>
          </div>
          <div className="relative z-50 grid grid-cols-1 gap-3 px-2 mx-auto my-12 text-center max-w-7xl md:grid-cols-3">
            <ComunidadWidgets/>
          </div>
        </div>
        <Fade>
          <div className="absolute left-0 right-0 flex items-center justify-center overflow-hidden -top-24">
            <World className="w-auto h-1/2 opacity-5" />
          </div>
        </Fade>
      </div>
      <div className="py-12 text-yellow-100 bg-fixed bg-yellow-50 pattern-grid-lg">
        <div className="px-2 mx-auto my-3 mb-24 max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <FcEngineering className="text-6xl" />
            <h2 className="mb-6 font-sans text-3xl font-bold text-left text-gray-700">
              Recursos lúdicos
            </h2>
          </div>
          <ComunidadRecursos />
          <div className="mt-12">
            <AwesomeButton
              action={() => {
                navigate(`/comunidad/recursos/`)
              }}
              type="secondary"
            >
              Ver todos los recursos
            </AwesomeButton>
          </div>
        </div>
      </div>
      <div className="relative z-10 pb-24 transform bg-gradient-to-b from-white to-blue-50">
        <div className="px-2 mx-auto my-3 max-w-7xl">
          <div className="flex flex-col items-center justify-center py-12 space-y-3">
            <FcIdea className="text-6xl" />
            <h2 className="mb-6 font-sans text-4xl font-bold text-left text-yellow-600">
              Proyectos que nos potencian
            </h2>
          </div>
          <ComunidadProyectos />
          <div className="mt-12">
            <AwesomeButton
              action={() => {
                navigate(`/comunidad/proyectos-que-nos-potencian/`)
              }}
              type="primary"
            >
              Ver todos los proyectos
            </AwesomeButton>
          </div>
        </div>
      </div>
      <div className="py-12 text-blue-100 bg-fixed border-t border-blue-100 bg-blue-50 pattern-grid-lg">
        <div className="px-2 py-12 mx-auto my-3 mb-24 max-w-7xl ">
          <div className="flex flex-col items-center justify-center">
            <FcDocument className="text-6xl" />
            <h2 className="mb-6 font-sans text-4xl font-bold text-left text-gray-800">
              Artículos recientes
            </h2>
          </div>
          <div className="mt-6 mb-12">
            <AwesomeButton
              action={() => {
                navigate(`/comunidad/notas/`)
              }}
              type="secondary"
            >
              Ver todas
            </AwesomeButton>
          </div>
          <ComunidadNotas />
        </div>
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadPage
