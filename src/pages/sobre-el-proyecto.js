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
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
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
