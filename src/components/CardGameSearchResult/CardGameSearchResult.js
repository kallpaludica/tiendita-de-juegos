import * as containerStyles from "@components/CardGameSearchResult/CardGameSearchResult.module.css"
import FormatText from "@components/Serializers/Serializers"
import { Link } from "gatsby"
import React from "react"
import { AwesomeButtonSocial } from "react-awesome-button"
import { FcClock, FcCollaboration, FcConferenceCall } from "react-icons/fc"
import { Highlight } from "react-instantsearch-dom"
import AboutImage from "@images/kallpa-ludica.png"

const EncontrarPostPreview = ({ hit }) => {
  return (
    <div className={containerStyles.gamecard}>
      <div className={containerStyles.imageContainer}>
        <Link
          to={`/tienda-de-juegos/${hit.slug}/`}
          className={containerStyles.imageLink}
          tabIndex="-1"
        >
          {hit.imagenDestacada ? (
            <img
              className={containerStyles.image}
              alt={hit.title}
              src={`https:${hit.imagenDestacada.file.url}?w=220&h=220&fm=png&q=80`}
            />
          ) : (
            <img
              className="w-full h-full mx-auto my-5 rounded-lg opacity-10 "
              alt="Kallpa Lúdica"
              src={AboutImage}
            />
          )}
        </Link>
      </div>
      <div className={containerStyles.content}>
        <Highlight hit={hit} attribute="collection.title" tagName="mark" />

        <Link
          to={`/tienda-de-juegos/${hit.slug}/`}
          className="inline-flex flex-col items-baseline justify-between font-serif font-bold text-gray-800 duration-700 border-2 border-white border-dashed outline-none md:text-2xl hover:text-indigo-700 hover:underline focus:border-green-500 focus:px-2"
        >
          <div className="">
            <Highlight hit={hit} attribute="title" tagName="mark" />
            {hit.GameInStock && (
              <div className="md:relative absolute left-0 bottom-0 bg-emerald-100 inline-block ring-emerald-300 ml-3 font-serif text-sm font-bold text-emerald-900 rounded px-1 py-0.5 ">
                En Stock
              </div>
            )}
          </div>
          <small className="mt-1 text-sm text-gray-800 underline underline-offset-2">
            <Highlight hit={hit} attribute="publisher.title" tagName="mark" />
          </small>
        </Link>

        <div className="z-10 md:absolute bottom-3 right-2 group">
          <AwesomeButtonSocial
            type="whatsapp"
            href={`https://api.whatsapp.com/send?phone=5493874811808&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quería%2C%20consultar%20por%20el%20juego%20${hit.title}`}
            target="_blank"
            size="small"
            rel="noopener noreferrer"
          >
            <span className="hidden ml-2 md:inline-block">Consultar precio</span>
          </AwesomeButtonSocial>
        </div>
        <div className="hidden w-full my-3 font-serif text-sm text-gray-900 md:text-base description md:line-clamp-3">
          <FormatText FormatText={hit.textoPrincipal} />
        </div>
        <div className="hidden">
          <Highlight hit={hit} attribute="textoPrincipal" tagName="mark" />
        </div>
        <div className="absolute left-0 right-0 flex justify-around w-full p-3 px-4 space-x-2 bg-white border-t border-gray-200 md:justify-start md:px-3 bottom-1 md:pt-5 meta md:relative md:space-x-6 md:flex-row bg-opacity-95">
          {hit.GameAges && (
            <div className="flex items-center font-serif text-sm font-bold text-gray-700 md:text-base">
              <FcConferenceCall className="block mr-1 text-xl " />
              <span className="pr-1 ">Edad</span>{" "}
              <div>
                <Highlight hit={hit} attribute="GameAges" tagName="mark" />+
              </div>
            </div>
          )}
          {hit.GameDuration && (
            <div className="flex items-center font-serif text-sm font-bold text-gray-700 md:text-base">
              <FcClock className="block mr-1 text-xl " />
              <Highlight hit={hit} attribute="GameDuration" tagName="mark" />

              <span className="pl-1 ">min. </span>
            </div>
          )}
          {hit.GamePlayers && (
            <div className="flex items-center font-serif text-sm font-bold text-gray-700 md:text-base">
              <FcCollaboration className="block mr-1 text-xl " />
              <Highlight hit={hit} attribute="GamePlayers" tagName="mark" />
              <span className="pl-1">Jugadorxs </span>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default EncontrarPostPreview
