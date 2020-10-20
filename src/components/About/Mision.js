import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import tw from "twin.macro"
import FormatText from "../wysiwyg"

const MisionComponent = () => {
  const data = useStaticQuery(graphql`
    query MisionQuery {
      mision: contentfulSobreElProyecto(slug: { eq: "mision" }) {
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
      <div className="w-full text-center " id="mision">
        <h1 className="max-w-4xl mx-auto font-mono text-4xl">
          {data.mision.title}
        </h1>
        <div className="flex items-center justify-center">
          <List className="max-w-4xl mx-auto font-sans text-2xl ">
            <FormatText
              FormatText={
                data.mision
                  .childContentfulSobreElProyectoTextoPrincipalRichTextNode
              }
            />
          </List>
        </div>
      </div>
    </>
  )
}

export default MisionComponent

const List = styled.div`
  ul {
    ${tw`pl-6 list-disc `}
  }
`
