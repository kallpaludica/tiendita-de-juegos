import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import tw from "twin.macro"
import GameCard from "../../components/GameCard"

const QueriesLastGamesComponent = () => {
  const data = useStaticQuery(graphql`
    query QueriesLastGamesQuery {
      GamesSorted: allContentfulArticulos(
        sort: { fields: [GameBuyPrice], order: ASC }
        limit: 8
        filter: { articuloDestacado: { eq: "destacar" } }
      ) {
        edges {
          node {
            id
            title
            articuloDestacado
            slug
            stock
            GameBuyPrice
            GamePlayers
            GameDuration
            GameAuthor
            GameAges
            imagenDestacada {
              fixed(width: 200, height: 230) {
                ...GatsbyContentfulFixed
              }
              fluid(maxWidth: 450) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
        totalCount
      }
    }
  `)

  return (
    <>
      <Container id="contenido">
        {data.GamesSorted.edges.map(({ node }) => {
          return <GameCard card={node} key={node.slug} />
        })}
      </Container>
    </>
  )
}

export default QueriesLastGamesComponent

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-1 gap-4 p-3 py-12 mx-auto md:px-0 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
`
