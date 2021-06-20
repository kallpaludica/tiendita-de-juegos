import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Seo from "../components/seo"
import FormatText from "../components/serializers"
import React from "react"
import { FiExternalLink } from "react-icons/fi"
import ComunidadWidgets from "../components/Comunidad/HomeWidgets"
const ComunidadSingleTemplate = ({ data, pageContext, location }) => {
  const collection = data.contentfulComunidad
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <Seo title={collection.title} />
      <div className="relative flex items-center justify-center pt-24 pb-4 md:pt-64 bg-gradient-to-br to-green-700 from-green-900 ">
        <div className="flex flex-col w-full mx-auto md:px-24 md:items-end md:justify-between max-w-7xl">
          <h1 className="relative z-50 w-full mx-auto font-serif text-3xl font-bold text-center text-white md:text-6xl max-w-7xl">
            {collection.title}
          </h1>
          {collection.linkExterno && (
            <div className="flex flex-col items-center justify-between max-w-2xl pt-6 mx-auto border-b border-gray-200">
              <div className="flex items-center justify-start max-w-2xl px-3 mx-auto">
                <a
                  rel="noopener noreferrer"
                  href={collection.linkExterno}
                  target="_blank"
                  className="inline-flex font-sans text-lg font-bold text-center text-gray-100 no-underline hover:text-green-200"
                >
                  Link para conocer más
                  <FiExternalLink className="ml-1" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>

      <div
        className="w-full max-w-6xl p-6 mx-auto my-6 prose prose-xl text-left article"
        id={collection.slug}
      >
        {collection.textoPrincipal && (
          <FormatText FormatText={collection.textoPrincipal} />
        )}
      </div>
      <div>
        <div className="w-full max-w-2xl py-12 m-auto article">
          <div className="justify-between hidden ">
            <div>
              {prev && (
                <Link
                  to={`/comunidad/${kebabCase(prev.slug)}/`}
                  rel="prev"
                  className="font-sans text-lg font-bold"
                >
                  ← {prev.title}
                </Link>
              )}
            </div>
            <div style={{ justifySelf: "flex-end" }}>
              {next && (
                <Link
                  to={`/comunidad/${kebabCase(next.slug)}/`}
                  rel="next"
                  className="font-sans text-lg font-bold"
                >
                  {next.title} →
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="relative z-50 grid grid-cols-1 gap-3 px-2 pt-4 pb-24 mx-auto text-center max-w-7xl md:grid-cols-3">
        <ComunidadWidgets />
      </div>
    </Layout>
  )
}

export default ComunidadSingleTemplate

export const pageQuery = graphql`
  query ComunidadBySlug($slug: String!) {
    contentfulComunidad(slug: { eq: $slug }) {
      id
      title
      slug
      categoria
      linkExterno
      textoPrincipal {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            file {
              url
              contentType
            }
          }
        }
      }
    }
  }
`
