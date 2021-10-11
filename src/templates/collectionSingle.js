import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Seo from "../components/seo"
import HeroWave from "../components/HeroWave"
import GameCard from "../components/GameCard"
import GamesAside from "../components/Games/GameMenu"

//import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const CollectionsSingleTemplate = ({ data, pageContext, location }) => {
  const collection = data.contentfulColecciones
  const articulos = data.allContentfulArticulos.edges
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
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

      <div className='relative z-10 flex flex-row w-full mx-auto -mt-16 max-w-7xl'>
        <div className='hidden w-64 px-6 pr-12 -mt-2 md:block'>
          <GamesAside />
        </div>
        <div className='relative w-full px-2 pt-12 mx-auto'>
          <div>
            <div className='grid max-w-6xl grid-cols-1 gap-4 p-3 pb-12 mx-auto mt-16 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 '>
              {articulos.map(({ node }) => {
                return <GameCard card={node} key={node.slug} />
              })}
            </div>

            <div className="w-full max-w-2xl m-auto article">
              <div className='flex justify-between py-12'>
                <div>
                  {prev && (
                    <Link
                      to={`/tienda-de-juegos/colecciones/${kebabCase(
                        prev.slug
                      )}/`}
                      rel="prev" className="font-mono"
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
                      rel="next" className="font-mono"
                    >
                      {next.title} →
                    </Link>
                  )}
                </div>
              </div >
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
      icono {
        file {
          url
        }
      }
      CollectionDescription {
        CollectionDescription
      }
    }
    allContentfulArticulos(
      filter: { colecciones: { elemMatch: { slug: { eq: $slug } } } }
      sort: { fields: GameBuyPrice, order: ASC }
    ) {
      edges {
        node {
          id
          title
          slug
          stock
          GameBuyPrice
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
            file {
              url
            }
          }
        }
      }
      totalCount
    }
  }
`
