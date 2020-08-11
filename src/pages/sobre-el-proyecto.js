import React from "react"
import Layout from "../components/layout"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import "../components/VideoReact.css"
import AboutImage from "../images/kallpa-ludica.png"
import { Helmet } from "react-helmet"
const PageContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full p-3 py-12 mx-auto text-purple-700 bg-white`}
`

export default () => {
  return (
    <Layout>
      <Helmet>
        <body className="about" />
      </Helmet>
      <HeroWave
        heading="Sobre el proyecto"
        pattern="bg-pink-800 text-pink-900"
        svg="M0,96L120,122.7C240,149,480,203,720,208C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <PageContainer>
        <div className="flex items-center justify-center pb-24">
          <div className="w-full max-w-2xl mx-auto my-12 text-center text-orange-300 pattern-dots-md gray-light">
            <img
              className="w-full max-w-md mx-auto"
              alt="Kallpa Lúdica"
              src={AboutImage}
            />
          </div>
        </div>
      </PageContainer>
    </Layout>
  )
}
