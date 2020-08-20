import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"

import Img from "gatsby-image"

const PublishersComponent = () => {
  const data = useStaticQuery(graphql`
    query PublishersWithImagesQuery {
      editoriales: allContentfulEditorial {
        edges {
          node {
            id
            title
            slug
            logo {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div
        className="flex flex-col items-baseline justify-center w-full max-w-6xl mx-auto"
        id="publishers"
      >
        <div className="w-full mb-12 text-center text-gray-800">
          <h1 className="my-12 font-serif text-3xl font-bold">
            Editoriales que trabajamos
          </h1>
          <div className="flex flex-wrap items-center justify-center max-w-6xl mx-auto ">
            {data.editoriales.edges.map(({ node }) => {
              return (
                <Link
                  key={node.slug}
                  to={`/editoriales/${kebabCase(node.slug)}/`}
                  className="flex items-center justify-center m-6 overflow-hidden text-gray-800 rounded-md "
                >
                  {node.logo ? (
                    <div className="relative flex items-center justify-center w-48 h-32 overflow-hidden md:w-full">
                      <Img
                        title={node.title}
                        className="w-32"
                        alt={node.title}
                        fluid={node.logo.fluid}
                      />
                    </div>
                  ) : (
                    <h2 className="w-24 max-w-xs font-bold ">{node.title}</h2>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default PublishersComponent
