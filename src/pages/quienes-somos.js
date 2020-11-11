import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import AboutSlider from "gatsby-image-background-slider"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import tw from "twin.macro"
import kallpaEnergia from "../animations/kallpa-energia.json"
import kallpaMovimiento from "../animations/kallpa-movimiento.json"
import kallpaPotencia from "../animations/kallpa-potencia.json"
import kallpaUnion from "../animations/kallpa-union.json"
import kallpaPropuestas from "../animations/kallpa-propuestas.json"
import KallpaLogo from "../assets/logo.svg"
import About from "../components/About/About"
import Contact from "../components/About/Contact"
import Mision from "../components/About/Mision"
import Objectives from "../components/About/Objectives"
import Proposals from "../components/About/Proposals"
import Team from "../components/About/Team"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { ImQuotesLeft, ImQuotesRight } from "react-icons/im"

const AboutPage = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-Potencia"),
      animationData: kallpaPotencia,
    })
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-Union"),
      animationData: kallpaUnion,
    })
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-Energia"),
      animationData: kallpaEnergia,
    })
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-Propuestas"),
      animationData: kallpaPropuestas,
    })
    lottie.loadAnimation({
      container: document.querySelector("#kallpa-Movimiento"),
      animationData: kallpaMovimiento,
    })
  }, [])

  return (
    <Layout>
      <SEO title="Inicio" />
      <Helmet>
        <body className="about" />
      </Helmet>
      <Hero className="text-yellow-900 bg-yellow-800 pattern-cross-dots-md">
        <HeroContent>
          <Title>Un equipo transdisciplinario</Title>
          <Subtitle className="flex items-center max-w-xl px-2 mx-auto font-mono text-white">
            Buscamos poner sobre la mesa el juego para problematizarlo y
            apropiarnos de una práctica milenaria imprescindible.
          </Subtitle>
        </HeroContent>

        <div tw="absolute inset-0 z-40 opacity-25">
          <AboutSlider
            initDelay={3}
            transition={3}
            duration={5}
            images={["32.png", "33.png", "38.png"]}
            query={useStaticQuery(graphql`
              query {
                backgrounds: allFile(
                  filter: { sourceInstanceName: { eq: "backgrounds" } }
                ) {
                  nodes {
                    relativePath
                    childImageSharp {
                      fluid(maxWidth: 4000, quality: 100) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                }
              }
            `)}
          />
        </div>
        <Wave>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fillOpacity="1"
              tw="text-white fill-current "
              d="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Wave>
      </Hero>
      <section tw="top-0 z-50 py-1 bg-white md:sticky">
        <AnchorLinks>
          <AnchorLink tw="font-mono" href="#mision">
            Misión
          </AnchorLink>
          <AnchorLink tw="font-mono" href="#equipo">
            Equipo
          </AnchorLink>
          <AnchorLink tw="font-mono" href="#objectives">
            Objetivos
          </AnchorLink>
          <AnchorLink tw="font-mono" href="#proposals">
            Propuestas
          </AnchorLink>
        </AnchorLinks>
      </section>
      <section tw="px-2 pb-6 " id="mision">
        <div tw="flex flex-wrap justify-center max-w-6xl py-12 mx-auto">
          <KallpaLogo
            tw="w-32 h-32 mt-12 mr-3 transform rotate-90 "
            className="kallpa-logo"
          />
        </div>
        <Mision />
      </section>

      <Section
        tw="px-2 py-24 text-orange-700 bg-orange-600 "
        className="pattern-cross-dots-xl"
      >
        <About />
      </Section>
      <section id="equipo" className="px-2 pt-24 bg-orange-100">
        <div tw="w-full px-6 py-12 md:py-2">
          <section className="container mx-auto">
            <div tw="flex flex-col items-center ">
              <Fade delay={100}>
                <div tw="flex justify-start ">
                  <div
                    id="kallpa-Potencia"
                    style={{ width: 200, height: 200, top: "25px" }}
                  />
                </div>
              </Fade>

              <div tw="text-center">
                <h2 tw="max-w-6xl mx-auto font-mono text-4xl leading-tight text-orange-600 md:text-5xl">
                  Equipo
                </h2>

                <div tw="grid max-w-6xl grid-cols-1 gap-3 pt-12 pb-24 mx-auto sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
                  <Team />
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>

      <section tw="px-2 pt-24 pb-12 bg-orange-200" id="objectives">
        <Fade delay={100}>
          <div tw="flex justify-center ">
            <div id="kallpa-Union" style={{ width: 200, height: 200 }} />
          </div>
        </Fade>
        <Objectives />
      </section>

      <section tw="px-2 pt-24 pb-12 bg-orange-100 " id="proposals">
        <Fade delay={100}>
          <div tw="flex justify-center ">
            <div id="kallpa-Propuestas" style={{ width: 200, height: 200 }} />
          </div>
        </Fade>
        <Proposals />
      </section>
      <section tw="flex flex-col items-center justify-center pt-24 pb-3 text-center">
        <Fade delay={100}>
          <ImQuotesLeft tw="pb-4 text-4xl text-orange-500" />
        </Fade>
        <Fade delay={200}>
          <p tw="max-w-3xl mx-auto font-serif text-3xl font-bold text-orange-500">
            Encontrarnos a jugar o jugar a encontrarnos.. conocernos,
            afectarnos.. son búsquedas para potenciarnos y caminar hacia
            construcciones más cuidadas.. comunitarias, alterativas, libres,
            diversas, dinámicas..
          </p>
        </Fade>
        <Fade delay={300}>
          <ImQuotesRight tw="pt-4 text-4xl text-orange-500" />
        </Fade>
      </section>

      <Contact />
    </Layout>
  )
}

export default AboutPage

const Section = styled.section`
  ${tw`relative pb-12`}
`

const AnchorLinks = styled.div`
  ${tw`relative z-50 flex flex-wrap justify-around w-full max-w-6xl px-3 pt-0 mx-auto mt-0 md:p-3 `}
  a {
    ${tw`w-full mx-3 my-2 font-sans text-base font-bold text-center text-orange-600 md:mx-8 md:text-xl hover:text-orange-700 focus:text-gray-900`}
    flex: 1;
  }
`

const HeroContent = styled.div`
  ${tw`relative z-50 flex flex-col w-full max-w-6xl pt-16 pb-24 mx-auto text-center`}
`

const Title = styled.h1`
  ${tw`font-mono text-2xl text-white md:text-5xl`}
`

const Subtitle = styled.h3`
  ${tw`pb-1 font-sans text-xl text-white`}
  p {
    ${tw`text-white `}
  }
`

const Hero = styled.div`
  ${tw`relative flex flex-col items-start justify-center w-full pt-24 pb-32 mx-auto`}
`

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;
  z-index: 49;
  .svg {
    position: relative;
    display: block;
    width: calc(140% + 1.3px);
    height: 208px;
  }
`
