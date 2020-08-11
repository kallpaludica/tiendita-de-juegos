import React from "react"
import AwesomeSlider from "react-awesome-slider"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
import HeroWave from "../components/HeroWave"
import { FiChevronRight } from "react-icons/fi"
import { Helmet } from "react-helmet"
import "../components/VideoReact.css"
import AboutImage from "../images/kallpa-ludica.png"

import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button"
import "../components/AwsBtn.css"

import { navigate } from "gatsby" // highlight-line

export default () => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>

      <HeroWave
        heading="Kallpa Lúdica"
        pattern="bg-orange-600 text-orange-500"
        svg="M0,192L120,213.3C240,235,480,277,720,293.3C960,309,1200,299,1320,293.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320ZM0,192L120,208C240,224,480,256,720,261.3C960,267,1200,245,1320,234.7L1440,224L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <div className="pt-12 pb-24 bg-white">
        <div className="flex flex-col items-center justify-center max-w-3xl p-3 py-2 mx-auto">
          <AwesomeButton
            action={() => {
              navigate(`/juegos/`)
            }}
            type="primary"
          >
            Conocé la Tiendita de juegos
            <FiChevronRight className="inline-block mt-1 ml-3" />
          </AwesomeButton>
        </div>
      </div>
      {/*
      <AwesomeSlider>
        <div>
          <img
            alt="Kallpa Lúdica"
            src="https://images.unsplash.com/photo-1577897113292-3b95936e5206?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=681&q=80"
          />
        </div>
        <div>
          <img
            alt="Kallpa Lúdica"
            src="https://images.unsplash.com/photo-1582921017967-79d1cb6702ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          />
        </div>
        <div>
          <img
            alt="Kallpa Lúdica"
            src="https://images.unsplash.com/photo-1519744346361-7a029b427a59?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          />
        </div>
        <div>
          <img
            alt="Kallpa Lúdica"
            src="https://images.unsplash.com/photo-1563941406054-949225931d52?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80"
          />
        </div>
      </AwesomeSlider>
      */}
    </Layout>
  )
}
