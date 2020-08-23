import React from "react"

import QueryCollections from "../../components/Queries/QueryCollection"
import QueryCategories from "../../components/Queries/QueryCategories"
//import QueryPublishers from "../../components/Queries/QueryPublishers"
import { Link } from "gatsby"

import tw from "twin.macro"
import styled from "@emotion/styled"

const GamesAside = () => {
  return (
    <Aside>
      <h3 className="pt-4">Filtros</h3>
      <h2>Modalidades</h2>
      <QueryCategories />
      <h2>Colecciones</h2>
      <QueryCollections />
      <h2>Editoriales</h2>
      <Link to="/editoriales/">Ver todas</Link>
      {/*<QueryPublishers />*/}
    </Aside>
  )
}

export default GamesAside

const Aside = styled.div`
  ${tw`sticky top-0 flex flex-col w-full pr-2 font-serif text-left border-r border-gray-300`}

  a {
    ${tw`py-1 border-b border-gray-300 hover:border-green-300`}
  }

  h3 {
    ${tw`my-3 font-serif text-base font-bold uppercase opacity-50`}
  }

  h2 {
    ${tw`my-3 font-serif text-xl font-bold`}
  }
`
