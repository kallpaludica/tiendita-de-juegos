import React from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import { AwesomeButton } from "react-awesome-button"
// import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"
// import * as containerStyles from "./SliderHomeCollection.module.css"

const SliderHomeCollection = (props) => {
  const data = useStaticQuery(graphql`
    query SliderHomeCollectionQuery {
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
                layout: FIXED
                height: 80
                width: 80
                formats: JPG
                jpegProgressive: false
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)

  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="relative w-full h-full mb-0">
      {props.arrows ? (
        <div className="relative max-w-2xl mx-auto h-96">
          <button
            className="absolute top-0 left-0 z-50 flex items-center justify-center w-20 h-20 mt-32 text-4xl text-center text-blue-500 duration-700 bg-white rounded-full shadow-xl outline-none cursor-pointer hover:opacity-90 hover:translate-y-1"
            onClick={handleClick}
            aria-label="slide left"
            data-position={position - 1}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            className="absolute top-0 right-0 z-50 flex items-center justify-center w-20 h-20 mt-32 text-4xl text-center text-blue-500 duration-700 bg-white rounded-full shadow-xl outline-none cursor-pointer "
            right="true"
            onClick={handleClick}
            aria-label="slide right"
            data-position={position + 1}
          >
            <AiOutlineArrowRight />
          </button>
          <div className="absolute left-0 right-0 z-50 flex items-center justify-center bg-opacity-50 rounded-lg -bottom-6">
            <div className="px-4 pt-2 border-2 border-blue-300 rounded-full shadow bg-blue-50">
              {Array(...Array(total)).map((val, index) => (
                <button
                  className="mx-1 text-4xl text-blue-500 outline-none cursor-pointer"
                  key={index}
                  onClick={handleClick}
                  aria-label="Select slide"
                  data-position={index}
                >
                  {index === position ? (
                    <BiRadioCircleMarked />
                  ) : (
                    <BiRadioCircle />
                  )}
                </button>
              ))}
            </div>
          </div>
          <div>{children}</div>
        </div>
      ) : (
        <div>
          <div>{children}</div>
        </div>
      )}
    </div>
  )
  const Carousel = makeCarousel(CarouselUI)

  return (
    <div>
      <Carousel
        defaultWait={8000000}
        maxTurns={1} /*wait for 1000 milliseconds*/
      >
        {data.collections.edges.map(({ node }) => {
          return (
            <Fade key={node.slug}>
              <div className="relative flex flex-col items-center justify-center max-w-md p-3 pb-6 mx-auto overflow-hidden text-center transition-all duration-500 ease-in-out transform bg-white border-2 border-transparent shadow-md h-96 rounded-xl hover:shadow-xl hover:border-blue-300 ">
                {/* {node.icono && (
                  <div className={containerStyles.icono}>
                    <GatsbyImage
                      title={node.title}
                      alt={node.title}
                      image={node.icono.gatsbyImageData}
                    />
                  </div>
                )} */}
                <Link
                  to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                  className="flex flex-col items-center justify-start w-full mb-6 text-lg font-bold text-blue-500"
                >
                  <h4 className="font-serif text-3xl font-bold text-blue-500">
                    {node.title}
                  </h4>
                </Link>
                <AwesomeButton
                  onPress={() => {
                    navigate(
                      `/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`
                    )
                  }}
                  type="secondary"
                  className="max-w-sm mx-auto"
                >
                  Ver colección
                  <AiOutlineArrowRight className="inline-block ml-2 text-2xl" />
                </AwesomeButton>
                <p className="px-6 py-4 font-serif text-xl text-gray-800 md:text-2xl">
                  {node.CollectionDescription.CollectionDescription}
                </p>
              </div>
            </Fade>
          )
        })}
      </Carousel>
    </div>
  )
}

export default SliderHomeCollection
