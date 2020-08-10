import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "../components/VideoReact.css"
import { IoMdTime } from "react-icons/io"

//import Img from "gatsby-image"
import SEO from "../components/seo"
//import Article from "../components/Article"
import "../components/AwsBtn.css"
import { Helmet } from "react-helmet"
import HeroWave from "../components/HeroWave"

import { GoLinkExternal } from "react-icons/go"
import {
  AwesomeButton,
  AwesomeButtonProgress,
  AwesomeButtonSocial,
} from "react-awesome-button"
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
        <body className="games" />
      </Helmet>

      <HeroWave
        heading={post.title}
        anchor="contenido"
        pattern="bg-green-600 text-green-500"
        svg="M0,32L120,74.7C240,117,480,203,720,202.7C960,203,1200,117,1320,74.7L1440,32L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
      />
      <div className="max-w-4xl p-2 mx-auto bg-white md:p-12" id="contenido">
        <div className="my-1">
          <h2 className="text-2xl">{post.GameAuthor}</h2>
          <div>${post.GameBuyPrice}</div>
          <div>{post.GamePlayers} jugadores</div>
          <div className="flex flex-col">
            <IoMdTime />
            Duración del juego {post.GameDuration}
          </div>
          <div>Edades: {post.GameAges}</div>
          <div className="w-full mt-2 article" id={post.slug}>
            {Article && (
              <div>
                {documentToReactComponents(
                  post.childContentfulArticulosTextoPrincipalRichTextNode.json,
                  options
                )}
              </div>
            )}
          </div>
          <div className="w-full my-12">
            <AwesomeButtonSocial
              type="whatsapp"
              href={`https://api.whatsapp.com/send?phone=5493876034627&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quiero%2C%20consultar%20por%20el%20juego%20${post.title}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Hacenos tu consulta por este juego
            </AwesomeButtonSocial>
          </div>

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
        <div className="py-12 text-4xl">
          <nav style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              {next && (
                <Link to={`/juegos/${kebabCase(next.slug)}/`} rel="next">
                  ←
                </Link>
              )}
            </div>
            <div style={{ justifySelf: "flex-end" }}>
              {prev && (
                <Link to={`/juegos/${kebabCase(prev.slug)}/`} rel="prev">
                  →
                </Link>
              )}
            </div>
          </nav>
        </div>
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
        fixed(width: 1200, height: 900) {
          ...GatsbyContentfulFixed
        }
        fluid(maxWidth: 450) {
          ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
`
