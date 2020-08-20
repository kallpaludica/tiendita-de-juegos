import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import FormatText from "../wysiwyg"

const MisionComponent = () => {
  const data = useStaticQuery(graphql`
    query MisionQuery {
      mision: contentfulSobreElProyecto(title: { eq: "Misión" }) {
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
      <div className="w-full py-24 text-left bg-orange-100" id="mision">
        <h1 className="max-w-4xl mx-auto font-serif text-4xl">
          {data.mision.title}
        </h1>
        <div className="flex items-center justify-center">
          <List className="max-w-4xl mx-auto font-serif text-2xl ">
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
