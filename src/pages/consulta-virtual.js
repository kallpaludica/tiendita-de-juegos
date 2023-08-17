import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { InlineWidget } from "react-calendly"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import { navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import "../styles/AwsBtn.css"
import "../styles/VideoReact.css"

const ConsultaVirtualPage = () => {
  const CarouselUI = ({ children }) => (
    <div className="relative w-full h-full mb-0 overflow-hidden border-b border-gray-800">
      {children}
    </div>
  )
  const Carousel = makeCarousel(CarouselUI)

  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <Seo title="Consultas virtuales" />
      <div className="relative z-50 flex flex-col items-center justify-center w-full pt-24 m-auto mt-0 overflow-hidden text-center bg-indigo-600 bg-gradient-to-br from-indigo-800 to-green-500">
        <div className="relative z-40 flex flex-col items-center justify-center w-full pt-0 pb-12 mx-auto md:py-12">
          <div className="hidden md:block">
            <h2 className="mb-3 font-sans text-4xl font-bold text-white">
              Conociendo el Showroom <br />
              <span className="font-sans text-xl font-bold uppercase">
                (modalidad virtual)
              </span>
            </h2>
            <p className="w-full mx-auto font-sans text-2xl text-white">
              Dias y Horario de atención.
            </p>
            <p className="w-full mx-auto mb-6 font-sans text-2xl text-white">
              Lunes a Viernes de 10 a 19hs
            </p>
            <AwesomeButton
              onPress={() => {
                navigate(`/preguntas-frecuentes`)
              }}
              type="secondary"
            >
              Ver las Preguntas Frecuentes
            </AwesomeButton>
          </div>
          <div
            id="consulta-virtual"
            className="w-full p-2 mx-auto overflow-visible"
          >
            <InlineWidget
              pageSettings={{
                backgroundColor: "ffffff",
              }}
              styles={{
                height: "700px",
                width: "100%",
              }}
              url="https://calendly.com/kallpaludica/consulta-virtual?primary_color=319795"
            />
          </div>
        </div>
        <div className="absolute inset-0 z-0">
          <Carousel
            defaultWait={4000}
            maxTurns={99} /*wait for 1000 milliseconds*/
          >
            <Fade>
              <div>
                <img
                  className="object-cover w-full h-screen opacity-25"
                  alt="Nuestro showroom"
                  src="https://images.ctfassets.net/mc6j42086v0m/4Ro7FlvfPN8P1JDX9rXXCW/49780605e40a6a12daf25e2b0c9accc4/showroom-1.jpeg"
                />
              </div>
            </Fade>
            <Fade>
              <div>
                <img
                  className="object-cover w-full h-screen opacity-25"
                  alt="Nuestro showroom"
                  src="https://images.ctfassets.net/mc6j42086v0m/77TbPbsMsYnQI1cojftlvr/934409ab91f4d44843a9888c7d54079d/showroom-3.jpeg"
                />
              </div>
            </Fade>
          </Carousel>
        </div>
      </div>
    </Layout>
  )
}

export default ConsultaVirtualPage
