import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import tw from "twin.macro"
import FormatText from "../wysiwyg"

const ProposalsComponent = () => {
  const data = useStaticQuery(graphql`
    query ProposalsQuery {
      propuestas: contentfulSobreElProyecto(slug: { eq: "propuestas" }) {
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
      <div className="w-full text-center">
        <h1 className="max-w-4xl pb-6 mx-auto font-mono text-4xl">
          {data.propuestas.title}
        </h1>
        <List className="max-w-4xl mx-auto font-sans text-2xl ">
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
    ${tw`grid grid-cols-1 gap-3 pl-0 text-center md:grid-cols-3 `}

    li {
      ${tw`mx-2`}
    }
  }
`
