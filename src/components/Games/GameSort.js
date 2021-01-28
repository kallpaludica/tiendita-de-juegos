import React from "react"
import {  navigate } from "gatsby"
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
          size="medium"
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
          size="medium"
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
          size="medium"
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
          size="medium"
        >
           <FaUserFriends
            activeClassName="text-teal-100 "
            tw="mx-auto mr-1 text-xl "
          />
          Edades
        </AwesomeButton>
      </Sort>
    </>
  )
}

export default GamesSort

const Sort = styled.div`
  ${tw`relative top-0 right-0 w-full px-1 py-1 text-left sm:py-3 md:px-6 md:px-0 md:p-0 `}

  button {
    ${tw`mb-3 mr-3 text-base border border-teal-500 md:text-base`}
  }

  a {
    ${tw`px-1 py-1 my-1 ml-0 mr-1 text-base border border-teal-500 md:text-base`}
    ${tw`flex items-center px-2 font-sans rounded-lg hover:text-teal-100 hover:bg-teal-500`}
  }
`
