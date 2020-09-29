import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import SEO from "../components/seo"
import FormatText from "../components/wysiwyg"
import tw from "twin.macro"
import styled from "@emotion/styled"
import HeroWave from "../components/HeroWave"

const ResoursesSingleTemplate = ({ data, pageContext, location }) => {
  const collection = data.contentfulRecursos
  const Article =
    data.contentfulRecursos.childContentfulRecursosTextoPrincipalRichTextNode
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title={collection.title} />
      <HeroWave
        pattern="bg-green-600 text-green-500 "
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <Link
        to="/recursos"
        className="block max-w-lg mx-auto font-serif font-bold text-left text-green-500"
      >
        Ver todos los recursos
      </Link>
      <h1 className="max-w-lg mx-auto font-serif text-4xl font-bold text-left">
        {collection.title}
      </h1>
      <div
        className="w-full max-w-lg pr-6 mx-auto mb-6 text-left article"
        id={collection.slug}
      >
        {collection.childContentfulRecursosTextoPrincipalRichTextNode && (
          <FormatText
            FormatText={
              collection.childContentfulRecursosTextoPrincipalRichTextNode
            }
          />
        )}
      </div>

      <div>
        <div className="w-full max-w-2xl m-auto article">
          <PageNav>
            <div>
              {prev && (
                <Link to={`/recursos/${kebabCase(prev.slug)}/`} rel="prev">
                  ← {prev.title}
                </Link>
              )}
            </div>

            <div style={{ justifySelf: "flex-end" }}>
              {next && (
                <Link to={`/recursos/${kebabCase(next.slug)}/`} rel="next">
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

const PageNav = styled.nav`
  ${tw`flex justify-between py-12`}
  a {
    ${tw`font-mono font-bold`}
  }
  body.dark & a {
    ${tw`text-green-300`}
  }
`

export default ResoursesSingleTemplate

export const pageQuery = graphql`
  query ResoursesBySlug($slug: String!) {
    contentfulRecursos(slug: { eq: $slug }) {
      id
      title
      slug
      childContentfulRecursosTextoPrincipalRichTextNode {
        json
      }
    }
  }
`
