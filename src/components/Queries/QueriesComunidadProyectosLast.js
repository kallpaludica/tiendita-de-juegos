import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"
import * as containerStyles from "./ProjectCard.module.css"

const QueryComunidadProyectosLastComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryComunidadProyectosLastQuery {
      collections: allContentfulComunidad(
        filter: { categoria: { eq: "Proyectos que nos potencian" } }
        limit: 4
        sort: {fields: updatedAt, order: DESC}
      ) {
        edges {
          node {
            id
            title
            slug
            linkExterno
            categoria
            description {
              description
            }
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
    <div className={containerStyles.gridContainer}>
      {data.collections.edges.map(({ node }) => {
        return (
          <div key={node.id} className={containerStyles.item}>
            <Link className={containerStyles.imageContainer} to={`/comunidad/${kebabCase(node.slug)}/`}>
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
                to={`/comunidad/${kebabCase(node.slug)}/`}
              >
                {node.title}
              </Link>

              <p className={containerStyles.description}>
                {node.description.description}
              </p>

              <div className={containerStyles.buttonContainer}>
                {node.textoPrincipal && (
                  <Link
                    className={containerStyles.button}
                    key={node.slug}
                    to={`/comunidad/${kebabCase(node.slug)}/`}
                  >
                    Conocer más
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

export default QueryComunidadProyectosLastComponent
