import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import tw from "twin.macro"
import FormatText from "../wysiwyg"

const ObjectivesComponent = () => {
  const data = useStaticQuery(graphql`
    query ObjectivesQuery {
      objetivos: contentfulSobreElProyecto(slug: { eq: "objetivos" }) {
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
        className="w-full py-24 mb-32 text-left bg-green-100"
        id="objectives"
      >
        <h1 className="max-w-4xl mx-auto font-mono text-4xl text-center text-green-500">
          {data.objetivos.title}
        </h1>
        <hr className="w-16 mx-auto my-8 border-t-4 border-green-500" />

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
    ${tw`grid grid-cols-3 gap-3 pl-6 text-center `}

    li {
      ${tw`mx-2`}
    }
  }
`
