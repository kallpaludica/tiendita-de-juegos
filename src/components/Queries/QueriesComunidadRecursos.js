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
            descripcion {
              descripcion
            }
            featuredImg {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 400
                height: 400
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
    <div className="grid w-full max-w-4xl grid-cols-1 gap-8 mx-auto">
      {data.collections.edges.map(({ node }) => {
        return (
          <div
            key={node.id}
            className="grid w-full grid-cols-4 mx-auto overflow-hidden text-left duration-300 bg-white rounded-md shadow hover:shadow-lg"
          >
            <Link
              to={`/recursos/${kebabCase(node.slug)}/`}
              className="col-span-1"
            >
              <GatsbyImage
                title={node.title}
                className=""
                alt={node.title}
                image={node.featuredImg.gatsbyImageData}
              />
            </Link>
            <div className="col-span-3 p-6">
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
              <div className="">
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
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default QueryComunidadRecursosComponent
