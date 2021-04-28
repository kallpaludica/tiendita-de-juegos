import { Link } from "gatsby"
import React from "react"
import { Highlight } from "react-instantsearch-dom"
import FormatText from "../components/serializers"
import { FcClock, FcConferenceCall, FcCollaboration } from "react-icons/fc"

const EncontrarPostPreview = ({ hit }) => {
  return (
    <div className="relative flex pb-12 overflow-hidden text-left text-green-800 bg-white md:pb-0 ">
      <div className="relative flex-none w-32 h-32 overflow-hidden bg-white shadow-2xl md:h-full md:w-56">
        <Link
          to={`/tienda-de-juegos/${hit.slug}/`}
          className="flex items-center justify-center w-full h-32 font-sans text-lg font-bold text-gray-800 md:h-56"
        >
          <img
            className="object-cover w-32 h-full md:w-56 "
            alt={hit.title}
            src={hit.imagenDestacada.file.url}
          />
        </Link>
      </div>
      <div className="flex flex-col items-center justify-start flex-1 w-full p-2 px-6 pt-3 text-left">
        <Highlight hit={hit} attribute="collection.title" tagName="mark" />
        <Link
          to={`/tienda-de-juegos/${hit.slug}/`}
          className="flex items-baseline justify-between w-full font-sans text-2xl font-bold text-gray-800 duration-700 hover:text-indigo-700 hover:underline"
        >
          <Highlight hit={hit} attribute="title" tagName="mark" />
          <small className="inline-block ml-3 text-base text-gray-700"><Highlight hit={hit} attribute="publisher.title" tagName="mark" /></small>
        </Link>
        <p className="flex items-center w-full mb-2 font-sans text-2xl font-bold text-green-600 ">
          $<Highlight hit={hit} attribute="GameBuyPrice" tagName="mark" />
          {hit.stock && <small className="inline-block ml-3 text-blue-500">Por encargo</small>}
        </p>
        <p className="w-full mb-3 font-sans text-xl text-gray-900 line-clamp-2">
          <FormatText FormatText={hit.textoPrincipal} />
          <div className="hidden">
            <Highlight
              hit={hit}
              attribute="textoPrincipal.raw"
              tagName="mark"
            />
          </div>
        </p>
       

        <div className="absolute bottom-0 left-0 right-0 flex justify-between w-full p-3 space-x-2 bg-white md:justify-start md:relative md:space-x-6 md:flex-row bg-opacity-95">
          {hit.GameAges && (
            <p className="flex items-center font-mono text-gray-700 md:text-xl">
              <FcConferenceCall className="mr-2 text-2xl" />
              <span className="pr-1">Edad</span>{" "}
              <Highlight hit={hit} attribute="GameAges" tagName="mark" />+
            </p>
          )}
          {hit.GameDuration && (
            <p className="flex items-center font-mono text-gray-700 md:text-xl">
              <FcClock className="mr-2 text-2xl" />
              <Highlight hit={hit} attribute="GameDuration" tagName="mark" />
              min.
            </p>
          )}
          {hit.GamePlayers && (
            <p className="flex items-center font-mono text-gray-700 md:text-xl">
              <FcCollaboration className="mr-2 text-2xl" />
              <Highlight
                hit={hit}
                attribute="GamePlayers"
                tagName="mark"
              />{" "}
              <span className="pl-1">Jugadores </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default EncontrarPostPreview
