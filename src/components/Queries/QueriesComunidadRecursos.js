import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import { FiExternalLink } from "react-icons/fi"

const QueryComunidadRecursosComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryComunidadRecursosQuery {
      collections: allContentfulComunidad(filter: {categoria: {eq: "Recursos Lúdicos"}}) {
        edges {
          node {
            id
            title
            slug
            linkExterno
            categoria
            textoPrincipal {
              textoPrincipal
            }
            featuredImg {
              fixed(width: 300, height: 230) {
                ...GatsbyContentfulFixed
              }
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="grid w-full gap-5 md:grid-cols-2">
      {data.collections.edges.map(({ node }) => {
        return (
          <div className="grid grid-cols-4 overflow-hidden border border-gray-300 rounded-lg shadow-lg">
            <div className="relative w-full h-64 col-span-2 overflow-hidden">
              <Img
                title={node.title}
                className="object-cover w-full h-full"
                alt={node.title}
                fluid={node.featuredImg.fluid}
              />
            </div>
            <div className="relative col-span-2 px-4 mt-2 text-left">
              {node.textoPrincipal ? (
                <Link
                  className="block my-3 font-sans text-2xl font-semibold leading-tight text-gray-900 hover:underline"
                  key={node.slug}
                  to={`/comunidad/${kebabCase(node.slug)}/`}
                >
                  {node.title}
                </Link>
              ) : (
                <div className="flex-1 block my-3 font-sans text-2xl font-semibold leading-tight text-gray-900 ">
                  {node.title}
                </div>
              )}
              
              <div className="flex justify-between">
                {node.textoPrincipal && (
                  <Link
                    className="px-4 py-2 mt-2 mb-3 font-sans text-sm text-center text-white bg-teal-600 rounded hover:text-teal-300 hover:no-underline"
                    key={node.slug}
                    to={`/comunidad/${kebabCase(node.slug)}/`}
                  >
                    Leer más
                  </Link>
                )}
              </div>
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
            </div>
          </div>
        )
      })}
    </div>
  )
}

export default QueryComunidadRecursosComponent
