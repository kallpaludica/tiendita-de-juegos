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
          activeClassName="text-orange-100  bg-orange-500 "
          className="flex items-center px-2 font-sans text-xl rounded-full hover:text-orange-100 hover:bg-orange-500"
          to="/juegos/todos"
        >
          <AiOutlineSortAscending
            activeClassName="text-teal-100 "
            className="mx-auto mr-1 text-xl "
          />
          Título
        </Link>

        <Link
          activeClassName="text-teal-100  bg-teal-500 "
          className="flex items-center px-2 font-sans text-xl rounded-full hover:text-teal-100 hover:bg-teal-500"
          to="/juegos/precio"
        >
          <AiOutlineDollar className="mx-auto mr-1 text-xl " /> Precio
        </Link>

        <Link
          activeClassName="text-green-100  bg-green-500 "
          className="flex items-center px-2 font-sans text-xl rounded-full hover:text-green-100 hover:bg-green-500"
          to="/juegos/duracion"
        >
          <IoMdTime className="mx-auto mr-1 text-xl " /> Duración
        </Link>

        <Link
          activeClassName="text-indigo-100   bg-indigo-500 "
          className="flex items-center px-2 font-sans text-xl rounded-full hover:text-indigo-100 hover:bg-indigo-500"
          to="/juegos/edades"
        >
          <FaUserFriends className="mx-auto mr-1 text-base " /> Edades
        </Link>
      </Sort>
    </>
  )
}

export default GamesSort

const Sort = styled.div`
  ${tw`relative top-0 right-0 flex flex-wrap justify-between w-full px-1 py-1 transform sm:py-3 md:flex-no-wrap md:justify-start md:px-6 md:px-0 md:p-0 `}

  a {
    ${tw`px-2 py-1 my-2 ml-0 text-sm md:text-base md:py-1 md:px-3 md:mr-1`}
  }
`
