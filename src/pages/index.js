import styled from "@emotion/styled"
import { graphql, Link, navigate, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import { AwesomeButton } from "react-awesome-button"
//import AwesomeSlider from "react-awesome-slider"
import { Helmet } from "react-helmet"
import { AiFillShop } from "react-icons/ai"
import { FiChevronRight } from "react-icons/fi"
import Fade from "react-reveal/Fade"
//import tw from "twin.macro"
import kallpaPotencia from "../animations/kallpa-potencia.json"
import Contact from "../components/About/Contact"
import HomeHero from "../components/About/HomeHero"

import "../components/AwsBtn.css"
import Collections from "../components/Games/GameCollections"

//import GameSort from "../components/Games/GameSort"
import Publishers from "../components/Publishers/FeaturedPublishers"
import Layout from "../components/layout"
import QueriesLastGames from "../components/Queries/QueriesLastGames"
import SEO from "../components/seo"
//import HomeHeroImage from "../images/bg-home.jpg"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
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
      <SEO title="Inicio" />
      <div className="relative z-50 flex-col items-center justify-center w-full px-2 pt-16 pb-6 m-auto mt-0 overflow-hidden text-center bg-gray-800 md:mt-0 home-hero ">
        <HomeHero />
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

      <section className="pt-12">
        <Fade bottom delay={100}>
          <h1 className="font-mono text-2xl leading-tight text-center text-teal-500 md:text-4xl">
            Colecciones para empezar
          </h1>
        </Fade>
        <Collections />
      </section>

      <section className="px-2 mt-2">
        <div className="relative flex flex-col w-full max-w-6xl pt-12 pb-6 mx-auto md:flex-row">
          <h1 className="flex flex-col items-center w-full max-w-6xl pt-4 mx-auto font-mono text-2xl leading-tight text-center text-orange-500 md:text-4xl">
            <AiFillShop className="mt-6 text-6xl text-orange-500 transform " />
            Lo que se anda jugando
          </h1>
        </div>
        <div className="w-full mb-4">
          <div className="w-64 h-1 py-0 mx-auto my-0 border-t-4 border-orange-400 opacity-25"></div>
        </div>
        <QueriesLastGames />
      </section>

      <section className="relative hidden py-24 mt-6">
        <h1 className="font-mono text-2xl leading-tight text-center text-orange-500 md:text-4xl">
          Varias modalidades para elegir
        </h1>
        <div className="grid max-w-4xl grid-cols-2 gap-6 mx-auto my-12 font-sans text-center text-gray-800 bg-white md:grid-cols-4 md:flex-row">
          {data.allContentfulCategoriaDelJuego.edges.map(({ node }) => {
            return (
              <Link
                key={node.slug}
                to={`/tienda-de-juegos/modalidades/${kebabCase(node.slug)}/`}
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
      </section>
      <section className="px-6 py-24 mt-0 text-orange-200 bg-orange-100 pattern-grid-lg">
        <Fade delay={100}>
          <div className="flex justify-center max-w-lg mx-auto">
            <div id="kallpa-Potencia" style={{ width: 150, height: 150 }} />
          </div>
        </Fade>

        <div className="max-w-xl mx-auto mb-5">
          <Fade bottom delay={100}>
            <h1 className="font-mono text-2xl leading-tight text-center text-orange-600 md:text-4xl">
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
            <h2 className="pt-6 font-sans text-xl text-center text-indigo-900">
              Fomentamos vínculos saludables, pensados desde el juego y la
              lúdica, donde cada quien pueda desarrollarse desde la diversidad e
              integración como la base de la construcción.
            </h2>
          </Fade>
        </div>

        <Fade bottom delay={100}>
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

      <section className="relative">
        <Contact />
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

      <section className="relative hidden py-24 pb-40 bg-white ">
        <h1 className="max-w-6xl pb-12 mx-auto font-sans text-4xl font-bold opacity-50">
          . Nos acompañan .
        </h1>
        <div className="mb-3">
          <Publishers />
        </div>
        <AwesomeButton
          action={() => {
            navigate(`/tienda-de-juegos/editoriales`)
          }}
          type="secondary"
        >
          Ver juegos por editoriales
          <FiChevronRight className="inline-block mt-1 ml-3" />
        </AwesomeButton>
      </section>
    </Layout>
  )
}

export default IndexPage

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
