import React from "react"
import { useStaticQuery, graphql, navigate, Link } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
//import HeroWave from "../components/HeroWave"
//import AwesomeSlider from "react-awesome-slider"
import SEO from "../components/seo"
import { kebabCase } from "lodash"

import { FiChevronRight } from "react-icons/fi"
import { Helmet } from "react-helmet"
import "../components/VideoReact.css"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HomeHeroImage from "../images/bg-home.jpg"
import { AwesomeButton } from "react-awesome-button"
import "../components/AwsBtn.css"
import Fade from "react-reveal/Fade"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query HomeQuery {
      editoriales: allContentfulEditorial {
        edges {
          node {
            id
            title
            slug
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
          <Fade bottom>
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
              <br /> Te damos la bienvenida a nuestra tiendita
            </Title>
          </Fade>
          <div className="pt-12">
            <div className="flex flex-col items-center justify-start max-w-3xl p-3 py-2 mx-auto">
              <Fade bottom delay={500}>
                <AwesomeButton
                  action={() => {
                    navigate(`/juegos/`)
                  }}
                  type="secondary"
                >
                  Conocé los juegos
                  <FiChevronRight className="inline-block mt-1 ml-3" />
                </AwesomeButton>
              </Fade>
            </div>
          </div>
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
        <div className="flex items-baseline justify-center max-w-6xl mx-auto">
          <div className="my-12 font-mono text-xl font-bold text-center text-gray-800">
            <h1 className="my-12 font-serif text-3xl">Editoriales</h1>
            {data.editoriales.edges.map(({ node }) => {
              return (
                <Link
                  key={node.slug}
                  to={`/editoriales/${kebabCase(node.slug)}/`}
                  className="ml-2 text-gray-800 underline"
                >
                  {node.title}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage

const HeroContent = styled.div`
  ${tw`relative z-50 flex flex-col w-full max-w-6xl pt-12 mx-auto text-left md:pb-24`}
`

const Title = styled.h1`
  ${tw`max-w-xl mx-auto font-sans text-2xl font-bold text-center text-white md:text-4xl`}
`

const Hero = styled.div`
  ${tw`relative flex flex-col items-start justify-center w-full pt-32 pb-32 mx-auto`}
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
