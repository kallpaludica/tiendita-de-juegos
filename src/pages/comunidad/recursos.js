import Contact from "@components/About/Contact"
import ComunidadWidgets from "@components/Comunidad/HomeWidgets"
import Layout from "@components/layout"
import ComunidadRecursos from "@components/Queries/QueriesComunidadRecursos"
import Seo from "@components/seo"
import React from "react"
import { Helmet } from "react-helmet"
import { FcEngineering } from "react-icons/fc"


const ComunidadRecursosPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <Seo title="Recursos lúdicos" />
      <div className="pt-20 pb-24 text-gray-100 bg-fixed bg-white pattern-grid-lg">
        <div className="py-6 pt-6 mx-auto mb-6 bg-yellow-100 bg-opacity-90">
          <div className="flex flex-col items-start justify-center max-w-4xl px-2 mx-auto">
            <h1 className="flex items-center justify-start font-mono text-4xl font-bold tracking-wider text-amber-500">
              <FcEngineering className="mr-3 text-6xl" />
              Recursos lúdicos
            </h1>
          </div>
        </div>
        <ComunidadRecursos />
      </div>
      <div className="relative z-50 grid grid-cols-1 gap-3 px-2 pt-6 pb-24 mx-auto my-12 text-center max-w-7xl md:grid-cols-3">
        <ComunidadWidgets />
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadRecursosPage
