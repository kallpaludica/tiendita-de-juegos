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
                layout: CONSTRAINED
                width:100
                height:100
                quality: 100
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-6xl px-6 pb-24 mx-auto">
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
                  className="p-2 pt-4 font-serif text-base md:px-0 md:text-lg"
                  style={{ minHeight: "80px" }}
                >
                  {node.CollectionDescription.CollectionDescription}
                </p>
                <Link
                  to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                  className="w-32 mx-auto mb-6 btn blue"
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
