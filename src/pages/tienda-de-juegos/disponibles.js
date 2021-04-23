import { useStaticQuery, graphql } from "gatsby"
import React, { useState } from "react"

import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroWave from "../../components/HeroWave"
import GameCard from "../../components/GameCard"
import GameSort from "../../components/Games/GameSort"
import { useSpring, animated } from "react-spring"
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import GamesAside from "../../components/Games/GameMenu"

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
    config: { mass: 3, tension: 500, friction: 80 },
  })
  const sortASD = useSpring({
    display: isToggled ? "none" : "block",
    config: { mass: 3, tension: 500, friction: 80 },
  })

  return (
    <Layout>
      <Seo title="Tienda de juegos" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave pattern="bg-blue-600 text-blue-500" />
      <div className="relative z-10 flex flex-row-reverse w-full max-w-6xl mx-auto md:-mt-16">
        <div className="hidden w-72 md:block ">
          <GamesAside />
        </div>
        <div className="relative w-full px-2 mx-auto md:px-0">
          <div className="relative top-0 z-50 pt-3 md:pl-4">
            <GameSort />
          </div>
          <div className="relative flex flex-row items-center justify-between border-b-2 border-green-300 sm:py-0 sm:pt-4 md:pl-2">
            <h2 className="font-sans text-lg font-bold text-left text-green-600 md:text-3xl md:pl-3">
              Juegos disponibles
            </h2>
            <button
              className="relative bottom-0 right-0 flex items-center justify-center px-4 py-3 text-white bg-green-500 outline-none md:absolute focus:outline-none hover:bg-green-600"
              onClick={() => setToggle(!isToggled)}
            >
              <span className="font-sans font-bold">
                <animated.div style={sortDESC}>
                  De mayor a menor{" "}
                  <AiOutlineArrowUp className="inline-block text-lg" />
                </animated.div>
                <animated.div style={sortASD}>
                  De menor a mayor{" "}
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

export default DisponiblePage
