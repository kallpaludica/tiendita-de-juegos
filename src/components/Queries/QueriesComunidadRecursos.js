import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"

const QueryComunidadRecursosComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryComunidadRecursosQuery {
      collections: allContentfulRecursos(
        sort: { fields: updatedAt, order: DESC }
      ) {
        edges {
          node {
            id
            title
            slug
            updatedAt(formatString: "LL", locale: "es")
            descripcion {
              descripcion
            }
            featuredImg {
              gatsbyImageData(
                layout: FULL_WIDTH
                height: 650
                quality: 90
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
    <div className="grid w-full max-w-4xl grid-cols-1 gap-8 px-4 mx-auto md:px-0">
      {data.collections.edges.map(({ node }) => {
        return (
          <div
            key={node.id}
            className="relative grid w-full mx-auto overflow-hidden text-left duration-300 bg-white rounded-md shadow md:grid-cols-4 hover:shadow-lg"
          >
            <Link
              to={`/recursos/${kebabCase(node.slug)}/`}
              className="h-64 col-span-2 "
            >
              <GatsbyImage
                title={node.title}
                className="object-cover object-center w-full h-64"
                alt={node.title}
                image={node.featuredImg.gatsbyImageData}
              />
            </Link>
            <div className="relative col-span-2 p-6">
              <Link
                className="font-serif text-2xl font-bold text-gray-900 "
                key={node.slug}
                to={`/recursos/${kebabCase(node.slug)}/`}
              >
                {node.title}
              </Link>
              {node.descripcion && (
                <p className="max-w-full my-2 font-serif prose text-gray-900 line-clamp-3">
                  {node.descripcion.descripcion}
                </p>
              )}
              <div className="mt-3 md:mt-0">
                {node.descripcion && (
                  <Link
                    className="btn blue"
                    key={node.slug}
                    to={`/recursos/${kebabCase(node.slug)}/`}
                  >
                    Ver juego
                  </Link>
                )}
              </div>
              <p className="absolute right-0 p-2 font-serif text-sm font-medium text-gray-600 md:bottom-0 bottom-5">Actualizado el {node.updatedAt}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default QueryComunidadRecursosComponent
