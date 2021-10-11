import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link, navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import { kebabCase } from "lodash"
import Seo from "../components/seo"
import React from "react"
import ComunidadWidgets from "../components/Comunidad/HomeWidgets"
import { GatsbyImage } from "gatsby-plugin-image"
import { SRLWrapper } from "simple-react-lightbox"
import { ImFacebook2, ImYoutube, ImWhatsapp, ImInstagram } from "react-icons/im"
import { HiMailOpen, HiMail } from "react-icons/hi"
import { FcGallery } from "react-icons/fc"
import { GoLinkExternal } from "react-icons/go"
import ReactTooltip from "react-tooltip"
import ReactPlayer from "react-player"
import GameCard from "../components/GameCard"
import FormatText from "../components/serializers"
import { Disclosure, Transition } from "@headlessui/react"
import { FiChevronDown } from "react-icons/fi"

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
          <h1 className="relative z-50 w-full px-2 mx-auto font-serif text-3xl font-bold text-center text-white md:text-5xl max-w-7xl">
            {collection.title}
          </h1>
        </div>
        {collection.imagenPortada && (
          <div className="absolute inset-0 z-0 object-cover w-auto h-screen min-h-screen md:w-full opacity-10">
            <GatsbyImage
              title={collection.title}
              alt={collection.title}
              className="object-cover w-auto h-screen"
              image={collection.imagenPortada.gatsbyImageData}
            />
          </div>
        )}
        <div className="relative z-50 w-full max-w-3xl px-2 mx-auto my-6 font-serif text-xl text-center text-white md:text-xl">
          {collection.description.description}
        </div>

        <div className="flex justify-between max-w-2xl px-2 mx-auto mt-6 mb-12 space-x-8 text-4xl text-white">
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
            <div className="relative flex flex-col px-6 overflow-hidden md:flex-row ">
              <div className="block p-2 px-4 font-serif font-bold text-gray-100 duration-700 bg-blue-300 select-all md:text-xl md:tracking-wider bg-opacity-10">
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
                    <div className="flex items-center justify-center font-serif text-green-500">
                      <HiMailOpen className="mr-1 text-2xl text-green-500 md:mr-0" />
                      <span className="md:hidden">Mail copiado</span>
                    </div>
                  ) : (
                    <div className="flex items-center justify-center font-serif duration-200 transform hover:scale-105">
                      <HiMail className="mr-1 text-2xl text-yellow-500 md:mr-0" />
                      <span className="md:hidden">Click para Copiar</span>
                    </div>
                  )}
                </div>
              </button>
            </div>
          </div>
        )}
        {collection.linkExterno && (
          <div className="relative z-50 flex flex-col items-center justify-center w-full max-w-xs px-3 py-6 mx-auto duration-200 transform">
            <AwesomeButton
              href={collection.linkExterno}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full mt-5"
              type="secondary"
            >
              Visitar
              <span className="hidden ml-2 md:inline-block">página</span>
              <span className="ml-2">web</span>
              <GoLinkExternal className="inline-block ml-2" />
            </AwesomeButton>
          </div>
        )}
      </div>

      <SRLWrapper options={options}>
        {collection.portfolio && (
          <div className="max-w-5xl px-2 mx-auto mt-2 md:mt-6">
            <Disclosure>
              {({ open }) => (
                <>
                  <Disclosure.Button className="flex justify-between w-full max-w-2xl px-6 py-4 mx-auto font-serif text-xl font-bold text-left text-purple-900 bg-purple-100 rounded-lg hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                    <span className="flex items-center justify-start">
                      <FcGallery className="mr-2 text-2xl" />
                      Galeria de Fotos
                    </span>
                    <FiChevronDown
                      className={`${
                        open ? "transform rotate-180" : ""
                      } w-5 h-5 text-purple-500`}
                    />
                  </Disclosure.Button>
                  <Transition
                    show={open}
                    enter="transition duration-100 ease-out"
                    enterFrom="transform scale-95 opacity-0"
                    enterTo="transform scale-100 opacity-100"
                    leave="transition duration-75 ease-out"
                    leaveFrom="transform scale-100 opacity-100"
                    leaveTo="transform scale-95 opacity-0"
                  >
                    <Disclosure.Panel
                      static
                      className="pt-6 font-serif text-xl text-left text-gray-800 "
                    >
                      <div>
                        <div className="grid gap-2 px-1 mx-auto mt-1 md:grid-cols-2 max-w-7xl">
                          {collection.portfolio.map((item, i) => (
                            <div
                              key={item.id}
                              className="relative h-64 m-0 overflow-hidden rounded cursor-pointer hover:opacity-90 link"
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
                    </Disclosure.Panel>
                  </Transition>
                </>
              )}
            </Disclosure>
          </div>
        )}
        <div
          className="relative w-full max-w-2xl p-6 pt-2 mx-auto my-6 mt-2 prose text-left md:prose-xl article"
          id={collection.slug}
        >
          {collection.insertarVideoDeYoutube && (
            <div className="my-6">
              <ReactPlayer
                controls="true"
                volume="1"
                width="100%"
                height="400px"
                url={collection.insertarVideoDeYoutube}
              />
            </div>
          )}
          {collection.textoPrincipal && (
            <FormatText FormatText={collection.textoPrincipal} />
          )}
        </div>
      </SRLWrapper>

      {collection.editorial && (
        <div className="max-w-full p-6 mx-auto mt-20 text-gray-100 bg-fixed bg-white border-t pattern-grid-lg">
          <div className="max-w-2xl px-3 mx-auto">
            <Link
              to={`/tienda-de-juegos/editoriales/${kebabCase(
                collection.editorial.slug
              )}`}
              className="relative flex flex-col items-center justify-center max-w-xs mx-auto overflow-hidden duration-1000 transform rounded-lg -translate-y-0 hover:-translate-y-1 "
            >
              <GatsbyImage
                title={collection.editorial.title}
                className="object-fill w-64 max-w-xs mx-auto "
                alt={collection.editorial.title}
                image={collection.editorial.logo.gatsbyImageData}
              />
            </Link>
          </div>
          <div className="max-w-3xl pt-6 pb-12 mx-auto">
            <div className="relative flex flex-col items-center justify-center w-full overflow-hidden">
              <AwesomeButton
                action={() => {
                  navigate(
                    `/tienda-de-juegos/editoriales/${kebabCase(
                      collection.editorial.slug
                    )}`
                  )
                }}
                type="primary"
              >
                Conocé los Juegos
                <span className="hidden ml-2 md:inline-block">
                  
                  de {collection.editorial.title}
                </span>
              </AwesomeButton>
            </div>
          </div>
          {collection.juegosRelacionados && (
            <div className="grid max-w-4xl gap-3 mx-auto text-gray-900 sm:grid-cols-3">
              {collection.juegosRelacionados.map((item, i) => (
                <GameCard card={item} key={item.slug} />
              ))}
            </div>
          )}
        </div>
      )}

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
      insertarVideoDeYoutube
      juegosRelacionados {
        title
        slug
        GameBuyPrice
        stock
        imagenDestacada {
          gatsbyImageData
        }
      }
      editorial {
        title
        slug
        logo {
          gatsbyImageData(
            layout: CONSTRAINED
            width: 300
            formats: PNG
            backgroundColor: "#ffffff"
            jpegProgressive: false
          )
        }
      }
      imagenPortada {
        gatsbyImageData(
          layout: FULL_WIDTH
          height: 800
          width: 1800
          formats: JPG
          backgroundColor: "#ffffff"
          jpegProgressive: false
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
