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
          className="flex items-center px-2 font-bold rounded-full hover:text-orange-100 hover:bg-orange-500"
          to="/juegos/todos"
        >
          <AiOutlineSortAscending
            activeClassName="text-teal-100 "
            className="w-6 mx-auto mr-1 text-xl "
          />
          Título
        </Link>

        <Link
          activeClassName="text-teal-100  bg-teal-500 "
          className="flex items-center px-2 font-bold rounded-full hover:text-teal-100 hover:bg-teal-500"
          to="/juegos/precio"
        >
          <AiOutlineDollar className="w-6 mx-auto mr-1 text-xl " /> Precio
        </Link>

        <Link
          activeClassName="text-green-100  bg-green-500 "
          className="flex items-center px-2 font-bold rounded-full hover:text-green-100 hover:bg-green-500"
          to="/juegos/duracion"
        >
          <IoMdTime className="w-6 mx-auto mr-1 text-xl " /> Duración
        </Link>

        <Link
          activeClassName="text-indigo-100  bg-indigo-500 "
          className="flex items-center px-2 font-bold rounded-full hover:text-indigo-100 hover:bg-indigo-500"
          to="/juegos/edades"
        >
          <FaUserFriends className="w-6 mx-auto mr-1 text-base " /> Edades
        </Link>
      </Sort>
    </>
  )
}

export default GamesSort

const Sort = styled.div`
  ${tw`relative top-0 right-0 flex justify-start w-full px-6 py-3 transform md:px-0 md:p-0`}

  a {
    ${tw`px-3 ml-1`}
  }
`
