import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"

const QueryComunidadRecursosComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryComunidadRecursosQuery {
      collections: allContentfulRecursos {
        edges {
          node {
            id
            title
            slug
            textoPrincipal {
              raw
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
    <div className="grid w-full grid-cols-1 gap-5 mx-auto max-w-7xl md:grid-cols-4">
      {data.collections.edges.map(({ node }) => {
        return (
          <div key={node.slug} className="relative grid grid-cols-1 overflow-hidden bg-white border border-gray-300 rounded-lg shadow-lg">
            <Link className="relative w-full col-span-2 overflow-hidden hover:opacity-80" to={`/recursos/${kebabCase(node.slug)}/`}>
              <GatsbyImage
                title={node.title}
                className="object-cover w-full h-full"
                alt={node.title}
                image={node.featuredImg.gatsbyImageData}
              />
            </Link>
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-center h-20 col-span-2 px-4 mt-2 text-center bg-white bg-opacity-95">
              <Link
                className="block my-3 font-sans text-xl font-bold leading-tight text-gray-900 hover:underline"
                key={node.slug}
                to={`/recursos/${kebabCase(node.slug)}/`}
              >
                {node.title}
              </Link>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default QueryComunidadRecursosComponent
