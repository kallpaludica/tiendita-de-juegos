import React from "react"
import { Link } from "gatsby"

import tw from "twin.macro"
import styled from "@emotion/styled"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { AiOutlineSortAscending, AiOutlineDollar } from "react-icons/ai"
const GamesSort = () => {
  return (
    <>
      <Sort>
        <Link
          activeClassName="text-teal-100 bg-teal-500 "
          to="/tienda-de-juegos"
        >
          <AiOutlineSortAscending
            activeClassName="text-teal-100 "
            tw="mx-auto mr-1 text-xl "
          />
          Título
        </Link>

        <Link
          activeClassName="text-teal-100 bg-teal-500 "
          to="/tienda-de-juegos/precio"
        >
          <AiOutlineDollar tw="mx-auto mr-1 text-xl " /> Precio
        </Link>

        <Link
          activeClassName="text-teal-100 bg-teal-500 "
          to="/tienda-de-juegos/duracion"
        >
          <IoMdTime tw="mx-auto mr-1 text-xl " /> Duración
        </Link>

        <Link
          activeClassName="text-teal-100 bg-teal-500 "
          to="/tienda-de-juegos/edades"
        >
          <FaUserFriends tw="mx-auto mr-1 text-base " /> Edades
        </Link>
      </Sort>
    </>
  )
}

export default GamesSort

const Sort = styled.div`
  ${tw`relative top-0 right-0 flex flex-wrap justify-start w-full px-1 py-1 transform sm:py-3 lg:flex-no-wrap md:justify-start md:px-6 md:px-0 md:p-0 `}

  a {
    ${tw`px-1 py-1 my-1 ml-0 mr-1 text-base border border-teal-500 md:text-base`}
    ${tw`flex items-center px-2 font-sans rounded-lg hover:text-teal-100 hover:bg-teal-500`}
  }
`
