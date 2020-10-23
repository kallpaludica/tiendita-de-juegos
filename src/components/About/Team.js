import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import FormatText from "../wysiwyg"

const QueryTeamComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryTeamQuery {
      editoriales: allContentfulEquipo(sort: { fields: id }) {
        edges {
          node {
            id
            title
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
          <div
            key={node.id}
            className="flex flex-col items-start justify-start w-full max-w-lg p-3 mx-auto my-6 font-sans bg-white md:flex-row"
          >
            <div className="flex items-center justify-center mb-3 text-orange-500 transition-all duration-200 transform translate-x-0 translate-y-2 hover:text-blue-500 pattern-dots-sm md:-translate-x-6 md:-translate-y-6">
              <Img
                title={node.title}
                className="block object-cover w-32 h-auto transform scale-90 "
                alt={node.title}
                fluid={node.imagenDestacada.fluid}
              />
            </div>
            <div className="text-sm text-left">
              <FormatText
                FormatText={
                  node.childContentfulEquipoTextoPrincipalRichTextNode
                }
              />
            </div>
          </div>
        )
      })}
    </>
  )
}

export default QueryTeamComponent
