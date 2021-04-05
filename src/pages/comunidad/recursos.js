import React from "react"
import Contact from "../../components/About/Contact"
import HeroWave from "../../components/HeroWave"
import Layout from "../../components/layout"
import ComunidadRecursos from "../../components/Queries/QueriesComunidadRecursos"
import SEO from "../../components/seo"

const ComunidadRecursosPage = () => {
  return (
    <Layout>
      <SEO title="Recursos lúdicos" />
      <HeroWave
        heading="Recursos lúdicos"
        pattern="bg-teal-700 text-teal-600 text-center"
        back="volver a comunidad"
        backUrl="/comunidad"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <div className="max-w-6xl px-2 mx-auto my-3 mb-24">
        <ComunidadRecursos />
      </div>
      <Contact />
    </Layout>
  )
}

export default ComunidadRecursosPage
