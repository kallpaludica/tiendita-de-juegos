import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
//import { FaCaretRight } from "react-icons/fa"
import tw from "twin.macro"
import AboutImage from "../images/kallpa-ludica.png"
import Toggle from "./GameCardToggle"
//import { IoMdTime } from "react-icons/io"
import { FaShippingFast } from "react-icons/fa"
//import { FaUserFriends, FaShippingFast } from "react-icons/fa"
import { AiFillCheckCircle } from "react-icons/ai"

export default ({ card }) => (
  <GameCard>
    <div className="flex l">
      {card.imagenDestacada ? (
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          className="bg-white image"
        >
          <Img
            title={card.title}
            className="object-contain w-40 h-40 "
            alt={card.title}
            fluid={card.imagenDestacada.fluid}
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
      <div className="relative flex flex-col w-full px-0 pb-0 font-sans text-left bg-white">
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          className="block px-2 pt-3 pb-1 pr-12 font-sans text-base font-bold leading-6 hover:text-blue-600 sm:pb-0 md:pb-3 "
        >
          {card.title}
        </Link>

        <div className="flex flex-col md:flex-row">
          {card.GameAges && (
            <div className="inline-block pt-1 text-center game-ages">
              <div className="flex justify-start pb-1 font-sans text-base font-bold text-left text-gray-800 md:px-2 ">
                <div className="flex flex-1 opacity-100">
                  {card.GameAges}+ años
                </div>
              </div>
            </div>
          )}
          {card.GameDuration && (
            <div className="inline-block px-2 pt-1 text-center game-duration">
              <div className="flex justify-center pb-1 font-sans text-base font-bold text-center text-gray-800 md:px-2 ">
                <div className="flex flex-1 opacity-100">
                  Duración: {card.GameDuration}min.
                </div>
              </div>
            </div>
          )}
          {card.GamePlayers && (
            <div className="inline-block pt-1 text-center game-players">
              <div className="flex justify-center pb-1 font-sans text-base font-bold text-center text-gray-800 ">
                <div className="flex items-baseline flex-1 ">
                  {card.GamePlayers} jugadores/as
                </div>
              </div>
            </div>
          )}
        </div>
        {card.stock && (
          <div
            className="absolute top-0 right-0 flex items-center justify-between p-2 px-2 m-1 my-2 font-sans text-sm font-bold text-left text-blue-600 transition-all duration-500 md:text-base hover:text-white hover:bg-blue-500 "
            data-tip="Consultar stock"
          >
            <FaShippingFast className="inline-block mb-1 " />
          </div>
        )}
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          tw=" border-t border-blue-200"
        >
          <div tw="flex items-center justify-between p-2 px-2 font-sans font-bold text-left text-blue-600 transition-all duration-500 bg-white text-lg hover:text-blue-500 hover:bg-blue-100">
            <span>Ver mas</span>
            <AiFillCheckCircle tw="hidden mb-1 " />
            <b tw="block  font-bold text-blue-800 ">${card.GameBuyPrice}</b>
          </div>
        </Link>
      </div>
    </div>

    <div className="hidden">
      <Toggle
        title={card.title}
        slug={card.slug}
        stock={card.stock}
        age={card.GameAges}
        publisher={card.publisher}
        categoria={card.categoria}
        duration={card.GameDuration}
        players={card.GamePlayers}
      />
    </div>
  </GameCard>
)

const GameCard = styled.div`
  ${tw`relative w-full mb-3 overflow-hidden transition-all duration-500 transform bg-white rounded-md shadow-lg hover:shadow-2xl `}

  .image {
    ${tw`relative w-56 overflow-hidden transition-all duration-500 transform scale-90 `}
  }

  .image:hover {
    transform: scale(0.95);
  }
`
