import { Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import React from "react"
import * as containerStyles from "./NewsCard.module.css"

const ComunidadNewsCard = ({ card }) => (
  <div key={card.slug} className={containerStyles.item}>
    <Link
      className={containerStyles.imageContainer}
      to={`/comunidad/${kebabCase(card.slug)}/`}
    >
      <GatsbyImage
        title={card.title}
        className={containerStyles.image}
        alt={card.title}
        image={card.featuredImg.gatsbyImageData}
      />
    </Link>
    <div className={containerStyles.content}>
      <Link
        className={containerStyles.title}
        key={card.slug}
        to={`/comunidad/${kebabCase(card.slug)}/`}
      >
        {card.title}
      </Link>
      <p className={containerStyles.description}>
        {card.description.description}
      </p>
      <time>{card.fechaDePublicacion}</time>
      <div className={containerStyles.buttonContainer}>
        {card.textoPrincipal && (
          <Link
            className={containerStyles.button}
            key={card.slug}
            to={`/comunidad/${kebabCase(card.slug)}/`}
          >
            Leer más
          </Link>
        )}
      </div>
    </div>
  </div>
)

export default ComunidadNewsCard
