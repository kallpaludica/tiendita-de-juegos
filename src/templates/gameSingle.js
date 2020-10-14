import React from "react"
import { graphql } from "gatsby"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"
import Img from "gatsby-image"
import SEO from "../components/seo"
import OpenGallery from "../components/OpenGallery"
import FormatText from "../components/wysiwyg"
import AboutImage from "../images/kallpa-ludica.png"
import { SRLWrapper } from "simple-react-lightbox"
import { Helmet } from "react-helmet"
import { AwesomeButtonSocial } from "react-awesome-button"
import { Player, BigPlayButton } from "video-react"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { GiTabletopPlayers } from "react-icons/gi"
import "../components/VideoReact.css"
import "../components/AwsBtn.css"
import QueriesLastGames from "../components/Queries/QueriesLastGames"
import GameSort from "../components/Games/GameSort"

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

      <div className="w-full py-12">
        <div className="max-w-6xl pt-12 mx-auto">
          <div className="flex flex-col pt-6 border-t-2 border-green-500 sm:flex-row">
            <div className="w-full md:w-2/3">
              {post.imagenDestacada ? (
                <div className="w-full mx-auto text-center ">
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

              <SRLWrapper options={options}>
                {post.GameGallery && (
                  <div className="w-full text-center ">
                    <div className="w-full px-0 pt-6 m-auto md:py-6">
                      <div className="grid grid-cols-3 ">
                        {post.GameGallery.map((item, i) => (
                          <div
                            className="relative h-24 max-w-xl m-0 overflow-hidden border-2 border-white link"
                            key={item.id}
                          >
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
              <h3 className="hidden w-full mb-3 font-sans text-base italic font-bold text-center text-gray-700 md:block">
                Juego creado por {post.GameAuthor}
              </h3>
            </div>
            <div className="relative flex flex-col w-full px-2 pt-3 md:pl-12">
              <h1 className="w-full pl-6 font-sans text-4xl font-black text-left text-green-600 md:pl-0 md:text-5xl">
                {post.title}
              </h1>
              <div className="flex flex-col justify-center w-full pl-6 my-2 text-gray-700 md:px-0 md:flex-row md:justify-start">
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
              {post.categoria && (
                <div className="flex items-center justify-start text-lg text-center">
                  <span className="font-sans font-bold ">Modalidad:</span>
                  {post.categoria.map((item, i) => (
                    <Link
                      to={`/categorias/${kebabCase(item.slug)}/`}
                      className="flex flex-col py-1 pr-4 mx-2 my-2 rounded-full "
                      key={i}
                      data-tip={item.title}
                    >
                      <b className="font-sans text-indigo-500 hover:text-indigo-700">
                        {item.title}
                      </b>
                    </Link>
                  ))}
                </div>
              )}
              <div className="flex items-center justify-start text-lg text-center">
                {post.publisher && (
                  <div className="flex items-center justify-center text-lg">
                    <Link
                      to={`/editoriales/${kebabCase(post.publisher.slug)}/`}
                      className="flex flex-col py-1 my-2 mr-2 rounded-full "
                      key={post.publisher.slug}
                    >
                      <b className="font-sans text-gray-800 underline hover:text-indigo-600">
                        Editorial {post.publisher.title}
                      </b>
                    </Link>
                  </div>
                )}
              </div>

              {post.GameGallery && (
                <div className="hidden pl-6 my-6 mb-8 md:px-0">
                  <OpenGallery />
                </div>
              )}
              <div
                className="w-full pr-6 mb-6 text-left article"
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
              <div className="flex flex-col-reverse justify-between w-full px-3 py-6 mb-0 bg-green-100 border-t-2 border-b-2 border-green-500 md:flex-row">
                <AwesomeButtonSocial
                  type="whatsapp"
                  href={`https://api.whatsapp.com/send?phone=5493876034627&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quería%2C%20consultar%20por%20el%20juego%20${post.title}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Consultá o hacé tu pedido
                </AwesomeButtonSocial>
                <div className="mb-3 font-sans text-3xl font-bold text-center text-gray-500 md:my-0 md:text-right">
                  {post.stock ? <>{post.stock}</> : <>${post.GameBuyPrice}</>}
                </div>
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
        </div>
        <div className="relative flex flex-col w-full max-w-6xl pb-3 mx-auto mt-6 border-b border-indigo-700 border-dashed ">
          <h1 className="w-full max-w-6xl pt-3 mx-auto font-sans text-3xl font-bold text-center text-indigo-700 ">
            Últimos juegos agregados
          </h1>
          <div className="max-w-md mx-auto mt-6">
            <GameSort />
          </div>
        </div>

        <QueriesLastGames />
      </div>

      <div className="hidden max-w-6xl py-12 mx-auto text-2xl">
        <nav style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            {next && (
              <Link to={`/juegos/${kebabCase(next.slug)}/`} rel="next">
                ← {next.title}
              </Link>
            )}
          </div>
          <div style={{ justifySelf: "flex-end" }}>
            {prev && (
              <Link to={`/juegos/${kebabCase(prev.slug)}/`} rel="prev">
                {prev.title} →
              </Link>
            )}
          </div>
        </nav>
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

      categoria {
        title
        slug
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
        fixed(width: 500, height: 500) {
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
