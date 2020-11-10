import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"

const GameCollectionComponent = () => {
  const data = useStaticQuery(graphql`
    query GameCollectionQuery {
      collections: allContentfulColecciones {
        edges {
          node {
            id
            title
            slug
            CollectionDescription {
              CollectionDescription
            }
            icono {
              fixed(width: 80, height: 80) {
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
      <div className="flex flex-col items-center justify-center max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-2 gap-2 my-12 font-sans text-gray-800 md:grid-cols-4">
          {data.collections.edges.map(({ node }) => {
            return (
              <div className="flex flex-col text-center transition-all duration-200 transform rounded-md shadow-xl hover:shadow-2xl hover:-translate-y-2">
                <Link
                  key={node.slug}
                  to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                  className="flex flex-col justify-center text-lg font-bold text-blue-500 "
                >
                  {node.icono && (
                    <div className="relative overflow-hidden text-center md:w-full ">
                      <Img
                        title={node.title}
                        className="w-full"
                        alt={node.title}
                        fixed={node.icono.fixed}
                      />
                    </div>
                  )}
                  <span className="text-blue-500">{node.title}</span>
                </Link>
                <p className="h-16 p-2 px-3 font-sans text-base">
                  {node.CollectionDescription.CollectionDescription}
                </p>
                <Link
                  to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                  className="px-2 py-2 text-white bg-blue-500 rounded-sm hover:bg-blue-600 hover:text-white"
                >
                  Ver {node.title}
                </Link>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GameCollectionComponent
