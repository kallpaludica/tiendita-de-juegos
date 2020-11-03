import React from "react"

import tw from "twin.macro"
import styled from "@emotion/styled"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { AiOutlineSortAscending, AiOutlineDollar } from "react-icons/ai"
const GamesSort = (props) => {
  return (
    <Sort>
      <SortOption onClick={props.sortByTitle}>
        <AiOutlineSortAscending className="mx-auto mr-1 text-xl " />
        Título
      </SortOption>

      <SortOption onClick={props.sortByPrice}>
        <AiOutlineDollar className="mx-auto mr-1 text-xl " /> 
        Precio
      </SortOption>

      <SortOption onClick={props.sortByLength}>
        <IoMdTime className="mx-auto mr-1 text-xl " /> 
        Duración
      </SortOption>

      <SortOption onClick={props.sortByAge}>
        <FaUserFriends className="mx-auto mr-1 text-base " /> 
        Edades
      </SortOption>
    </Sort>
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
const SortOption = styled.div`
  ${tw`text-blue-500 ml-2 mr-2 pl-5 pr-5 pt-2 pb-2 flex items-center font-sans`}
  :hover {
    ${tw`bg-blue-500 text-blue-100 cursor-pointer font-bold`}
  }
`