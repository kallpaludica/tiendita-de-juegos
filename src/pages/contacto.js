import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
import HeroWave from "../components/HeroWave"
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import "../components/VideoReact.css"
import tw from "twin.macro"
import styled from "@emotion/styled"
import "../components/AwsBtn.css"
import FormatText from "../components/wysiwyg"

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
      contactanos: contentfulSobreElProyecto(title: { eq: "Contactanos" }) {
        id
        title
        childContentfulSobreElProyectoTextoPrincipalRichTextNode {
          json
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
      <HeroWave
        pattern="bg-orange-500 text-orange-700"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <h1 className="max-w-4xl mx-auto mt-6 font-serif text-4xl font-bold text-orange-700">
        {data.contactanos.title}
      </h1>

      <div className="max-w-4xl mx-auto font-serif text-2xl">
        <FormatText
          FormatText={
            data.contactanos
              .childContentfulSobreElProyectoTextoPrincipalRichTextNode
          }
        />
      </div>

      <Socials>
        <a
          className="flex flex-col items-center justify-center text-center"
          target="_blank"
          rel="noopener noreferrer"
          title={data.whatsapp.titulo}
          href={`https://api.whatsapp.com/send?phone=${data.whatsapp.link}&text=%C2%A1Hola!%F0%9F%A4%97%20`}
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
  ${tw`flex flex-col justify-center max-w-3xl py-12 mx-auto text-center bg-white md:flex-row`}
  a {
    ${tw`w-full max-w-sm mx-auto md:mx-3`}
  }
`
