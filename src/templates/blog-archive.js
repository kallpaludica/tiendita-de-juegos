import React from "react"
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

const Item = styled.div`
  ${tw`text-center transition-all duration-500 ease-in-out `}
  ${tw`transform translate-x-2 translate-y-2`}

  ${tw`flex bg-white`}
  ${tw`md:block`}

  a {
    ${tw`font-mono text-xl font-bold text-green-400 transition-all duration-500 ease-in-out `}
    ${tw`flex md:block`}

  }

  &:hover {
    ${tw`bg-white`}
    ${tw`translate-y-1 `}


    a {
      ${tw`text-green-600 `}
    }
  }
`

const Container = styled.div`
  ${tw`grid gap-4 p-3 py-12 mx-auto bg-white bg-gray-100 md:grid-cols-4 lg:grid-cols-5 `}
`

const BlogArchive = ({ data, pageContext, location }) => {
  const posts = data.allContentfulArticulos.edges

  return (
    <Layout location={location}>
      <SEO title="Tiendita de juegos" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave
        heading="Tiendita de juegos"
        anchor="contenido"
        pattern="bg-green-600 text-green-500"
        svg="M0,32L120,74.7C240,117,480,203,720,202.7C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <section className="pb-6 bg-white">
        <h2 className="font-mono text-4xl font-bold text-green-500">
          Probá ordenar los juegos
        </h2>
        <div className="flex flex-col justify-center px-12 md:flex-row ">
          <Link className="ml-3 btn" to="/juegos/edades">
            Por edades
          </Link>
          <Link className="ml-3 btn" to="/juegos/precio">
            Por precio
          </Link>
          <Link className="ml-3 btn" to="/juegos/duracion">
            Por duración
          </Link>
        </div>
      </section>

      <Container id="contenido">
        {posts.map(({ node }) => {
          return (
            <Item key={node.slug}>
              <GameCard card={node} />
            </Item>
          )
        })}
        <Pager pageContext={pageContext} />
      </Container>
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
          paginaWeb
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
`
