import React from "react"
import Layout from "../components/layout"
import { Helmet } from "react-helmet"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import "../components/VideoReact.css"
import "../components/AwsBtn.css"

import { AwesomeButtonSocial } from "react-awesome-button"
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
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
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
