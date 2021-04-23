import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"


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
              gatsbyImageData(
                layout: CONSTRAINED
                width: 500
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
    <>
      <div className="relative z-50 grid max-w-6xl grid-cols-2 gap-2 mx-auto mb-12 overflow-hidden md:grid-cols-3 lg:grid-cols-6">
        {data.editoriales.edges.map(({ node }) => {
          return (
            <Link
							key={node.slug}
							to={`/tienda-de-juegos/editoriales/${kebabCase(node.slug)}`}
              className="flex items-center justify-center m-5 overflow-hidden text-gray-800 rounded-md "
            >
              {node.logo && (
                <GatsbyImage
                title={node.title}
                className="object-scale-down w-full"
                alt={node.title}
                image={node.logo.gatsbyImageData}
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
