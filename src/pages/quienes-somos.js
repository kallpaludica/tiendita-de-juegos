import lottie from "lottie-web"
import React, { useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import Fade from "react-reveal/Fade"
import kallpaEnergia from "../animations/kallpa-energia.json"
import kallpaMovimiento from "../animations/kallpa-movimiento.json"
import kallpaObjetivos from "../animations/objetivos.json"
import kallpaEquipo from "../animations/equipo.json"
import kallpaPropuestas from "../animations/propuestas.json"
import Layout from "../components/layout"
import Team from "../components/About/Team"
import KallpaLogo from "../assets/logo.svg"
import About from "../components/About/About"
import Contact from "../components/About/Contact"
import Mision from "../components/About/Mision"
import Objectives from "../components/About/Objectives"
import Proposals from "../components/About/Proposals"
import SliderAbout from "../components/Sliders/SliderAbout"
import Seo from "../components/seo"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"
import { BsFillTriangleFill } from "react-icons/bs"

const AboutPage = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-objetivos"),
      animationData: kallpaObjetivos,
    })
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-equipo"),
      animationData: kallpaEquipo,
    })
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-Energia"),
      animationData: kallpaEnergia,
    })
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-propuestas"),
      animationData: kallpaPropuestas,
    })
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-Movimiento"),
      animationData: kallpaMovimiento,
    })
  }, [])

  return (
    <Layout>
      <Seo title="Quienes somos" />
      <div className="relative flex flex-col items-start justify-center w-full mx-auto overflow-hidden from-green-900 via-green-700 to-yellow-600 bg-gradient-to-b">
        <div className="relative z-50 flex flex-col items-center justify-center w-full max-w-6xl py-48 mx-auto text-center">
          <Fade>
            <h1 className="font-mono text-2xl text-white md:text-5xl">
              Un equipo transdisciplinario
            </h1>
          </Fade>
          <Fade>
            <div className="flex items-center max-w-xl px-2 pb-1 mx-auto mt-6 font-sans text-xl text-white">
              Buscamos poner sobre la mesa el juego para problematizarlo y
              apropiarnos de una práctica milenaria imprescindible.
            </div>
          </Fade>
          <AnchorLink
            className="flex items-center justify-center w-12 h-12 max-w-xs mx-auto mt-8 text-xl text-white transition-all duration-500 transform rounded-full hover:text-lg animate-pulse hover:text-gray-700 focus:text-gray-700 hover:bg-gray-200"
            href="#mision"
          >
            <BsFillTriangleFill className="transform rotate-180" />
          </AnchorLink>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-40 w-full overflow-hidden">
          <div className="relative">
            <svg
              viewBox="0 0 1428 174"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g
                  transform="translate(-2.000000, 44.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                >
                  <path
                    d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                    opacity="0.100000001"
                  ></path>
                  <path
                    d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z"
                    id="Path-4"
                    opacity="0.200000003"
                  ></path>
                </g>
                <g
                  transform="translate(-4.000000, 76.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                >
                  <path d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"></path>
                </g>
              </g>
            </svg>
          </div>
        </div>
        <SliderAbout />
      </div>
      <div className="sticky left-0 right-0 z-50 w-full pt-4 bg-white border-b border-gray-200 top-20 bg-opacity-95 md:top-16">
        <div className="relative z-50 flex justify-start w-full px-3 mx-auto max-w-7xl md:pt-3 md:px-3">
          <AnchorLink
            className="w-full px-2 pb-2 mx-1 mt-2 font-sans text-lg font-bold text-center text-green-500 border-b-4 border-transparent md:text-xl md:mx-3 focus:border-green-700 hover:text-green-700 focus:text-green-700"
            href="#mision"
          >
            Misión
          </AnchorLink>
          <AnchorLink
            className="w-full px-2 pb-2 mx-1 mt-2 font-sans text-lg font-bold text-center text-indigo-700 border-b-4 border-transparent md:text-xl md:mx-3 focus:border-indigo-800 hover:text-indigo-800 focus:text-indigo-800"
            href="#equipo"
          >
            Equipo
          </AnchorLink>
          <AnchorLink
            className="w-full px-2 pb-2 mx-1 mt-2 font-sans text-lg font-bold text-center text-yellow-500 border-b-4 border-transparent md:text-xl md:mx-3 focus:border-yellow-700 hover:text-yellow-700 focus:text-yellow-700"
            href="#objectives"
          >
            Objetivos
          </AnchorLink>
          <AnchorLink
            className="w-full px-2 pb-2 mx-1 mt-2 font-sans text-lg font-bold text-center text-red-700 border-b-4 border-transparent md:text-xl md:mx-3 focus:border-yellow-800 hover:text-red-800 focus:text-yellow-800"
            href="#proposals"
          >
            Propuestas
          </AnchorLink>
        </div>
      </div>
      <div className="z-50 hidden w-32 py-1 ml-auto transform -translate-y-6 bg-white md:w-48 top-32 right-3 bg-opacity-60 md:top-1/3">
        <div className="relative z-50 flex flex-col justify-around w-full max-w-full px-3 mx-auto 2xl:max-w-7xl md:p-3">
          <AnchorLink
            className="w-full mx-1 my-2 font-sans text-lg font-bold text-right text-green-500 md:text-xl md:mx-3 focus:underline hover:text-green-700 focus:text-green-700"
            href="#mision"
          >
            Misión
          </AnchorLink>
          <AnchorLink
            className="w-full mx-1 my-2 font-sans text-lg font-bold text-right text-indigo-700 md:text-xl md:mx-3 focus:underline hover:text-indigo-800 focus:text-indigo-800"
            href="#equipo"
          >
            Equipo
          </AnchorLink>
          <AnchorLink
            className="w-full mx-1 my-2 font-sans text-lg font-bold text-right text-yellow-500 md:text-xl md:mx-3 focus:underline hover:text-yellow-700 focus:text-yellow-700"
            href="#objectives"
          >
            Objetivos
          </AnchorLink>
          <AnchorLink
            className="w-full mx-1 my-2 font-sans text-lg font-bold text-right text-red-700 md:text-xl md:mx-3 focus:underline hover:text-red-800 focus:text-yellow-800"
            href="#proposals"
          >
            Propuestas
          </AnchorLink>
        </div>
      </div>
      <div
        className="relative pt-40 pb-12 mt-0 overflow-x-hidden bg-gradient-to-b from-white via-white to-indigo-100"
        id="mision"
      >
        <div className="relative z-10 px-2 ">
          <div className="flex items-center justify-center max-w-6xl pb-6 mx-auto ">
            <KallpaLogo className="w-32 h-32 kallpa-logo " />
          </div>
          <Mision />
          <About />
        </div>
      </div>
      <section
        className="px-2 pt-40 text-indigo-200 bg-gradient-to-b from-indigo-100 via-indigo-100 to-yellow-100"
        id="equipo"
      >
        <div className="w-full px-6 py-12 md:py-2">
          <section className="container mx-auto">
            <div className="flex flex-col items-center ">
              <Fade delay={100}>
                <div className="flex justify-start ">
                  <div
                    id="kallpa-equipo"
                    style={{ width: 200, height: 200, top: "25px" }}
                  />
                </div>
              </Fade>
              <div className="text-center">
                <h2 className="mx-auto font-mono text-4xl leading-tight text-indigo-600 max-w-7xl md:text-5xl">
                  Equipo
                </h2>
                <div className="grid grid-cols-1 gap-3 pt-12 pb-24 mx-auto max-w-7xl sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  <Team />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="px-2 pt-40 pb-12 " id="objectives">
        <Fade delay={100}>
          <div className="flex justify-center ">
            <div id="kallpa-objetivos" style={{ width: 200, height: 200 }} />
          </div>
        </Fade>

        <Objectives />
      </section>
      <section
        className="px-2 pt-40 pb-12 text-purple-200 bg-gradient-to-b from-red-100 via-red-100 to-white"
        id="proposals"
      >
        <Fade delay={100}>
          <div className="flex justify-center ">
            <div id="kallpa-propuestas" style={{ width: 200, height: 200 }} />
          </div>
        </Fade>
        <Proposals />
      </section>
      <section className="py-24 text-center bg-white">
        <div className="flex flex-col items-center justify-center max-w-3xl px-6 py-12 mx-auto bg-white shadow-2xl ">
          <Fade delay={100}>
            <ImQuotesLeft className="pb-4 text-4xl text-purple-500" />
          </Fade>
          <Fade delay={200}>
            <p className="font-serif text-3xl font-bold text-purple-500 ">
              Encontrarnos a jugar o jugar a encontrarnos.. conocernos,
              afectarnos.. son búsquedas para potenciarnos y caminar hacia
              construcciones más cuidadas.. comunitarias, alterativas, libres,
              diversas, dinámicas..
            </p>
          </Fade>
          <Fade delay={300}>
            <ImQuotesRight className="pt-4 text-4xl text-purple-500" />
          </Fade>
        </div>
      </section>
      <Contact />
    </Layout>
  )
}

export default AboutPage
