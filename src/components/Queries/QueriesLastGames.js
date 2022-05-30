import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import GameCard from "@components/GameCard/GameCard"

const QueriesLastGamesComponent = () => {
  const data = useStaticQuery(graphql`
    query QueriesLastGamesQuery {
      GamesSorted: allContentfulArticulos(
        sort: { fields: [createdAt], order: DESC }
        limit: 8
      ) {
        edges {
          node {
            id
            title
            articuloDestacado
            slug
            createdAt
            GameInStock
            GameBuyPrice
            GamePlayers
            GameDuration
            GameAuthor
            GameAges
            imagenDestacada {
              gatsbyImageData(
                layout: CONSTRAINED
                width:300
                height:300
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: BLURRED
              )
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <>
      <div className='grid max-w-6xl grid-cols-1 gap-4 p-3 py-12 mx-auto md:px-0 sm:grid-cols-2 md:grid-cols-4 ' id="contenido">
        {data.GamesSorted.edges.map(({ node }) => {
          return <GameCard card={node} key={node.slug} />
        })}
      </div >
    </>
  )
}

export default QueriesLastGamesComponent
