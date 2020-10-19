import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import AboutSlider from "gatsby-image-background-slider"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import tw from "twin.macro"
import kallpaPotencia from "../animations/kalla-potencia.json"
import About from "../components/About/About"
import Contact from "../components/About/Contact"
import Mision from "../components/About/Mision"
import Objectives from "../components/About/Objectives"
import Proposals from "../components/About/Proposals"
import Layout from "../components/layout"
import SEO from "../components/seo"
const AboutPage = () => {
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
      <Helmet>
        <body className="about" />
      </Helmet>
      <Hero className="text-green-900 bg-green-800 pattern-cross-dots-md">
        <HeroContent>
          <Title>Somos Kallpa Lúdica</Title>
          <Subtitle className="flex items-center max-w-3xl px-2 mx-auto font-mono text-white">
            Nuestra misión es fomentar vínculos saludables, pensados desde el
            juego y la lúdica, donde cada quien pueda desarrollarse desde la
            diversidad e integración, donde haya espacios de ensayos
            comunitarios y el diálogo sea la base de la construcción de la
            ciudadanía.
          </Subtitle>
          <AnchorLinks>
            <AnchorLink className="font-mono text-white" href="#equipo">
              Nuestro <br /> Equipo
            </AnchorLink>
            <AnchorLink className="hidden font-mono text-white" href="#mision">
              Misión
            </AnchorLink>
            <AnchorLink className="font-mono text-white" href="#objectives">
              Nuestros <br /> Objetivos
            </AnchorLink>
            <AnchorLink className="font-mono text-white" href="#proposals">
              Nuestras <br /> Propuestas
            </AnchorLink>
          </AnchorLinks>
        </HeroContent>

        <div className="absolute inset-0 z-40 opacity-25">
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
              className="text-white fill-current "
              d="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            ></path>
          </svg>
        </Wave>
      </Hero>

      <Section className="px-2 ">
        <About />
      </Section>

      <section id="equipo" className="px-2 bg-indigo-100">
        <div className="w-full px-6 py-12 md:py-20">
          <section className="container mx-auto">
            <Fade delay={100}>
              <div className="flex justify-center ">
                <div id="kallpa-Potencia" style={{ width: 100, height: 100 }} />
              </div>
            </Fade>
            <div className="flex flex-col items-center">
              <div className="text-center">
                <h2 className="max-w-xl mx-auto font-mono leading-tight text-indigo-600 md:text-5xl">
                  Equipo
                </h2>
                <p className="max-w-3xl pt-4 mx-auto font-sans text-xl text-gray-800">
                  Somos un equipo transdisciplinario que busca poner sobre la
                  mesa el juego para problematizarlo y apropiarnos de una
                  práctica milenaria imprescindible.
                </p>
                <hr className="w-16 mx-auto my-8 border-t-4 border-indigo-500" />
              </div>
            </div>
          </section>
        </div>
      </section>
      <section className="hidden px-2">
        <Mision />
      </section>
      <section className="px-2">
        <Objectives />
      </section>
      <section className="px-2">
        <Proposals />
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
  ${tw`relative z-50 flex flex-wrap justify-around w-full max-w-3xl p-3 pt-6 mx-auto mt-6 mb-2 `}
  a {
    ${tw`w-full mx-8 my-6 mt-2 font-sans text-xl font-bold text-center text-green-200 hover:text-gray-200`}
    flex: 1;
  }
`

const HeroContent = styled.div`
  ${tw`relative z-50 flex flex-col w-full max-w-6xl pt-16 pb-24 mx-auto text-center`}
`

const Title = styled.h1`
  ${tw`font-mono text-5xl text-white`}
`

const Subtitle = styled.h3`
  ${tw`pb-1 font-sans text-xl text-white`}
  p {
    ${tw`text-white `}
  }
`

const Hero = styled.div`
  ${tw`relative flex flex-col items-start justify-center w-full pt-24 pb-16 mx-auto`}
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
