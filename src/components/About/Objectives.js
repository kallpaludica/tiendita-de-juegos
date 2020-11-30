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
      <div className="w-full text-left ">
        <h1 className="max-w-4xl pb-6 mx-auto font-mono text-4xl text-center text-orange-600">
          {data.objetivos.title}
        </h1>
        <hr className="w-16 mx-auto my-8 border-t-4 border-orange-600" />

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
    ${tw`grid max-w-lg grid-cols-1 gap-1 pl-0 mx-auto text-left `}

    li {
      ${tw`mx-2 list-disc `}
      
    }

    p {
      ${tw`my-0`}

    }
  }
`
