import styled from "@emotion/styled"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import { FaCaretRight } from "react-icons/fa"
import tw from "twin.macro"
import AboutImage from "../images/kallpa-ludica.png"
import Toggle from "./GameCardToggle"
import { IoMdTime } from "react-icons/io"
import { FaUserFriends } from "react-icons/fa"

export default ({ card }) => (
  <GameCard>
    <Link to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}>
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
        <img
          className="w-48 h-48 mx-auto my-6 opacity-25 "
          alt="Kallpa Lúdica"
          src={AboutImage}
        />
      )}
      <div className="relative w-full px-3 pb-2 font-sans text-center">
        <h3 className="block pt-3 pb-1 font-sans text-base font-bold leading-6 sm:pb-0 md:pb-0 ">
          {card.title}
        </h3>
        {card.stock ? (
          <b className="top-0 right-0 block text-xl font-bold text-blue-500 sm:pt-1">
            {card.stock}
          </b>
        ) : (
          <b className="top-0 right-0 block text-xl font-bold text-green-600 sm:pt-1">
            ${card.GameBuyPrice}
          </b>
        )}

        {card.GameAges && (
          <div className="hidden w-full pt-1 text-center game-ages">
            <div className="flex justify-center pb-1 font-sans text-lg font-bold text-center text-gray-800 ">
              <div className="flex flex-col flex-1 text-base opacity-75">
                <FaUserFriends className="w-6 mx-auto mb-1 text-2xl" />
                {card.GameAges}+ años
              </div>
            </div>
          </div>
        )}
        {card.GameDuration && (
          <div className="hidden w-full pt-1 text-center game-duration">
            <div className="flex justify-center pb-1 font-sans text-lg font-bold text-center text-gray-800 ">
              <div className="flex flex-col flex-1 text-base opacity-75">
                <IoMdTime className="w-6 mx-auto mt-3 mb-1 text-2xl " />
                {card.GameDuration}min.
              </div>
            </div>
          </div>
        )}
        {card.GamePlayers && (
          <div className="hidden w-full pt-1 text-center game-players">
            <div className="flex justify-center pb-1 font-sans text-lg font-bold text-center text-gray-800 ">
              <div className="flex items-baseline flex-1">
                {card.GamePlayers}
                jugadores/as
              </div>
            </div>
          </div>
        )}
      </div>

      {card.stock ? (
        <div className="bottom-0 left-0 right-0 flex items-center justify-center p-2 px-3 font-sans text-base font-bold text-center text-blue-800 transition-all duration-500 bg-blue-300 hover:text-white hover:bg-blue-600">
          <span>Pedidos por encargo</span>
          <FaCaretRight className="text-lg text-blue-500" />
        </div>
      ) : (
        <div className="bottom-0 left-0 right-0 flex items-center justify-center p-2 px-3 font-sans text-base font-bold text-center text-green-800 transition-all duration-500 bg-green-100 hover:text-white hover:bg-green-600">
          <span>Consulta este juego</span>
          <FaCaretRight className="text-lg text-green-300" />
        </div>
      )}
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
