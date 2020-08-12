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

import Img from "gatsby-image"
import SEO from "../components/seo"
//import Article from "../components/Article"
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
          <div className="flex flex-col pt-6 border-t-2 border-green-500 sm:flex-row">
            {post.imagenDestacada ? (
              <div className="w-2/3 mx-auto text-center ">
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

            <div className="flex flex-col w-full pt-3 pl-12">
              <h1 className="w-full font-serif text-5xl font-black text-left text-green-600">
                {post.title}
              </h1>
              <h3 className="w-full mb-3 font-serif text-lg italic font-bold text-left text-gray-700">
                Juego creado por {post.GameAuthor}
              </h3>

              <div className="flex justify-start w-full my-2 text-gray-700">
                <div className="flex flex-col items-center justify-start pr-6 my-2 font-bold text-center sm:flex-row">
                  <GiTabletopPlayers className="mr-3 text-3xl " />
                  {post.GamePlayers} jugadores
                </div>
                <div className="flex flex-col items-center justify-start pr-6 my-2 font-bold text-center sm:flex-row">
                  <IoMdTime className="mr-3 text-2xl " />
                  {post.GameDuration} min.
                </div>

                {post.GameAges && (
                  <div className="flex flex-col items-center justify-start pr-6 my-2 font-bold text-center sm:flex-row">
                    <FaUserFriends className="mr-3 text-2xl " />
                    Edad {post.GameAges}+
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

              <div className="w-full mt-6 mb-12 article" id={post.slug}>
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
            </div>
          </div>
        </div>
      </div>

      <div
        className="max-w-4xl p-2 mx-auto bg-white md:p-12 md:pt-0"
        id="contenido"
      >
        <div className="my-1 ">
          {post.paginaWeb && (
            <div className="w-full my-12">
              <AwesomeButton
                href={post.paginaWeb}
                target="_blank"
                type="secondary"
                rel="noopener noreferrer"
              >
                Página oficial del juego
                <GoLinkExternal className="inline-block mt-1 ml-3" />
              </AwesomeButton>
            </div>
          )}
        </div>
      </div>
      <div className="max-w-6xl py-12 mx-auto text-2xl">
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
