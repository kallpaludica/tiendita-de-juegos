import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import AboutImage from "../images/kallpa-ludica.png"
import Toggle from "./GameCardToggle"

export default ({ card }) => (
  <GameCard>
    <Link to={`/juegos/${kebabCase(card.slug)}/`}>
      {card.imagenDestacada ? (
        <div className="image ">
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
      <div className="w-full h-24 pb-3 font-serif text-center md:pl-3">
        <h3 className="block pt-3 text-lg font-bold">{card.title}</h3>
        <b className="block text-xl font-bold text-green-600">
          ${card.GameBuyPrice}
        </b>
      </div>
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
  ${tw`relative w-full mb-3 overflow-hidden md:max-w-md `}

  .image {
    ${tw`relative w-48 h-48 overflow-hidden transition-all duration-500 transform md:w-full`}
  }

  .image:hover {
    ${tw`scale-105`}
  }
`
