import { useStaticQuery, graphql } from "gatsby"
//import AboutImage from "../../images/kallpa-ludica.png"
import React from "react"
//import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
//import Pager from "../../components/Pager"
import SEO from "../../components/seo"
//import { kebabCase } from "lodash"
//import Img from "gatsby-image"
import GameCard from "../../components/GameCard"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../../components/HeroWave"

const DuracionPage = () => {
  const data = useStaticQuery(graphql`
    query DuracionQuery {
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
        heading=" Empezando por los más cortos"
        anchor="contenido"
        pattern="bg-green-600 text-green-500"
        svg="M0,160L80,176C160,192,320,224,480,224C640,224,800,192,960,192C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />

      <Container id="contenido">
        {data.collection.edges.map((item, i) => (
          <GameCard card={item.node} key={item.node.slug} />
        ))}
      </Container>
    </Layout>
  )
}

export default DuracionPage

const Container = styled.div`
  ${tw`grid gap-6 p-3 py-12 mx-auto bg-white md:grid-cols-5 `}
`
