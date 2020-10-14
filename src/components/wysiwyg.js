import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, MARKS, INLINES } from "@contentful/rich-text-types"
import Fade from "react-reveal/Fade"
import { Player, BigPlayButton } from "video-react"

const Bold = ({ children }) => (
  <span className="font-sans font-bold">{children}</span>
)
const Text = ({ children }) => (
  <Fade>
    <p className="w-full mt-2 mb-4 font-sans text-2xl text-gray-900">
      {children}
    </p>
  </Fade>
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

export default ({ FormatText }) => (
  <Format>{documentToReactComponents(FormatText.json, options)}</Format>
)

const Format = styled.div`
  ${tw`relative `}
`
