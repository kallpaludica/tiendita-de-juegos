import { useStaticQuery, graphql } from "gatsby"
import React from "react"
import { Helmet } from "react-helmet"
import Layout from "@components/layout"
import Seo from "@components/seo"
import HeroWave from "@components/HeroWave/HeroWave"
import GameCard from "@components/GameCard/GameCard"
import GameSort from "@components/Games/GameSort"
import * as containerStyles from "./duracion.module.css"
import GamesAside from "@components/Games/GameMenu"

const DurationPage = (props) => {
  const data = useStaticQuery(graphql`
    query DurationQuery {
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
            GameInStock
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
                placeholder: BLURRED
              )
            }
          }
        }
      }
      
    }
  `)


  return (
    <Layout>
      <Seo title="Juegos por duración" />
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
              Juegos por Duración
            </h2>
          </div>
          <div className="relative top-0 z-50 pt-3 md:pl-4">
            <GameSort />
          </div>
          <div >
            <div className={containerStyles.showduration} id="contenido">
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

export default DurationPage
