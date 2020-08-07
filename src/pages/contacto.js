import React from "react"
import Layout from "../components/layout"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import "../components/VideoReact.css"

const PageContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full p-3 py-12 mx-auto text-purple-700 bg-white`}
`

export default () => {
  return (
    <Layout>
      <HeroWave
        heading="Contacto"
        description="Hacemos envios a toda Salta Capital"
        pattern="bg-indigo-600 text-indigo-500"
        svg="M0,128L720,256L1440,128L1440,320L720,320L0,320Z"
      />
      <PageContainer>
        <div
          className="flex items-center justify-center pb-24 text-3xl"
          id="contenido"
        >
          Instragram: kallpaludica <br />
          WhatsApp: +54 9 387 603-4627
        </div>
      </PageContainer>
    </Layout>
  )
}
