import React from "react"
import Layout from "../components/layout"
import HeroWave from "../components/HeroWave"
import Contact from "../components/About/Contact"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import tw from "twin.macro"
import styled from "@emotion/styled"

const ComunidadPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <SEO title="Inicio" />
      <Helmet>
        <body className="about" />
      </Helmet>
      <HeroWave
        pattern="bg-pink-800 text-pink-900"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />

      <Section>
        <div className="flex flex-col items-baseline justify-center w-full max-w-6xl mx-auto ">
          <div className="w-56 mx-auto mt-16 text-center text-gray-800 "></div>
        </div>
      </Section>

      <Contact />
    </Layout>
  )
}

export default ComunidadPage

const Section = styled.section`
  ${tw`relative pb-12 transform -translate-y-56`}
`
