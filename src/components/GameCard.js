import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React from "react"
import AboutImage from "../images/kallpa-ludica.png"
import Toggle from "./GameCardToggle"
import { CgSandClock } from "react-icons/cg"
import { AiFillCheckCircle } from "react-icons/ai"
//import ProductModal from "./modal/ProductModal"
import ReactTooltip from "react-tooltip"
import * as containerStyles from "./gamecard.module.css"

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
        <div className="flex-grow" style={{ minHeight: "80px" }}>
          <Link
            to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
            className="flex-grow inline-block px-2 pt-4 pb-2 pr-10 font-serif text-base font-bold leading-6 hover:text-green-600"
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
                  jugadores/as
                </div>
              </div>
            </div>
          )}
          <ReactTooltip place="left" type="dark" effect="solid"/>
          {card.stock && (
            <div
              className="relative top-0 right-0 flex items-center justify-end p-2 px-2 m-1 my-2 font-serif text-sm font-bold text-left text-blue-600 transition-all duration-500 md:absolute md:text-base hover:text-white hover:bg-blue-500 "
              data-tip="Por encargo"
            >
              <CgSandClock className="mb-1 " />
              <span className="block md:hidden">Por encargo</span>
              
            </div>
          )}
        </div>
        <Link
          to={`/tienda-de-juegos/${kebabCase(card.slug)}/`}
          className="border-t border-green-200 "
        >
          <div className="flex items-center justify-between p-2 px-2 font-serif text-lg font-bold text-left text-green-600 transition-all duration-500 bg-white hover:text-green-500 hover:bg-green-100">
            <span>Ver más</span>
            <AiFillCheckCircle className="hidden mb-1 " />
            <b className="block font-bold text-green-800 ">
              ${card.GameBuyPrice}
            </b>
          </div>
        </Link>
      </div>
    </div>
    {/*
    <ProductModal
      title={card.title}
      slug={card.slug}
      stock={card.stock}
      age={card.GameAges}
      publisher={card.publisher}
      categoria={card.categoria}
      duration={card.GameDuration}
      players={card.GamePlayers}
    />
     */}
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
  </div>
)

export default Card
