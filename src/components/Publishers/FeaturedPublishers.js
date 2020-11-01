import Img from "gatsby-image"
import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"


const PublishersFeaturedComponent = () => {
  const data = useStaticQuery(graphql`
    query FeaturedQuery {
      editoriales: allContentfulEditorial(filter: {destacatar: {eq: "destacar"}}, limit: 6) {
        edges {
          node {
            id
            title
            slug
            logo {
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid_withWebp
              }
              fixed(width: 250, height: 100) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="relative z-50 overflow-hidden grid grid-cols-6 gap-2 max-w-6xl mx-auto mb-12">
        {data.editoriales.edges.map(({ node }) => {
          return (
            <Link
							key={node.slug}
							to={`/tienda-de-juegos/editoriales/${kebabCase(node.slug)}`}
              className="flex items-center justify-center m-5 overflow-hidden text-gray-800 rounded-md "
            >
              {node.logo && (
                <Img
                  title={node.title}
                  className="block object-cover w-32 h-auto "
                  alt={node.title}
                  fluid={node.logo.fluid}
                />
              )}
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default PublishersFeaturedComponent
