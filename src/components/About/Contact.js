import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import { AiOutlineFacebook, AiOutlineInstagram } from "react-icons/ai"
import { GoMail } from "react-icons/go"
import { RiWhatsappLine } from "react-icons/ri"
import tw from "twin.macro"
import reactLogo from "../../animations/girl-bike.json"
import FormatText from "../wysiwyg"

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
      <div className="flex justify-center max-w-lg mx-auto">
        <div id="react-logo" style={{ width: 300, height: 300 }} />
      </div>
      <h1 className="max-w-6xl mx-auto mt-2 font-mono text-3xl font-bold text-green-700">
        {data.contactanos.title}
      </h1>
      <div className="max-w-6xl mx-auto ">
        <FormatText
          FormatText={
            data.contactanos
              .childContentfulSobreElProyectoTextoPrincipalRichTextNode
          }
        />
      </div>
      <Socials>
        <a
          className="flex flex-col items-center justify-center text-center bg-green-100 "
          target="_blank"
          rel="noopener noreferrer"
          title={data.whatsapp.titulo}
          href={`https://api.whatsapp.com/send?phone=${data.whatsapp.link}&text=%C2%A1Hola!%F0%9F%A4%97%20`}
        >
          <RiWhatsappLine className="my-6 text-4xl" />
          <b>Teléfono</b>
          <h2 className="my-2 font-sans text-xl">{data.whatsapp.link}</h2>
        </a>
        <a
          className="flex flex-col items-center justify-center text-center bg-blue-100 hover:text-blue-500"
          target="_blank"
          rel="noopener noreferrer"
          title={data.facebook.titulo}
          href={data.facebook.link}
        >
          <AiOutlineFacebook className="my-6 text-4xl" />
          <b>Facebook</b>
          <h2 className="my-2 font-sans text-xl">kallpa.ludica</h2>
        </a>

        <a
          className="flex flex-col items-center justify-center text-center bg-orange-100 hover:text-orange-600"
          target="_blank"
          rel="noopener noreferrer"
          title={data.instagram.titulo}
          href={data.instagram.link}
        >
          <AiOutlineInstagram className="my-6 text-4xl" />
          <b>Instagram</b>
          <h2 className="my-2 font-sans text-xl">@kallpaludica</h2>
        </a>
        <a
          className="flex flex-col items-center justify-center text-center bg-indigo-100 hover:text-indigo-500"
          target="_blank"
          rel="noopener noreferrer"
          title={data.mail.titulo}
          href={`mailto:${data.mail.link}`}
        >
          <GoMail className="my-6 text-4xl" />
          <b>Mail</b>
          <h2 className="my-2 font-sans text-xl">{data.mail.link}</h2>
        </a>
      </Socials>
    </>
  )
}

export default ContactComponent

const Socials = styled.div`
  ${tw`flex flex-col justify-center max-w-5xl py-12 mx-auto text-center md:flex-row`}
  a {
    ${tw`w-full max-w-sm p-2 mx-auto mb-3 rounded-md shadow-md md:mx-3`}
  }
`
