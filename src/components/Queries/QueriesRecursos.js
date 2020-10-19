import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"

const QueryRecursosComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryRecursosQuery {
      collections: allContentfulRecursos {
        edges {
          node {
            id
            title
            slug
            featuredImg {
              fixed(width: 300, height: 230) {
                ...GatsbyContentfulFixed
              }
              fluid(maxWidth: 500) {
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
          <div className="relative w-full m-2 overflow-hidden rounded shadow-lg">
            <Img
              title={node.title}
              className="relative z-40 object-cover w-full h-full"
              alt={node.title}
              fluid={node.featuredImg.fluid}
            />
            <div className="absolute bottom-0 left-0 right-0 z-50 px-6 py-4 bg-white">
              <Link
                className="mb-2 font-sans text-xl font-bold text-green-600 hover:text-green-800"
                key={node.slug}
                to={`/recursos/${kebabCase(node.slug)}/`}
              >
                {node.title}
              </Link>
              <p className="hidden text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default QueryRecursosComponent
