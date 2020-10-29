import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import GameCard from "../../components/GameCard"
import tw from "twin.macro"
import styled from "@emotion/styled"

const GameCollectionSortedComponent = () => {
  const data = useStaticQuery(graphql`
    query GameCollectionSortedQuery {
      GamesSorted: allContentfulArticulos(
        sort: { fields: [title], order: ASC }
      ) {
        edges {
          node {
            id
            title
            slug
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

export default GameCollectionSortedComponent

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-2 gap-4 p-3 pb-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3`}
`
