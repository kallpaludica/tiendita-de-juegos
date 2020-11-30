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
        <Content>
          <Link to={hit.url}>
            <Highlight hit={hit} attribute="title" tagName="mark" />
          </Link>
          <p>
            <Highlight hit={hit} attribute="description" tagName="mark" />
          </p>
        </Content>
        <Image>
          <img
            className="object-cover w-32 h-32"
            alt={hit.title}
            src={hit.image}
          />
        </Image>
      </SearchItem>
  )
}

export default PostPreview

const SearchItem = styled.div`
  ${tw`flex text-teal-800 bg-white`}



  body.dark & {
    ${tw`text-teal-100 bg-white`}
  }

  a {
    ${tw`font-mono text-xl font-bold text-teal-500`}
  }

  p {
    ${tw`font-sans text-base`}
  }
`

const Image = styled.div`
  ${tw`w-32 `}

  ${tw`opacity-75`}
  body.dark & {
  }
`

const Content = styled.div`
  ${tw`w-full p-2 px-3`}
  flex: 1
`
