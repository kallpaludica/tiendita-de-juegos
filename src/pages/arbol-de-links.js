import React from "react"
import { Helmet } from "react-helmet"
import Contact from "../components/About/Contact"
// import HeroWave from "../components/HeroWave"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/AwsBtn.css"
import "../styles/VideoReact.css"
import Fade from "react-reveal/Fade"
import makeCarousel from "react-reveal/makeCarousel"
// import { GiTreeBranch } from "react-icons/gi"
// import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "gatsby"


const LinktreePages = () => {
  const CarouselUI = ({ children }) => (
    <div className="relative w-full h-full mb-0 overflow-hidden border-b border-gray-800">
      {children}
    </div>
  )
  const Carousel = makeCarousel(CarouselUI)
  return (
    <Layout>
      <Helmet>
        <body className="treelinks" />
      </Helmet>
      <Seo title="Arbol de Links" />
      <div
        className={`relative flex flex-col items-center justify-center w-full mb-12 pt-24 md:pt-24 pb-12 md:pb-32 mx-auto bg-gradient-to-b from-purple-800 to-green-700 text-purple-900`}
      >
        <div className="relative z-50 flex flex-col items-center justify-start w-full px-6 pt-0 pb-0 mx-auto text-left max-w-7xl md:pt-12 md:pb-12 ">
          <h1 className="z-30 flex flex-col items-center py-5 font-mono leading-relaxed text-white text-1xl relativejustify-center md:pt-0 md:text-5xl">
            <span role="img" className="text-4xl">
              🌴
            </span>
            Arbol de Links
          </h1>
        </div>
        <div className="relative z-30 w-full max-w-lg px-4 pb-12 mx-auto space-y-3">
          <Link to="/tienda-de-juegos/encontrador" className="block w-full py-3 text-lg font-bold text-blue-500 bg-white border-2 rounded-lg shadow-sm cursor-pointer hover:bg-opacity-25 hover:text-white hover:border-white">
            Tiendita de juegos
          </Link>
          <a className="block w-full py-3 text-lg font-bold text-red-500 bg-white border-2 rounded-lg shadow-sm cursor-pointer hover:bg-opacity-25 hover:text-white hover:border-white">
            Proyectos Lúdicos
          </a>
          <a className="block w-full py-3 text-lg font-bold text-green-500 bg-white border-2 rounded-lg shadow-sm cursor-pointer hover:bg-opacity-25 hover:text-white hover:border-white">
            Talleres de formación docente
          </a>
          <Link to="/preguntas-frecuentes" className="block w-full py-3 text-lg font-bold text-yellow-500 bg-white border-2 rounded-lg shadow-sm cursor-pointer hover:bg-opacity-25 hover:text-white hover:border-white">
            Preguntas Frecuentes
          </Link>
          <Link to="/consulta-virtual" className="block w-full py-3 text-lg font-bold text-pink-500 bg-white border-2 rounded-lg shadow-sm cursor-pointer hover:bg-opacity-25 hover:text-white hover:border-white">
            Consulta Virtual
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 z-10 w-full overflow-hidden">
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
      <Contact />
    </Layout>
  )
}

export default LinktreePages
