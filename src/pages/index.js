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
import Mision from "../components/About/Mision"
import AwesomeSlider from "react-awesome-slider"
import AboutImage from "../images/kallpa-ludica.png"

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
      <Hero className="relative overflow-hidden text-indigo-500 bg-indigo-600 pattern-cross-dots-md">
        <HeroContent>
          <AwesomeSlider>
            <div>
              <Fade bottom delay={1000}>
                <img
                  alt="Kallpa Lúdica"
                  src={AboutImage}
                  className="w-64 mx-auto "
                />
              </Fade>
              <div className="pt-3">
                <div className="flex flex-col items-center justify-start max-w-3xl p-3 py-2 mx-auto">
                  <Fade bottom delay={1000}>
                    <AwesomeButton
                      action={() => {
                        navigate(`/quienes-somos`)
                      }}
                      type="secondary"
                    >
                      Quienes somos
                      <FiChevronRight className="inline-block mt-1 ml-3" />
                    </AwesomeButton>
                  </Fade>
                </div>
              </div>
            </div>
            <div>
              <Fade bottom delay={1000}>
                <Title>
                  Hola!
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
                <div className="flex flex-col items-center justify-start max-w-3xl p-3 py-2 mx-auto">
                  <Fade bottom delay={500}>
                    <AwesomeButton
                      action={() => {
                        navigate(`/juegos/todos`)
                      }}
                      type="secondary"
                    >
                      Conocé los juegos
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
          className="absolute top-0 w-auto h-screen opacity-25 sm:h-auto sm:w-full"
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

      <section>
        <Publishers />
      </section>
      <section>
        <Mision />
      </section>
      <section className="relative py-24">
        <h1 className="max-w-4xl mx-auto font-serif text-4xl font-bold text-orange-500">
          Algunas modalidades de juegos
        </h1>
        <div className="flex flex-wrap justify-center max-w-3xl mx-auto my-12 text-center bg-white md:flex-row">
          {data.allContentfulCategoriaDelJuego.edges.map(({ node }) => {
            return (
              <Link
                key={node.slug}
                to={`/categorias/${kebabCase(node.slug)}/`}
                className="flex flex-col items-center justify-center mx-12 my-3 font-serif text-xl text-gray-700 hover:text-gray-900"
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
      <section>
        <Contact />
      </section>
    </Layout>
  )
}

export default IndexPage

const HeroContent = styled.div`
  ${tw`relative z-50 flex flex-col w-full pt-12 mx-auto text-left md:pb-24`}
`

const Title = styled.h1`
  ${tw`max-w-xl mx-auto font-sans text-2xl font-bold text-center text-white md:text-4xl`}
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
