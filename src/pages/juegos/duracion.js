import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../../components/HeroWave"
import GameCard from "../../components/GameCard"
import GamesAside from "../../components/Games/GameMenu"
import GameSort from "../../components/Games/GameSort"

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
        pattern="bg-orange-600 text-orange-500"
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <ContentSidebar>
        <Aside>
          <GamesAside />
        </Aside>
        <Main>
          <PageSticky>
            <GameSort />
            <MainTitle>De menor a mayor duración</MainTitle>
          </PageSticky>
          <Container id="contenido">
            {data.collection.edges.map((item, i) => (
              <GameCard card={item.node} key={item.node.slug} />
            ))}
          </Container>
        </Main>
      </ContentSidebar>
    </Layout>
  )
}

export default DuracionPage

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-2 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 `}
`

const PageSticky = styled.div`
  ${tw`sticky top-0 z-50 pt-3 bg-white`}
`

const ContentSidebar = styled.div`
  ${tw`flex max-w-6xl mx-auto`}
`

const Aside = styled.aside`
  ${tw`hidden w-56 pl-3 md:block `}
`

const Main = styled.section`
  ${tw`relative`}
`

const MainTitle = styled.h2`
  ${tw`pl-5 mt-2 font-serif text-3xl font-bold text-left border-b border-orange-300`}
  ${tw`text-orange-500`}
`
