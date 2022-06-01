// import GameCard from "@components/GameCard/GameCard"
import * as containerStyles from "@components/GameCard/GameCard.module.css"
import GamesAside from "@components/Games/GameMenu"
import HeroWave from "@components/HeroWave/HeroWave"
import Layout from "@components/layout"
import Seo from "@components/seo"
import AboutImage from "@images/kallpa-ludica.png"
import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React from "react"
import { Helmet } from "react-helmet"
import { AiFillCheckCircle } from "react-icons/ai"
import { CgSandClock } from "react-icons/cg"
//import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const CollectionsSingleTemplate = ({ data, pageContext, location }) => {
  const collection = data.contentfulColecciones
  const collectionArticulos = data.contentfulColecciones.CollectionGames
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <Helmet>
        <body className="collectionPage" />
      </Helmet>
      <Seo
        title={`Coleccion ${collection.title}`}
        description={`Juego de la Coleccion ${collection.title}`}
        image={`${collection.icono.file.url}`}
      />
      <HeroWave
        heading={collection.title}
        subtitle={collection.CollectionDescription.CollectionDescription}
        pattern="bg-blue-500 text-blue-600"
      />

      <div className="relative z-10 flex flex-row w-full mx-auto -mt-16 max-w-7xl">
        <div className="hidden w-64 px-6 pr-12 -mt-2 md:block">
          <GamesAside />
        </div>
        <div className="relative w-full px-2 pt-12 mx-auto">
          <div>
            <div className="grid max-w-6xl grid-cols-1 gap-4 p-3 pb-12 mx-auto mt-16 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
              {collectionArticulos.map(({ node, slug, title, GameBuyPrice, GameAges, GameDuration, GamePlayers, GameInStock, imagenDestacada }) => {
                return (
                  <div className={containerStyles.gamecard}>
                    <div className="flex sm:flex-col">
                      {imagenDestacada ? (
                        <Link
                          to={`/tienda-de-juegos/${kebabCase(slug)}/`}
                          className="bg-white image"
                        >
                          <GatsbyImage
                            title={title}
                            className="block object-scale-down w-32 sm:w-full"
                            alt={title}
                            image={imagenDestacada.gatsbyImageData}
                          />
                        </Link>
                      ) : (
                        <Link
                          to={`/tienda-de-juegos/${kebabCase(slug)}/`}
                          className="image"
                        >
                          <img
                            className="w-full h-full mx-auto my-6 opacity-25 "
                            alt="Kallpa Lúdica"
                            src={AboutImage}
                          />
                        </Link>
                      )}
                      <div className="relative flex flex-col w-full px-0 pb-0 font-serif text-left bg-white ">
                        <div className="flex-grow" style={{ minHeight: "80px" }}>
                          <Link
                            to={`/tienda-de-juegos/${kebabCase(slug)}/`}
                            className="flex-grow inline-block px-2 pt-4 font-serif text-base font-bold line-clamp-1 hover:text-green-600"
                          >
                            {title}
                          </Link>
                          {GameAges && (
                            <div className="hidden w-full px-2 pt-1 text-center game-ages md:px-0 ">
                              <div className="flex justify-start pb-1 font-serif text-lg font-bold text-left text-gray-700 md:px-2 ">
                                <div className="flex flex-1 text-base opacity-100">
                                  {GameAges}+ años
                                </div>
                              </div>
                            </div>
                          )}
                          {GameDuration && (
                            <div className="hidden w-full px-2 pt-1 text-center game-duration md:px-0">
                              <div className="flex justify-center pb-1 font-serif text-lg font-bold text-center text-gray-700 md:px-2 ">
                                <div className="flex flex-1 text-base opacity-100">
                                  Duración: {GameDuration}min.
                                </div>
                              </div>
                            </div>
                          )}
                          {GamePlayers && (
                            <div className="hidden w-full pt-1 text-center game-players">
                              <div className="flex justify-center pb-1 font-serif text-lg font-bold text-center text-gray-700 ">
                                <div className="flex items-baseline flex-1 ">
                                  {GamePlayers}
                                  jugadorxs
                                </div>
                              </div>
                            </div>
                          )}

                          {GameInStock ? (
                            <div
                              className="relative top-0 right-0 flex items-center justify-start pt-1 pl-1 m-0 font-serif text-sm font-bold text-left transition-all duration-500 text-emerald-600 md:text-base hover:text-blue-800"
                              title="Por encargo"
                            >
                              <span className="block">En Stock</span>
                            </div>
                          ) : (
                            <div
                              className="relative top-0 right-0 flex items-center justify-start pt-1 pl-1 m-0 font-serif text-sm font-bold text-left text-blue-600 transition-all duration-500 md:text-base hover:text-blue-800"
                              title="Por encargo"
                            >
                              <CgSandClock className="" />
                              <span className="block">Por encargo</span>
                            </div>
                          )}
                          
                        </div>
                        <Link
                          to={`/tienda-de-juegos/${kebabCase(slug)}/`}
                          className="border-t border-green-200 "
                        >
                          <div className="flex items-center justify-between p-3 px-2 font-serif text-lg font-bold text-left text-green-700 transition-all duration-500 bg-white hover:text-green-500 hover:bg-green-100">
                            <span className="btn green">Ver juego</span>
                            <AiFillCheckCircle className="hidden mb-1 " />
                            <b className="block font-bold text-green-800 ">
                              ${GameBuyPrice}
                            </b>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                )
              })}

            </div>

            <div className="w-full max-w-2xl m-auto article">
              <div className="flex justify-between py-12">
                <div>
                  {prev && (
                    <Link
                      to={`/tienda-de-juegos/colecciones/${kebabCase(
                        prev.slug
                      )}/`}
                      rel="prev"
                      className="font-mono"
                    >
                      ← {prev.title}
                    </Link>
                  )}
                </div>

                <div style={{ justifySelf: "flex-end" }}>
                  {next && (
                    <Link
                      to={`/tienda-de-juegos/colecciones/${kebabCase(
                        next.slug
                      )}/`}
                      rel="next"
                      className="font-mono"
                    >
                      {next.title} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default CollectionsSingleTemplate

export const pageQuery = graphql`
  query CollectionBySlug($slug: String!) {
    contentfulColecciones(slug: { eq: $slug }) {
      id
      title
      slug
      childContentfulColeccionesCollectionDescriptionTextNode {
        childMarkdownRemark {
          html
        }
      }
      CollectionGames {
        id
        title
        slug
        GameInStock
        GameBuyPrice
        imagenDestacada {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 500
            height: 500
            formats: JPG
            backgroundColor: "#ffffff"
            placeholder: BLURRED
          )
          file {
            url
          }
        }
      }
      icono {
        file {
          url
        }
      }
      CollectionDescription {
        CollectionDescription
      }
    }
  }
`
