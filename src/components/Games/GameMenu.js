import React, { useEffect } from "react"
import QueryCollections from "../../components/Queries/QueryCollection"
import QueryPublishers from "../../components/Queries/QueryPublishers"
import { FcSearch } from "react-icons/fc"
import { Link } from "gatsby"
import lottie from "lottie-web"
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
    <div className="relative top-0 flex flex-col w-full mt-20 font-sans text-left border-l border-r border-gray-300 game-aside ">
      <div className="absolute right-0 z-0 flex w-full max-w-lg mx-auto -translate-y-4 -top-40">
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
      <h2 className="text-blue-500">Colecciones</h2>
      <QueryCollections className="relative z-10" />
      <h2 className="text-green-500">Editoriales</h2>
      <QueryPublishers />
    </div>
  )
}

export default GamesAside
