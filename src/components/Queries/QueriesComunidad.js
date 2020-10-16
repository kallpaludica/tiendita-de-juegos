import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import Img from "gatsby-image"

const QueryComunidadComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryComunidadQuery {
      collections: allContentfulComunidad {
        edges {
          node {
            id
            title
            slug
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
    <>
      {data.collections.edges.map(({ node }) => {
        return (
          <div className="md:flex">
            <div className="md:flex-shrink-0">
              <Img
                title={node.title}
                className="rounded-lg md:w-56"
                alt={node.title}
                fluid={node.featuredImg.fluid}
              />
            </div>
            <div className="mt-4 text-left md:mt-0 md:ml-6">
              <div className="text-sm font-bold tracking-wide text-indigo-600 uppercase">
                #ENJM
              </div>
              <Link
                className="block mt-1 font-sans text-xl font-semibold leading-tight text-gray-900 hover:underline"
                key={node.slug}
                to={`/comunidad/${kebabCase(node.slug)}/`}
              >
                {node.title}
              </Link>
              <p className="mt-2 font-sans text-base text-gray-600">
                Nacen en 2012 como una iniciativa de la ONG La Cantera que junto
                a un puñado de jugadores entusiastas.
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default QueryComunidadComponent
