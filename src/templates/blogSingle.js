import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Seo from "../components/seo"
import FormatText from "../components/serializers"
import HeroWave from "../components/HeroWave"
import lottie from "lottie-web"
import ArrowLeft from "../animations/left-arrow.json"
import React, { useEffect } from "react"
import { FiExternalLink } from "react-icons/fi"

const ComunidadSingleTemplate = ({ data, pageContext, location }) => {
  const collection = data.contentfulComunidad

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
      <HeroWave
        pattern="bg-green-700 text-green-600 "
        heading={collection.title}
        center={true}
      />
      <div className="flex flex-col items-center justify-between max-w-4xl mx-auto border-b border-gray-200 md:flex-row">
        <Link
          to="/comunidad"
          className="flex items-center max-w-2xl px-3 mx-auto my-6 font-sans font-bold text-left text-green-500 hover:text-green-600 lottie-left-arrow"
        >
          <div id="arrowLeft" style={{ width: 30, height: 30 }} />
          <span className="mt-1 ml-4 text-xl">Volver a comunidad</span>
        </Link>
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
      <div>
        <div className="w-full max-w-2xl m-auto article">
          <div className="flex justify-between py-12">
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
          ... on ContentfulRecursos {
            contentful_id
            __typename
            title
            slug
            featuredImg {
              gatsbyImageData(
                height: 150
                width: 150
                formats: AUTO
                layout: FIXED
              )
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
          ... on ContentfulComunidad {
            contentful_id
            __typename
            title
            slug
            featuredImg {
              gatsbyImageData(
                height: 150
                width: 150
                formats: AUTO
                layout: FIXED
              )
            }
          }
          ... on ContentfulColecciones {
            contentful_id
            __typename
            title
            slug
            CollectionDescription {
              CollectionDescription
            }
            icono {
              gatsbyImageData(
                height: 150
                width: 150
                formats: AUTO
                layout: FIXED
              )
            }
          }
          ... on ContentfulArticulos {
            contentful_id
            __typename
            title
            slug
            GameBuyPrice
            imagenDestacada {
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
