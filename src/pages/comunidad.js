//import React, { useEffect } from "react"
import React from "react"
import { Link, navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import Fade from "react-reveal/Fade"
import Contact from "../components/About/Contact"
import Layout from "../components/layout"
import Seo from "../components/seo"
import { FcIdea, FcCalendar, FcEngineering } from "react-icons/fc"
import ComunidadNotas from "../components/Queries/QueriesComunidadNotas"
import ComunidadProyectos from "../components/Queries/QueriesComunidadProyectosLast"
import ComunidadRecursos from "../components/Queries/QueriesRecursosLast"
import World from "../assets/connected_world.svg"
// import lottie from "lottie-web"
// import AnimateBack from "../animations/world-gyro.json"
import { HiArrowNarrowRight } from "react-icons/hi"

const ComunidadPage = () => {
  // useEffect(() => {
  //   lottie.loadAnimation({
  //     container: document.querySelector("#animate-arrow-back"),
  //     animationData: AnimateBack,
  //   })
  // }, [])
  return (
    <Layout>
      <Seo title="Comunidad" />
      <div className="text-green-700 bg-green-800 pattern-grid-lg">
        <div className="relative min-h-screen px-2 py-12 mb-12 bg-gradient-to-b from-blue-800 to-transparent">
          <div className="grid max-w-6xl grid-cols-1 gap-3 px-3 py-24 pb-12 mx-auto md:grid-cols-2">
            <div className="text-left ">
              <h1 className="w-full font-mono text-5xl text-white">
                Bienvenides a la Comunidad Kallpa.
              </h1>
              <h2 className="w-full mt-4 mb-3 font-sans text-xl font-bold text-white">
                Generando redes que nos potencien.
              </h2>
              <h2 className="w-full mt-4 font-sans text-xl text-white">
                Un espacio donde compartimos valiosos proyectos que nos rodean.
                Recursos lúdicos al alcance de las manos, noticias, entrevistas
                del campo de la Recreación, Educación y los Juegos de Mesa.
              </h2>
            </div>
            <Fade>
              <div className="items-start justify-center hidden md:flex">
                <World className="w-full h-auto pl-24 pr-12" />
                {/* <div id="animate-arrow-back" style={{ width: 400, height: 300 }} /> */}
              </div>
            </Fade>
          </div>
          <h1 className="flex items-center w-full max-w-6xl px-2 mx-auto font-sans text-3xl font-bold text-left text-white">
            Explorar
            <HiArrowNarrowRight className="ml-3" />
          </h1>
          <div className="relative z-50 grid max-w-6xl grid-cols-1 gap-3 px-2 mx-auto my-12 text-center md:grid-cols-3">
            <Fade bottom delay={300}>
              <Link
                className="flex items-center justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200"
                to={`/comunidad/proyectos-que-nos-potencian/`}
              >
                <div className="mb-3 font-sans text-xl font-bold text-left ">
                  <h2 className="text-sm text-green-600 uppercase">
                    Proyectos
                  </h2>
                  <p className="text-gray-800">Ideas que nos potencian</p>
                </div>
                <FcIdea className="text-6xl" />
              </Link>
            </Fade>
            <Fade bottom delay={400}>
              <Link
                className="flex items-center justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200"
                to={`/comunidad/recursos/`}
              >
                <div className="mb-3 font-sans text-xl font-bold text-left ">
                  <h2 className="text-sm text-green-600 uppercase">
                    Recursos lúdicos
                  </h2>
                  <p className="text-gray-800">Juegos para descargar</p>
                </div>
                <FcEngineering className="text-6xl" />
              </Link>
            </Fade>
            <Fade bottom delay={500}>
              <Link
                className="flex items-center justify-between w-full p-4 font-sans text-xl font-semibold leading-tight text-gray-800 duration-500 transform bg-white rounded-md shadow-lg hover:-translate-y-1 hover:shadow-2xl hover:border-green-200 hover:text-green-200"
                to={`/comunidad/notas/`}
              >
                <div className="mb-3 font-sans text-xl font-bold text-left ">
                  <h2 className="text-sm text-green-600 uppercase">Notas</h2>
                  <p className="text-gray-800">Historias y Novedades</p>
                </div>
                <FcCalendar className="text-6xl" />
              </Link>
            </Fade>
          </div>
          <div className="absolute bottom-0 left-0 right-0 hidden w-full overflow-hidden md:block">
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
      </div>
      <div className="relative z-10 pb-24 transform bg-gradient-to-b from-white to-blue-50">
        <div className="px-2 mx-auto my-3 max-w-7xl">
          <div className="flex flex-col items-center justify-center py-12 space-y-3">
            <FcIdea className="text-6xl" />
            <h2 className="mb-6 font-mono text-4xl font-bold text-left text-green-600">
              Proyectos que nos potencian
            </h2>
          </div>
          <ComunidadProyectos />
          <div className="mt-12">
            <AwesomeButton
              action={() => {
                navigate(`/comunidad/proyectos-que-nos-potencian/`)
              }}
              type="primary"
            >
              Ver todos los proyectos
            </AwesomeButton>
          </div>
        </div>
        
      </div>
      <div className="py-12 text-blue-100 bg-fixed border-t border-blue-100 bg-blue-50 pattern-grid-lg">
        <div className="px-2 py-12 mx-auto my-3 mb-24 max-w-7xl ">
          <div className="flex flex-col items-center justify-center">
            <FcCalendar className="text-6xl" />
            <h2 className="mb-6 font-sans text-4xl font-bold text-left text-gray-800">
              Notas recientes
            </h2>
          </div>
          <ComunidadNotas />
          <div className="mt-12">
            <AwesomeButton
              action={() => {
                navigate(`/comunidad/notas/`)
              }}
              type="secondary"
            >
              Todas las novedades
            </AwesomeButton>
          </div>
        </div>
      </div>
      <div className="py-12 text-yellow-100 bg-fixed bg-yellow-50 pattern-grid-lg">
        <div className="px-2 mx-auto my-3 mb-24 max-w-7xl">
          <div className="flex flex-col items-center justify-center">
            <FcEngineering className="text-6xl" />
            <h2 className="mb-6 font-mono text-3xl font-bold text-left text-gray-700">
              Recursos lúdicos
            </h2>
          </div>
          <ComunidadRecursos />
          <div className="mt-12">
            <AwesomeButton
              action={() => {
                navigate(`/comunidad/recursos/`)
              }}
              type="secondary"
            >
              Ver todos los recursos
            </AwesomeButton>
          </div>
        </div>
      </div>
      {/* <div className="px-2 mx-auto my-3 mb-24 max-w-7xl">
        <h2 className="mb-3 font-sans text-xl font-bold text-center">Subido recientemente</h2>
        <Comunidad />
      </div> */}
      <Contact />
    </Layout>
  )
}

export default ComunidadPage
