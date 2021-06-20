import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Seo from "../components/seo"
import FormatText from "../components/serializers"
import lottie from "lottie-web"
import ArrowLeft from "../animations/left-arrow.json"
import React, { useEffect } from "react"
import { FiExternalLink } from "react-icons/fi"
import ComunidadRecursos from "../components/Queries/QueriesRecursosLast"
const RecursosSingleTemplate = ({ data, pageContext, location }) => {
  const collection = data.contentfulRecursos

  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#arrowLeft"),
      animationData: ArrowLeft,
    })
  }, [])

  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <Seo title={collection.title} />
      <div className="relative flex items-center justify-center pt-64 pb-4 bg-gradient-to-br to-green-700 from-green-900 ">
        <div className="flex flex-col-reverse w-full px-4 mx-auto md:px-24 md:items-end md:justify-between md:flex-row max-w-7xl">
          <h1 className="relative z-50 w-full mx-auto font-sans text-6xl text-left text-white max-w-7xl">
            {collection.title}
          </h1>
        </div>
      </div>
      <div className="relative z-50 pt-12 pb-24 mx-auto bg-white max-w-7xl">
        <div className="grid gap-2 lg:grid-cols-6">
          <div className="lg:col-span-4">
            <div className="flex flex-col items-center justify-between max-w-4xl mx-auto md:flex-row">
              {collection.linkExterno && (
                <div className="flex items-center justify-start max-w-2xl px-3 mx-auto">
                  <a
                    rel="noopener noreferrer"
                    href={collection.linkExterno}
                    target="_blank"
                    className="inline-flex font-sans text-lg font-bold text-center text-indigo-600 no-underline border-b border-indigo-600 hover:border-indigo-700 hover:text-indigo-600"
                  >
                    Visitar espacio
                    <FiExternalLink className="ml-1" />
                  </a>
                </div>
              )}
            </div>
            <div
              className="w-full max-w-6xl px-3 pr-6 mx-auto my-6 prose prose-xl text-left article"
              id={collection.slug}
            >
              {collection.textoPrincipal && (
                <FormatText FormatText={collection.textoPrincipal} />
              )}
            </div>
            <div className="hidden w-full max-w-4xl mx-auto article">
              <div className="flex justify-between py-12">
                <div>
                  {prev && (
                    <Link
                      to={`/recursos/${kebabCase(prev.slug)}/`}
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
                      to={`/recursos/${kebabCase(next.slug)}/`}
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
          <div className="flex flex-col w-full px-4 lg:col-span-2 widgets">
            <h3 className="mb-6 font-serif text-lg font-bold text-left">Más recursos</h3>
            <ComunidadRecursos />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default RecursosSingleTemplate

export const pageQuery = graphql`
  query RecursosBySlug($slug: String!) {
    contentfulRecursos(slug: { eq: $slug }) {
      id
      title
      slug
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
          ... on ContentfulEditorial {
            contentful_id
            __typename
            title
            slug
            logo {
              gatsbyImageData(
                height: 150
                width: 150
                formats: AUTO
                layout: FIXED
              )
            }
          }
        }
      }
    }
  }
`
