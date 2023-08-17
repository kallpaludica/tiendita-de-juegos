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
            <div className="grid max-w-6xl grid-cols-1 gap-4 p-3 pb-12 mx-auto mt-16 bg-white sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ">
              {collectionArticulos.map(
                ({
                  slug,
                  title,
                  GameAges,
                  GameDuration,
                  GamePlayers,
                  GameInStock,
                  imagenDestacada,
                }) => {
                  return (
                    <div className={containerStyles.gamecard} key={slug}>
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
                          <div
                            className="flex-grow"
                            style={{ minHeight: "70px" }}
                          >
                            <Link
                              to={`/tienda-de-juegos/${kebabCase(slug)}/`}
                              className="inline-flex items-baseline flex-grow gap-2 px-2 pt-4 font-serif font-bold hover:text-gray-800 hover:underline underline-offset-2"
                            >
                              <span className="">{title}</span>
                              {GameInStock ? (
                                <div className="shrink-0 bg-emerald-100 inline-block ring-emerald-300 ml-3 font-serif text-sm font-bold text-emerald-900 rounded px-1 py-0.5 ">
                                  En Stock
                                </div>
                              ) : (
                                <div className="shrink-0 bg-blue-100 inline-block ring-blue-300 ml-3 font-serif text-sm font-bold text-blue-900 rounded px-1 py-0.5 ">
                                  Por encargo
                                </div>
                              )}
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
                          </div>
                          <div className="border-t border-green-200 ">
                            <div className="flex items-center justify-between gap-1 p-3 px-1 font-serif text-lg font-bold text-left text-gray-700 transition-all duration-500 bg-white">
                              <Link
                                to={`/tienda-de-juegos/${kebabCase(slug)}/`}
                                className="!text-sm btn yellow"
                              >
                                Ver juego
                              </Link>
                              <AiFillCheckCircle className="hidden mb-1 " />
                              <a
                                href={`https://api.whatsapp.com/send?phone=5493874811808&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quería%2C%20consultar%20por%20el%20juego%20${title}`}
                                className="btn !bg-[#50cd5d] !ring-[#50cd5d] text-white !text-sm"
                              >
                                <span className="mr-2">Consultar</span>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="18"
                                  height="18"
                                  viewBox="0 0 24 24"
                                >
                                  <path
                                    fill="currentColor"
                                    d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
                                  />
                                </svg>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
              )}
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
