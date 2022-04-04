// import styled from "@emotion/styled"
// import algoliasearch from "algoliasearch/lite"
// import { Link } from "gatsby"
// import lottie from "lottie-web"
// import React from "react"

import { Link } from "gatsby"
import React from "react"
import { Highlight } from "react-instantsearch-dom"
//import Fade from "react-reveal/Fade"

const PostPreview = ({ hit }) => {
  return (
    <div className="relative flex overflow-hidden text-left text-green-800 bg-white ">
      <div className="relative flex-none w-24 overflow-hidden bg-white shadow-2xl">
        <Link
          to={`/tienda-de-juegos/${hit.slug}/`}
          className="flex items-center justify-center w-24 h-24 font-sans text-lg font-bold text-gray-800"
        >
          <img className="w-24 object-fit" alt={hit.title} src={hit.imagenDestacada.file.url} />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-start flex-1 w-full p-2 px-6">
        <Link
          to={`/tienda-de-juegos/${hit.slug}/`}
          className="w-full font-sans text-lg font-bold text-left text-gray-800"
        >
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
        <p className="w-full font-sans text-base font-bold text-left ">
          $<Highlight hit={hit} attribute="GameBuyPrice" tagName="mark" />
        </p>
        <p className="hidden font-sans text-base">
          <Highlight hit={hit} attribute="content" tagName="mark" />
        </p>
      </div>
    </div>
  )
}

export default PostPreview
