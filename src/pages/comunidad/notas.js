import React from "react"
import { FcDocument } from "react-icons/fc"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ComunidadNotas from "../../components/Queries/QueriesComunidadNotas"
import ComunidadWidgets from "../../components/Comunidad/HomeWidgets"
import Contact from "../../components/About/Contact"

const ComunidadNotasPage = () => {
  return (
    <Layout>
      <Seo title="Artículos" />
      <div className="py-12 mt-20 text-blue-100 bg-fixed border-t border-blue-100 bg-blue-50 pattern-grid-lg">
        <div className="px-2 py-12 mx-auto my-3 mb-24 max-w-7xl ">
          <div className="flex flex-col items-center justify-center">
            <FcDocument className="text-6xl" />
            <h1 className="mb-6 font-mono text-4xl font-bold tracking-wider text-gray-800">
              Artículos recientes
            </h1>
            <h2 className="mb-24 font-serif text-xl font-bold text-gray-800">
              Noticias y entrevistas del campo de la Recreación
            </h2>
          </div>
          <ComunidadNotas />
        </div>
      </div>
      <div className="relative z-50 grid grid-cols-1 gap-3 px-2 pt-6 pb-12 mx-auto my-12 text-center max-w-7xl md:grid-cols-3">
        <ComunidadWidgets />
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadNotasPage
