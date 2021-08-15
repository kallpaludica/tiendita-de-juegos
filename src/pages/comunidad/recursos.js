import React from "react"
import { FcEngineering } from "react-icons/fc"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ComunidadRecursos from "../../components/Queries/QueriesComunidadRecursos"
import ComunidadWidgets from "../../components/Comunidad/HomeWidgets"
import Contact from "../../components/About/Contact"

const ComunidadRecursosPage = () => {
  return (
    <Layout>
      <Seo title="Recursos lúdicos" />
      <div className="px-2 pb-24 mt-20 text-yellow-100 bg-fixed bg-yellow-50 pattern-grid-lg">
        <div className="px-2 py-12 mx-auto my-3 mb-24 bg-yellow-500 bg-opacity-40">
          <div className="flex flex-col items-center justify-center">
            <FcEngineering className="text-6xl" />
            <h1 className="mb-6 font-mono text-3xl font-bold tracking-wider text-gray-700">
              Recursos lúdicos
            </h1>
            <h2 className="mb-6 font-serif text-xl font-bold text-gray-700">
              Para jugar al alcance de la mano.
            </h2>
          </div>
        </div>
        <ComunidadRecursos />
      </div>
      <div className="relative z-50 grid grid-cols-1 gap-3 px-2 pt-6 pb-12 mx-auto my-12 text-center max-w-7xl md:grid-cols-3">
        <ComunidadWidgets />
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadRecursosPage
