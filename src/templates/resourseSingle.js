import ArrowLeft from "@animations/left-arrow.json"
import ComunidadCarouselRecursos from "@components/Carousels/emblaCarouselAlign"
import ComunidadNav from "@components/Comunidad/HomeWidgets"
import Layout from "@components/layout"
import Seo from "@components/seo"
import FormatText from "@components/Serializers/Serializers"
import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import lottie from "lottie-web"
import React, { useEffect } from "react"
import { Helmet } from "react-helmet"
import { FiExternalLink } from "react-icons/fi"
import { SRLWrapper } from "simple-react-lightbox"

export const pageQuery = graphql`
  query RecursosBySlug($slug: String!) {
    contentfulRecursos(slug: { eq: $slug }) {
      id
      title
      slug
      featuredImg {
        file {
          url
        }
      }
      textoPrincipal {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            title
            gatsbyImageData(
              width: 1320
              quality: 90
              formats: AUTO
              placeholder: BLURRED
              layout: CONSTRAINED
            )
            file {
              url
              contentType
            }
          }
          ... on ContentfulComunidad {
            contentful_id
            __typename
            title
            slug
            featuredImg {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 500
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: BLURRED
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
                layout: CONSTRAINED
                width: 500
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  }
`

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
      <Seo
        title={`${collection.title}`}
        description="Recursos lúdicos"
        image={`${collection.featuredImg.file.url}`}
      />
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <div className="relative z-50 pb-24 mx-auto bg-gray-200 ">
        <div className="flex flex-col items-start justify-start pt-20 mx-auto max-w-7xl md:flex-row">
          <div className="w-full p-3 bg-white rounded-md shadow-lg">
            <div className="flex items-center justify-center w-full max-w-5xl mx-auto article">
              <div className="grid w-full grid-cols-2 gap-3 pt-2 pb-6 border-b border-gray-200">
                <div className="flex items-center justify-start">
                  {prev && (
                    <Link
                      to={`/recursos/${kebabCase(prev.slug)}/`}
                      rel="prev"
                      className="btn"
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
                      className="btn"
                    >
                      {next.title} →
                    </Link>
                  )}
                </div>
              </div>
            </div>
            <h1 className="relative z-50 w-full max-w-2xl mx-auto mt-6 font-serif text-3xl font-bold text-center text-gray-900">
              {collection.title}
            </h1>
            <div className="">
              <div className="flex flex-col items-center justify-between mx-auto md:flex-row">
                {collection.linkExterno && (
                  <div className="flex items-center justify-start px-3 mx-auto">
                    <a
                      rel="noopener noreferrer"
                      href={collection.linkExterno}
                      target="_blank"
                      className="inline-flex font-serif text-lg font-bold text-center text-indigo-600 no-underline border-b border-indigo-600 hover:border-indigo-700 hover:text-indigo-600"
                    >
                      Visitar espacio
                      <FiExternalLink className="ml-1" />
                    </a>
                  </div>
                )}
              </div>
              <SRLWrapper options={options}>
                <div
                  className="w-full max-w-full px-3 pb-12 pr-6 mx-auto my-6 prose prose-xl text-left article"
                  id={collection.slug}
                >
                  {collection.textoPrincipal && (
                    <FormatText FormatText={collection.textoPrincipal} />
                  )}
                </div>
              </SRLWrapper>
            </div>
            <div className="flex-col hidden w-full px-4 mt-24 border-t border-gray-200 widgets">
              <div className="flex items-center justify-between w-full mt-6 mb-6 font-serif font-bold">
                <Link
                  to={`/comunidad/`}
                  className="font-serif text-lg text-gray-800 border-b"
                >
                  ← Volver a comunidad
                </Link>
                <Link
                  to={`/comunidad/recursos`}
                  className="text-lg text-gray-700 border-b "
                >
                  Más recursos →
                </Link>
              </div>
            </div>
          </div>
          <div className="relative z-50 grid self-start w-full max-w-sm grid-cols-1 gap-3 px-2 pb-12 mx-auto text-center top-20 md:sticky md:grid-cols-1">
            <ComunidadNav />
          </div>
        </div>
      </div>
      <div className="py-12">
        <div className="flex items-center justify-start w-full pb-6 mx-auto md:px-10">
          <Link
            to={`/comunidad/recursos`}
            className="w-full px-4 font-serif text-xl font-bold text-center text-gray-800 border-b md:px-0 md:text-2xl "
          >
            Últimos recursos
          </Link>
        </div>
        <ComunidadCarouselRecursos />
      </div>
    </Layout>
  )
}

export default RecursosSingleTemplate

const options = {
  buttons: {
    iconPadding: "5px",
    showDownloadButton: false,
    backgroundColor: "rgba(255, 255, 255, .8)",
    iconColor: "rgba(0, 0, 0, 0.8)",
    showNextButton: true,
    showPrevButton: true,
  },
  caption: {
    captionFontSize: "15px",
    captionAlignment: "center",
    captionColor: "#a7825f",
    captionFontWeight: 300,
    showCaption: false,
  },
  settings: {
    overlayColor: "rgba(255, 255, 255, .95)",
    transitionTimingFunction: "ease-in-out",
    slideTransitionSpeed: 0.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: "fade",
    slideSpringValues: [300, 200],
    autoplaySpeed: 4000,
    disablePanzoom: false,
    hideControlsAfter: true,
  },
  translations: {
    autoplayText: "Play",
    closeText: "Cerrar",
    downloadText: "Descargar",
    fullscreenText: "Pantalla completa",
    nextText: "Siguiente",
    pauseText: "Pausa",
    previousText: "Anterior",
    thumbnailsText: "Miniaturas",
    zoomOutText: "Zoom Out",
  },
  progressBar: {
    height: "4px",
    fillColor: "rgb(0, 0, 0)",
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  thumbnails: {
    showThumbnails: true,
  },
}
