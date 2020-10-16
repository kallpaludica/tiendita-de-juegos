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
          <div class="max-w-sm rounded overflow-hidden shadow-lg">
            <Img
              title={node.title}
              className="w-full"
              alt={node.title}
              fluid={node.featuredImg.fluid}
            />
            <div class="px-6 py-4">
              <Link
                className="mb-2 font-sans text-xl font-bold text-green-600 hover:text-green-800"
                key={node.slug}
                to={`/comunidad/${kebabCase(node.slug)}/`}
              >
                {node.title}
              </Link>
              <p class="hidden text-gray-700 text-base">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
            <div class="px-6 pt-4 pb-2">
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #enjm
              </span>
              <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                #eventos
              </span>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default QueryComunidadComponent
