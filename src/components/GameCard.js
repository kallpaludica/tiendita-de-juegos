import React from "react"
import { kebabCase } from "lodash"
import Img from "gatsby-image"
import { Link } from "gatsby"
import tw from "twin.macro"
import styled from "@emotion/styled"
import AboutImage from "../images/kallpa-ludica.png"

export default ({ card }) => (
  <GameCard>
    <Link to={`/juegos/${kebabCase(card.slug)}/`} className="">
      {card.imagenDestacada ? (
        <Img
          title={card.title}
          alt={card.title}
          fixed={card.imagenDestacada.fixed}
        />
      ) : (
        <img
          className="w-48 h-48 mx-auto opacity-25 my-6 "
          alt="Kallpa Lúdica"
          src={AboutImage}
        />
      )}
      <div className="pl-3 text-left sm:text-center">
        <h3 className="block pt-3">{card.title}</h3>
        <b className="block font-bold text-green-800 text-3xl font-serif pb-3">
          ${card.GameBuyPrice}
        </b>
      </div>
    </Link>
  </GameCard>
)

const GameCard = styled.div`
  ${tw`relative max-w-md overflow-hidden p-6 mb-3  `}
  transition: all .2s;
  top: 0;

  &:hover {
    ${tw``}
    top: 2px;
  }
`
