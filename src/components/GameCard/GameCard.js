import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React from "react"
import AboutImage from "@images/kallpa-ludica.png"
// import { CgSandClock } from "react-icons/cg"
import { AiFillCheckCircle } from "react-icons/ai"
import * as containerStyles from "./GameCard.module.css"

const Card = ({ card }) => (
  <div className={containerStyles.gamecard}>
    <div className="flex flex-col">
      {card.imagenDestacada ? (
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          className="bg-white image"
        >
          <GatsbyImage
            title={card.title}
            className="block object-scale-down w-full"
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
            className="inline-flex items-baseline flex-grow gap-2 px-2 pt-4 font-serif text-lg font-bold hover:text-gray-800 hover:underline underline-offset-2"
          >
            <span className="">{card.title}</span>
            {card.GameInStock && (
              <div className="shrink-0 bg-emerald-100 inline-block ring-emerald-300 font-serif text-sm font-bold text-emerald-900 rounded px-1 py-0.5 ">
                En Stock
              </div>
            )}
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
                  jugadorxs
                </div>
              </div>
            </div>
          )}
        </div>
        <div className="border-t border-green-200 ">
          <div className="flex items-center justify-between p-3 px-2 font-serif text-lg font-bold text-left text-gray-700 transition-all duration-500 bg-white">
            <Link
              to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
              className="btn !text-sm yellow"
            >
              Ver juego
            </Link>
            <AiFillCheckCircle className="hidden mb-1 " />
            <a
              href={`https://api.whatsapp.com/send?phone=5493874811808&text=%C2%A1Hola!%F0%9F%A4%97%20%20Quería%2C%20consultar%20por%20el%20juego%20${card.title}`}
              className="btn !bg-[#50cd5d] !ring-[#50cd5d] text-white"
            >
              <span className="hidden !text-sm mr-2 sm:inline-flex">Consultar</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01zm-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Card
