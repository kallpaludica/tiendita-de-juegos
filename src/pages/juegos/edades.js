import { useStaticQuery, graphql } from "gatsby"

import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import AboutImage from "../../images/kallpa-ludica.png"
import Layout from "../../components/layout"
import Pager from "../../components/Pager"
import SEO from "../../components/seo"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../../components/HeroWave"

const EdadesPage = () => {
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
            paginaWeb
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
        heading="Empezando por los más chiquitos"
        anchor="contenido"
        pattern="bg-green-600 text-green-500"
        svg="M0,32L120,74.7C240,117,480,203,720,202.7C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />

      <Container id="contenido">
        {data.collection.edges.map((item, i) => (
          <Item key={item.node.slug}>
            <Link to={`/juegos/${kebabCase(item.node.slug)}/`} className="">
              {item.node.imagenDestacada ? (
                <Img
                  title={item.node.title}
                  alt={item.node.title}
                  fixed={item.node.imagenDestacada.fixed}
                />
              ) : (
                <img
                  className="w-full max-w-md mx-auto opacity-25"
                  alt="Kallpa Lúdica"
                  src={AboutImage}
                />
              )}
              <h3 className="block p-3 m-0 text-xl text-center">
                {item.node.title}
              </h3>
              <h3 className="block p-3 m-0 text-center">
                Niñez de {item.node.GameAges} años o más
              </h3>
            </Link>
          </Item>
        ))}
      </Container>
    </Layout>
  )
}

export default EdadesPage

const Item = styled.div`
  ${tw`text-center transition-all duration-500 ease-in-out `}
  ${tw`transform translate-x-2 translate-y-2`}

  a {
    ${tw`font-mono text-xl font-bold text-green-400 transition-all duration-500 ease-in-out `}
  }

  &:hover {
    ${tw`bg-white shadow-lg`}
    ${tw`translate-x-1 translate-y-1`}


    a {
      ${tw`text-green-600 `}
    }
  }
`

const Container = styled.div`
  ${tw`grid gap-6 p-3 py-12 mx-auto bg-white md:grid-cols-5 `}
`
