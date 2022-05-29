import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React from "react"
import AboutImage from "@images/kallpa-ludica.png"
import { CgSandClock } from "react-icons/cg"
import { AiFillCheckCircle } from "react-icons/ai"
import * as containerStyles from "./GameCard.module.css"

const Card = ({ card }) => (
  <div className={containerStyles.gamecard}>
    <div className="flex sm:flex-col">
      {card.imagenDestacada ? (
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          className="bg-white image"
        >
          <GatsbyImage
            title={card.title}
            className="block object-scale-down w-32 sm:w-full"
            alt={card.title}
            image={card.imagenDestacada.gatsbyImageData}
          />
        </Link>
      ) : (
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          className="image"
        >
          <img
            className="w-full h-full mx-auto my-6 opacity-25 "
            alt="Kallpa Lúdica"
            src={AboutImage}
          />
        </Link>
      )}
      <div className="relative flex flex-col w-full px-0 pb-0 font-serif text-left bg-white ">
        <div className="flex-grow" style={{ minHeight: "70px" }}>
          <Link
            to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
            className="flex-grow inline-block px-2 pt-4 font-serif text-base font-bold line-clamp-1 hover:text-gray-800 hover:underline underline-offset-2"
          >
            {card.title}
          </Link>
          {card.GameAges && (
            <div className="hidden w-full px-2 pt-1 text-center game-ages md:px-0 ">
              <div className="flex justify-start pb-1 font-serif text-lg font-bold text-left text-gray-700 md:px-2 ">
                <div className="flex flex-1 text-base opacity-100">
                  {card.GameAges}+ años
                </div>
              </div>
            </div>
          )}
          {card.GameDuration && (
            <div className="hidden w-full px-2 pt-1 text-center game-duration md:px-0">
              <div className="flex justify-center pb-1 font-serif text-lg font-bold text-center text-gray-700 md:px-2 ">
                <div className="flex flex-1 text-base opacity-100">
                  Duración: {card.GameDuration}min.
                </div>
              </div>
            </div>
          )}
          {card.GamePlayers && (
            <div className="hidden w-full pt-1 text-center game-players">
              <div className="flex justify-center pb-1 font-serif text-lg font-bold text-center text-gray-700 ">
                <div className="flex items-baseline flex-1 ">
                  {card.GamePlayers}
                  jugadores
                </div>
              </div>
            </div>
          )}
          {card.GameInStock ? (
            <div
              className="relative top-0 right-0 flex items-center justify-start pt-1 pl-1 m-0 font-serif text-sm font-bold text-left transition-all duration-500 text-emerald-600 md:text-base hover:text-emerald-800"
              title="Por encargo"
            >
              <span className="block ml-1">En Stock</span>
            </div>
          ) : (
            <div
              className="relative top-0 right-0 flex items-center justify-start pt-1 pl-1 m-0 font-serif text-sm font-bold text-left text-blue-600 transition-all duration-500 md:text-base hover:text-blue-800"
              title="Por encargo"
            >
              <CgSandClock className="" />
              <span className="block">Por encargo</span>
            </div>
          )}
        </div>
        <div
          className="border-t border-green-200 "
        >
          <div className="flex items-center justify-between p-3 px-2 font-serif text-lg font-bold text-left text-gray-700 transition-all duration-500 bg-white">
            <Link  to={`/tienda-de-juegos/${kebabCase(card.slug)}/`} className="btn yellow">Ver juego</Link>
            <AiFillCheckCircle className="hidden mb-1 " />
            <b className="block font-bold text-green-800 ">
              ${card.GameBuyPrice}
            </b>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
