import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import "../components/VideoReact.css"
import "../components/AwsBtn.css"

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button"
const PageContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full p-3 py-12 mx-auto text-purple-700 bg-white`}
`

export default () => {
  return (
    <Layout>
      <Helmet>
        <body className="contact" />
      </Helmet>
      <HeroWave
        heading="Contacto"
        description="Hacemos envios a toda Salta Capital"
        pattern="bg-indigo-600 text-indigo-500"
        svg="M0,96L120,122.7C240,149,480,203,720,208C960,213,1200,171,1320,149.3L1440,128L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <PageContainer>
        <div
          className="flex items-center justify-center pb-24 text-3xl"
          id="contenido"
        >
          <AwesomeButtonSocial
            type="instagram"
            href="https://www.instagram.com/kallpaludica/"
            target="_blank"
            rel="noopener noreferrer"
          >
            kallpaludica
          </AwesomeButtonSocial>
          <span className="inline-block mx-2"></span>
          <AwesomeButtonSocial
            type="whatsapp"
            href="https://wa.link/ofthek"
            target="_blank"
            rel="noopener noreferrer"
          >
            Hacenos tu consulta
          </AwesomeButtonSocial>
        </div>
      </PageContainer>
    </Layout>
  )
}
