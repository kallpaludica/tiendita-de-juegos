import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { navigate } from "gatsby" // highlight-line
import Layout from "../components/layout"
import Pager from "../components/Pager"
import SEO from "../components/seo"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button"
import "../components/AwsBtn.css"
import Fade from "react-reveal/Fade"

const Item = styled.div`
  ${tw`text-center transition-all duration-500 ease-in-out `}
  ${tw`transform translate-x-2 translate-y-2`}

  ${tw`flex`}
  ${tw`md:block`}


  a {
    ${tw`font-mono text-xl font-bold text-green-400 transition-all duration-500 ease-in-out `}
    ${tw`flex md:block`}

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
  ${tw`grid gap-2 p-3 py-12 mx-auto bg-white md:grid-cols-4 lg:grid-cols-5 `}
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
        pattern="bg-green-600 text-green-500"
        svg="M0,32L120,74.7C240,117,480,203,720,202.7C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />

      <h2 className="font-mono text-4xl font-bold text-green-500">
        ¡Novedades!
      </h2>
      <Container id="contenido">
        {posts.map(({ node }) => {
          const title = node.title || node.slug
          return (
            <Item key={node.slug}>
              <Link to={`/juegos/${kebabCase(node.slug)}/`} className="">
                <Img
                  title={node.title}
                  alt={node.title}
                  fixed={node.imagenDestacada.fixed}
                />
                <h3 className="block p-3 md:text-center">{title}</h3>
              </Link>
            </Item>
          )
        })}
        <Pager pageContext={pageContext} />
      </Container>
      <section className="py-12 bg-gray-100">
        <h2 className="font-mono text-4xl font-bold text-green-500">
          Probá ordenar los juegos
        </h2>
        <div className="flex flex-col justify-center px-12 md:flex-row ">
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
`
