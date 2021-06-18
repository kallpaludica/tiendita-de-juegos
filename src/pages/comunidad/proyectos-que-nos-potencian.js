import React from "react"
import Contact from "../../components/About/Contact"
import HeroWave from "../../components/HeroWave"
import Layout from "../../components/layout"
import ComunidadProyectos from "../../components/Queries/QueriesComunidadProyectos"
import Seo from "../../components/seo"

const ComunidadProyectosPage = () => {
  return (
    <Layout>
      <Seo title="Proyectos que nos potencian" />
      <HeroWave
        heading="Proyectos que nos potencian"
        pattern="bg-indigo-700 text-indigo-600"
        center={true}
        back="volver a comunidad"
        backUrl="/comunidad"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <div className="max-w-6xl px-6 mx-auto my-3 mb-24">
        <ComunidadProyectos />
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadProyectosPage