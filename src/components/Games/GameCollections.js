import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"

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
              gatsbyImageData(
                layout: FIXED
                height: 100
                width: 100
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-6xl px-6 mx-auto">
        <div className="grid grid-cols-1 gap-5 my-12 font-sans text-gray-800 sm:grid-cols-2 md:grid-cols-4">
          {data.collections.edges.map(({ node }) => {
            return (
              <div
                className="relative flex flex-col text-center transition-all duration-500 ease-in-out transform shadow-xl rounded-xl hover:shadow-2xl hover:-translate-y-1"
                key={node.slug}
              >
                <Link
                  to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                  className="flex flex-col justify-center text-lg font-bold text-blue-500 shadow-sm"
                >
                  {node.icono && (
                    <div className="relative py-6 pb-0 overflow-hidden text-center bg-white md:w-full ">
                      <GatsbyImage
                        title={node.title}
                        className="mx-auto"
                        alt={node.title}
                        image={node.icono.gatsbyImageData}
                      />
                    </div>
                  )}
                  <h4 className="text-xl text-blue-500">{node.title}</h4>
                </Link>
                <p
                  className="p-2 pt-4 font-sans text-base md:px-0 md:text-lg"
                  style={{ minHeight: "80px" }}
                >
                  {node.CollectionDescription.CollectionDescription}
                </p>
                <Link
                  to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                  className="px-2 py-2 font-bold text-white bg-blue-500 rounded-sm hover:bg-blue-600 hover:text-white"
                >
                  Ver colección
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
