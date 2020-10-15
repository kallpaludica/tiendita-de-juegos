import React from "react"
import { useStaticQuery, graphql, navigate, Link } from "gatsby"
import { kebabCase } from "lodash"
import { Helmet } from "react-helmet"
import { AwesomeButton } from "react-awesome-button"
import Img from "gatsby-image"
import SEO from "../components/seo"
import Layout from "../components/layout"
import HomeHeroImage from "../images/bg-home.jpg"
import Contact from "../components/About/Contact"
import Publishers from "../components/Games/Publishers"
import QueriesLastGames from "../components/Queries/QueriesLastGames"
import Mision from "../components/About/Mision"
import AwesomeSlider from "react-awesome-slider"
//import AboutImage from "../images/kallpa-ludica.png"
import GameSort from "../components/Games/GameSort"
import { AiFillShop } from "react-icons/ai"
import BackgroundSlider from "../components/HomeSlider"

import Fade from "react-reveal/Fade"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { FiChevronRight } from "react-icons/fi"
import "../components/AwsBtn.css"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      editoriales: allContentfulEditorial {
        edges {
          node {
            id
            title
            slug
            logo {
              fluid(maxWidth: 450) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }

      allContentfulCategoriaDelJuego {
        edges {
          node {
            id
            title
            slug
            icono {
              fixed(width: 80, height: 80) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <SEO title="Inicio" />
      <div className="relative z-50 flex-col items-center justify-center w-full px-2 pt-16 pb-6 m-auto mt-0 overflow-hidden text-center bg-teal-700 md:mt-0 home-hero ">
        <div className="flex items-center justify-center h-64 pt-48 pb-32">
          <h2 className="max-w-xl mx-auto font-mono text-2xl text-center text-white md:text-4xl">
            Kallpa = Potencia
          </h2>
          <div className="opacity-50 ">
            <BackgroundSlider />
          </div>
        </div>
        <Wave>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs xmlns="http://www.w3.org/2000/svg">
              <filter id="dropshadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="2" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              fillOpacity="1"
              filter="url(#dropshadow)"
              className="text-white fill-current "
              d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Wave>
      </div>
      <Hero className="relative overflow-hidden bg-white">
        <HeroContent>
          <AwesomeSlider>
            <div>
              <Fade bottom delay={100}>
                <Title>
                  Promoción Día del juego
                  <span
                    className="emoji"
                    role="img"
                    aria-label="Hola! y bienvenide"
                    aria-hidden="false"
                  >
                    👋
                  </span>
                </Title>
              </Fade>
              <div className="pt-3">
                <div className="flex flex-col items-center justify-start max-w-3xl p-3 py-2 mx-auto font-mono font-thin">
                  <Fade bottom delay={200}>
                    <AwesomeButton
                      action={() => {
                        navigate(`/juegos/todos`)
                      }}
                      type="secondary"
                    >
                      Tiendita de juegos
                      <FiChevronRight className="inline-block mt-1 ml-3" />
                    </AwesomeButton>
                  </Fade>
                </div>
              </div>
            </div>
            <div>
              <Fade bottom delay={100}>
                <Title>
                  Más económicos, <br /> jugones y más
                </Title>
              </Fade>
              <div className="pt-3">
                <div className="flex flex-col items-center justify-start max-w-3xl p-3 py-2 mx-auto font-mono font-thin">
                  <Fade bottom delay={200}>
                    <AwesomeButton
                      action={() => {
                        navigate(`/juegos/precio`)
                      }}
                      type="secondary"
                    >
                      conocelos
                      <FiChevronRight className="inline-block mt-1 ml-3" />
                    </AwesomeButton>
                  </Fade>
                </div>
              </div>
            </div>
          </AwesomeSlider>
        </HeroContent>
        <img
          src={HomeHeroImage}
          title="bienvenides"
          alt="bienvenides"
          className="absolute top-0 hidden object-cover w-full h-full opacity-25"
        />
        <Wave>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs xmlns="http://www.w3.org/2000/svg">
              <filter id="dropshadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="2" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              fillOpacity="1"
              filter="url(#dropshadow)"
              className="text-white fill-current "
              d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Wave>
      </Hero>
      <section className="my-12 font-mono">
        <h1 className="max-w-4xl mx-auto mb-3 font-sans text-4xl font-bold text-orange-500">
          Somos Kallpa Lúdica
        </h1>
        <h2 className="max-w-4xl mx-auto mb-6 font-sans text-2xl font-bold text-gray-800">
          Somos un equipo transdisciplinario que busca poner sobre la mesa el
          juego para problematizarlo y apropiarnos de una práctica milenaria
          imprescindible.
        </h2>
        <Fade bottom delay={1000}>
          <AwesomeButton
            action={() => {
              navigate(`/quienes-somos`)
            }}
            type="primary"
          >
            Conocé quienes somos
            <FiChevronRight className="inline-block mt-1 ml-3" />
          </AwesomeButton>
        </Fade>
      </section>
      <section className="hidden">
        <Mision />
      </section>
      <section className="relative hidden py-24 mt-12">
        <h1 className="max-w-4xl mx-auto font-sans text-4xl font-bold text-orange-500">
          Algunas modalidades de juegos
        </h1>
        <div className="flex flex-wrap justify-center max-w-3xl mx-auto my-12 text-center bg-white md:flex-row">
          {data.allContentfulCategoriaDelJuego.edges.map(({ node }) => {
            return (
              <Link
                key={node.slug}
                to={`/modalidades/${kebabCase(node.slug)}/`}
                className="flex flex-col items-center justify-center mx-12 my-3 font-sans text-xl text-gray-700 hover:text-gray-900"
              >
                {node.icono ? (
                  <div className="relative overflow-hidden transition-all duration-200 transform md:w-full hover:-translate-y-2">
                    <Img
                      title={node.title}
                      className="w-full"
                      alt={node.title}
                      fixed={node.icono.fixed}
                    />
                  </div>
                ) : (
                  <h2 className="w-24 max-w-xs font-bold ">{node.title}</h2>
                )}
                {node.title}
              </Link>
            )
          })}
        </div>
        <div className="">
          <a
            href="https://game-icons.net/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-1 text-teal-800 border border-teal-500 border-dashed opacity-75 hover:text-teal-900 hover:bg-teal-300"
          >
            Recurso: GameIcons.net
          </a>
          <b className="mr-1 text-orange-500"> </b>
        </div>
      </section>

      <section className="mt-24">
        <div className="relative flex flex-col w-full max-w-6xl mx-auto border-b border-orange-700 border-dashed md:flex-row">
          <h1 className="flex items-center w-full max-w-6xl pt-4 mx-auto font-sans text-3xl font-bold text-center text-orange-500 md:text-left ">
            <AiFillShop className="mr-3 text-4xl text-orange-400 transform -translate-y-1" />{" "}
            Tiendita de Juegos
          </h1>
          <div className="mt-6">
            <GameSort />
          </div>
        </div>
        <QueriesLastGames />
      </section>

      <section className="relative py-24 pb-64 text-indigo-200 bg-indigo-100 pattern-diagonal-lines-sm">
        <h1 className="max-w-6xl pb-12 mx-auto font-sans text-4xl font-bold">
          Editoriales que nos acompañan
        </h1>
        <Publishers />
        <Wave>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <defs xmlns="http://www.w3.org/2000/svg">
              <filter id="dropshadow" height="130%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="2" dy="2" result="offsetblur" />
                <feComponentTransfer>
                  <feFuncA type="linear" slope="0.2" />
                </feComponentTransfer>
                <feMerge>
                  <feMergeNode />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              fillOpacity="1"
              filter="url(#dropshadow)"
              className="text-white fill-current "
              d="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Wave>
      </section>
      <section>
        <Contact />
      </section>
    </Layout>
  )
}

export default IndexPage

const HeroContent = styled.div`
  ${tw`relative z-50 flex flex-col w-full pt-0 mx-auto text-left md:pb-0`}
`

const Title = styled.h1`
  ${tw`max-w-xl mx-auto font-mono text-2xl text-center text-indigo-500 md:text-4xl`}
`

const Hero = styled.div`
  ${tw`relative flex flex-col items-start justify-center w-full mx-auto`}
`

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  .svg {
    position: relative;
    display: block;
    width: calc(140% + 1.3px);
    height: 208px;
  }
`
