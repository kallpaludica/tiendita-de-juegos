import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "react-awesome-slider/dist/styles.css"
import Layout from "../components/layout"
import HeroWave from "../components/HeroWave"
import AboutImage from "../images/kallpa-ludica.png"
import FormatText from "../components/wysiwyg"
import SEO from "../components/seo"
import { Helmet } from "react-helmet"
import "../components/VideoReact.css"
import tw from "twin.macro"
import styled from "@emotion/styled"
import "../components/AwsBtn.css"
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai"
const AboutPage = () => {
  const data = useStaticQuery(graphql`
    query AboutQuery {
      propuestas: contentfulSobreElProyecto(title: { eq: "Propuestas" }) {
        id
        title
        childContentfulSobreElProyectoTextoPrincipalRichTextNode {
          json
        }
      }
      about: contentfulSobreElProyecto(title: { eq: "Quienes Somos" }) {
        id
        title
        childContentfulSobreElProyectoTextoPrincipalRichTextNode {
          json
        }
      }
      mision: contentfulSobreElProyecto(title: { eq: "Misión" }) {
        id
        title
        childContentfulSobreElProyectoTextoPrincipalRichTextNode {
          json
        }
      }
      objetivos: contentfulSobreElProyecto(title: { eq: "Objetivos" }) {
        id
        title
        childContentfulSobreElProyectoTextoPrincipalRichTextNode {
          json
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
      <Helmet>
        <body className="about" />
      </Helmet>
      <HeroWave
        pattern="bg-pink-800 text-pink-900"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <Section>
        <div className="flex flex-col items-baseline justify-center w-full max-w-6xl mx-auto">
          <div className="w-full mt-12 text-center text-gray-800 transform -translate-y-56">
            <img
              className="w-64 max-w-md mx-auto "
              alt="Kallpa Lúdica"
              src={AboutImage}
            />
            <h1 className="max-w-4xl mx-auto font-serif text-4xl">
              {data.about.title}
            </h1>

            <div className="max-w-xl mx-auto font-serif text-base text-left ">
              <FormatText
                FormatText={
                  data.about
                    .childContentfulSobreElProyectoTextoPrincipalRichTextNode
                }
              />
            </div>
          </div>
        </div>
      </Section>

      <div className="w-full py-24 text-left bg-orange-100">
        <h1 className="max-w-4xl mx-auto font-serif text-4xl">
          {data.mision.title}
        </h1>
        <div className="flex items-center justify-center">
          <List className="max-w-4xl mx-auto font-serif text-2xl ">
            <FormatText
              FormatText={
                data.mision
                  .childContentfulSobreElProyectoTextoPrincipalRichTextNode
              }
            />
          </List>
        </div>
      </div>

      <div className="w-full py-24 text-left bg-white">
        <h1 className="max-w-4xl mx-auto font-serif text-4xl">
          {data.propuestas.title}
        </h1>
        <List className="max-w-4xl mx-auto font-serif text-2xl ">
          <FormatText
            FormatText={
              data.propuestas
                .childContentfulSobreElProyectoTextoPrincipalRichTextNode
            }
          />
        </List>
      </div>
      <div className="w-full py-24 text-left bg-indigo-100">
        <h1 className="max-w-4xl mx-auto font-serif text-4xl">
          {data.objetivos.title}
        </h1>
        <List className="max-w-4xl mx-auto font-serif text-2xl ">
          <FormatText
            FormatText={
              data.objetivos
                .childContentfulSobreElProyectoTextoPrincipalRichTextNode
            }
          />
        </List>
      </div>
      <Contact>
        <h1 className="max-w-4xl mx-auto font-serif text-4xl font-bold text-green-700">
          {data.contactanos.title}
        </h1>

        <div className="max-w-4xl mx-auto font-serif text-2xl text-gray-800">
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
            <h2 className="my-2 font-serif text-xl">{data.whatsapp.link}</h2>
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
            <h2 className="my-2 font-serif text-xl">@kallpaludica</h2>
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
            <h2 className="my-2 font-serif text-xl">{data.mail.link}</h2>
          </a>
        </Socials>
      </Contact>
    </Layout>
  )
}

export default AboutPage

const Section = styled.section`
  ${tw`relative`}
`

const Contact = styled.section`
  ${tw`pt-24 bg-green-100 `}
`

const List = styled.div`
  ul {
    ${tw`pl-6 list-disc `}
  }
`

const Socials = styled.div`
  ${tw`flex flex-col justify-center max-w-2xl pb-12 mx-auto text-center md:flex-row`}
  a {
    ${tw`w-full max-w-sm mx-auto md:mx-3`}
  }
`
