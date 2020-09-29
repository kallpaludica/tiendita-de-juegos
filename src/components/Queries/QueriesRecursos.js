import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
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
            className="font-sans text-xl font-bold text-green-600 hover:text-green-800"
            key={node.slug}
            to={`/recursos/${kebabCase(node.slug)}/`}
          >
            {node.title}
          </Link>
        )
      })}
    </>
  )
}

export default QueryRecursosComponent
