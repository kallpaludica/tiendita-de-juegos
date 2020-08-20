import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import GameCard from "../../components/GameCard"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../../components/HeroWave"

const DuracionPage = () => {
  const data = useStaticQuery(graphql`
    query DuracionQuery {
      collection: allContentfulArticulos(
        sort: { fields: [GameDuration], order: ASC }
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
              fixed(width: 180, height: 230) {
                ...GatsbyContentfulFixed
              }
              fluid(maxWidth: 450) {
                ...GatsbyContentfulFluid
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Tiendita de juegos" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave
        heading="De menor a mayor duración"
        pattern="bg-orange-600 text-orange-500"
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />

      <Container id="contenido">
        {data.collection.edges.map((item, i) => (
          <GameCard card={item.node} key={item.node.slug} />
        ))}
      </Container>
    </Layout>
  )
}

export default DuracionPage

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-2 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}
`
