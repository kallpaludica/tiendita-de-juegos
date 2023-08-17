import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import { AiOutlineArrowRight } from "react-icons/ai"
import * as containerStyles from "./CarouselCollection.module.css"

const CarouselCollection = (props) => {
  const data = useStaticQuery(graphql`
    query SliderHomeCarouselQuery {
      collections: allContentfulColecciones {
        edges {
          node {
            id
            title
            slug
            CollectionDescription {
              CollectionDescription
            }
            icono {
              gatsbyImageData(
                layout: CONSTRAINED
                width: 100
                height: 100
                quality: 100
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.collections.edges.map(({ node }) => {
        return (
          <div className="embla__slide" key={node.slug}>
            <div
              key={node.slug}
              className="relative flex flex-col items-center justify-center p-3 pb-6 mx-auto overflow-hidden text-center transition-all duration-500 ease-in-out transform h-96 "
            >
              {node.icono && (
                <div className={containerStyles.icono}>
                  <GatsbyImage
                    title={node.title}
                    alt={node.title}
                    image={node.icono.gatsbyImageData}
                  />
                </div>
              )}
              <div className="flex flex-col items-center justify-start w-full mb-6 text-lg font-bold text-blue-500">
                <h4 className="font-serif text-3xl font-bold text-blue-500">
                  {node.title}
                </h4>
              </div>
              <p className="px-6 py-4 font-serif text-xl text-gray-800 md:px-12">
                {node.CollectionDescription.CollectionDescription}
              </p>
              <Link
                to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                className="btn blue"
              >
                <AiOutlineArrowRight className="inline-block mr-2" />
                Ver colección
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CarouselCollection
