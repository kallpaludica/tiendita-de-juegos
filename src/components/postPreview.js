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
            className="w-32 object-fit"
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
  ${tw`flex text-left text-teal-800 bg-white`}

  body.dark & {
    ${tw`text-teal-100 bg-white`}
  }

  a {
    ${tw`font-sans text-xl font-bold text-gray-700`}
  }

  p {
    ${tw`font-sans text-base`}
  }
`

const Image = styled.div`
  ${tw`relative w-32 overflow-hidden bg-gray-200`}
  a {
    ${tw`flex items-center justify-center w-32 h-32`}
  }
`

const Content = styled.div`
  ${tw`flex items-center justify-center w-full p-2 px-3`}
  flex: 1
`
