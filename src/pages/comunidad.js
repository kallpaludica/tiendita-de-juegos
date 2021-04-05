import React from "react"
import { Link } from "gatsby"
import Contact from "../components/About/Contact"
import HeroWave from "../components/HeroWave"
import Layout from "../components/layout"
import Comunidad from "../components/Queries/QueriesComunidad"
import SEO from "../components/seo"

const ComunidadPage = () => {
  return (
    <Layout>
      <SEO title="Inicio" />
      <HeroWave
        heading="Comunidad"
        pattern="bg-teal-700 text-teal-600 text-center"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <div className="flex flex-col items-center justify-start max-w-6xl mx-auto mb-12 text-left md:flex-row">
        <span className="block m-3 mr-6 font-sans text-xl font-bold leading-tight text-gray-900 duration-500 border-b-2 border-gray-100 hover:border-green-600 hover:text-green-600">Categorias</span>
        <Link
          className="block m-3 mr-6 font-sans text-xl font-semibold leading-tight text-gray-900 duration-500 border-b-2 border-gray-900 hover:border-green-600 hover:text-green-600"
          to={`/comunidad/proyectos-que-nos-potencian/`}
        >
          Proyectos que nos potencian
        </Link>
        <Link
          className="block m-3 mr-6 font-sans text-xl font-semibold leading-tight text-gray-900 duration-500 border-b-2 border-gray-900 hover:border-green-600 hover:text-green-600"
          to={`/comunidad/recursos/`}
        >
          Recursos lúdicos
        </Link>
        <Link
          className="block m-3 mr-6 font-sans text-xl font-semibold leading-tight text-gray-900 duration-500 border-b-2 border-gray-900 hover:border-green-600 hover:text-green-600"
          to={`/comunidad/notas/`}
        >
          Notas y novedades
        </Link>
      </div>
      <div className="max-w-6xl px-2 mx-auto my-3 mb-24">
        <Comunidad />
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadPage
