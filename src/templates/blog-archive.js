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
  ${tw`grid w-full max-w-6xl gap-6 p-3 py-12 mx-auto bg-white md:grid-cols-4 lg:grid-cols-5`}
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
        pattern="bg-green-600 text-green-500 "
        svg="M0,288L80,277.3C160,267,320,245,480,245.3C640,245,800,267,960,229.3C1120,192,1280,96,1360,48L1440,0L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <div className="flex items-baseline justify-between max-w-6xl mx-auto mt-3">
        <h3 className="font-sans text-4xl font-bold">Juegos de la tiendita</h3>
        <div className="font-mono text-xl font-bold text-right text-gray-800">
          Probá ordenar los juegos
          <Link className="ml-2 text-green-500 underline" to="/juegos/precio">
            por precio
          </Link>
        </div>
      </div>

      <section className="pb-6 bg-white">
        <div className="flex-col justify-center hidden px-12 md:flex-row">
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
            fixed(width: 200, height: 230) {
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
