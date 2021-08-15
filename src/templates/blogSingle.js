import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Seo from "../components/seo"
import FormatText from "../components/serializers"
import React from "react"
import { FiExternalLink } from "react-icons/fi"
import ComunidadWidgets from "../components/Comunidad/HomeWidgets"
import { GatsbyImage } from "gatsby-plugin-image"
import { SRLWrapper } from "simple-react-lightbox"

const ComunidadSingleTemplate = ({ data, pageContext, location }) => {
  const collection = data.contentfulComunidad
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <Seo title={collection.title} />
      <div className="relative flex items-center justify-center pb-32 overflow-hidden py-52 bg-gradient-to-b to-gray-700 from-gray-900">
        <div className="flex flex-col w-full max-w-4xl mx-auto md:px-24 md:items-end md:justify-between">
          <h1 className="relative z-50 w-full mx-auto font-serif text-3xl font-bold text-center text-white md:text-6xl max-w-7xl">
            {collection.title}
          </h1>
        </div>
        {collection.imagenPortada && (
          <div className="absolute inset-0 z-0 w-full min-h-screen opacity-30">
            <GatsbyImage
              title={collection.title}
              alt={collection.title}
              image={collection.imagenPortada.gatsbyImageData}
            />
          </div>
        )}
      </div>

      <div
        className="relative w-full max-w-2xl p-6 mx-auto my-6 prose prose-xl text-left article"
        id={collection.slug}
      >
        {collection.linkExterno && (
          <div className="relative z-50 flex flex-col items-center justify-center w-full p-3 py-6 mx-auto -mt-64 duration-200 transform -translate-y-8 bg-blue-100 border-2 border-blue-200 rounded-sm shadow-xl hover:bg-blue-50 bg-opacity-95 hover:shadow-2xl">
            <a
              rel="noopener noreferrer"
              href={collection.linkExterno}
              target="_blank"
              className="inline-flex items-center space-x-3 font-sans text-2xl font-bold text-center text-blue-800 no-underline hover:text-blue-500 "
            >
              Link al sitio web
              <FiExternalLink className="ml-1 text-lg" />
            </a>
            <span className="relative block mt-2 text-sm italic text-gray-900 opacity-90">{collection.linkExterno}</span>
          </div>
        )}

        <SRLWrapper options={options}>
          {collection.textoPrincipal && (
            <FormatText FormatText={collection.textoPrincipal} />
          )}
        </SRLWrapper>
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
      imagenPortada {
        gatsbyImageData(
          layout: FULL_WIDTH
          height: 800
          width: 1800
          formats: JPG
          backgroundColor: "#ffffff"
          jpegProgressive: false
          placeholder: DOMINANT_COLOR
        )
      }
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
