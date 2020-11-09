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
    <Link
      to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
      className="flex md:flex-col"
    >
      {card.imagenDestacada ? (
        <div className="image">
          <Img
            title={card.title}
            className="w-full h-full"
            alt={card.title}
            fluid={card.imagenDestacada.fluid}
          />
        </div>
      ) : (
        <div className="image">
          <img
            className="w-full h-full mx-auto my-6 opacity-25 "
            alt="Kallpa Lúdica"
            src={AboutImage}
          />
        </div>
      )}
      <div className="relative flex flex-col w-full px-0 pb-0 font-sans text-left">
        <h3 className="block px-2 pt-3 pb-1 font-sans text-base font-bold leading-6 sm:pb-0 md:pb-0 ">
          {card.title}
        </h3>
        {card.stock ? (
          <b className="top-0 right-0 block px-2 text-xl font-bold text-blue-500 sm:py-1">
            ${card.GameBuyPrice}
          </b>
        ) : (
          <b className="top-0 right-0 block px-2 text-xl font-bold text-green-600 sm:py-1">
            ${card.GameBuyPrice}
          </b>
        )}

        {card.GameAges && (
          <div className="hidden w-full pt-1 text-center game-ages">
            <div className="flex justify-start pb-1 font-sans text-lg font-bold text-left text-gray-800 md:px-2 ">
              <div className="flex flex-1 text-base opacity-75 md:px-3">
                {card.GameAges}+ años
              </div>
            </div>
          </div>
        )}
        {card.GameDuration && (
          <div className="hidden w-full pt-1 text-center game-duration">
            <div className="flex justify-center pb-1 font-sans text-lg font-bold text-center text-gray-800 md:px-2 ">
              <div className="flex flex-1 text-base opacity-75">
                Duración: {card.GameDuration}min.
              </div>
            </div>
          </div>
        )}
        {card.GamePlayers && (
          <div className="hidden w-full pt-1 text-center game-players">
            <div className="flex justify-center pb-1 font-sans text-lg font-bold text-center text-gray-800 ">
              <div className="flex items-baseline flex-1 ">
                {card.GamePlayers}
                jugadores/as
              </div>
            </div>
          </div>
        )}
        {card.stock ? (
          <div className="bottom-0 left-0 right-0 flex items-center justify-between p-2 px-2 font-sans text-sm font-bold text-left text-blue-800 transition-all duration-500 md:text-base md:bg-blue-300 hover:text-white hover:bg-blue-700">
            <span>Por encargo</span>
            <FaShippingFast className="inline-block mb-1 " />
          </div>
        ) : (
          <div className="bottom-0 left-0 right-0 flex items-center justify-between p-2 px-2 font-sans text-sm font-bold text-left text-green-800 transition-all duration-500 md:text-base md:bg-green-100 hover:text-white hover:bg-green-700">
            <span>Stock disponible</span>
            <Flash forever duration={5000}>
              <AiFillCheckCircle className="inline-block mb-1 " />
            </Flash>
          </div>
        )}
      </div>
    </Link>

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
    ${tw`relative w-full h-48 overflow-hidden transition-all duration-500 transform scale-90 md:h-64 md:w-48 md:w-full`}
  }

  .image:hover {
    transform: scale(0.95);
  }
`
