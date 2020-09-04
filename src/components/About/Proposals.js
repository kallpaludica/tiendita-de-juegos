import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import FormatText from "../wysiwyg"

const ProposalsComponent = () => {
  const data = useStaticQuery(graphql`
    query ProposalsQuery {
      propuestas: contentfulSobreElProyecto(title: { eq: "Propuestas" }) {
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
      <div className="w-full py-24 text-left bg-white" id="proposals">
        <h1 className="hidden max-w-4xl mx-auto font-serif text-4xl">
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
    </>
  )
}

export default ProposalsComponent

const List = styled.div`
  ul {
    ${tw`pl-6 list-disc `}
  }
`
