import React from "react"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
//import Fade from "react-reveal/Fade"
import { Player, BigPlayButton } from "video-react"
import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { FiExternalLink } from "react-icons/fi"

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
            <div className="max-w-3xl p-0 mx-auto my-6 mb-12 aspect-h-9 aspect-w-16">
              <Player src={node.data.target.file.url} loop={true}>
                <BigPlayButton position="center" />
              </Player>
            </div>
          )
        } else {
          return (
            <div>
              <div className="w-full max-w-3xl mx-auto duration-200 rounded-md shadow-sm cursor-pointer post-image hover:opacity-80">
                <GatsbyImage
                  title={node.data.target.title}
                  alt={node.data.target.title}
                  className="relative"
                  image={node.data.target.gatsbyImageData}
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
              <div className="w-40 image">
                <GatsbyImage
                  title={node.data.target.title}
                  alt={node.data.target.title}
                  className="object-fill w-full h-full my-0"
                  image={node.data.target.logo.gatsbyImageData}
                />
              </div>
              <div className="flex flex-col items-end justify-center font-serif">
                <small className="font-bold">
                  Editorial {node.data.target.title}
                </small>
                <small className="btn yellow">Ver juegos en la tienda</small>
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
              <div className="w-24 image">
                <GatsbyImage
                  title={node.data.target.title}
                  alt={node.data.target.title}
                  className="object-fill w-full h-full my-0"
                  image={node.data.target.featuredImg.gatsbyImageData}
                />
              </div>
              <div className="flex items-center justify-end">
                <div className="flex flex-col font-bold text-right">
                  <small className="font-bold">{node.data.target.title}</small>
                  <small className="btn yellow">Proyectos que nos potencian</small>
                </div>
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
