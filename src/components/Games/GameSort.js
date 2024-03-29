import React from "react"
import { navigate} from "gatsby"
import { AwesomeButton } from "react-awesome-button"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"
import { AiOutlineSortAscending } from "react-icons/ai"

const GamesSort = () => {
  return (
    <>
      <div className="relative top-0 right-0 grid flex-wrap items-center justify-center w-full grid-cols-2 gap-2 px-2 py-1 mb-0 text-center md:justify-end md:space-x-1 md:flex sm:py-3">
        <AwesomeButton
          onPress={() => {
            navigate(`/tienda-de-juegos`)
          }}
          type="secondary"
          size="small"
        >
          <AiOutlineSortAscending className="mx-auto mr-1 text-xl " />
          Título
        </AwesomeButton>
        <AwesomeButton
          onPress={() => {
            navigate(`/tienda-de-juegos/duracion`)
          }}
          type="secondary"
          size="small"
        >
          <IoMdTime className="mx-auto mr-1 text-xl " />
          Duración
        </AwesomeButton>
        <AwesomeButton
          onPress={() => {
            navigate(`/tienda-de-juegos/edades`)
          }}
          type="secondary"
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
