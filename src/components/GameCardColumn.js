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
import { CgSandClock } from "react-icons/cg"
//import { FaUserFriends, FaShippingFast } from "react-icons/fa"
import { AiFillCheckCircle } from "react-icons/ai"

export default ({ card }) => (
  <GameCard>
    <div className="flex">
      {card.imagenDestacada ? (
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          className="bg-white image"
        >
          <Img
            title={card.title}
            className="object-contain w-64 h-64 "
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
      <div className="relative flex flex-col w-full pb-0 pl-3 font-sans text-left bg-white md:pl-0">
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          className="block pt-3 pb-1 pr-12 font-sans text-base font-bold leading-6 hover:text-blue-600 sm:pb-0 md:pb-3 "
        >
          {card.title}
        </Link>



        <div className="flex flex-col md:flex-row">
          {card.GameAges && (
            <div className="inline-block pt-1 text-center game-ages">
              <div className="flex justify-start pb-1 font-sans text-base font-bold text-left text-gray-800 md:pr-4 ">
                <div className="flex flex-1 opacity-100">
                  {card.GameAges}+ años
                </div>
              </div>
            </div>
          )}
          {card.GameDuration && (
            <div className="inline-block pt-1 text-center game-duration">
              <div className="flex justify-center pb-1 font-sans text-base font-bold text-center text-gray-800 md:pr-4 ">
                <div className="flex flex-1 opacity-100">
                  Duración: {card.GameDuration}min.
                </div>
              </div>
            </div>
          )}
          {card.GamePlayers && (
            <div className="inline-block pt-1 text-center game-players">
              <div className="flex justify-center pb-1 font-sans text-base font-bold text-center text-gray-800 md:pr-4">
                <div className="flex items-baseline flex-1 ">
                  {card.GamePlayers} jugadores/as
                </div>
              </div>
            </div>
          )}
        </div>

        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          tw=" border-t border-blue-200"
        >
          <div
            tw="flex flex-col md:flex-row items-center w-full justify-between p-2 px-2 font-sans font-bold text-left text-blue-600 transition-all duration-500 bg-white text-lg hover:text-blue-500 hover:bg-blue-100"
            className="absolute bottom-0 left-0 right-0"
          >
            <b tw="block  font-bold text-blue-800 ">${card.GameBuyPrice}</b>
            {card.stock && (
              <div
                className="flex items-center justify-start my-2 font-sans font-bold text-left text-blue-600 transition-all duration-500 md:text-base hover:text-white hover:bg-blue-500 "
                data-tip="Por encargo"
              >
                <CgSandClock className="inline-block mb-1 " />
                <span>Pedidos por encargo</span>
              </div>
            )}
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
  ${tw`relative w-full overflow-hidden transition-all duration-500 transform bg-white rounded-md shadow-lg hover:shadow-2xl `}

  .image {
    ${tw`relative overflow-hidden transition-all duration-500 transform scale-90 `}
    width: 420px;
  }

  .image:hover {
    transform: scale(0.95);
  }
`
