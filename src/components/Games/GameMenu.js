import React from "react"

import tw from "twin.macro"
import styled from "@emotion/styled"

const GamesAside = (props) => {
  return (
    <Aside>
      <h2 className="text-blue-500">Colecciones</h2>
      {
        props.colecciones.map(c => (
          <FilterItem key={c.node.slug} 
            onClick={() => props.setFilter({ key: 'colecciones', value: c.node.slug})}
          >
            {c.node.title}
          </FilterItem> 
        ))
      }
      <h2 className="text-orange-500">Modalidades</h2>
      {
        props.categorias.map(m => (
          <FilterItem key={m.node.slug} 
            onClick={() => props.setFilter({ key: 'categoria', value: m.node.slug})}
          >
            {m.node.title}
          </FilterItem>
        ))
      }
      <h2 className="text-indigo-500">Editoriales</h2>
      {
        props.publishers.map(e => (
          <FilterItem key={e.node.slug} 
            onClick={() => props.setFilter({ key: 'publisher', value: e.node.slug})}
          >
            {e.node.title}
          </FilterItem>
        ))
      }
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
const FilterItem = styled.div`
  ${tw`mx-auto cursor-pointer`}
  :hover {
    transform: scale(1.2);
    transition: ease-in-out all 0.2s
  }
`