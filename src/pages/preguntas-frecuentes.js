import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Faq from "../components/About/Faq"
import "../styles/AwsBtn.css"
import "../styles/VideoReact.css"

const ConsultaVirtualPage = () => {
  return (
    <Layout>
      <Seo title="Consultas virtuales" />
      <div id="faq" className="min-h-screen py-12 from-indigo-700 to-indigo-400 bg-gradient-to-br bg-pattern">
        <h2 className="pt-24 font-mono text-5xl text-indigo-100">
          Preguntas Frecuentes
        </h2>
        <Faq />
      </div>
    </Layout>
  )
}

export default ConsultaVirtualPage
