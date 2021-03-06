import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { GoMail } from "react-icons/go"
import { RiWhatsappLine } from "react-icons/ri"
import tw from "twin.macro"
import reactLogo from "../../animations/ogam.json"
import FormatText from "../wysiwyg"
import Fade from "react-reveal/Fade"
//import LikesInstagram from "../Queries/LikesInstagram"

const ContactComponent = () => {
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
      instagram: contentfulDatosDeContacto(titulo: { eq: "Instagram" }) {
        id
        titulo
        link
      }
      facebook: contentfulDatosDeContacto(titulo: { eq: "Facebook" }) {
        id
        titulo
        link
      }
      contactanos: contentfulSobreElProyecto(slug: { eq: "contacto" }) {
        id
        title
        childContentfulSobreElProyectoTextoPrincipalRichTextNode {
          json
        }
      }
    }
  `)

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    })
  }, [])

  return (
    <>
      <div tw="flex justify-center max-w-lg mx-auto">
        <div id="react-logo" style={{ width: 400, height: 300 }} />
      </div>
      <h1 tw="max-w-6xl mx-auto mt-0 font-mono text-3xl font-bold text-teal-700">
        {data.contactanos.title}
      </h1>
      <div tw="max-w-6xl mx-auto ">
        <FormatText
          FormatText={
            data.contactanos
              .childContentfulSobreElProyectoTextoPrincipalRichTextNode
          }
        />
      </div>
      <Socials>
        <a
          tw="flex flex-col items-center justify-center text-center text-teal-500 transition-all duration-500 ease-in-out transform bg-white rounded-md hover:shadow-md hover:-translate-y-2 hover:text-teal-600"
          target="_blank"
          rel="noopener noreferrer"
          title={data.whatsapp.titulo}
          href={`https://api.whatsapp.com/send?phone=${data.whatsapp.link}&text=%C2%A1Hola!%F0%9F%A4%97%20`}
        >
          <RiWhatsappLine tw="my-6 text-4xl" />
          <h2 tw="my-2 font-sans text-xl">{data.whatsapp.link}</h2>
          <b>Teléfono</b>
        </a>
        <a
          tw="flex flex-col items-center justify-center text-center text-blue-500 transition-all duration-500 ease-in-out transform bg-white rounded-md hover:shadow-md hover:text-blue-600 hover:-translate-y-2"
          target="_blank"
          rel="noopener noreferrer"
          title={data.facebook.titulo}
          href={data.facebook.link}
        >
          <AiOutlineFacebook tw="my-6 text-4xl" />
          <h2 tw="my-2 font-sans text-xl">kallpaludicaa</h2>
          <b>Facebook</b>
        </a>

        <a
          tw="flex flex-col items-center justify-center text-center text-purple-500 transition-all duration-500 ease-in-out transform bg-white rounded-md hover:shadow-md hover:text-purple-600 hover:-translate-y-2"
          target="_blank"
          rel="noopener noreferrer"
          title={data.instagram.titulo}
          href={data.instagram.link}
        >
          <AiOutlineInstagram tw="my-6 text-4xl" />
          <h2 tw="my-2 font-sans text-xl">@kallpaludica</h2>
          <b>Instagram</b>
        </a>
        <a
          tw="flex flex-col items-center justify-center text-center text-orange-500 transition-all duration-500 ease-in-out transform bg-white rounded-md hover:shadow-md  hover:text-orange-600 hover:-translate-y-2"
          target="_blank"
          rel="noopener noreferrer"
          title={data.mail.titulo}
          href={`mailto:${data.mail.link}`}
        >
          <GoMail tw="my-6 text-4xl" />
          <h2 tw="my-2 font-sans text-xl">{data.mail.link}</h2>
          <b>Mail</b>
        </a>
      </Socials>
      <section
        tw="py-24 pb-32 mb-0 text-blue-200 bg-blue-100 "
        className="pattern-grid-lg"
        id="redes"
      >
        <Fade bottom delay={100}>
          <h1 tw="pt-12 pb-12 font-sans text-3xl font-bold leading-tight text-center text-gray-800 md:text-4xl">
            Seguinos en <br />
            <a
              href="https://www.instagram.com/kallpaludica/"
              target="_blank"
              rel="noopener noreferrer"
              tw="text-blue-600 underline hover:opacity-75 hover:text-blue-500"
            >
              instagram
            </a>{" "}
            y{" "}
            <a
              href="https://www.facebook.com/kallpaludicaa"
              target="_blank"
              rel="noopener noreferrer"
              tw="text-blue-500 underline hover:opacity-75 hover:text-blue-500"
            >
              facebook
            </a>
          </h1>
        </Fade>
        
      </section>
    </>
  )
}

export default ContactComponent

const Socials = styled.div`
  ${tw`flex flex-col justify-center max-w-5xl py-12 mx-auto text-center md:flex-row`}
  a {
    ${tw`w-full max-w-sm p-2 mx-auto mb-3 rounded-md md:mx-3`}
  }

  b {
    ${tw`mb-3 font-mono text-sm font-light`}
  }
`
