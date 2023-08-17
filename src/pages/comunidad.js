//import React, { useEffect } from "react"
import { navigate } from "gatsby"
import React from "react"
import { AwesomeButton } from "react-awesome-button"
import { Helmet } from "react-helmet"
import { FcDocument, FcEngineering, FcIdea } from "react-icons/fc"
import Fade from "react-reveal/Fade"
// import ComunidadRecursos from "../components/Queries/QueriesRecursosLast"
import World from "@components/svgs/connected_world"
import Contact from "../components/About/Contact"
// import QuizApp from "../components/Quiz/QuizApp"
import ComunidadCarouselRecursos from "../components/Carousels/emblaCarouselAlign"
import ComunidadWidgets from "../components/Comunidad/HomeWidgets"
import Layout from "../components/layout"
import ComunidadNotas from "../components/Queries/QueriesComunidadNotasLast"
import ComunidadProyectos from "../components/Queries/QueriesComunidadProyectosLast"
import Seo from "../components/seo"

const ComunidadPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="community" />
      </Helmet>
      <Seo title="Comunidad" />
      <div className="text-green-900 bg-fixed bg-green-800 pattern-grid-lg">
        <div className="relative px-2 py-12 bg-gradient-to-b from-blue-900 to-transparent">
          <div className="grid max-w-2xl grid-cols-1 gap-3 px-3 py-24 pb-12 mx-auto">
            <div className="relative z-50 text-center">
              <h1 className="w-full font-mono text-4xl text-white md:text-6xl">
                Comunidad Kallpa
              </h1>
              <h2 className="w-full mt-4 mb-3 font-sans text-2xl font-bold text-white">
                Un espacio de redes que nos potencian
              </h2>
            </div>
          </div>
          <div className="relative z-50 grid grid-cols-1 gap-3 px-2 mx-auto mb-12 text-center max-w-7xl md:grid-cols-3">
            <ComunidadWidgets />
          </div>
        </div>
        <Fade>
          <div className="absolute left-0 right-0 flex items-center justify-center overflow-hidden -top-24">
          <div className="w-auto h-1/2 opacity-5">
              <World />
            </div>
          </div>
        </Fade>
      </div>
      <div className="py-6 text-blue-100 bg-fixed border-blue-100 bg-blue-50 pattern-grid-lg">
        <div className="px-2 py-12 mx-auto my-3 mb-6 max-w-7xl ">
          <div className="flex flex-col items-center justify-center">
            <FcDocument className="text-6xl" />
            <h2 className="mt-6 mb-12 font-mono text-4xl font-bold text-center text-gray-800">
              Educación y los Juegos de Mesa
            </h2>
          </div>
          <ComunidadNotas />
          <div className="mt-12">
            <AwesomeButton
              onPress={() => {
                navigate(`/comunidad/notas/`)
              }}
              type="secondary"
            >
              Ver todas
            </AwesomeButton>
          </div>
        </div>
      </div>
      <div className="py-12 text-gray-100 bg-fixed bg-white pattern-grid-lg">
        <div className="max-w-full mx-auto my-3 mb-24">
          <div className="flex flex-col items-center justify-center">
            <FcEngineering className="text-6xl" />
            <h2 className="mb-6 font-mono text-3xl font-bold text-left text-gray-700">
              Recursos lúdicos
            </h2>
          </div>
          <ComunidadCarouselRecursos />
          <div className="mt-12">
            <AwesomeButton
              onPress={() => {
                navigate(`/comunidad/recursos/`)
              }}
              type="primary"
            >
              Ver todos
            </AwesomeButton>
          </div>
        </div>
      </div>
      <div className="py-12 pb-40 text-yellow-100 bg-fixed bg-yellow-50 pattern-grid-lg">
        <div className="px-2 mx-auto my-3 max-w-7xl">
          <div className="flex flex-col items-center justify-center py-12 space-y-3">
            <FcIdea className="text-6xl" />
            <h2 className="mb-6 font-mono text-4xl font-bold text-center text-yellow-600">
              Proyectos que nos potencian
            </h2>
          </div>
          <ComunidadProyectos />
          <div className="mt-12">
            <AwesomeButton
              onPress={() => {
                navigate(`/comunidad/proyectos-que-nos-potencian/`)
              }}
              type="primary"
            >
              Ver todos los proyectos
            </AwesomeButton>
          </div>
        </div>
      </div>
      
       {/* <div className="text-indigo-700 bg-indigo-800 pattern-grid-lg ">
        <div className="relative flex flex-col items-center justify-start py-12 md:py-40 from-indigo-700 via-indigo-800 to-transparent bg-gradient-to-b ">
          <div className="relative w-full max-w-md p-3 mx-auto mt-6 overflow-hidden text-indigo-900 bg-indigo-800 pattern-checks-md rounded-xl">
            <QuizApp totalQuestions={1} />
          </div>
        </div>
      </div>  */}
      <Contact />
    </Layout>
  )
}

export default ComunidadPage
