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
import ComunidadNav from "../components/Comunidad/HomeWidgets"
import { SRLWrapper } from "simple-react-lightbox"


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
      <div className="py-24 text-green-600 bg-green-700 pt-52 pattern-grid-lg">
        <h1 className="relative z-50 w-full mx-auto font-serif text-6xl font-bold text-center text-green-100">
          {collection.title}
        </h1>
      </div>
      <div className="relative z-50 pb-24 mx-auto bg-white max-w-7xl">
        <div className="">
          <div className="">
            <div className="flex flex-col items-center justify-between mx-auto md:flex-row">
              {collection.linkExterno && (
                <div className="flex items-center justify-start px-3 mx-auto">
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
            <SRLWrapper options={options}>
              <div
                className="w-full max-w-full px-3 pr-6 mx-auto my-6 prose prose-xl text-left article"
                id={collection.slug}
              >
                {collection.textoPrincipal && (
                  <FormatText FormatText={collection.textoPrincipal} />
                )}
              </div>
            </SRLWrapper>
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
          <div className="flex flex-col w-full px-4 mt-24 border-t border-gray-200 widgets">
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
            <ComunidadRecursos />
          </div>
        </div>
        <div className="relative z-50 grid grid-cols-1 gap-3 px-2 mx-auto mt-24 mb-12 text-center max-w-7xl md:grid-cols-3">
          <ComunidadNav />
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
