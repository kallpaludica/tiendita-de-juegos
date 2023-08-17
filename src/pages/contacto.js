import React from "react"
import { Helmet } from "react-helmet"
import Contact from "@components/About/Contact"
import HeroWave from "@components/HeroWave/HeroWaveContact"
import Layout from "@components/layout"
import Seo from "@components/seo"
import "@styles/AwsBtn.css"
import "@styles/VideoReact.css"

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="ingame contact" />
      </Helmet>
      <Seo title="Contacto" />
      <HeroWave
        heading="Contacto"
        subtitle="¿Tenés una consulta, pregunta o sugerencia? Contamos con los canales para contestarlas."
      />
      <Contact />
    </Layout>
  )
}

export default ContactPage
