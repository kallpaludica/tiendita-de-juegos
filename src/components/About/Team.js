import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import FormatText from "../wysiwyg"
import tw from "twin.macro"
import styled from "@emotion/styled"

const QueryTeamComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryTeamQuery {
      editoriales: allContentfulEquipo(sort: { fields: orden }) {
        edges {
          node {
            id
            title
            orden
            childContentfulEquipoTextoPrincipalRichTextNode {
              json
            }
            imagenDestacada {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.editoriales.edges.map(({ node }) => {
        return (
          <Person key={node.id} className="">
            <div className="p-3 text-orange-300 transform translate-x-0 translate-y-2 md:flex-row pattern-dots-sm md:translate-x-6 md:translate-y-6 ">
              <div className="flex items-center justify-center mb-3 transform -translate-x-6 -translate-y-6">
                <Img
                  title={node.title}
                  className="block object-cover w-32 h-auto transform scale-90 "
                  alt={node.title}
                  fluid={node.imagenDestacada.fluid}
                />
              </div>
              <div className="mt-3 text-left transform -translate-x-6 -translate-y-6">
                <FormatText
                  FormatText={
                    node.childContentfulEquipoTextoPrincipalRichTextNode
                  }
                />
              </div>
            </div>
          </Person>
        )
      })}
    </>
  )
}

export default QueryTeamComponent

const Person = styled.div`
  ${tw`flex flex-col items-start justify-start w-full max-w-lg p-3 mx-auto my-6 font-sans bg-white`}
  p {
    font-size: 1rem !important;
    line-height: 1.5rem !important;
  }
`
