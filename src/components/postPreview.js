// import styled from "@emotion/styled"
// import algoliasearch from "algoliasearch/lite"
// import { Link } from "gatsby"
// import lottie from "lottie-web"
// import React from "react"

import styled from "@emotion/styled"
import { Link } from "gatsby"
import React from "react"
import { Highlight } from "react-instantsearch-dom"
//import Fade from "react-reveal/Fade"
import tw from "twin.macro"

const PostPreview = ({ hit }) => {
  return (
    <SearchItem>
      <Image>
        <Link to={hit.url}>
          <img
            className="w-24 object-fit"
            alt={hit.title}
            src={hit.image}
          />
        </Link>
      </Image>
      <Content>
        <Link to={hit.url}>
          <Highlight hit={hit} attribute="title" tagName="mark" />
        </Link>
        <p className="hidden">
          <Highlight hit={hit} attribute="description" tagName="mark" />
        </p>
        <p className="hidden">
          <Highlight hit={hit} attribute="content" tagName="mark" />
        </p>
      </Content>
    </SearchItem>
  )
}

export default PostPreview

const SearchItem = styled.div`
  ${tw`relative flex overflow-hidden text-left text-teal-800 bg-white `}

  a {
    ${tw`font-sans text-lg font-bold text-gray-800`}
  }

  p {
    ${tw`font-sans text-base`}
  }
`

const Image = styled.div`
  ${tw`relative w-24 overflow-hidden bg-white shadow-2xl`}
  a {
    ${tw`flex items-center justify-center w-24 h-24`}
  }
`

const Content = styled.div`
  ${tw`flex items-center justify-start w-full p-2 px-6`}
  flex: 1
`
