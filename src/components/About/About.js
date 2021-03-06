import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FormatText from "../wysiwyg"
import styled from "@emotion/styled"
import tw from "twin.macro"

const AboutAboutComponent = () => {
  const data = useStaticQuery(graphql`
    query AboutAboutQuery {
      about: contentfulSobreElProyecto(slug: { eq: "quienes-somos" }) {
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
      <h1 className="hidden max-w-6xl pb-6 mx-auto font-mono text-6xl">
        {data.about.title}
      </h1>

      <About className="">
        <FormatText
          FormatText={
            data.about.childContentfulSobreElProyectoTextoPrincipalRichTextNode
          }
        />
      </About>
    </>
  )
}

export default AboutAboutComponent

const About = styled.div`
  ${tw`max-w-3xl mx-auto font-sans text-2xl text-left `}
  p {
    ${tw`text-gray-900`}
  }
`
