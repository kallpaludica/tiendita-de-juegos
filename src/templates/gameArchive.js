import React, { useState } from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../components/layout"
import Pager from "../components/Pager"
import SEO from "../components/seo"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import GameCard from "../components/GameCard"
import Publishers from "../components/Publishers/Publishers"
import AnchorLink from "react-anchor-link-smooth-scroll"

import { kebabCase } from "lodash"
import Img from "gatsby-image"

const Item = styled.div`
  ${tw`text-center transition-all duration-500 ease-in-out `}
  ${tw`transform translate-x-2 translate-y-2`}

  a {
    ${tw`font-mono font-bold text-green-400 transition-all duration-500 ease-in-out `}
  }

  &:hover {
    a {
      ${tw`text-green-600 `}
    }
  }
`

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-2 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}
`

const BlogArchive = ({ data, pageContext, location }) => {
  const [bandName, setBandName] = useState("")

  const posts = data.allContentfulArticulos.edges
  const categories = data.allContentfulCategoriaDelJuego.edges
  const collections = data.allContentfulColecciones.edges

  return (
    <Layout location={location}>
      <SEO title="Tiendita de juegos" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave
        heading="Tiendita de juegos"
        pattern="bg-orange-600 text-orange-500 "
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <AnchorLink
        href="#publishers"
        className="block w-full my-6 font-serif text-3xl text-center text-orange-500 hover:text-orange-500"
      >
        Ver editoriales
      </AnchorLink>
      <section className="relative py-2">
        <div className="flex flex-wrap justify-center max-w-6xl mx-auto my-0 text-center bg-white md:flex-row">
          {categories.map(({ node }) => {
            return (
              <Link
                key={node.slug}
                to={`/categorias/${kebabCase(node.slug)}/`}
                className="flex flex-col items-center justify-center mx-12 my-3 font-serif text-xl text-gray-700 hover:text-gray-900"
              >
                {node.icono ? (
                  <div className="relative overflow-hidden transition-all duration-200 transform md:w-full hover:-translate-y-2">
                    <Img
                      title={node.title}
                      className="w-full"
                      alt={node.title}
                      fixed={node.icono.fixed}
                    />
                  </div>
                ) : (
                  <h2 className="w-24 max-w-xs font-bold ">{node.title}</h2>
                )}
                {node.title}
              </Link>
            )
          })}
        </div>
      </section>

      <div className="flex flex-col items-center justify-center max-w-6xl mx-auto mt-12">
        <h2 className="font-mono text-xl font-bold text-right text-gray-800">
          Colecciones
        </h2>
        <div className="font-mono text-xl font-bold text-right text-gray-800">
          {collections.map(({ node }) => {
            return (
              <Link
                key={node.slug}
                to={`/colecciones/${kebabCase(node.slug)}/`}
                className="ml-2 text-orange-500 underline"
              >
                {node.title}
              </Link>
            )
          })}
        </div>
      </div>

      {/*
      <div className="p-6 bg-red-500">
        <input
          onChange={(e) => setBandName(e.target.value)}
          value={bandName}
          className="m-3"
          />
      </div>*/}
      <Container id="contenido">
        {posts
          .filter(
            (word) =>
              word.node.title.toLowerCase().indexOf(bandName.toLowerCase()) !==
              -1
          )
          .map(({ node }) => {
            return (
              <Item key={node.slug}>
                <GameCard card={node} />
              </Item>
            )
          })}

        <Pager pageContext={pageContext} />
      </Container>
      <Publishers />
    </Layout>
  )
}

export default BlogArchive

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    allContentfulArticulos(
      sort: { fields: [title], order: ASC }
      limit: $limit
      skip: $skip
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

          imagenDestacada {
            fixed(width: 200, height: 230) {
              ...GatsbyContentfulFixed
            }
            fluid(maxWidth: 450) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      totalCount
    }
    allContentfulCategoriaDelJuego {
      edges {
        node {
          id
          title
          slug
          icono {
            fixed(width: 80, height: 80) {
              ...GatsbyContentfulFixed
            }
          }
        }
      }
    }

    allContentfulColecciones {
      edges {
        node {
          id
          title
          slug
        }
      }
    }
  }
`
