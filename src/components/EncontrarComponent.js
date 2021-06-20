import { Link } from "gatsby"
import React from "react"
import { Highlight } from "react-instantsearch-dom"
import FormatText from "../components/serializers"
import { FcClock, FcConferenceCall, FcCollaboration } from "react-icons/fc"
import * as containerStyles from "./EncontrarComponent.module.css"

const EncontrarPostPreview = ({ hit }) => {
  return (
    <div className={containerStyles.gamecard}>
      <div className={containerStyles.imageContainer}>
        <Link
          to={`/tienda-de-juegos/${hit.slug}/`}
          className={containerStyles.imageLink}
          tabIndex="-1"
        >
          <img
            className={containerStyles.image}
            alt={hit.title}
            className="object-cover h-full"
            src={hit.imagenDestacada.file.url}
          />
        </Link>
      </div>
      <div className={containerStyles.content}>
        <Highlight hit={hit} attribute="collection.title" tagName="mark" />
        <Link
          to={`/tienda-de-juegos/${hit.slug}/`}
          className="inline-flex items-baseline justify-between font-serif text-2xl font-bold text-gray-800 duration-700 border-2 border-white border-dashed outline-none hover:text-indigo-700 hover:underline focus:border-green-500 focus:px-2"
        >
          <Highlight hit={hit} attribute="title" tagName="mark" />
          <small className="hidden ml-3 text-base text-gray-700 ">
            <Highlight hit={hit} attribute="publisher.title" tagName="mark" />
          </small>
        </Link>
        <p className="flex items-center w-full mb-2 font-serif text-2xl font-bold text-green-600 ">
          {hit.GameBuyPrice && (
            <>
              $<Highlight hit={hit} attribute="GameBuyPrice" tagName="mark" />
            </>
          )}
          {hit.stock ? (
            <small className="inline-block ml-3 text-xl text-blue-500 opacity-80">
              Por encargo
            </small>
          ) : (
            <small className="inline-block ml-3 text-xl text-green-500 opacity-90">
              en Stock
            </small>
          )}
        </p>
        <p className="hidden w-full mb-3 font-serif text-sm text-gray-900 md:text-base description md:line-clamp-3">
          <FormatText FormatText={hit.textoPrincipal} />
          <div className="hidden">
            <Highlight hit={hit} attribute="textoPrincipal" tagName="mark" />
          </div>
        </p>

        <div className="absolute bottom-0 left-0 right-0 flex justify-around w-full p-3 space-x-2 bg-white border-t border-gray-200 bottom-1 md:pt-5 meta md:justify-start md:relative md:space-x-6 md:flex-row bg-opacity-95">
          {hit.GameAges && (
            <p className="flex items-center font-serif text-sm font-bold text-gray-700 md:text-base">
              <FcConferenceCall className="block mr-1 text-xl " />
              <span className="pr-1 ">Edad</span>{" "}
              <div>
                <Highlight hit={hit} attribute="GameAges" tagName="mark" />+
              </div>
            </p>
          )}
          {hit.GameDuration && (
            <p className="flex items-center font-serif text-sm font-bold text-gray-700 md:text-base">
              <FcClock className="block mr-1 text-xl " />
              <Highlight hit={hit} attribute="GameDuration" tagName="mark" />

              <span className="pl-1 ">min. </span>
            </p>
          )}
          {hit.GamePlayers && (
            <p className="flex items-center font-serif text-sm font-bold text-gray-700 md:text-base">
              <FcCollaboration className="block mr-1 text-xl " />
              <Highlight hit={hit} attribute="GamePlayers" tagName="mark" />
              <span className="pl-1 ">Jugadores </span>
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default EncontrarPostPreview
