import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { kebabCase } from "lodash"

const QueryPublisherComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryPublisherQuery {
      editoriales: allContentfulEditorial(sort: { fields: title }) {
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
      {data.editoriales.edges.map(({ node }) => {
        return (
          <Link
            key={node.slug}
            to={`/tienda-de-juegos/editoriales/${kebabCase(node.slug)}/`}
            activeClassName="text-green-500"
            className="font-serif hover:text-gray-800 hover:border-gray-600"
          >
            {node.title}
          </Link>
        )
      })}
    </>
  )
}

export default QueryPublisherComponent
