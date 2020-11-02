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
          activeClassName="text-blue-100 bg-blue-500 "
          to="/tienda-de-juegos/"
        >
          <AiOutlineSortAscending
            activeClassName="text-blue-100 "
            className="mx-auto mr-1 text-xl "
          />
          Título
        </Link>

        <Link
          activeClassName="text-blue-100 bg-blue-500 "
          to="/tienda-de-juegos/precio"
        >
          <AiOutlineDollar className="mx-auto mr-1 text-xl " /> Precio
        </Link>

        <Link
          activeClassName="text-blue-100 bg-blue-500 "
          to="/tienda-de-juegos/duracion"
        >
          <IoMdTime className="mx-auto mr-1 text-xl " /> Duración
        </Link>

        <Link
          activeClassName="text-blue-100 bg-blue-500 "
          to="/tienda-de-juegos/edades"
        >
          <FaUserFriends className="mx-auto mr-1 text-base " /> Edades
        </Link>
      </Sort>
    </>
  )
}

export default GamesSort

const Sort = styled.div`
  ${tw`relative top-0 right-0 flex flex-wrap justify-around w-full px-1 py-1 transform sm:py-3 lg:flex-no-wrap md:justify-start md:px-6 md:px-0 md:p-0 `}
  
  a {
    ${tw`px-2 py-1 my-2 ml-0 text-base md:text-lg md:py-1 md:px-3 md:mr-1 border border-blue-500`}
    ${tw`flex items-center px-2 font-sans rounded-full hover:text-blue-100 hover:bg-blue-500`}
  }
`
