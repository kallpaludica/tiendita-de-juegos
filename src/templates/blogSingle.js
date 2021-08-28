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
import { ImFacebook2, ImYoutube, ImWhatsapp, ImInstagram } from "react-icons/im"
import { HiMailOpen, HiMail } from "react-icons/hi"
import { FcGallery } from "react-icons/fc"
import AnchorLink from "react-anchor-link-smooth-scroll"
import ReactTooltip from "react-tooltip"

const ComunidadSingleTemplate = ({ data, pageContext, location }) => {
  const copyToClipboard = (str) => {
    const el = document.createElement("textarea")
    el.value = str
    el.setAttribute("readonly", "")
    el.style.position = "absolute"
    el.style.left = "-9999px"
    document.body.appendChild(el)
    el.select()
    document.execCommand("copy")
    document.body.removeChild(el)
  }
  const [isCopied, setIsCopied] = React.useState(false)

  const collection = data.contentfulComunidad
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <Seo title={collection.title} />
      <ReactTooltip place="top" type="light" effect="solid" />
      <div className="relative flex flex-col items-center justify-center overflow-hidden py-44 bg-gradient-to-b to-gray-700 from-gray-900">
        <div className="flex flex-col w-full max-w-4xl mx-auto md:px-24 md:items-end md:justify-between">
          <h1 className="relative z-50 w-full mx-auto font-serif text-3xl font-bold text-center text-white md:text-5xl max-w-7xl">
            {collection.title}
          </h1>
        </div>
        {collection.imagenPortada && (
          <div className="absolute inset-0 z-0 object-cover w-auto h-screen min-h-screen md:w-full opacity-10">
            <GatsbyImage
              title={collection.title}
              alt={collection.title}
              image={collection.imagenPortada.gatsbyImageData}
            />
          </div>
        )}
        <div className="relative z-50 w-full max-w-3xl mx-auto my-6 font-serif text-xl text-center text-white md:text-xl">
          {collection.description.description}
        </div>

        <div className="flex justify-between max-w-2xl mx-auto mt-6 mb-12 space-x-8 text-4xl text-white">
          {collection.socialYoutube && (
            <div className="relative z-50" data-tip="Youtube ❤️">
              <a
                rel="noopener noreferrer"
                href={collection.socialYoutube}
                target="_blank"
                className=""
              >
                <ImYoutube />
              </a>
            </div>
          )}
          {collection.socialInstagram && (
            <div className="relative z-50" data-tip="Instagram ✨">
              <a
                rel="noopener noreferrer"
                href={collection.socialInstagram}
                target="_blank"
                className=""
              >
                <ImInstagram />
              </a>
            </div>
          )}

          {collection.socialFacebook && (
            <div className="relative z-50" data-tip="Facebook 👍">
              <a
                rel="noopener noreferrer"
                href={collection.socialFacebook}
                target="_blank"
                className=""
              >
                <ImFacebook2 />
              </a>
            </div>
          )}
          {collection.socialWhatsapp && (
            <div className="relative z-50" data-tip="Whatsapp 😁">
              <a
                rel="noopener noreferrer"
                href={collection.socialWhatsapp}
                target="_blank"
                className=""
              >
                <ImWhatsapp />
              </a>
            </div>
          )}
        </div>
        {collection.socialMail && (
          <div>
            <div className="relative flex px-6 overflow-hidden ">
              <div className="block p-2 px-4 font-serif text-xl font-bold tracking-wider text-gray-100 truncate duration-700 bg-blue-300 select-all bg-opacity-10">
                {collection.socialMail}
              </div>
              <button
                onClick={() => {
                  copyToClipboard("" + collection.socialMail + "")
                  setIsCopied(true)
                  setTimeout(() => setIsCopied(false), 3000)
                }}
                data-tip="Copiar mail con un click"
              >
                <div className="block w-full px-4 py-2 font-bold text-white bg-gray-800 md:px-3 ">
                  {isCopied ? (
                    <div className="flex justify-between text-green-500">
                      <HiMailOpen className="text-2xl text-green-500" />
                    </div>
                  ) : (
                    <div className="flex justify-between duration-200 transform hover:scale-105">
                      <HiMail className="text-2xl text-yellow-500" />
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        )}
      </div>

      <SRLWrapper options={options}>
        <div
          className="relative w-full max-w-2xl p-6 mx-auto my-6 prose prose-xl text-left article"
          id={collection.slug}
        >
          {collection.linkExterno && (
            <div className="relative z-50 flex flex-col items-center justify-center w-full p-3 py-6 mx-auto duration-200 transform bg-blue-100 border-2 border-blue-200 rounded-sm shadow-xl hover:bg-blue-50 bg-opacity-95 hover:shadow-2xl">
              <a
                rel="noopener noreferrer"
                href={collection.linkExterno}
                target="_blank"
                className="inline-flex items-center space-x-3 font-serif text-xl font-bold text-center text-blue-800 no-underline hover:text-blue-500 "
              >
                Link al sitio web
                <FiExternalLink className="ml-1 text-lg" />
              </a>
            </div>
          )}

          {collection.portfolio && (
            <div className="relative z-50 flex flex-col items-center justify-center w-full p-3 py-6 mx-auto mb-6 duration-200 transform bg-yellow-100 border-2 border-yellow-200 rounded-sm shadow-xl hover:bg-yellow-50 bg-opacity-95 hover:shadow-md">
              <AnchorLink
                className="inline-flex items-center space-x-3 font-serif text-xl font-bold text-center text-yellow-800 no-underline hover:text-yellow-500"
                href="#gallery"
              >
                Galeria de Fotos
                <FcGallery className="ml-2 text-2xl" />
              </AnchorLink>
            </div>
          )}

          {collection.textoPrincipal && (
            <FormatText FormatText={collection.textoPrincipal} />
          )}
        </div>
        {collection.portfolio && (
          <div className="pt-24" id="gallery">
            <h3 className="font-serif text-3xl font-bold text-center">Galería</h3>
            <div
              className="grid gap-2 px-6 mx-auto mt-6 md:grid-cols-2 max-w-7xl"
            >
              {collection.portfolio.map((item, i) => (
                <div
                  key={item.id}
                  className="relative m-0 overflow-hidden cursor-pointer h-96 hover:opacity-90 link"
                >
                  <GatsbyImage
                    title={collection.title}
                    alt={collection.title}
                    image={item.gatsbyImageData}
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </SRLWrapper>
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
      description {
        description
      }
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
      portfolio {
        gatsbyImageData(
          layout: FULL_WIDTH
          height: 800
          width: 800
          formats: JPG
          backgroundColor: "#ffffff"
          jpegProgressive: false
          placeholder: DOMINANT_COLOR
        )
      }
      socialFacebook
      socialYoutube
      socialInstagram
      socialMail
      socialWhatsapp
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
