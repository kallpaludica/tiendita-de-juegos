import React from "react"
import { navigate } from "gatsby"
import { AwesomeButton } from "react-awesome-button"
//import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { AiOutlineSortAscending, AiOutlineDollar } from "react-icons/ai"
const GamesSort = () => {
  return (
    <>
      <Sort>
        <AwesomeButton
          action={() => {
            navigate(`/tienda-de-juegos`)
          }}
          type="primary"
          size="small"
        >
          <AiOutlineSortAscending
            activeClassName="text-teal-100 "
            tw="mx-auto mr-1 text-xl "
          />
          Título
        </AwesomeButton>
        <AwesomeButton
          action={() => {
            navigate(`/tienda-de-juegos/precio`)
          }}
          type="primary"
          size="small"
        >
          <AiOutlineDollar
            activeClassName="text-teal-100 "
            tw="mx-auto mr-1 text-xl "
          />
          Precio
        </AwesomeButton>
        <AwesomeButton
          action={() => {
            navigate(`/tienda-de-juegos/duracion`)
          }}
          type="primary"
          size="small"
        >
          <IoMdTime
            activeClassName="text-teal-100 "
            tw="mx-auto mr-1 text-xl "
          />
          Duración
        </AwesomeButton>
        <AwesomeButton
          action={() => {
            navigate(`/tienda-de-juegos/edades`)
          }}
          type="primary"
          size="small"
        >
          <FaUserFriends activeClassName="text-teal-100 " tw="mx-auto mr-1" />
          Edades
        </AwesomeButton>
      </Sort>
    </>
  )
}

export default GamesSort

const Sort = styled.div`
  ${tw`relative top-0 right-0 grid flex-wrap w-full grid-cols-2 gap-3 px-0 py-1 mb-3 text-left md:flex sm:py-3 `}

  button {
    ${tw`text-xs border border-teal-500 md:text-sm`}
  }

  a {
    ${tw`px-1 py-1 my-1 ml-0 mr-1 text-base border border-teal-500 md:text-base`}
    ${tw`flex items-center px-2 font-sans rounded-lg hover:text-teal-100 hover:bg-teal-500`}
  }
`
