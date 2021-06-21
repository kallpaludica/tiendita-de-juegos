import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import { GatsbyImage } from "gatsby-plugin-image"
import * as containerStyles from "./ResoursesCard.module.css"

const QueryCRecursosLastComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryRecursosLastQuery {
      collections: allContentfulRecursos(limit: 6) {
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
    <div className={containerStyles.gridContainer}>
      {data.collections.edges.map(({ node }) => {
        return (
          <div key={node.id} className={containerStyles.item}>
            <Link to={`/recursos/${kebabCase(node.slug)}/`} className={containerStyles.imageContainer}>
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

export default QueryCRecursosLastComponent
