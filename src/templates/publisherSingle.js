import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"
import HeroWave from "../components/HeroWave"
import GameCard from "../components/GameCard"
import GamesAside from "../components/Games/GameMenu"

const PublisherSingleTemplate = ({ data, pageContext, location }) => {
  const publisher = data.contentfulEditorial
  const articulos = data.allContentfulArticulos.edges

  return (
    <Layout location={location}>
      <Seo
        title={`Editorial ${publisher.title}`}
        description={`Juegos de la editorial ${publisher.title}`}
        image={`${publisher.logo.file.url}`}
      />
      <HeroWave
        heading={publisher.title}
        pattern="bg-green-600 text-green-500"
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <div className='relative z-10 flex flex-row-reverse w-full mx-auto -mt-16 max-w-7xl'>
        <div className='hidden px-6 pr-12 -mt-2 w-80 md:block'>
          <GamesAside />
        </div>
        <div className='relative w-full px-2 pt-12 mx-auto'>
          <div className="grid grid-cols-1 gap-4 p-3 pb-12 mx-auto mt-16 bg-white max-w-7xl sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
            {articulos.map(({ node }) => {
              return <GameCard card={node} key={node.slug} />
            })}
          </div>
        </div>
      </div>
    </Layout>
  )
}


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
