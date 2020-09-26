import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"

import Img from "gatsby-image"

const GameCategoriesComponent = () => {
  const data = useStaticQuery(graphql`
    query GameArchiveCategoriesQuery {
      categories: allContentfulCategoriaDelJuego {
        edges {
          node {
            id
            title
            slug
            icono {
              fixed(width: 80, height: 80) {
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
      <div className="flex flex-wrap justify-center max-w-6xl mx-auto my-0 text-center bg-white md:flex-row">
        {data.categories.edges.map(({ node }) => {
          return (
            <Link
              key={node.slug}
              to={`/categorias/${kebabCase(node.slug)}/`}
              activeclassname="opacity-50"
              className="flex flex-col items-center justify-center mx-12 my-3 font-serif text-xl text-gray-700 hover:text-gray-900"
            >
              {node.icono ? (
                <div className="relative overflow-hidden transition-all duration-200 transform md:w-full hover:-translate-y-2">
                  <Img
                    title={node.title}
                    className="w-full"
                    alt={node.title}
                    fixed={node.icono.fixed}
                  />
                </div>
              ) : (
                <h2 className="w-24 max-w-xs font-bold ">{node.title}</h2>
              )}
              {node.title}
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default GameCategoriesComponent
