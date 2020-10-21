import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"

const QueryTeamComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryTeamQuery {
      editoriales: allContentfulEquipo(sort: { fields: title }) {
        edges {
          node {
            id
            title
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
            className="flex flex-col items-center justify-center font-sans text-2xl transition-all duration-200 transform cursor-pointer hover:-translate-y-2"
          >
            <div className="mb-3 bg-orange-500 rounded-full shadow-lg">
              <Img
                title={node.title}
                className="block object-cover w-32 h-auto "
                alt={node.title}
                fluid={node.imagenDestacada.fluid}
              />
            </div>
            {node.title}
          </div>
        )
      })}
    </>
  )
}

export default QueryTeamComponent
