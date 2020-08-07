import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/Pager"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"

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
  ${tw`grid max-w-6xl gap-6 p-3 py-12 mx-auto md:grid-cols-4`}
`

const BlogArchive = ({ data, pageContext, location }) => {
  const posts = data.allContentfulArticulos.edges

  return (
    <Layout location={location}>
      <SEO title="Tiendita de juegos" />
      <HeroWave
        heading="Tiendita de juegos"
        anchor="contenido"
        pattern="bg-green-600 text-green-500"
        svg="M0,32L120,74.7C240,117,480,203,720,202.7C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <Container id="contenido">
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Item key={node.slug}>
              <Link to={`/juegos/${kebabCase(node.slug)}/`} className="">
                <Img
                  title={node.title}
                  alt={node.title}
                  className="h-64"
                  fluid={node.imagenDestacada.fluid}
                />
                <h3 className="block p-3 text-left">{title}</h3>
              </Link>
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
          paginaWeb
          imagenDestacada {
            fixed(width: 600, height: 600) {
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
