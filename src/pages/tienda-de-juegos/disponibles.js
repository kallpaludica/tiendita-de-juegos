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
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"

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
              fluid(maxWidth: 650) {
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
              fluid(maxWidth: 650) {
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
      <SEO title="Tienda de juegos" />
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
              <animated.div style={sortDESC}>
                <FaSortAmountDown className="inline-block mb-1 mr-5" />
                Juegos disponibles
              </animated.div>
              <animated.div style={sortASD}>
                <FaSortAmountDownAlt className="inline-block mb-1 mr-5" />
                Juegos disponibles
              </animated.div>
            </MainTitle>
          </PageSticky>
          <div className="relative flex flex-col justify-start border-b-2 border-blue-300 md:flex-row sm:py-0 sm:pt-0 md:pl-2">
            <GameSort />
            <button
              className="relative bottom-0 right-0 flex items-center justify-center px-4 py-3 text-white bg-blue-500 outline-none md:absolute focus:outline-none hover:bg-blue-600"
              onClick={() => setToggle(!isToggled)}
            >
              <span className="font-sans font-bold">
                <animated.div style={sortDESC}>
                  De mayor a menor precio
                  <AiOutlineArrowUp className="inline-block text-lg" />
                </animated.div>
                <animated.div style={sortASD}>
                  De menor a mayor precio
                  <AiOutlineArrowDown className="inline-block text-lg" />
                </animated.div>
              </span>
            </button>
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
  ${tw`grid w-full grid-cols-1 gap-4 p-3 pt-6 pb-12 mx-auto bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
`

const ContainerDesc = styled.div`
  ${tw`grid w-full grid-cols-1 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4`}
`

const PageSticky = styled.div`
  ${tw`top-0 z-50 pt-3 `}
`

const ContentSidebar = styled.div`
  ${tw`relative z-10 flex flex-row-reverse w-full max-w-6xl mx-auto -mt-16`}
`

const Aside = styled.aside`
  ${tw`hidden w-56 md:block `}
`

const Main = styled.section`
  ${tw`relative w-full px-2 mx-auto md:px-0`}
`

const MainTitle = styled.h2`
  ${tw`font-sans text-3xl font-bold text-left `}
  ${tw`pb-6 text-white md:pl-3`}
`
