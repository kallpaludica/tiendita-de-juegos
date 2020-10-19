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
import { FaCaretRight } from "react-icons/fa"

const EdadesPage = (props) => {
  const data = useStaticQuery(graphql`
    query EdadesQuery {
      collection: allContentfulArticulos(
        sort: { fields: [GameAges], order: ASC }
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
        sort: { fields: [GameAges], order: DESC }
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
    opacity: isToggled ? "1" : "0",
    config: { mass: 3, tension: 500, friction: 80 },
  })
  const sortASD = useSpring({
    display: isToggled ? "none" : "block",
    opacity: isToggled ? "0" : "1",
    config: { mass: 3, tension: 500, friction: 80 },
  })
  const sortICON = useSpring({
    transform: isToggled ? "scale(1) rotate(90deg)" : "scale(-1) rotate(90deg)",
    config: { mass: 3, tension: 500, friction: 80 },
  })

  return (
    <Layout>
      <SEO title="Tiendita de juegos" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave pattern="bg-indigo-600 text-indigo-500 pb-0" />
      <ContentSidebar>
        <Aside>
          <GamesAside />
        </Aside>
        <Main>
          <PageSticky>
            <MainTitle>Para peques</MainTitle>
          </PageSticky>
          <div className="relative flex flex-col justify-start border-b-2 border-indigo-300 md:flex-row sm:py-0 sm:pt-6">
            <GameSort />
            <button
              className="relative bottom-0 right-0 flex items-center justify-center px-4 py-3 font-bold text-indigo-800 bg-indigo-100 outline-none md:absolute focus:outline-none"
              onClick={() => setToggle(!isToggled)}
            >
              <span className="mr-2 font-sans text-base">Invertir filtros</span>
              <animated.div style={sortICON}>
                <FaCaretRight className="text-lg" />
              </animated.div>
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

export default EdadesPage

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-1 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4`}
  .game-ages {
    display: block !important;
  }
`

const ContainerDesc = styled.div`
  ${tw`grid max-w-6xl grid-cols-1 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4`}
  .game-ages {
    display: block !important;
  }
`

const PageSticky = styled.div`
  ${tw`top-0 z-50 pt-3 `}
`

const ContentSidebar = styled.div`
  ${tw`relative z-10 flex flex-row-reverse w-full max-w-6xl mx-auto -mt-16`}
`

const Aside = styled.aside`
  ${tw`hidden w-64 pl-3 md:block `}
`

const Main = styled.section`
  ${tw`relative w-full px-2 mx-auto`}
`

const MainTitle = styled.h2`
  ${tw`-mt-4 font-mono text-3xl text-center border-b border-orange-300 md:text-left`}
  ${tw`pb-6 text-white`}
`
