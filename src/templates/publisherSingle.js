import styled from "@emotion/styled"
import { graphql } from "gatsby"
import React from "react"
import tw from "twin.macro"
//import Fade from "react-reveal/Fade"
import GameCard from "../components/GameCard"
import HeroWave from "../components/HeroWave"
import Layout from "../components/layout"
import SEO from "../components/seo"
import GamesAside from "../components/Games/GameMenu"

const PublisherSingleTemplate = ({ data, pageContext, location }) => {
  const publisher = data.contentfulEditorial
  const articulos = data.allContentfulArticulos.edges

  return (
    <Layout location={location}>
      <SEO
        title={`Editorial ${publisher.title}`}
        description={`Juego de la editorial ${publisher.title}`}
        image={`${publisher.logo.file.url}`}
      />
      <HeroWave
        heading={publisher.title}
        pattern="bg-teal-600 text-teal-500 "
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <ContentSidebar>
        <Aside>
          <GamesAside />
        </Aside>
        <Main>
          <Container>
            {articulos.map(({ node }) => {
              return <GameCard card={node} key={node.slug} />
            })}
          </Container>
        </Main>
      </ContentSidebar>
    </Layout>
  )
}

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-1 gap-4 p-3 pb-12 mx-auto mt-16 bg-white sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 `}
`

const ContentSidebar = styled.div`
  ${tw`relative z-10 flex flex-row-reverse w-full max-w-6xl mx-auto -mt-16`}
`

const Aside = styled.aside`
  ${tw`hidden w-64 px-6 pr-12 -mt-2 md:block`}
`

const Main = styled.section`
  ${tw`relative w-full px-2 pt-12 mx-auto`}
`

export default PublisherSingleTemplate

export const pageQuery = graphql`
  query PublisherBySlug($slug: String!) {
    contentfulEditorial(slug: { eq: $slug }) {
      id
      title
      slug
      logo {
        file {
          url
        }
      }
      articulos {
        title
        slug
        GameBuyPrice
        GamePlayers
        GameDuration
        GameAuthor
        GameAges
        GamePlay {
          file {
            url
          }
        }
        stock
        categoria {
          title
          slug
        }

        GameGallery {
          title
          fluid(maxWidth: 1600) {
            # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
            ...GatsbyContentfulFluid_withWebp
          }
          fixed(width: 150, height: 150) {
            ...GatsbyContentfulFixed
          }
        }
        imagenDestacada {
          fixed(width: 500, height: 500) {
            ...GatsbyContentfulFixed
          }
          file {
            url
          }
          fluid(maxWidth: 600) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
    allContentfulArticulos(
      filter: { publisher: { slug: { eq: $slug } } }
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
            fixed(width: 500, height: 500) {
              ...GatsbyContentfulFixed
            }
            file {
              url
            }
            fluid(maxWidth: 600) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      totalCount
    }
  }
`
