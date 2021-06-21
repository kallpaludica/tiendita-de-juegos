import React from "react"
import Layout from "../components/layout"
import Contact from "../components/About/Contact"
import Proposals from "../components/About/Proposals"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"

const PropuestasPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <Seo title="Propuestas" />
      <Helmet>
        <body className="about" />
      </Helmet>
      <div className="relative flex flex-col items-start justify-center w-full pt-24 pb-16 mx-auto text-pink-900 bg-pink-800 pattern-grid-lg">
        <div className='relative z-50 flex flex-col w-full max-w-6xl pt-16 pb-24 mx-auto text-center'>
          <h1 className='font-mono text-5xl text-white'>Propuestas</h1>
        </div>
      </div>
      <Proposals />
      <Contact />
    </Layout>
  )
}

export default PropuestasPage
