import React, { useEffect } from "react"
import QueryCollections from "../../components/Queries/QueryCollection"
import QueryPublishers from "../../components/Queries/QueryPublishers"
// import { FcSearch } from "react-icons/fc"
// import { Link } from "gatsby"
import lottie from "lottie-web"
import { Link } from "gatsby"
import Ogam from "../../animations/ogam.json"
import "./gamemenu.css"

const GamesAside = () => {
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#ogam"),
      animationData: Ogam,
    })
  }, [])

  return (
    <div className="top-0 flex flex-col w-full mt-20 font-serif text-left game-aside">
      <div className="absolute right-0 z-0 w-32 mx-auto -top-12">
        <div id="ogam" style={{ width: 140, height: 130 }} />
      </div>
      {/* <Link
        activeClassName="opacity-100  border-white active"
        className="flex items-center justify-between w-full pr-3 m-0 font-mono text-left opacity-100 searcher-go md:text-base hover:opacity-80"
        to="/buscador"
      >
        <span className="text-base">Ir al buscador</span>
        <FcSearch className="ml-1 text-xl" />
      </Link> */}
      <h2 className="text-blue-500">
        <Link to="/tienda-de-juegos/colecciones/" className="">
          Colecciones
        </Link>
      </h2>
      <QueryCollections className="relative z-10" />
      <h2 className="text-green-500">
        <Link to="/tienda-de-juegos/editoriales/" className="">
          Editoriales
        </Link>
      </h2>
      <QueryPublishers />
    </div>
  )
}

export default GamesAside
