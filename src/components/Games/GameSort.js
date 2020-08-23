import React from "react"
import { Link } from "gatsby"

import tw from "twin.macro"
import styled from "@emotion/styled"

const GamesSort = () => {
  return (
    <Sort>
      <b className="hidden text-gray-500 md:inline-block">Ordenar:</b>
      <Link activeClassName="text-orange-500 font-bold" to="/juegos/todos">
        A-Z
      </Link>
      <span>/</span>
      <Link activeClassName="text-teal-500 font-bold" to="/juegos/precio">
        Precio
      </Link>
      <span>/</span>
      <Link activeClassName="text-orange-500 font-bold" to="/juegos/duracion">
        Duración
      </Link>
      <span>/</span>
      <Link activeClassName="text-indigo-500 font-bold" to="/juegos/edades">
        Edades
      </Link>
    </Sort>
  )
}

export default GamesSort

const Sort = styled.div`
  ${tw`relative top-0 right-0 flex justify-center py-3 transform md:translate-y-5 md:justify-end md:p-0 md:absolute`}

  b {
    ${tw`mr-2`}
  }

  a {
    ${tw`mx-2 `}
  }
`
