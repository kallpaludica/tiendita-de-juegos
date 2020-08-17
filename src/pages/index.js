import React from "react"
import { useStaticQuery, graphql, navigate, Link } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
//import HeroWave from "../components/HeroWave"
//import AwesomeSlider from "react-awesome-slider"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import { FiChevronRight } from "react-icons/fi"
import { Helmet } from "react-helmet"
import "../components/VideoReact.css"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HomeHeroImage from "../images/bg-home.jpg"
import { AwesomeButton } from "react-awesome-button"
import "../components/AwsBtn.css"
import Fade from "react-reveal/Fade"
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai"

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
      whatsapp: contentfulDatosDeContacto(titulo: { eq: "Whatsapp" }) {
        id
        titulo
        link
      }
      mail: contentfulDatosDeContacto(titulo: { eq: "Mail" }) {
        id
        titulo
        link
      }
      instagram: contentfulDatosDeContacto(titulo: { eq: "instagram" }) {
        id
        titulo
        link
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
        <h1 className="max-w-4xl mx-auto font-serif text-4xl font-bold text-indigo-700">
          Contactanos
        </h1>
        <h2 className="max-w-4xl mx-auto font-serif text-2xl">
          Estamos para responder a cualquier tus preguntas sobre juegos
        </h2>
        <Socials>
          <a
            className="flex flex-col items-center justify-center text-center"
            target="_blank"
            rel="noopener noreferrer"
            title={data.whatsapp.titulo}
            href={`https://api.whatsapp.com/send?phone=${data.whatsapp.link}&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quería%2C%20consultar`}
          >
            <AiOutlineWhatsApp className="my-6 text-4xl" />
            <b>Teléfono</b>
            {data.whatsapp.link}
          </a>
          <a
            className="flex flex-col items-center justify-center text-center"
            target="_blank"
            rel="noopener noreferrer"
            title={data.mail.titulo}
            href={`mailto:${data.mail.link}`}
          >
            <AiOutlineMail className="my-6 text-4xl" />
            <b>Mail</b>
            {data.mail.link}
          </a>
          <a
            className="flex flex-col items-center justify-center text-center"
            target="_blank"
            rel="noopener noreferrer"
            title={data.instagram.titulo}
            href={data.instagram.link}
          >
            <AiOutlineInstagram className="my-6 text-4xl" />
            <b>Instagram</b>
            @kallpaludica
          </a>
        </Socials>
      </section>
      <section>
        <div className="flex flex-col items-baseline justify-center w-full max-w-6xl mx-auto">
          <div className="w-full my-12 text-center text-gray-800">
            <h1 className="my-12 font-serif text-xl font-bold">
              Editoriales de Juegos con las que trabajamos
            </h1>
            <div className="flex items-center justify-center">
              {data.editoriales.edges.map(({ node }) => {
                return (
                  <Link
                    key={node.slug}
                    to={`/editoriales/${kebabCase(node.slug)}/`}
                    className="flex items-center justify-center mx-12 overflow-hidden text-gray-800 rounded-md "
                  >
                    {node.logo ? (
                      <div className="relative w-48 overflow-hidden md:w-full">
                        <Img
                          title={node.title}
                          className="w-32"
                          alt={node.title}
                          fluid={node.logo.fluid}
                        />
                      </div>
                    ) : (
                      <h2 className="w-24 max-w-xs font-bold ">{node.title}</h2>
                    )}
                  </Link>
                )
              })}
            </div>
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

const Socials = styled.div`
  ${tw`flex flex-col justify-center max-w-3xl mx-auto my-12 text-center bg-white md:flex-row`}
  a {
    ${tw`w-full max-w-sm mx-auto md:mx-3`}
  }
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
