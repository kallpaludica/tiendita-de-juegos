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
      <div className="relative flex items-center justify-center py-64 bg-gradient-to-br to-green-700 from-green-900 pb-80 ">
        <div className="flex flex-col-reverse w-full px-4 mx-auto md:items-end md:justify-between md:flex-row max-w-7xl">
          <h1 className="relative z-50 w-full mx-auto font-sans text-6xl text-left text-white max-w-7xl">
            {collection.title}
          </h1>
          <Link
            to="/comunidad/recursos/"
            className="relative z-50 flex items-start justify-center w-64 px-3 mb-12 font-sans font-bold text-center text-white md:mb-0 md:items-center "
          >
            <span className="mt-1 text-xl">Volver a recursos</span>
          </Link>
        </div>
        <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
          <div className="relative">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,256L120,234.7C240,213,480,171,720,176C960,181,1200,235,1320,261.3L1440,288L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>
      </div>
      <div className="relative z-50 pt-12 pb-24 mx-auto -mt-64 bg-white rounded-sm shadow-lg max-w-7xl">
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
            <h3 className="font-sans text-2xl text-left">Más recursos</h3>
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
