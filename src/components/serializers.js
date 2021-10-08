import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
//import Fade from "react-reveal/Fade"
import { Player, BigPlayButton } from "video-react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FiExternalLink } from "react-icons/fi"
import "./serializers.css"

const Bold = ({ children }) => (
  <span className="font-serif font-bold">{children}</span>
)
const Text = ({ children }) => <p className="font-serif text">{children}</p>
const website_url = "https://www.kallpaludica.com.ar"

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
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.file.contentType === "video/mp4") {
          return (
            <div className="max-w-6xl p-0 mx-auto my-6 mb-12 aspect-h-9 aspect-w-16">
              <Player
                src={node.data.target.file.url}
                loop={true}
              >
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <div className="duration-200 cursor-pointer post-image hover:opacity-80">
                <img
                  className="relative w-full max-w-2xl mx-auto overflow-hidden rounded-md shadow-sm"
                  alt={node.data.target.title}
                  src={node.data.target.file.url}
                />
              </div>
            </div>
          )
        }
      }
    },

    [BLOCKS.EMBEDDED_ENTRY]: (node) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.__typename === "ContentfulArticulos") {
          return (
            <Link
              to={`/tienda-de-juegos/${node.data.target.slug}`}
              className="article-card"
            >
              <div className="relative content">
                <small>Juego</small>
                <h3>{node.data.target.title}</h3>
                <div className="font-sans text-xl font-bold text-green-600">
                  ${node.data.target.GameBuyPrice}
                </div>
              </div>
              <div className="image">
                <GatsbyImage
                  title={node.data.target.title}
                  alt={node.data.target.title}
                  className="object-fill w-full h-full my-0"
                  image={node.data.target.imagenDestacada.gatsbyImageData}
                />
              </div>
            </Link>
          )
        }
        if (node.data.target.__typename === "ContentfulEditorial") {
          return (
            <Link
              to={`/tienda-de-juegos/editoriales/${node.data.target.slug}`}
              className="article-card"
            >
              <div className="content">
                <small>Editorial</small>
                <h3> {node.data.target.title}</h3>
              </div>
              <div className="image">
                <GatsbyImage
                  title={node.data.target.title}
                  alt={node.data.target.title}
                  className="object-fill w-full h-full my-0"
                  image={node.data.target.logo.gatsbyImageData}
                />
              </div>
            </Link>
          )
        }
        if (node.data.target.__typename === "ContentfulColecciones") {
          return (
            <Link
              to={`/tienda-de-juegos/colecciones/${node.data.target.slug}`}
              className="article-card"
            >
              <div className="content">
                <small>Colección</small>
                <h3>{node.data.target.title}</h3>
                <p>
                  {node.data.target.CollectionDescription.CollectionDescription}
                </p>
              </div>
              <div className="image">
                <GatsbyImage
                  title={node.data.target.title}
                  alt={node.data.target.title}
                  className="object-fill w-full h-full my-0"
                  image={node.data.target.icono.gatsbyImageData}
                />
              </div>
            </Link>
          )
        }
        if (node.data.target.__typename === "ContentfulComunidad") {
          return (
            <Link
              to={`/comunidad/${node.data.target.slug}`}
              className="article-card"
            >
              <div className="content">
                <small>Comunidad</small>
                <h3>{node.data.target.title}</h3>
              </div>
              <div className="image">
                <GatsbyImage
                  title={node.data.target.title}
                  alt={node.data.target.title}
                  className="object-fill w-full h-full my-0"
                  image={node.data.target.featuredImg.gatsbyImageData}
                />
              </div>
            </Link>
          )
        } else {
          return (
            <Link
              to={`/recursos/${node.data.target.slug}`}
              className="article-card"
            >
              <div className="content">
                <small>Recurso</small>
                <h3>{node.data.target.title}</h3>
              </div>
              <div className="image">
                <GatsbyImage
                  title={node.data.target.title}
                  alt={node.data.target.title}
                  className="object-fill w-full h-full my-0"
                  image={node.data.target.featuredImg.gatsbyImageData}
                />
              </div>
            </Link>
          )
        }
      }
    },

    [INLINES.EMBEDDED_ENTRY]: (node) => {
      if (!node.data || !node.data.target) {
        return <span className="hidden">Embedded asset is broken</span>
      } else {
        if (node.data.target.__typename === "ContentfulArticulos") {
          return (
            <Link to={`/tienda-de-juegos/${node.data.target.slug}`}>
              {node.data.target.title}
            </Link>
          )
        }
        if (node.data.target.__typename === "ContentfulEditorial") {
          return (
            <Link to={`/tienda-de-juegos/editoriales/${node.data.target.slug}`}>
              {node.data.target.title}
            </Link>
          )
        }
        if (node.data.target.__typename === "ContentfulColecciones") {
          return (
            <Link to={`/tienda-de-juegos/colecciones/${node.data.target.slug}`}>
              {node.data.target.title}
            </Link>
          )
        }
        if (node.data.target.__typename === "ContentfulComunidad") {
          return (
            <Link to={`/comunidad/${node.data.target.slug}`}>
              {node.data.target.title}
            </Link>
          )
        } else {
          return (
            <Link to={`/recursos/${node.data.target.slug}`}>
              {node.data.target.title}
            </Link>
          )
        }
      }
    },

    [INLINES.HYPERLINK]: (node) => {
      return (
        <a
          href={node.data.uri}
          className="inline-flex items-baseline px-1 font-bold duration-700 rounded hover:text-green-600 hover:px-3"
          target={`${
            node.data.uri.startsWith(website_url) ? "_self" : "_blank"
          }`}
          rel={`${
            node.data.uri.startsWith(website_url) ? "" : "noopener noreferrer"
          }`}
        >
          {node.content[0].value}
          <FiExternalLink className="ml-2 text-sm" />
        </a>
      )
    },
    [BLOCKS.PARAGRAPH]: (_, children) => <Text>{children}</Text>,
  },
}

const FormatText = ({ FormatText }) => (
  <div>{renderRichText(FormatText, options)}</div>
)

export default FormatText
