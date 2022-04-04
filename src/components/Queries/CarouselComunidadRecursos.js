import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"

const CarouselComunidadRecursosComponent = () => {
  const data = useStaticQuery(graphql`
    query CarouselComunidadRecursosQuery {
      collections: allContentfulRecursos(
        sort: { fields: updatedAt, order: DESC }
        limit: 12
      ) {
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
                width: 600
                height: 600
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
    <>
      {data.collections.edges.map(({ node }) => {
        return (
          <div className="embla__slideAutoWith" key={node.id}>
            <div className="mb-6 overflow-hidden duration-300 bg-white rounded-lg shadow-lg md:opacity-70 hover:opacity-100 hover:shadow">
              <Link to={`/recursos/${kebabCase(node.slug)}/`} className="">
                <GatsbyImage
                  title={node.title}
                  className=""
                  alt={node.title}
                  image={node.featuredImg.gatsbyImageData}
                />
              </Link>
              <div
                className="p-2 text-gray-900 bg-white"
                style={{ minHeight: "80px" }}
              >
                <Link
                  className="font-sans text-lg font-bold text-gray-900"
                  key={node.slug}
                  to={`/recursos/${kebabCase(node.slug)}/`}
                >
                  {node.title}
                </Link>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CarouselComunidadRecursosComponent
