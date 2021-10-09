import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React from "react"
import { AwesomeButtonSocial } from "react-awesome-button"
import { Helmet } from "react-helmet"
import { FcClock, FcConferenceCall, FcCollaboration } from "react-icons/fc"
import { SRLWrapper } from "simple-react-lightbox"
import Layout from "../components/layout"
import OpenGallery from "../components/OpenGallery"
import QueriesLastGames from "../components/Queries/QueriesLastGames"
import Seo from "../components/seo"
import GoBack from "../components/GoBack"
import AboutImage from "../images/kallpa-ludica.png"
import { RiZoomInLine } from "react-icons/ri"
import { CgSandClock } from "react-icons/cg"
import ReactPlayer from "react-player"
import "../styles/AwsBtn.css"
import "../styles/VideoReact.css"
import FormatText from "../components/serializers"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulArticulos
  // const { article } = data.contentfulArticulos
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      {post.publisher ? (
        <Seo
          title={`${post.title}`}
          description={`Juego de la editorial ${post.publisher.title}`}
          image={`${post.imagenDestacada.file.url}`}
        />
      ) : (
        <Seo
          title={`${post.title}`}
          description={`Juego en la provincia de Salta`}
          image={`${post.imagenDestacada.file.url}`}
        />
      )}
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <div className="w-full py-12 bg-yellow-50">
        <div className="mx-auto mt-12 bg-white shadow-lg max-w-7xl ">
          <div className="p-4 pb-0">
            <GoBack />
          </div>
          <div className="flex flex-col p-0 py-6 sm:flex-row">
            <div className="w-full md:w-2/3">
              <SRLWrapper options={options}>
                {post.imagenDestacada ? (
                  <div className="w-full mx-auto mb-2 text-center shadow-md cursor-pointer link">
                    <GatsbyImage
                      title={post.title}
                      alt={post.title}
                      image={post.imagenDestacada.gatsbyImageData}
                    />
                  </div>
                ) : (
                  <img
                    className="w-48 h-48 mx-auto my-6 opacity-25 "
                    alt="Kallpa Lúdica"
                    src={AboutImage}
                  />
                )}
                {post.GameGallery && (
                  <div className="w-full text-center ">
                    <div className="w-full px-0 pt-6 m-auto md:py-0">
                      <div className="grid grid-cols-2 gap-2">
                        {post.GameGallery.map((item, i) => (
                          <div
                            className="relative max-w-xl m-0 overflow-hidden transition-all duration-200 transform shadow-md h-28 link hover:opacity-75 "
                            key={item.id}
                          >
                            <RiZoomInLine className="absolute top-0 right-0 z-30 m-2 text-xl text-gray-400" />
                            <GatsbyImage
                              title={item.title}
                              className="cursor-pointer"
                              alt={item.title}
                              image={item.gatsbyImageData}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </SRLWrapper>
            </div>
            <div className="relative flex flex-col w-full pt-3 md:pl-6">
              <h1 className="w-full pt-2 pl-2 font-mono text-3xl text-left text-gray-600 md:pt-0 md:pl-0 md:text-5xl md:mb-3">
                {post.title}
              </h1>

              {post.stock && (
                <div className="relative flex items-baseline justify-start m-1 my-2 font-mono text-xl font-bold tracking-wider text-left text-blue-500 transition-all duration-500">
                  <CgSandClock className="relative mr-1 top-1 " />
                  <span className="block">Por encargo</span>
                </div>
              )}
              <div className="flex flex-col items-start justify-start px-3 md:px-0">
                {post.publisher && (
                  <Link
                    to={`/tienda-de-juegos/editoriales/${kebabCase(
                      post.publisher.slug
                    )}`}
                    className="flex flex-col py-1 mr-2 font-sans font-bold text-green-500 underline hover:text-indigo-800"
                    key={post.publisher.slug}
                  >
                    Editorial {post.publisher.title}
                  </Link>
                )}
                {post.GameAuthor && (
                  <div className="block py-1 mt-1 mb-4 font-sans text-base italic font-bold text-left text-gray-700 ">
                    Creado por {post.GameAuthor}
                  </div>
                )}
              </div>
              <div className="flex flex-col justify-center w-full px-1 pl-2 my-2 text-gray-700 md:pl-0 md:px-6 md:flex-row md:justify-start">
                {post.GameAges && (
                  <div className="flex items-center justify-start my-2 font-bold text-left md:pr-6 sm:flex-row">
                    <FcConferenceCall className="mr-3 text-xl md:text-4xl " />
                    Edad {post.GameAges}+
                  </div>
                )}
                {post.GameDuration && (
                  <div className="flex items-center justify-start my-2 font-bold text-left md:pr-6 sm:flex-row">
                    <FcClock className="mr-3 text-xl md:text-4xl " />
                    {post.GameDuration} min.
                  </div>
                )}
                {post.GamePlayers && (
                  <div className="flex items-center justify-start my-2 font-bold text-left md:pr-6 sm:flex-row">
                    <FcCollaboration className="mr-3 text-xl md:text-4xl " />
                    {post.GamePlayers} jugadores
                  </div>
                )}
              </div>
              {post.GameGallery && (
                <div className="hidden pl-6 my-6 mb-8 md:px-0">
                  <OpenGallery />
                </div>
              )}
              {post.GameBuyPrice && (
                <div className="flex flex-col-reverse items-center justify-between w-full px-6 py-6 mb-0 bg-green-100 border-t-2 border-b-2 border-green-500 md:flex-row">
                  <AwesomeButtonSocial
                    type="whatsapp"
                    href={`https://api.whatsapp.com/send?phone=5493876034627&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quería%2C%20consultar%20por%20el%20juego%20${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hacenos tu consulta
                  </AwesomeButtonSocial>
                  <div className="mb-3 font-sans text-3xl font-bold text-center text-green-900 md:my-0 md:text-right">
                    ${post.GameBuyPrice}
                  </div>
                </div>
              )}
              <div className="flex flex-col items-start justify-between mt-6 text-lg md:px-6 md:flex-row">
                {post.colecciones && (
                  <div className="flex items-center justify-end text-lg text-center">
                    {post.colecciones.map((item, i) => (
                      <Link
                        to={`/tienda-de-juegos/colecciones/${kebabCase(
                          item.slug
                        )}`}
                        className="flex flex-col py-1 pr-4 mr-2"
                        key={i}
                      >
                        <div className="relative overflow-hidden transition-all duration-200 transform md:w-full hover:-translate-y-1">
                          <GatsbyImage
                            title={item.title}
                            className="w-16 h-16 mx-auto"
                            alt={item.title}
                            image={item.icono.gatsbyImageData}
                          />
                        </div>
                        <b className="font-sans text-blue-500 hover:text-blue-700">
                          {item.title}
                        </b>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <main>
                <article
                  className="w-full px-3 my-6 prose prose-xl text-left md:px-0 "
                  id={post.slug}
                >
                  {post.textoPrincipal && (
                    <FormatText FormatText={post.textoPrincipal} />
                  )}

                  {post.insertarVideoDeYoutube && (
                    <div className="my-6">
                      <ReactPlayer
                        controls="true"
                        width="100%"
                        height="400px"
                        url={post.insertarVideoDeYoutube}
                      />
                    </div>
                  )}
                </article>
              </main>
            </div>
          </div>
          <div className="py-6 mx-auto font-sans border-t border-gray-300 max-w-7xl ">
            <nav className="flex justify-between">
              <div className="flex-1 py-6 text-center border-r border-gray-300 hover:bg-green-100">
                {prev && (
                  <Link
                    to={`/tienda-de-juegos/${kebabCase(prev.slug)}`}
                    rel="prev"
                    className="text-xl font-bold transition-all duration-200 transform hover:translate-x-2"
                  >
                    ← {prev.title}
                  </Link>
                )}
              </div>
              <div
                className="flex-1 py-6 text-center hover:bg-green-100 "
                style={{ justifySelf: "flex-end" }}
              >
                {next && (
                  <Link
                    to={`/tienda-de-juegos/${kebabCase(next.slug)}`}
                    rel="next"
                    className="text-xl font-bold transition-all duration-200 transform hover:-translate-x-2"
                  >
                    {next.title} →
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
        <div className="relative flex flex-col items-center w-full px-2 pb-1 mx-auto mt-12 max-w-7xl ">
          <h1 className="w-full pt-3 pb-3 mx-auto font-mono text-3xl text-center text-yellow-500 max-w-7xl ">
            Lo que se anda jugando
          </h1>
        </div>
        <QueriesLastGames />
      </div>
    </Layout>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query PostBySlug($slug: String!) {
    contentfulArticulos(slug: { eq: $slug }) {
      slug
      title
      textoPrincipal {
        raw
      }
      stock
      GameBuyPrice
      GamePlayers
      insertarVideoDeYoutube
      GameDuration
      GameAuthor
      GameAges
      colecciones {
        title
        slug
        icono {
          gatsbyImageData(
            layout: FIXED
            width: 50
            height: 50
            quality: 90
            formats: JPG
            backgroundColor: "#ffffff"
            jpegProgressive: false
            placeholder: BLURRED
          )
        }
      }
      publisher {
        title
        slug
      }
      GameGallery {
        title
        id
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 1200
          quality: 90
          formats: JPG
          backgroundColor: "#ffffff"
          jpegProgressive: false
          placeholder: BLURRED
        )
      }
      imagenDestacada {
        gatsbyImageData(
          layout: FULL_WIDTH
          width: 1200
          quality: 90
          formats: JPG
          backgroundColor: "#ffffff"
          jpegProgressive: false
          placeholder: BLURRED
        )
        file {
          url
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
