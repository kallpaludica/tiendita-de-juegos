import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import SEO from "../components/seo"
import tw from "twin.macro"
import styled from "@emotion/styled"
import Fade from "react-reveal/Fade"
import HeroWave from "../components/HeroWave"
import GameCard from "../components/GameCard"
//import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const CollectionsSingleTemplate = ({ data, pageContext, location }) => {
  const collection = data.contentfulColecciones
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title={collection.title} />
      <HeroWave
        pattern="bg-indigo-600 text-indigo-500 "
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <Link to="/juegos/todos" className="font-serif font-bold text-indigo-500">
        Ver todos los juegos
      </Link>
      <h1 className="font-serif text-4xl font-bold">{collection.title}</h1>
      <h3 className="font-serif text-2xl">
        {collection.CollectionDescription.CollectionDescription}
      </h3>
      <div>
        {collection.CollectionGames ? (
          <Container>
            {collection.CollectionGames.map((item, i) => (
              <Fade duration={800} delay={600} key={item.slug}>
                <GameCard card={item} />
              </Fade>
            ))}
          </Container>
        ) : (
          <div className="text-center text-gray-500 ">Proximamente</div>
        )}

        <div className="w-full max-w-2xl m-auto article">
          <PageNav>
            <div>
              {prev && (
                <Link to={`/colecciones/${kebabCase(prev.slug)}/`} rel="prev">
                  ← {prev.title}
                </Link>
              )}
            </div>

            <div style={{ justifySelf: "flex-end" }}>
              {next && (
                <Link to={`/colecciones/${kebabCase(next.slug)}/`} rel="next">
                  {next.title} →
                </Link>
              )}
            </div>
          </PageNav>
        </div>
      </div>
    </Layout>
  )
}

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-2 gap-4 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5`}
`

const PageNav = styled.nav`
  ${tw`flex justify-between py-12`}
  a {
    ${tw`font-mono font-bold`}
  }
  body.dark & a {
    ${tw`text-indigo-300`}
  }
`

export default CollectionsSingleTemplate

export const pageQuery = graphql`
  query CollectionBySlug($slug: String!) {
    contentfulColecciones(slug: { eq: $slug }) {
      id
      title
      slug
      CollectionDescription {
        CollectionDescription
      }
      CollectionGames {
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
          fluid(maxWidth: 1800) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
`
