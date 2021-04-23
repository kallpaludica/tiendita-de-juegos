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
          to={hit.url}
          className="flex items-center justify-center w-24 h-24 font-sans text-lg font-bold text-gray-800"
        >
          <img className="w-24 object-fit" alt={hit.title} src={hit.image} />
        </Link>
      </div>
      <div className="flex items-center justify-start flex-1 w-full p-2 px-6">
        <Link
          to={hit.url}
          className="font-sans text-lg font-bold text-gray-800"
        >
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
        <p className="hidden font-sans text-base">
          <Highlight hit={hit} attribute="description" tagName="mark" />
        </p>
        <p className="hidden font-sans text-base">
          <Highlight hit={hit} attribute="content" tagName="mark" />
        </p>
      </div>
    </div>
  )
}

export default PostPreview
