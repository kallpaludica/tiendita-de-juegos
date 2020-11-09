import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"

import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../../components/HeroWave"
import GameCard from "../../components/GameCard"
import GamesAside from "../../components/Games/GameMenu"
import GameSort from "../../components/Games/GameSort"
import { useSpring, animated } from "react-spring"
import { FaSortAmountDownAlt, FaSortAmountDown } from "react-icons/fa"

const DisponiblePage = (props) => {
  const data = useStaticQuery(graphql`
    query DisponibleQuery {
      collection: allContentfulArticulos(
        sort: { fields: [GameBuyPrice], order: ASC }
        filter: { stock: { ne: "sin stock" } }
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
            stock
            categoria {
              title
              slug
            }
            publisher {
              title
              slug
            }
            imagenDestacada {
              fixed(width: 180, height: 230) {
                ...GatsbyContentfulFixed
              }
              fluid(maxWidth: 450) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
      collectionReverse: allContentfulArticulos(
        sort: { fields: [GameBuyPrice], order: DESC }
        filter: { stock: { ne: "sin stock" } }
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
            stock
            categoria {
              title
              slug
            }
            publisher {
              title
              slug
            }
            imagenDestacada {
              fixed(width: 180, height: 230) {
                ...GatsbyContentfulFixed
              }
              fluid(maxWidth: 450) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const [isToggled, setToggle] = useState(false)
  const sortDESC = useSpring({
    display: isToggled ? "block" : "none",
    config: { mass: 3, tension: 500, friction: 80 },
  })
  const sortASD = useSpring({
    display: isToggled ? "none" : "block",
    config: { mass: 3, tension: 500, friction: 80 },
  })

  return (
    <Layout>
      <SEO title="Tiendita de juegos" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave pattern="bg-blue-600 text-blue-500" />
      <ContentSidebar>
        <Aside>
          <GamesAside />
        </Aside>
        <Main>
          <PageSticky>
            <MainTitle>
              <button
                className="relative bottom-0 right-0 flex items-center justify-center px-0 py-1 mb-2 mr-1 text-white outline-none focus:outline-none hover:underline"
                onClick={() => setToggle(!isToggled)}
              >
                <span className="font-sans text-lg font-bold lg:text-3xl">
                  <animated.div style={sortDESC}>
                    <FaSortAmountDown className="inline-block mb-1 mr-2" />
                    Con stock de mayor a menor precio
                  </animated.div>
                  <animated.div style={sortASD}>
                    <FaSortAmountDownAlt className="inline-block mb-1 mr-2" />
                    Con stock de menor a mayor precio
                  </animated.div>
                </span>
              </button>
            </MainTitle>
          </PageSticky>
          <div className="relative flex flex-col justify-start border-b-2 border-blue-300 md:flex-row sm:py-0 sm:pt-0">
            <GameSort />
          </div>
          <animated.div style={sortASD}>
            <Container id="contenido">
              {data.collection.edges.map((item, i) => (
                <GameCard card={item.node} key={item.node.slug} />
              ))}
            </Container>
          </animated.div>

          <animated.div style={sortDESC}>
            <ContainerDesc>
              {data.collectionReverse.edges.map((item, i) => (
                <GameCard card={item.node} key={item.node.slug} />
              ))}
            </ContainerDesc>
          </animated.div>
        </Main>
      </ContentSidebar>
    </Layout>
  )
}

export default DisponiblePage

const Container = styled.div`
  ${tw`grid w-full grid-cols-1 gap-4 p-3 pt-6 pb-12 mx-auto bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3`}
`

const ContainerDesc = styled.div`
  ${tw`grid w-full grid-cols-1 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3`}
`

const PageSticky = styled.div`
  ${tw`top-0 z-50 pt-3 `}
`

const ContentSidebar = styled.div`
  ${tw`relative z-10 flex flex-row-reverse w-full max-w-6xl mx-auto -mt-16`}
`

const Aside = styled.aside`
  ${tw`hidden w-64 md:block `}
`

const Main = styled.section`
  ${tw`relative w-full px-2 mx-auto md:px-0`}
`

const MainTitle = styled.h2`
  ${tw`font-sans text-3xl font-bold text-center md:text-left `}
  ${tw`pb-6 text-white md:pl-3`}
`
