import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Pager from "../components/Pager"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"

const PageTitle = styled.h1`
  ${tw`flex items-center justify-center h-64 font-mono text-5xl font-bold text-white bg-green-800`}
`

const Pattern = styled.div`
  ${tw``}
`

const Item = styled.div`
  ${tw`px-8 py-12 text-center transition-all duration-500 ease-in-out bg-green-100 shadow-md`}
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
  ${tw`grid h-screen max-w-4xl gap-4 p-3 py-12 mx-auto md:grid-cols-3`}
`

const BlogArchive = ({ data, pageContext, location }) => {
  const posts = data.allContentfulArticulos.edges

  return (
    <Layout location={location}>
      <SEO title="Tiendita de juegos" />
      <HeroWave
        heading="Tiendita de juegos"
        pattern="bg-green-600 text-green-500"
        svg="M0,224L120,229.3C240,235,480,245,720,234.7C960,224,1200,192,1320,176L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <Container id="contenido">
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Pattern className="h-32 pattern-dots-md">
              <Item key={node.slug}>
                <Link to={`/juegos/${kebabCase(node.slug)}/`}>{title}</Link>
              </Item>
            </Pattern>
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
        }
      }
    }
  }
`
