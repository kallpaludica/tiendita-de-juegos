import { graphql, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { animated, useSpring } from "react-spring"
import Layout from "../../components/layout"
import GameCard from "../../components/GameCard"
import GamesAside from "../../components/Games/GameMenu"
import GameSort from "../../components/Games/GameSort"
import HeroWave from "../../components/HeroWave"
import Seo from "../../components/seo"
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
              gatsbyImageData(
                layout: CONSTRAINED
                width:300
                height:300
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: DOMINANT_COLOR
              )
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
              gatsbyImageData(
                layout: CONSTRAINED
                width:300
                height:300
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: DOMINANT_COLOR
              )
            }
          }
        }
      }
    }
  `)

  const [isToggled, setToggle] = useState(false)
  const sortDESC = useSpring({
    display: isToggled ? "block" : "none",
    config: { mass: 5, tension: 200, friction: 80 },
  })
  const sortASD = useSpring({
    display: isToggled ? "none" : "block",
    config: { mass: 5, tension: 200, friction: 80 },
  })

  return (
    <Layout>
      <Seo title="Juegos de la A a la Z" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave pattern="bg-green-600 text-green-500" />
      <div className="relative z-10 flex flex-row-reverse w-full mx-auto max-w-7xl md:-mt-16">
        <div className="hidden w-72 md:block ">
          <GamesAside />
        </div>
        <div className="relative w-full px-2 mx-auto md:px-0">
          <div className="relative top-0 z-50 pt-3 md:pl-4">
            <GameSort />
          </div>
          <div className="relative flex flex-row items-center justify-between border-b-2 border-green-300 sm:py-0 sm:pt-4 md:pl-2">
            <h2 className="font-sans text-lg font-bold text-left text-green-600 md:text-3xl md:pl-3">
              Por Título
            </h2>
            <button
              className="relative bottom-0 right-0 flex items-center justify-center px-4 py-3 text-white bg-green-500 outline-none md:absolute focus:outline-none hover:bg-green-600"
              onClick={() => setToggle(!isToggled)}
            >
              <span className="font-sans font-bold">
                <animated.div style={sortDESC}>
                  De la A a la Z
                  <AiOutlineArrowUp className="inline-block text-lg" />
                </animated.div>
                <animated.div style={sortASD}>
                  De la Z a la A
                  <AiOutlineArrowDown className="inline-block text-lg" />
                </animated.div>
              </span>
            </button>
          </div>
          <animated.div style={sortASD}>
            <div
              className="grid w-full grid-cols-1 gap-4 p-3 pt-6 pb-12 mx-auto bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              id="contenido"
            >
              {data.collection.edges.map((item, i) => (
                <GameCard card={item.node} key={item.node.slug} />
              ))}
            </div>
          </animated.div>

          <animated.div style={sortDESC}>
            <div className="grid w-full grid-cols-1 gap-4 p-3 pt-6 pb-12 mx-auto bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {data.collectionReverse.edges.map((item, i) => (
                <GameCard card={item.node} key={item.node.slug} />
              ))}
            </div>
          </animated.div>
        </div>
      </div>
    </Layout>
  )
}

export default AllPage
