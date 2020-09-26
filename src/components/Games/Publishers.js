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
      <div
        className="relative z-50 flex flex-col items-baseline justify-center w-full max-w-6xl mx-auto"
        id="publishers"
      >
        <div className="w-full mb-12 text-center text-gray-800">
          <div className="grid items-center justify-center max-w-6xl grid-cols-2 gap-3 mx-auto md:grid-cols-4 lg:grid-cols-7 ">
            {data.editoriales.edges.map(({ node }) => {
              return (
                <Link
                  key={node.slug}
                  to={`/editoriales/${kebabCase(node.slug)}/`}
                  activeclassname="opacity-25"
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
