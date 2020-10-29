import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"

const QueryCategoriesComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryCategoriesQuery {
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
      {data.categories.edges.map(({ node }) => {
        return (
          <Link
            key={node.slug}
            to={`/modalidades/${kebabCase(node.slug)}`}
            className="hover:text-orange-500 hover:border-orange-500"
          >
            {node.title}
          </Link>
        )
      })}
    </>
  )
}

export default QueryCategoriesComponent
