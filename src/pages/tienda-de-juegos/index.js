import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { animated, useSpring } from "react-spring"
import tw from "twin.macro"
import GameCard from "../../components/GameCard"
import GamesAside from "../../components/Games/GameMenu"
import GameSort from "../../components/Games/GameSort"
import HeroWave from "../../components/HeroWave"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"

const AllPage = (props) => {
  const data = useStaticQuery(graphql`
    query AllQuery {
      collection: allContentfulArticulos(
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
              fixed(width: 300, height: 230) {
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
        sort: { fields: [title], order: DESC }
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
    config: { mass: 5, tension: 200, friction: 80 },
  })
  const sortASD = useSpring({
    display: isToggled ? "none" : "block",
    opacity: isToggled ? "0" : "1",
    config: { mass: 5, tension: 200, friction: 80 },
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
            <MainTitle>Por Título</MainTitle>
          </PageSticky>
          <div className="relative flex flex-col justify-start border-b-2 border-blue-300 md:flex-row sm:py-0 sm:pt-0">
            <GameSort />
            <button
              className="relative bottom-0 right-0 flex items-baseline justify-center px-4 py-3 text-white bg-blue-500 outline-none md:absolute focus:outline-none hover:bg-blue-600"
              onClick={() => setToggle(!isToggled)}
            >
              <span className="font-sans font-bold">
                <animated.div style={sortDESC}>
                  De la Z a la A
                  <AiOutlineArrowUp className="inline-block ml-1 text-lg" />
                </animated.div>
                <animated.div style={sortASD}>
                  De la A a la Z
                  <AiOutlineArrowDown className="inline-block ml-1 text-lg" />
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

export default AllPage

const Container = styled.div`
  ${tw`grid w-full grid-cols-1 gap-4 p-3 pt-6 pb-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3`}
`

const ContainerDesc = styled.div`
  ${tw`grid w-full grid-cols-1 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3`}
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
