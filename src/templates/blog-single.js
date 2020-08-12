import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "../components/VideoReact.css"
import { IoMdTime } from "react-icons/io"
import { GiTabletopPlayers } from "react-icons/gi"
import { FaUserFriends } from "react-icons/fa"
import AboutImage from "../images/kallpa-ludica.png"
import { SRLWrapper } from "simple-react-lightbox"
import Img from "gatsby-image"
import SEO from "../components/seo"
//import Article from "../components/Article"
import OpenGallery from "../components/OpenGallery"
import "../components/AwsBtn.css"
import { Helmet } from "react-helmet"
//import HeroImageWave from "../components/HeroImageWave"

import { GoLinkExternal } from "react-icons/go"
import { AwesomeButton, AwesomeButtonSocial } from "react-awesome-button"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import { Player, BigPlayButton } from "video-react"
//import ReactTooltip from "react-tooltip"
const Bold = ({ children }) => (
  <span className="font-mono font-bold">{children}</span>
)
const Text = ({ children }) => (
  <p className="w-full font-mono text-2xl text-left text-gray-900">
    {children}
  </p>
)
const website_url = "https://www.cooparaje.com.ar"
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Bold>{text}</Bold>,
    [MARKS.CODE]: (embedded) => (
      <div>
        <div dangerouslySetInnerHTML={{ __html: embedded }} />
      </div>
    ),
  },
  renderNode: {
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      if (!node.data || !node.data.target.fields) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.fields.file["es-AR"].contentType === "video/mp4") {
          return (
            <div>
              <Player src={node.data.target.fields.file["es-AR"].url}>
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <div className="post-image">
                <img
                  className="w-full max-w-md mx-auto"
                  alt={node.data.target.fields.title["es-AR"]}
                  src={node.data.target.fields.file["es-AR"].url}
                />
              </div>
            </div>
          )
        }
      }
    },
    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="inline-block pb-0 font-bold border-b border-green-300 hover:bg-green-600 hover:text-white"
          target={`${
            node.data.uri.startsWith(website_url) ? "_self" : "_blank"
          }`}
          rel={`${
            node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
          }`}
        >
          {node.content[0].value}
        </a>
      )
    },
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
  },
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
        <body className="ingames" />
      </Helmet>
      {/*<HeroImageWave
        heading={post.title}
        author={post.GameAuthor}
        url={post.imagenDestacada.fluid}
        anchor="contenido"
        pattern="bg-green-600 text-green-500"
        svg="M0,32L120,74.7C240,117,480,203,720,202.7C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />*/}
      <div className="w-full py-12">
        <div className="max-w-6xl pt-12 mx-auto">
          <div className="flex flex-col-reverse pt-6 border-t-2 border-green-500 sm:flex-row">
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
                          <div className="relative h-24 max-w-xl m-0 overflow-hidden border-2 border-white link">
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
              <h3 className="w-full mb-3 font-serif text-base italic font-bold text-center text-gray-700">
                Juego creado por {post.GameAuthor}
              </h3>
            </div>
            <div className="relative flex flex-col w-full px-2 pt-3 md:pl-12">
              <h1 className="w-full pl-6 font-serif text-4xl font-black text-left text-green-600 md:pl-0 md:text-5xl">
                {post.title}
              </h1>

              <div className="flex flex-col justify-center w-full pl-6 my-2 text-gray-700 md:px-0 md:flex-row md:justify-start">
                {post.GameAges && (
                  <div className="flex flex-col items-center justify-start my-2 font-bold text-center md:pr-6 sm:flex-row">
                    <FaUserFriends className="mr-3 text-2xl " />
                    Edad {post.GameAges}+
                  </div>
                )}

                {post.GameDuration && (
                  <div className="flex flex-col items-center justify-start my-2 font-bold text-center md:pr-6 sm:flex-row">
                    <IoMdTime className="mr-3 text-2xl " />
                    Duración de {post.GameDuration} min.
                  </div>
                )}
                {post.GamePlayers && (
                  <div className="flex flex-col items-center justify-start my-2 font-bold text-center md:pr-6 sm:flex-row">
                    <GiTabletopPlayers className="mr-3 text-3xl " />
                    {post.GamePlayers} jugadores
                  </div>
                )}
              </div>
              {post.GameGallery && (
                <div className="pl-6 my-6 mb-8 md:px-0">
                  <OpenGallery />
                </div>
              )}

              <div className="w-full mt-6 mb-4 article" id={post.slug}>
                {Article && (
                  <div>
                    {documentToReactComponents(
                      post.childContentfulArticulosTextoPrincipalRichTextNode
                        .json,
                      options
                    )}
                  </div>
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
                <div className="mb-3 text-3xl font-bold text-center text-green-500 md:my-0 md:text-right">
                  ${post.GameBuyPrice}
                </div>
              </div>
              {post.paginaWeb && (
                <div className="w-full my-12">
                  <a
                    className="font-serif text-base font-bold text-pink-800 "
                    href={post.paginaWeb}
                    target="_blank"
                    type="secondary"
                    rel="noopener noreferrer"
                  >
                    Más información de {post.title}
                    <GoLinkExternal className="inline-block ml-3" />
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
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
      GameBuyPrice
      GamePlayers
      GameDuration
      GameAuthor
      GameAges
      paginaWeb
      GameGallery {
        title
        fluid(maxWidth: 1600) {
          # Choose either the fragment including a small base64ed image, a traced placeholder SVG, or one without.
          ...GatsbyContentfulFluid
        }
        fixed(width: 150, height: 150) {
          ...GatsbyContentfulFixed
        }
      }
      imagenDestacada {
        fixed(width: 500, height: 500) {
          ...GatsbyContentfulFixed
        }
        fluid(maxWidth: 1800) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
