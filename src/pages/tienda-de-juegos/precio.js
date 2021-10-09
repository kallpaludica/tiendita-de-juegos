import { useStaticQuery, graphql } from "gatsby"
import React from "react"

import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroWave from "../../components/HeroWave"
import GameCard from "../../components/GameCard"
import GameSort from "../../components/Games/GameSort"
import GamesAside from "../../components/Games/GameMenu"

const PreciosPage = (props) => {
  const data = useStaticQuery(graphql`
    query PreciosQuery {
      collection: allContentfulArticulos(
        sort: { fields: [GameBuyPrice], order: ASC }
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
                width: 300
                height: 300
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

  return (
    <Layout>
      <Seo title="Juegos por precio" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave pattern="bg-green-600 text-green-700" />
      <div className="relative z-10 flex flex-row-reverse w-full mx-auto max-w-7xl md:-mt-16">
        <div className="hidden w-72 md:block ">
          <GamesAside />
        </div>
        <div className="relative w-full px-2 mx-auto md:px-0">
          <div className="relative top-0 z-50 pt-3 md:pl-4">
            <GameSort />
          </div>
          <div className="relative flex flex-row items-center justify-between border-b-2 border-green-300 sm:py-0 sm:pt-4 md:pl-2">
            <h2 className="font-serif text-lg font-bold text-left text-gray-600 md:text-3xl md:pl-3">
              Juegos por Precio
            </h2>
          </div>
          <div>
            <div
              className="grid w-full grid-cols-1 gap-4 p-3 pt-6 pb-12 mx-auto bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
              id="contenido"
            >
              {data.collection.edges.map((item, i) => (
                <GameCard card={item.node} key={item.node.slug} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default PreciosPage
