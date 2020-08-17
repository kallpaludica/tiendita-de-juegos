import React from "react"
import { useStaticQuery, graphql, navigate, Link } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
import HeroWave from "../components/HeroWave"
//import AwesomeSlider from "react-awesome-slider"
import AboutImage from "../images/kallpa-ludica.png"
import { Player, BigPlayButton } from "video-react"
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai"
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

import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"

const Bold = ({ children }) => (
  <span className="font-mono font-bold">{children}</span>
)
const Text = ({ children }) => (
  <Fade>
    <p className="w-full font-mono text-2xl text-left text-gray-900">
      {children}
    </p>
  </Fade>
)
const website_url = "https://www.cooparaje.com.ar"
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (embedded) => (
      <div>
        <div dangerouslySetInnerHTML={{ __html: embedded }} />
      </div>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.fields.file["es-AR"].contentType === "video/mp4") {
          return (
            <div>
              <Player src={node.data.target.fields.file["es-AR"].url}>
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <div className="post-image">
                <img
                  className="w-full max-w-md mx-auto"
                  alt={node.data.target.fields.title["es-AR"]}
                  src={node.data.target.fields.file["es-AR"].url}
                />
              </div>
            </div>
          )
        }
      }
    },
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="inline-block pb-0 font-bold border-b border-green-300 hover:bg-green-600 hover:text-white"
          target={`${
            node.data.uri.startsWith(website_url) ? "_self" : "_blank"
          }`}
          rel={`${
            node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
          }`}
        >
          {node.content[0].value}
        </a>
      )
    },
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
  },
}

const ContactPage = () => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
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
      <HeroWave
        pattern="bg-orange-500 text-orange-700"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <h1 className="max-w-4xl mx-auto mt-6 font-serif text-4xl font-bold text-orange-700">
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
    </Layout>
  )
}

export default ContactPage

const Socials = styled.div`
  ${tw`flex flex-col justify-center max-w-3xl mx-auto my-12 text-center bg-white md:flex-row`}
  a {
    ${tw`w-full max-w-sm mx-auto md:mx-3`}
  }
`

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
