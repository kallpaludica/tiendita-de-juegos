import { graphql, Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import { AwesomeButtonSocial } from "react-awesome-button"
import { Helmet } from "react-helmet"
import { FaUserFriends } from "react-icons/fa"
import { GiTabletopPlayers } from "react-icons/gi"
import { IoMdTime } from "react-icons/io"
import { SRLWrapper } from "simple-react-lightbox"
import { BigPlayButton, Player } from "video-react"
import "../components/AwsBtn.css"
import GameSort from "../components/Games/GameSort"
import Layout from "../components/layout"
import OpenGallery from "../components/OpenGallery"
import QueriesLastGames from "../components/Queries/QueriesLastGames"
import SEO from "../components/seo"
import "../components/VideoReact.css"
import FormatText from "../components/wysiwyg"
import GoBack from "../components/GoBack"
import AboutImage from "../images/kallpa-ludica.png"
import { RiZoomInLine } from "react-icons/ri"

const options = {
  buttons: {
    iconPadding: "7px",
    showDownloadButton: false,
    backgroundColor: "rgba(255, 255, 255, 0.95)",
    iconColor: "rgba(0, 0, 0, 0.8)",
  },
  caption: {
    captionFontFamily: "Montserrat, sans-serif",
    captionFontSize: "22px",
    captionColor: "#8D99AE",
    captionFontWeight: 300,
    showCaption: false,
  },
  settings: {
    overlayColor: "rgba(255, 255, 255, 1)",
    transitionTimingFunction: "ease-in-out",
    slideTransitionSpeed: 2.6,
    slideTransitionTimingFunction: [0.25, 0.75, 0.5, 1],
    slideAnimationType: "both",
    slideSpringValues: [300, 200],
    disablePanzoom: true,
    autoplaySpeed: 6000,
    hideControlsAfter: false,
  },
  progressBar: {
    height: "3px",
    fillColor: "rgba(237, 137, 54,1)",
    backgroundColor: "rgba(255, 255, 255, 0.95)",
  },
  thumbnails: {
    thumbnailsSize: ["150px", "100px"],
    thumbnailsGap: "0 5px",
  },
}

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.contentfulArticulos
  const Article =
    data.contentfulArticulos.childContentfulArticulosTextoPrincipalRichTextNode

  const { prev, next } = pageContext
  return (
    <Layout location={location}>
      <SEO title="Juegos" />
      <Helmet>
        <body className="ingame" />
      </Helmet>

      <div className="w-full py-12 bg-orange-100">
        <div className="max-w-6xl mx-auto mt-16 bg-white shadow-lg ">
          <div className="p-4 pb-0">
            <GoBack />
          </div>
          <div className="flex flex-col p-5 pt-6 sm:flex-row">
            <div className="w-full md:w-2/3">
              <SRLWrapper options={options}>
                {post.imagenDestacada ? (
                  <div className="w-full mx-auto mb-2 text-center shadow-md cursor-pointer link">
                    <Img
                      fluid={post.imagenDestacada.fluid}
                      alt={post.title}
                      title={post.title}
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
                      <div className="grid grid-cols-3 gap-2">
                        {post.GameGallery.map((item, i) => (
                          <div
                            className="relative h-24 max-w-xl m-0 overflow-hidden transition-all duration-200 transform shadow-md hover:opacity-75 link"
                            key={item.id}
                          >
                            <RiZoomInLine className="absolute top-0 right-0 z-30 m-2 text-xl text-gray-400" />
                            <Img
                              title={item.title}
                              alt={item.title}
                              className="cursor-pointer"
                              fluid={item.fluid}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </SRLWrapper>
            </div>
            <div className="relative flex flex-col w-full pt-3 md:pl-12">
              <h1 className="w-full pt-2 pl-2 font-mono text-3xl text-left text-gray-800 md:pt-0 md:pl-0 md:text-5xl md:mb-3">
                {post.title}
              </h1>

              <div className="flex flex-col justify-center w-full pl-2 my-2 text-gray-700 md:pl-0 md:px-0 md:flex-row md:justify-start">
                {post.GameAges && (
                  <div className="flex items-center justify-start my-2 font-bold text-center md:pr-6 sm:flex-row">
                    <FaUserFriends className="mr-3 text-2xl " />
                    Edad {post.GameAges}+
                  </div>
                )}

                {post.GameDuration && (
                  <div className="flex items-center justify-start my-2 font-bold text-center md:pr-6 sm:flex-row">
                    <IoMdTime className="mr-3 text-2xl " />
                    Duración de {post.GameDuration} min.
                  </div>
                )}
                {post.GamePlayers && (
                  <div className="flex items-center justify-start my-2 font-bold text-center md:pr-6 sm:flex-row">
                    <GiTabletopPlayers className="mr-3 text-3xl " />
                    {post.GamePlayers} jugadores
                  </div>
                )}
              </div>

              <div className="flex items-center justify-start text-lg text-center">
                {post.colecciones && (
                  <>
                    {post.colecciones.map((item, i) => (
                      <Link
                        to={`/tienda-de-juegos/colecciones/${kebabCase(
                          item.slug
                        )}`}
                        className="flex flex-col py-1 pr-4 my-2 mr-2 rounded-full "
                        key={i}
                      >
                        <div className="relative overflow-hidden transition-all duration-200 transform md:w-full hover:-translate-y-2">
                          <Img
                            title={item.title}
                            className="w-16 h-16"
                            alt={item.title}
                            fixed={item.icono.fixed}
                          />
                        </div>
                        <b className="font-sans text-blue-500 hover:text-blue-700">
                          {item.title}
                        </b>
                      </Link>
                    ))}
                  </>
                )}
              </div>

              {post.GameGallery && (
                <div className="hidden pl-6 my-6 mb-8 md:px-0">
                  <OpenGallery />
                </div>
              )}

              {post.GameBuyPrice && (
                <div className="flex flex-col-reverse justify-between w-full px-3 py-6 mb-0 bg-green-100 border-t-2 border-b-2 border-green-500 md:flex-row">
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

              <div className="flex flex-col items-start justify-start mt-6 text-lg text-center md:flex-row">
                {post.publisher && (
                  <div className="flex items-center justify-center text-lg">
                    <Link
                      to={`/tienda-de-juegos/editoriales/${kebabCase(
                        post.publisher.slug
                      )}`}
                      className="flex flex-col py-1 mr-2"
                      key={post.publisher.slug}
                    >
                      <b className="font-sans text-indigo-500 underline hover:text-indigo-800">
                        Editorial {post.publisher.title}
                      </b>
                    </Link>
                  </div>
                )}
              </div>

              {post.GameAuthor && (
                <div className="block mt-1 mb-4 font-sans text-base italic font-bold text-left text-gray-700 ">
                  Creado por {post.GameAuthor}
                </div>
              )}

              <div
                className="w-full pl-0 pr-6 my-6 text-left article"
                id={post.slug}
              >
                {Article && (
                  <FormatText
                    FormatText={
                      post.childContentfulArticulosTextoPrincipalRichTextNode
                    }
                  />
                )}
              </div>

              {post.GamePlay && (
                <div className="mt-12">
                  <Player src={post.GamePlay.file.url}>
                    <BigPlayButton position="center" />
                  </Player>
                </div>
              )}
            </div>
          </div>
          <div className="max-w-6xl mx-auto font-sans border-t border-gray-300 ">
            <nav style={{ display: "flex", justifyContent: "space-between" }}>
              <div className="flex-1 py-6 text-center border-r border-gray-300 hover:bg-green-100">
                {next && (
                  <Link
                    to={`/tienda-de-juegos/${kebabCase(next.slug)}`}
                    rel="next"
                    className="text-xl font-bold transition-all duration-200 transform hover:-translate-x-2"
                  >
                    ← {next.title}
                  </Link>
                )}
              </div>
              <div
                className="flex-1 py-6 text-center hover:bg-green-100 "
                style={{ justifySelf: "flex-end" }}
              >
                {prev && (
                  <Link
                    to={`/tienda-de-juegos/${kebabCase(prev.slug)}`}
                    rel="prev"
                    className="text-xl font-bold transition-all duration-200 transform hover:translate-x-2"
                  >
                    {prev.title} →
                  </Link>
                )}
              </div>
            </nav>
          </div>
        </div>
        <div className="relative flex flex-col items-center w-full max-w-6xl px-2 pb-1 mx-auto mt-12 ">
          <h1 className="w-full max-w-6xl pt-3 pb-3 mx-auto font-mono text-3xl text-left text-blue-500 ">
            Lo que se anda jugando
          </h1>
          <div className="w-full mx-auto mt-0">
            <GameSort />
          </div>
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
      childContentfulArticulosTextoPrincipalRichTextNode {
        json
      }
      stock
      GameBuyPrice
      GamePlayers
      GameDuration
      GameAuthor
      GameAges
      GamePlay {
        file {
          url
        }
      }
      colecciones {
        title
        slug
        icono {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed
          }
        }
      }
      categoria {
        title
        slug
        icono {
          fixed(width: 50, height: 50) {
            ...GatsbyContentfulFixed
          }
        }
      }
      publisher {
        title
        slug
      }
      GameGallery {
        title
        id
        fluid(maxWidth: 1600) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid_withWebp
        }
        fixed(width: 150, height: 150) {
          ...GatsbyContentfulFixed
        }
      }
      imagenDestacada {
        fixed(width: 800, height: 800) {
          ...GatsbyContentfulFixed
        }
        file {
          url
        }
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
