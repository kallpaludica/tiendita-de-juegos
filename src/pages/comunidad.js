import React from "react"
import { Link } from "gatsby"
import Contact from "../components/About/Contact"
import HeroWave from "../components/HeroWave"
import Layout from "../components/layout"
import Comunidad from "../components/Queries/QueriesComunidad"
import Seo from "../components/seo"
import { FcIdea, FcCalendar, FcEngineering } from "react-icons/fc"
const ComunidadPage = () => {
  return (
    <Layout>
      <Seo title="Comunidad" />
      <HeroWave
        heading="🌎 Comunidad"
        center={true}
        pattern="bg-indigo-700 text-indigo-600"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <div className="flex flex-col items-center justify-center mx-auto mt-12 mb-12 text-center max-w-7xl md:flex-row">
        <Link
          className="flex flex-col items-center justify-center w-full max-w-xs py-3 m-3 mr-6 font-sans text-xl font-semibold leading-tight text-gray-900 duration-500 transform scale-95 shadow-lg hover:shadow-2xl hover:border-indigo-600 hover:text-indigo-600"
          to={`/comunidad/proyectos-que-nos-potencian/`}
        >
          <FcIdea className="text-6xl" />
          <h2 className="mb-3 font-sans text-2xl font-bold">Proyectos</h2>
          <p>Ideas que nos potencian</p>
        </Link>
        <Link
          className="flex flex-col items-center justify-center w-full max-w-xs py-3 m-3 mr-6 font-sans text-xl font-semibold leading-tight text-gray-900 duration-500 transform scale-105 shadow-lg hover:shadow-2xl hover:border-indigo-600 hover:text-indigo-600"
          to={`/comunidad/recursos/`}
        >
          <FcEngineering className="text-6xl" />
          
          <h2 className="mb-3 font-sans text-2xl font-bold">Recursos lúdicos</h2>
          <p>juegos para descargar</p>
        </Link>
        <Link
          className="flex flex-col items-center justify-center w-full max-w-xs py-3 m-3 mr-6 font-sans text-xl font-semibold leading-tight text-gray-900 duration-500 transform scale-95 shadow-lg hover:shadow-2xl hover:border-indigo-600 hover:text-indigo-600"
          to={`/comunidad/notas/`}
        >
          <FcCalendar className="text-6xl" />
          <h2 className="mb-3 font-sans text-2xl font-bold">Notas</h2>
          <p>Historias y Novedades</p>
        </Link>
      </div>
      <div className="px-2 mx-auto my-3 mb-24 max-w-7xl">
        <h2 className="mb-3 font-sans text-4xl font-bold text-center">Subido recientemente</h2>
        <Comunidad />
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadPage
