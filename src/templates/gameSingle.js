import { graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React from "react"
import { AwesomeButtonSocial } from "react-awesome-button"
import { Helmet } from "react-helmet"
import { FcClock, FcConferenceCall, FcCollaboration, FcHome } from "react-icons/fc"
import { FaExternalLinkSquareAlt } from "react-icons/fa"
import { SRLWrapper } from "simple-react-lightbox"
import Layout from "@components/layout"
import OpenGallery from "@components/OpenGallery"
import QueriesLastGames from "@components/Queries/QueriesLastGames"
import Faq from "@components/About/Faq"
import Seo from "@components/seo"
import GoBack from "@components/GoBack/GoBack"
import AboutImage from "@images/kallpa-ludica.png"
import { RiZoomInLine } from "react-icons/ri"
import { CgSandClock } from "react-icons/cg"
import ReactPlayer from "react-player"
import "@styles/AwsBtn.css"
import "@styles/VideoReact.css"
import FormatText from "@components/Serializers/Serializers"
import AnchorLink from "react-anchor-link-smooth-scroll"

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulArticulos
  // const { article } = data.contentfulArticulos
  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      {post.imagenDestacada ? (
        <Seo
          title={`${post.title}`}
          description={`Juego en la provincia de Salta`}
          image={`${post.imagenDestacada.file.url}`}
        />
      ) : (
        <Seo
          title={`${post.title}`}
          description={`Juego en la provincia de Salta`}
          image={AboutImage}
        />
      )}
      <Helmet>
        <body className="ingame" />
      </Helmet>
      <div className="w-full py-12 bg-yellow-50">
        <div className="mx-auto mt-12 bg-white shadow-lg max-w-7xl ">
          <div className="relative flex items-center justify-between w-full p-4 pb-0">
            <GoBack />
            {post.LinkBgg ? (
              <a
                className="z-10 m-3 btn yellow"
                target="_blank"
                rel="noopener noreferrer"
                title="Link a la BGG"
                href={post.LinkBgg}
              >
                Ver más en la BGG
                <FaExternalLinkSquareAlt className="ml-2" />
              </a>
            ) : (
              <></>
            )}
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
                    className="w-full h-full mx-auto my-5 rounded-lg opacity-10 "
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
              {post.GameInStock ? (
                <span
                  className="relative flex items-baseline justify-center m-1 my-2 font-serif text-xl font-bold tracking-wider text-left text-green-500 transition-all duration-500"
                  href="#faq"
                >
                  <span className="block">En Stock</span>
                </span>
              ) : (
                <AnchorLink
                  className="relative flex items-baseline justify-center m-1 my-2 font-serif text-xl font-bold tracking-wider text-left text-blue-500 transition-all duration-500"
                  href="#faq"
                >
                  <CgSandClock className="relative mr-1 text-lg top-0.5 " />
                  <span className="block">Por encargo</span>
                </AnchorLink>
              )}
              <h1 className="w-full pt-2 pl-2 mb-0 font-serif text-3xl font-bold text-center text-gray-600 md:pt-0 md:pl-0 md:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-col items-center justify-center px-3 pt-3 md:px-0">
                {post.publisher && (
                  <span
                    to={`/tienda-de-juegos/editoriales/${kebabCase(
                      post.publisher.slug
                    )}`}
                    className="block mb-3 font-bold"
                    key={post.publisher.slug}
                  >
                    Editorial {post.publisher.title}
                  </span>
                )}
                {post.publisher && (
                  <Link
                    to={`/tienda-de-juegos/editoriales/${kebabCase(
                      post.publisher.slug
                    )}`}
                    className="btn blue"
                    key={post.publisher.title}
                  >
                    Ver más juegos de la editorial
                  </Link>
                )}
                {post.GameAuthor && (
                  <div className="block py-1 mt-4 mb-4 font-serif text-base italic font-bold text-center text-gray-700 ">
                    Creado por {post.GameAuthor}
                  </div>
                )}
              </div>
              <div className="flex flex-col items-center justify-center w-full px-1 pl-2 my-2 font-serif text-gray-700 md:items-start md:pl-0 md:px-6 md:flex-row md:justify-center">
                {post.GameAges && (
                  <div className="flex items-center justify-start my-2 font-bold text-left md:pr-6 sm:flex-row">
                    <FcConferenceCall className="mr-3 text-xl md:text-4xl " />
                    Edad {post.GameAges}+
                  </div>
                )}
                {post.GameDuration && (
                  <div className="flex items-center justify-start my-2 font-bold text-left md:pr-6 sm:flex-row">
                    <FcClock className="mr-3 text-xl md:text-4xl " />
                    {post.GameDuration} min
                  </div>
                )}
                {post.GamePlayers && (
                  <div className="flex items-center justify-start my-2 font-bold text-left md:pr-6 sm:flex-row">
                    <FcCollaboration className="mr-3 text-xl md:text-4xl " />
                    {post.GamePlayers} jugadorxs
                  </div>
                )}
              </div>
              {post.GameGallery && (
                <div className="hidden pl-6 my-6 mb-8 md:px-0">
                  <OpenGallery />
                </div>
              )}
              {post.GameBuyPrice && (
                <div className="flex flex-col items-center justify-between w-full px-6 py-6 mb-0 border-t-2 border-b-2 bg-green-50 border-green-50">
                  <div className="mb-6 font-serif text-4xl font-bold text-center text-green-600">
                    $ {post.GameBuyPrice}
                  </div>
                  <AwesomeButtonSocial
                    type="whatsapp"
                    href={`https://api.whatsapp.com/send?phone=5493876034627&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quería%2C%20consultar%20por%20el%20juego%20${post.title}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Hacenos tu consulta
                  </AwesomeButtonSocial>
                </div>
              )}
              <div className="flex items-center justify-center mt-6 text-lg md:px-6">
                {post.colecciones && (
                  <div className="flex items-center justify-center text-lg text-center">
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
                            className="w-10 h-10 mx-auto"
                            alt={item.title}
                            image={item.icono.gatsbyImageData}
                          />
                        </div>
                        <b className="mt-1 font-serif text-gray-800 hover:text-blue-700">
                          {item.title}
                        </b>
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <main>
                <article
                  className="w-full px-3 mx-auto my-6 prose prose-xl text-left gameSingle "
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

          <div className="mx-auto font-serif border-t border-gray-300 max-w-7xl">
            <nav className="flex justify-between">
              <div className="flex-1 py-6 text-center border-r border-gray-300 hover:bg-yellow-100">
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
                className="flex-1 py-6 text-center hover:bg-yellow-100 "
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
        <div>
          <h2 id="faq" className="w-full pt-20 pb-6 mx-auto font-serif text-3xl font-bold text-center text-indigo-500 scroll-mt-20 max-w-7xl ">
            Preguntas Frecuentes
          </h2>
          <Faq />
        </div>
        <div className="relative flex flex-col items-center w-full px-2 pb-1 mx-auto mt-12 max-w-7xl ">
          <h1 className="flex flex-col items-center w-full max-w-6xl pt-4 mx-auto font-mono text-2xl leading-tight text-center text-yellow-500 md:text-4xl">
            <FcHome className="mt-6 text-6xl transform " />
            Recien llegados
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
      GameInStock
      GameBuyPrice
      GamePlayers
      insertarVideoDeYoutube
      GameDuration
      GameAuthor
      LinkBgg
      GameAges
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
