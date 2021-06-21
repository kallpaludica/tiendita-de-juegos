import React from "react"
import { Helmet } from "react-helmet"
import Contact from "../components/About/Contact"
import HeroWave from "../components/HeroWave"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/AwsBtn.css"
import "../styles/VideoReact.css"

const ContactPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <Seo title="Contacto" />
      <HeroWave
        heading="Contacto"
        pattern="bg-green-800 text-green-900"
        subtitle="¿Tenés una consulta, pregunta o sugerencia? Tenemos canales para contestarlas"
      />
      <Contact />
    </Layout>
  )
}

export default ContactPage
