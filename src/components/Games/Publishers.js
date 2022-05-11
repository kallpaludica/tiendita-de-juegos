import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React from "react"

const PublishersComponent = () => {
  const data = useStaticQuery(graphql`
    query PublishersWithImagesQuery {
      editoriales: allContentfulEditorial(sort: {order: ASC, fields: title}) {
        edges {
          node {
            id
            title
            slug
            logo {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 500
              )
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div
        className="relative z-50 flex flex-col items-baseline justify-center w-full mx-auto max-w-7xl"
        id="publishers"
      >
        <div className="w-full mb-32 text-center text-gray-800 ">
          <div className="grid items-center justify-center max-w-full grid-cols-2 gap-3 mx-auto md:grid-cols-4 lg:grid-cols-5 ">
            {data.editoriales.edges.map(({ node }) => {
              return (
                <Link
                  key={node.slug}
                  to={`/tienda-de-juegos/editoriales/${kebabCase(node.slug)}`}
                  activeClassName="hidden"
                  className="flex items-center justify-center m-6 overflow-hidden text-gray-800 rounded-md group "
                >
                  {node.logo ? (
                    <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
                      <GatsbyImage
                        title={node.title}
                        className="object-scale-down w-full"
                        alt={node.title}
                        image={node.logo.gatsbyImageData}
                      />
                      <h2 className="max-w-xs mt-3 font-bold duration-300 opacity-0 group-hover:opacity-100 ">{node.title}</h2>
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
