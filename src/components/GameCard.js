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

import Flash from "react-reveal/Flash"
export default ({ card }) => (
  <GameCard>
    <div tw="flex sm:flex-col">
      {card.imagenDestacada ? (
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          tw="bg-white "
          className="image"
        >
          <Img
            title={card.title}
            tw="object-contain w-32 h-32 sm:h-48 sm:w-full"
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
            tw="w-full h-full mx-auto my-6 opacity-25 "
            alt="Kallpa Lúdica"
            src={AboutImage}
          />
        </Link>
      )}
      <div tw="relative flex flex-col w-full px-0 pb-0 font-sans text-left bg-white ">
        <div className="flex-grow" style={{ minHeight: "80px" }}>
          <Link
            to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
            tw="inline-block px-2 pt-4 pb-2 pr-12 font-sans text-lg font-bold leading-6 hover:text-blue-600 flex-grow"
          >
            {card.title}
          </Link>

          {card.GameAges && (
            <div
              tw="hidden w-full px-2 pt-1 text-center md:px-0 "
              className="game-ages"
            >
              <div tw="flex justify-start pb-1 font-sans text-lg font-bold text-left text-gray-700 md:px-2 ">
                <div tw="flex flex-1 text-base opacity-100">
                  {card.GameAges}+ años
                </div>
              </div>
            </div>
          )}
          {card.GameDuration && (
            <div
              tw="hidden w-full px-2 pt-1 text-center md:px-0"
              className=" game-duration"
            >
              <div tw="flex justify-center pb-1 font-sans text-lg font-bold text-center text-gray-700 md:px-2 ">
                <div tw="flex flex-1 text-base opacity-100">
                  Duración: {card.GameDuration}min.
                </div>
              </div>
            </div>
          )}
          {card.GamePlayers && (
            <div tw="hidden w-full pt-1 text-center " className="game-players">
              <div tw="flex justify-center pb-1 font-sans text-lg font-bold text-center text-gray-700 ">
                <div tw="flex items-baseline flex-1 ">
                  {card.GamePlayers}
                  jugadores/as
                </div>
              </div>
            </div>
          )}
          {card.stock && (
            <div
              tw="absolute top-0 right-0 flex items-center justify-between p-2 px-2 m-1 my-2 font-sans text-sm font-bold text-left text-blue-600 transition-all duration-500 md:text-base hover:text-white hover:bg-blue-500 "
              data-tip="Consultar stock"
            >
              <FaShippingFast className="inline-block mb-1 " />
            </div>
          )}
        </div>
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
  ${tw`relative w-full mb-3 overflow-hidden transition-all duration-500 transform bg-white rounded-md shadow-lg hover:shadow-2xl md:max-w-md`}

  .image {
    ${tw`relative h-full transition-all duration-500 ease-in-out transform`}
  }

  .image:hover {
    transform: scale(1.03);
  }
`
