import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import SEO from "../components/seo"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import GameCard from "../components/GameCard"
import GamesAside from "../components/Games/GameMenu"
//import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
//import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

const CollectionsSingleTemplate = ({ data, pageContext, location }) => {
  const collection = data.contentfulColecciones
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title={collection.title} />
      <HeroWave
        pattern="bg-blue-600 text-blue-500 h-64"
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <ContentSidebar>
        <Aside>
          <GamesAside />
        </Aside>
        <Main>
          <Title>{collection.title}</Title>
          <Subtitle>
            {collection.CollectionDescription.CollectionDescription}
          </Subtitle>
          <div>
            {collection.CollectionGames ? (
              <Container>
                {collection.CollectionGames.map((item, i) => (
                  <GameCard card={item} key={item.slug} />
                ))}
              </Container>
            ) : (
              <div className="text-center text-gray-500 ">Proximamente</div>
            )}

            <div className="w-full max-w-2xl m-auto article">
              <PageNav>
                <div>
                  {prev && (
                    <Link
                      to={`/colecciones/${kebabCase(prev.slug)}/`}
                      rel="prev"
                    >
                      ← {prev.title}
                    </Link>
                  )}
                </div>

                <div style={{ justifySelf: "flex-end" }}>
                  {next && (
                    <Link
                      to={`/colecciones/${kebabCase(next.slug)}/`}
                      rel="next"
                    >
                      {next.title} →
                    </Link>
                  )}
                </div>
              </PageNav>
            </div>
          </div>
        </Main>
      </ContentSidebar>
    </Layout>
  )
}

const Container = styled.div`
  ${tw`grid max-w-6xl grid-cols-2 gap-6 p-3 py-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3`}
`

const Title = styled.h1`
  ${tw`w-full font-mono text-5xl text-left text-blue-500`}
`

const Subtitle = styled.h2`
  ${tw`w-full pb-1 m-0 font-sans text-xl text-left text-gray-800`}
`

const PageNav = styled.nav`
  ${tw`flex justify-between py-12`}
  a {
    ${tw`font-mono `}
  }
  body.dark & a {
    ${tw`text-blue-300`}
  }
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
