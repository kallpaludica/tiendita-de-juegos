import { useStaticQuery, graphql } from "gatsby"

import React from "react"
//import { Link } from "gatsby"
import { Helmet } from "react-helmet"
//import AboutImage from "../../images/kallpa-ludica.png"
import Layout from "../../components/layout"
//import Pager from "../../components/Pager"
import SEO from "../../components/seo"
//import { kebabCase } from "lodash"
//import Img from "gatsby-image"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../../components/HeroWave"
import GameCard from "../../components/GameCard"

const PreciosPage = () => {
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
  `)

  return (
    <Layout>
      <SEO title="Tiendita de juegos" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave
        heading="Comenzando por lo popular"
        anchor="contenido"
        pattern="bg-green-600 text-green-500"
        svg="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />

      <Container id="contenido">
        {data.collection.edges.map((item, i) => (
          <Item key={item.node.slug}>
            <GameCard card={item.node} />
          </Item>
        ))}
      </Container>
    </Layout>
  )
}

export default PreciosPage

const Item = styled.div`
  ${tw`text-center transition-all duration-500 ease-in-out `}
  ${tw`transform translate-x-2 translate-y-2`}

  a {
    ${tw`font-mono text-xl font-bold text-green-400 transition-all duration-500 ease-in-out `}
  }

  &:hover {
    ${tw`bg-white`}
    ${tw`translate-y-1`}


    a {
      ${tw`text-green-600 `}
    }
  }
`

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-2 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}
`
