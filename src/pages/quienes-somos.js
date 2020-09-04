import React from "react"
import Layout from "../components/layout"
//import HeroWave from "../components/HeroWave"
//import AboutImage from "../images/kallpa-ludica.png"
//import AboutImage from "../components/image"
import Contact from "../components/About/Contact"
import Mision from "../components/About/Mision"
import Objectives from "../components/About/Objectives"
//import Proposals from "../components/About/Proposals"
import About from "../components/About/About"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import tw from "twin.macro"
import styled from "@emotion/styled"
import AnchorLink from "react-anchor-link-smooth-scroll"
//import { AiOutlineRocket } from "react-icons/ai"
import { Link } from "gatsby"

const AboutPage = () => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <SEO title="Inicio" />
      <Helmet>
        <body className="about" />
      </Helmet>
      <Hero className="text-pink-900 bg-pink-800 pattern-cross-dots-md">
        <HeroContent>
          <Title>Quienes somos</Title>
          <Subtitle className="flex items-center max-w-3xl mx-auto font-mono text-white">
            Somos un equipo transdisciplinario que busca poner sobre la mesa el
            juego para problematizarlo y apropiarnos de una práctica milenaria
            imprescindible.
          </Subtitle>
        </HeroContent>
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

      <Section>
        <AnchorLinks>
          <AnchorLink href="#mision">Misión</AnchorLink>
          <Link to="/propuestas">Propuestas</Link>
          <AnchorLink href="#objectives">Objetivos</AnchorLink>
        </AnchorLinks>
        <About />
      </Section>
      <Mision />

      <Objectives />
      <Contact />
    </Layout>
  )
}

export default AboutPage

const Section = styled.section`
  ${tw`relative pb-12`}
`

const AnchorLinks = styled.div`
  ${tw`relative flex justify-around max-w-2xl p-3 pt-6 mx-auto mb-12 `}
  a {
    ${tw`mx-6 font-serif text-xl font-bold text-center text-pink-800 hover:text-pink-500`}
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
  ${tw`pb-1 font-serif text-xl text-white`}
  p {
    ${tw`text-white `}
  }
`

const Back = styled.div`
  ${tw`py-3`}

  a {
    ${tw`p-3 font-serif text-base font-bold text-white border-b border-white hover:bg-white hover:text-orange-500`}
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

  .svg {
    position: relative;
    display: block;
    width: calc(140% + 1.3px);
    height: 208px;
  }
`
