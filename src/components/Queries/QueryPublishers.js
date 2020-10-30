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
            logo {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
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
            className="hover:text-indigo-500 hover:border-indigo-500"
          >
            {node.title}
          </Link>
        )
      })}
    </>
  )
}

export default QueryPublisherComponent
