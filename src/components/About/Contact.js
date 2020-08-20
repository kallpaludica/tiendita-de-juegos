import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import FormatText from "../wysiwyg"
import {
  AiOutlineWhatsApp,
  AiOutlineMail,
  AiOutlineInstagram,
} from "react-icons/ai"

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
    <>
      <h1 className="max-w-4xl mx-auto mt-6 font-serif text-4xl font-bold text-green-700">
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
    </>
  )
}

export default ContactComponent

const Socials = styled.div`
  ${tw`flex flex-col justify-center max-w-2xl pb-12 mx-auto text-center md:flex-row`}
  a {
    ${tw`w-full max-w-sm mx-auto md:mx-3`}
  }
`
