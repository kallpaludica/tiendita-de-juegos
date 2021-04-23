import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"
import { FiExternalLink } from "react-icons/fi"

const QueryComunidadComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryComunidadQuery {
      collections: allContentfulComunidad {
        edges {
          node {
            id
            title
            slug
            linkExterno
            categoria
            textoPrincipal {
              raw
            }
            featuredImg {
              gatsbyImageData(
                layout: FULL_WIDTH
                height: 500
                width: 420
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
    <div className="grid w-full gap-5 md:grid-cols-3">
      {data.collections.edges.map(({ node }) => {
        return (
          <div
            key={node.id}
            className="relative overflow-hidden border border-gray-300 rounded-lg shadow-lg"
          >
            <div className="w-full h-64 overflow-hidden md:relative">
              <Link
                className="block hover:opacity-90"
                key={node.slug}
                to={`/comunidad/${kebabCase(node.slug)}/`}
              >
                <GatsbyImage
                  title={node.title}
                  className="object-cover w-full h-64"
                  alt={node.title}
                  image={node.featuredImg.gatsbyImageData}
                />
              </Link>
            </div>
            <div className="relative px-4 -mt-10 text-left">
              <span className="relative z-20 inline-block px-3 py-1 text-sm font-bold text-indigo-100 uppercase bg-indigo-800 rounded-full bg-opacity-80">
                {node.categoria}
              </span>
              <Link
                className="block pt-4 my-3 font-sans text-2xl font-semibold leading-tight text-gray-900 hover:underline"
                key={node.slug}
                to={`/comunidad/${kebabCase(node.slug)}/`}
              >
                {node.title}
              </Link>

              {node.linkExterno && (
                <a
                  rel="noopener noreferrer"
                  href={node.linkExterno}
                  target="_blank"
                  className="inline-flex py-2 pr-4 font-sans text-base font-bold text-center text-indigo-600 rounded hover:text-indigo-600 hover:no-underline"
                >
                  Visitar espacio
                  <FiExternalLink className="ml-1" />
                </a>
              )}
              <div className="flex justify-between">
                <Link
                  className="px-4 py-2 mt-2 mb-3 font-sans text-sm text-center text-white bg-indigo-600 rounded hover:text-indigo-300 hover:no-underline"
                  key={node.slug}
                  to={`/comunidad/${kebabCase(node.slug)}/`}
                >
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default QueryComunidadComponent
