import { graphql, Link, useStaticQuery } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"

const GameCollectionComponent = () => {
  const data = useStaticQuery(graphql`
    query GameCollectionQuery {
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
      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-12">
        <h2 className="font-mono text-xl font-bold text-right text-gray-800">
          Colecciones
        </h2>
        <div className="font-mono text-xl font-bold text-right text-gray-800">
          {data.collections.edges.map(({ node }) => {
            return (
              <Link
                key={node.slug}
                to={`/colecciones/${kebabCase(node.slug)}/`}
                className="ml-2 text-orange-500 underline"
              >
                {node.title}
              </Link>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GameCollectionComponent
