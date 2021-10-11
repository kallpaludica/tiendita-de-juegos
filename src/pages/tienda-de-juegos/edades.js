import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import HeroWave from "../../components/HeroWave"
import GameCard from "../../components/GameCard"
import GameSort from "../../components/Games/GameSort"
import * as containerStyles from "./edades.module.css"
import GamesAside from "../../components/Games/GameMenu"

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
      <Seo title="Juegos por edades" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave pattern="bg-green-600 text-green-700" />
      <div className="relative z-10 flex flex-row w-full mx-auto max-w-7xl md:-mt-16">
        <div className="hidden w-72 md:block ">
          <GamesAside />
        </div>
        <div className="relative w-full px-2 mx-auto md:px-0">
          <div className="relative flex flex-row items-center justify-center sm:py-0 sm:pt-4">
            <h2 className="w-full pb-2 font-serif text-2xl font-bold text-center text-gray-600 md:pr-32 md:text-right md:text-3xl">
              Juegos por Edades
            </h2>
          </div>
          <div className="relative top-0 z-50 pt-3 md:pl-4">
            <GameSort />
          </div>
          <div>
            <div className={containerStyles.showedades} id="contenido">
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

export default EdadesPage
