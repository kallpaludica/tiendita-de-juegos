import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"

const QueryCollectionComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryCollectionQuery {
      collections: allContentfulColecciones {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)

  return (
    <>
      {data.collections.edges.map(({ node }) => {
        return (
          <Link
            key={node.slug}
            to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
            activeClassName="text-blue-500"
            className="font-sans  hover:text-blue-500 hover:border-blue-500"
          >
            {node.title}
          </Link>
        )
      })}
    </>
  )
}

export default QueryCollectionComponent
