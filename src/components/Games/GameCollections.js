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
        <div className="grid grid-cols-2 gap-6 my-12 font-sans text-gray-800 md:grid-cols-4">
          {data.collections.edges.map(({ node }) => {
            return (
              <div className="flex flex-col text-center">
                <Link
                  key={node.slug}
                  to={`/colecciones/${kebabCase(node.slug)}/`}
                  className="flex flex-col justify-center text-2xl font-bold text-blue-500 "
                >
                  {node.icono && (
                    <div className="relative overflow-hidden text-center transition-all duration-200 transform md:w-full hover:-translate-y-2">
                      <Img
                        title={node.title}
                        className="w-full"
                        alt={node.title}
                        fixed={node.icono.fixed}
                      />
                    </div>
                  )}
                  <span className="text-blue-500 hover:underline">
                    {node.title}
                  </span>
                </Link>
                <p className="font-sans text-xl">
                  {node.CollectionDescription.CollectionDescription}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GameCollectionComponent
