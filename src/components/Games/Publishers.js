import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"

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
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid_withWebp
              }
              fixed(width: 250, height: 100) {
                ...GatsbyContentfulFixed
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
        <div className="w-full mb-12 text-center text-gray-800 ">
          <div className="grid items-center justify-center max-w-6xl grid-cols-2 gap-3 mx-auto md:grid-cols-4 lg:grid-cols-5 ">
            {data.editoriales.edges.map(({ node }) => {
              return (
                <Link
                  key={node.slug}
                  to={`/editoriales/${kebabCase(node.slug)}`}
                  activeClassName="opacity-25"
                  className="flex items-center justify-center m-6 overflow-hidden text-gray-800 rounded-md "
                >
                  {node.logo ? (
                    <div className="relative flex flex-col items-center justify-center w-48 overflow-hidden md:w-full">
                      <Img
                        title={node.title}
                        className="object-contain w-full h-auto"
                        alt={node.title}
                        fluid={node.logo.fluid}
                      />
                      <h2 className="max-w-xs mt-3 font-bold ">{node.title}</h2>
                    </div>
                  ) : (
                    <h2 className="max-w-xs font-bold ">{node.title}</h2>
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
