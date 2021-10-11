import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"
import * as containerStyles from "./ResoursesCard.module.css"

const QueryComunidadRecursosComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryComunidadRecursosQuery {
      collections: allContentfulRecursos(sort: {fields: updatedAt, order: DESC}) {
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
    <div className="grid w-full grid-cols-1 gap-8 mx-auto max-w-7xl md:grid-cols-3">
      {data.collections.edges.map(({ node }) => {
        return (
          <div key={node.id} className={containerStyles.item}>
            <Link
              to={`/recursos/${kebabCase(node.slug)}/`}
              className={containerStyles.imageContainer}
            >
              <GatsbyImage
                title={node.title}
                className={containerStyles.image}
                alt={node.title}
                image={node.featuredImg.gatsbyImageData}
              />
            </Link>
            <div className={containerStyles.content}>
              <Link
                className={containerStyles.title}
                key={node.slug}
                to={`/recursos/${kebabCase(node.slug)}/`}
              >
                {node.title}
              </Link>
              <div className={containerStyles.buttonContainer}>
                {node.textoPrincipal && (
                  <Link
                    className={containerStyles.button}
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
