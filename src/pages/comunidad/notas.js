import React from "react"
import Contact from "../../components/About/Contact"
import HeroWave from "../../components/HeroWave"
import Layout from "../../components/layout"
import ComunidadNotas from "../../components/Queries/QueriesComunidadNotas"
import Seo from "../../components/seo"

const ComunidadNotasPage = () => {
  return (
    <Layout>
      <Seo title="Artículos" />
      <HeroWave
        heading="Artículos"
        pattern="bg-indigo-700 text-indigo-600"
        center={true}
        back="volver a comunidad"
        backUrl="/comunidad"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <div className="px-6 mx-auto my-3 mb-24 max-w-7xl">
        <ComunidadNotas />
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadNotasPage