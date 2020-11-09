import React from "react"

import QueryCollections from "../../components/Queries/QueryCollection"
import QueryCategories from "../../components/Queries/QueryCategories"
import QueryPublishers from "../../components/Queries/QueryPublishers"
//import { Link } from "gatsby"

import tw from "twin.macro"
import styled from "@emotion/styled"

const GamesAside = () => {
  return (
    <Aside>
      <h2 className="text-blue-500">Colecciones</h2>
      <QueryCollections />
      <h2 className="text-blue-500">Modalidades</h2>
      <QueryCategories />
      <h2 className="text-blue-500">Editoriales</h2>
      <QueryPublishers />
    </Aside>
  )
}

export default GamesAside

const Aside = styled.div`
  ${tw`top-0 flex flex-col w-full mt-20 font-sans text-left border-l border-gray-300 `}

  a {
    ${tw`py-1 pl-6 text-lg text-left transition-all duration-200 border-b border-gray-300`}
  }

  h2 {
    ${tw`pt-0 pl-6 my-3 font-mono text-xl text-left `}
  }
`
