import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import React from "react"
import Layout from "../components/layout"
import tw from "twin.macro"
import styled from "@emotion/styled"
import "../components/VideoReact.css"
import "../components/AwsBtn.css"
import AboutImage from "../images/kallpa-ludica.png"
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button"
import { navigate } from "gatsby" // highlight-line

const PageContainer = styled.div`
  ${tw`flex flex-col items-center justify-center w-full p-3 py-12 mx-auto text-purple-700 bg-white`}
`

export default () => {
  return (
    <Layout>
      <AwesomeSlider>
        <div>
          <img alt="Kallpa Lúdica" src={AboutImage} />
        </div>
        <div>
          <img alt="Kallpa Lúdica" src={AboutImage} />
        </div>
        <div>
          <img alt="Kallpa Lúdica" src={AboutImage} />
        </div>
        <div>
          <img alt="Kallpa Lúdica" src={AboutImage} />
        </div>
      </AwesomeSlider>
      <div className="flex flex-col-reverse justify-between w-full px-3 py-6 mb-12 bg-green-100 border-t-2 border-b-2 border-green-500 md:flex-row">
        <AwesomeButtonSocial
          type="whatsapp"
          href={`https://api.whatsapp.com/send?phone=5493876034627&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quiero%2C%20consultar%20por%20el%20juego%20`}
          target="_blank"
          rel="noopener noreferrer"
        >
          Hacenos tu consulta por este juego
        </AwesomeButtonSocial>
        <div className="mb-3 text-3xl font-bold text-center text-green-500 md:my-0 md:text-right">
          <span className="block text-xl text-green-600 md:text-sm">
            nombre del juego
          </span>
          $500
        </div>
      </div>
      <PageContainer>
        <div className="flex flex-col items-center justify-center pb-24">
          <AwesomeButton
            action={() => {
              navigate("/")
            }}
            type="secondary"
          >
            Primary
          </AwesomeButton>

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
