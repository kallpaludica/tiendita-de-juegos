import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FormatText from "../wysiwyg"

const AboutAboutComponent = () => {
  const data = useStaticQuery(graphql`
    query AboutAboutQuery {
      about: contentfulSobreElProyecto(title: { eq: "Quienes Somos" }) {
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
      <h1 className="max-w-4xl pb-6 mx-auto font-serif text-4xl">
        {data.about.title}
      </h1>

      <div className="max-w-xl mx-auto font-serif text-base text-left ">
        <FormatText
          FormatText={
            data.about.childContentfulSobreElProyectoTextoPrincipalRichTextNode
          }
        />
      </div>
    </>
  )
}

export default AboutAboutComponent
