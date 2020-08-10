import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import React from "react"
import Layout from "../components/layout"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import "../components/VideoReact.css"
import "../components/AwsBtn.css"
import AboutImage from "../images/kallpa-ludica.png"
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button"
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
