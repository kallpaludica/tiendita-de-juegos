import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import "../components/VideoReact.css"
//import Img from "gatsby-image"
import SEO from "../components/seo"
//import Article from "../components/Article"

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
      <SEO title="Juego" />
      <div className="max-w-4xl p-2 mx-auto bg-white md:p-12">
        <div className="my-12">
          <h1 className="py-3 mb-3 font-mono text-3xl font-bold text-left text-green-600 border-b-2 border-green-600">
            {post.title}
          </h1>
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
          {post.paginaWeb && (
            <a
              href={post.paginaWeb}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-900 btn"
            >
              Ver pagina web del juego
            </a>
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
