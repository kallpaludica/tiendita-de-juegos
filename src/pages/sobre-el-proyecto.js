import React from "react"
import Layout from "../components/layout"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import "../components/VideoReact.css"
import AboutImage from "../images/gatsby-icon.png"

import Img from "gatsby-image"
const PageContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full p-3 py-12 mx-auto text-purple-700 bg-white`}
`

export default () => {
  return (
    <Layout>
      <HeroWave
        heading="Sobre el proyecto"
        pattern="bg-pink-800 text-pink-900"
        svg="M0,128L720,256L1440,128L1440,320L720,320L0,320Z"
      />
      <PageContainer>
        <div className="flex items-center justify-center pb-24">
          <div class="pattern-dots-md text-orange-300 gray-light max-w-2xl mx-auto my-12 text-center w-full">
            <img
              className="max-w-md mx-auto transition-all duration-500 transform -translate-x-6 -translate-y-4 hover:-translate-y-5 hover:-translate-x-6"
              src={AboutImage}
            />
          </div>
        </div>
      </PageContainer>
    </Layout>
  )
}
