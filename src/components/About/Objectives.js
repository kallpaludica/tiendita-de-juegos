import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import FormatText from "../wysiwyg"

const ObjectivesComponent = () => {
  const data = useStaticQuery(graphql`
    query ObjectivesQuery {
      objetivos: contentfulSobreElProyecto(title: { eq: "Objetivos" }) {
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
      <div
        className="w-full py-24 mb-32 text-left bg-indigo-100"
        id="objectives"
      >
        <h1 className="max-w-4xl mx-auto font-mono text-4xl">
          {data.objetivos.title}
        </h1>
        <List className="max-w-4xl mx-auto font-sans text-2xl ">
          <FormatText
            FormatText={
              data.objetivos
                .childContentfulSobreElProyectoTextoPrincipalRichTextNode
            }
          />
        </List>
      </div>
    </>
  )
}

export default ObjectivesComponent

const List = styled.div`
  ul {
    ${tw`pl-6 list-disc `}
  }
`
