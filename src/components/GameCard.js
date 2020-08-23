import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import AboutImage from "../images/kallpa-ludica.png"
import Toggle from "./GameCardToggle"
import { FaCaretRight } from "react-icons/fa"

export default ({ card }) => (
  <GameCard>
    <Link to={`/juegos/${kebabCase(card.slug)}/`}>
      {card.imagenDestacada ? (
        <div className=" image">
          <Img
            title={card.title}
            className="w-full "
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
      <div className="relative w-full pb-12 font-serif text-left md:px-3">
        <h3 className="block pt-3 pr-16 text-base font-bold ">{card.title}</h3>
        <b className="absolute top-0 right-0 block pt-3 pb-6 pr-1 text-xl font-bold text-green-600">
          ${card.GameBuyPrice}
        </b>
      </div>

      <Link className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-2 px-3 font-serif text-sm font-bold text-left text-green-800 transition-all duration-500 bg-green-100 hover:text-white hover:bg-green-600">
        Consultar por este juego
        <FaCaretRight className="text-lg text-green-300" />
      </Link>
    </Link>
    <Toggle
      title={card.title}
      slug={card.slug}
      age={card.GameAges}
      duration={card.GameDuration}
      players={card.GamePlayers}
    />
  </GameCard>
)

const GameCard = styled.div`
  ${tw`relative w-full mb-3 overflow-hidden shadow-sm md:max-w-md`}

  .image {
    ${tw`relative w-48 h-48 overflow-hidden transition-all duration-500 transform md:w-full`}
  }

  .image:hover {
    ${tw`scale-105`}
  }
`
