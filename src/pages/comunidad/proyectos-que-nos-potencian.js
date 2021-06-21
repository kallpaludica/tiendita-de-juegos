import React from "react"
import { FcIdea } from "react-icons/fc"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import ComunidadProyectos from "../../components/Queries/QueriesComunidadProyectos"
import ComunidadWidgets from "../../components/Comunidad/HomeWidgets"
import Contact from "../../components/About/Contact"

const ComunidadProyectosPage = () => {
  return (
    <Layout>
      <Seo title="Proyectos que nos potencian" />
      <div className="py-12 mt-20 text-yellow-100 bg-fixed bg-yellow-50 pattern-grid-lg">
        <div className="px-2 mx-auto my-3 max-w-7xl">
          <div className="flex flex-col items-center justify-center py-12 space-y-3">
            <FcIdea className="text-6xl" />
            <h1 className="mb-6 font-mono text-4xl font-bold tracking-wider ">
              Proyectos que nos potencian
            </h1>
            <h2 className="mb-24 font-sans text-xl font-bold text-gray-800">
              Valiosos proyectos que nos rodean día a día.
            </h2>
          </div>
          <ComunidadProyectos />
        </div>
      </div>
      <div className="relative z-50 grid grid-cols-1 gap-3 px-2 pt-6 pb-12 mx-auto my-12 text-center max-w-7xl md:grid-cols-3">
        <ComunidadWidgets />
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadProyectosPage
