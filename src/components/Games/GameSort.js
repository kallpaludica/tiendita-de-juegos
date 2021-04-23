import React from "react"
import { navigate} from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { AiOutlineSortAscending, AiOutlineDollar } from "react-icons/ai"

const GamesSort = () => {
  return (
    <>
      <div className="relative top-0 right-0 grid flex-wrap w-full grid-cols-2 gap-3 px-0 py-1 mb-0 text-left md:flex sm:py-3">
        <AwesomeButton
          action={() => {
            navigate(`/tienda-de-juegos`)
          }}
          type="primary"
          size="small"
        >
          <AiOutlineSortAscending className="mx-auto mr-1 text-xl " />
          Título
        </AwesomeButton>
        <AwesomeButton
          action={() => {
            navigate(`/tienda-de-juegos/precio`)
          }}
          type="primary"
          size="small"
        >
          <AiOutlineDollar className="mx-auto mr-1 text-xl " />
          Precio
        </AwesomeButton>
        <AwesomeButton
          action={() => {
            navigate(`/tienda-de-juegos/duracion`)
          }}
          type="primary"
          size="small"
        >
          <IoMdTime className="mx-auto mr-1 text-xl " />
          Duración
        </AwesomeButton>
        <AwesomeButton
          action={() => {
            navigate(`/tienda-de-juegos/edades`)
          }}
          type="primary"
          size="small"
        >
          <FaUserFriends className="mx-auto mr-1" />
          Edades
        </AwesomeButton>
        
      </div>
    </>
  )
}

export default GamesSort
