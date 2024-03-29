import kallpaPotencia from "@animations/kallpa-potencia.json"
import Contact from "@components/About/Contact"
import HomeHero from "@components/About/HomeHero"
import ComunidadCarouselRecursos from "@components/Carousels/emblaCarouselAlign"
import Collections from "@components/Carousels/emblaCarouselAutoplay"
import CarouselQuienesSomos from "@components/Carousels/emblaCarouselWorkshops"
import HomeComunidad from "@components/Comunidad/HeroComunidad"
import Layout from "@components/layout"
import QueriesLastGames from "@components/Queries/QueriesLastGames"
import Seo from "@components/seo"
import { navigate } from "gatsby"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import { AwesomeButton } from "react-awesome-button"
import { Helmet } from "react-helmet"
import { FcEngineering, FcHome } from "react-icons/fc"
import { FiChevronRight } from "react-icons/fi"
import Fade from "react-reveal/Fade"

const IndexPage = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-Potencia"),
      animationData: kallpaPotencia,
    })
  }, [])

  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <Seo title="Inicio" />
      <div className="relative z-50 flex-col items-center justify-center w-full px-2 pt-16 pb-6 m-auto mt-0 overflow-hidden text-center bg-gray-800 md:mt-0 home-hero ">
        <HomeHero />
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
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
      </div>

      <section id="comunidad" className="scroll-mt-12">
        <HomeComunidad />
        <div className="relative z-50 px-2 mx-auto mt-12 max-w-7xl">
          <div className="flex flex-col items-center justify-center mb-12">
            <FcEngineering className="text-5xl" />
            <h2 className="mt-3 font-mono text-4xl font-bold text-left text-gray-800 ">
              Recursos Lúdicos
            </h2>
          </div>
        </div>
        <ComunidadCarouselRecursos />
      </section>

      <section className="relative px-6 py-24 mt-0 overflow-hidden text-yellow-200 bg-fixed bg-yellow-100 md:py-64 pattern-grid-lg">
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden transform rotate-180">
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
        <div className="grid w-full mx-auto md:grid-cols-2 max-w-7xl">
          <div>
            <Fade delay={100}>
              <div className="flex justify-start w-full pl-3 mx-auto">
                <div id="kallpa-Potencia" style={{ width: 150, height: 150 }} />
              </div>
            </Fade>
            <div className="max-w-xl mx-auto mb-5">
              <Fade bottom delay={100}>
                <h1 className="font-mono text-2xl leading-tight text-left text-yellow-600 md:text-4xl">
                  <span className="relative inline-block transform -translate-y-2">
                    .
                  </span>
                  Kallpa es potencia
                  <span className="relative inline-block ml-1 transform -translate-y-2">
                    .
                  </span>
                </h1>
              </Fade>
              <Fade bottom delay={100}>
                <h2 className="pt-6 font-serif text-xl text-left text-indigo-900">
                  Fomentamos vínculos saludables, pensados desde el juego y la
                  lúdica, donde cada quien pueda desarrollarse desde la
                  diversidad e integración como la base de la construcción.
                </h2>
              </Fade>
              <div className="flex items-center justify-start pt-12">
                <Fade bottom delay={100}>
                  <AwesomeButton
                    onPress={() => {
                      navigate(`/quienes-somos`)
                    }}
                    type="primary"
                  >
                    Conocé quienes somos
                    <FiChevronRight className="inline-block mt-1 ml-3" />
                  </AwesomeButton>
                </Fade>
              </div>
              {/* <AboutSlider/> */}
            </div>
          </div>
          <div>
            <CarouselQuienesSomos />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
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
      </section>

      <section className="px-2">
        <div className="relative flex flex-col w-full max-w-6xl pt-2 pb-6 mx-auto md:flex-row">
          <h1 className="flex flex-col items-center w-full max-w-6xl pt-4 mx-auto font-mono text-2xl leading-tight text-center text-yellow-500 md:text-4xl">
            <FcHome className="mt-6 text-6xl transform " />
            Recien llegados
          </h1>
        </div>
        <div className="flex flex-col justify-start mt-5">
          <div className="mr-3 ">
            <AwesomeButton
              onPress={() => {
                navigate(`/tienda-de-juegos/encontrador`)
              }}
              type="primary"
            >
              Ver todos los Juegos
            </AwesomeButton>
          </div>
        </div>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 border-t border-yellow-400 opacity-25"></div>
        </div>
        <QueriesLastGames />
      </section>

      <section className="relative pt-40 pb-12 text-blue-200 bg-fixed bg-indigo-100 bg-gradient-to-br from-blue-200 via-yellow-200 pattern-grid-lg">
        <div className="absolute top-0 left-0 right-0 w-full overflow-hidden transform rotate-180">
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
        <Fade bottom delay={100}>
          <div className="flex flex-col items-center ">
            {/* <FcFlowChart className="mt-6 text-6xl transform " /> */}
            <h3 className="mb-6 font-mono text-2xl leading-tight text-center text-blue-500 md:text-4xl">
              Colecciones para empezar
            </h3>
          </div>
        </Fade>
        <Collections arrows={true} />
      </section>

      <section className="relative pt-12">
        <Contact />
      </section>
    </Layout>
  )
}

export default IndexPage
