import React from "react"
import { useStaticQuery, graphql, Link, navigate } from "gatsby"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import { AwesomeButton } from "react-awesome-button"
import { GatsbyImage } from "gatsby-plugin-image"
import { kebabCase } from "lodash"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"

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
                height: 120
                width: 120
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: DOMINANT_COLOR
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
        <div
          className="relative max-w-2xl mx-auto"
          style={{ minHeight: "50vh" }}
        >
          <button
            className="absolute top-0 left-0 z-50 flex items-center justify-center w-20 h-20 mt-32 text-4xl text-center text-blue-500 duration-700 bg-white rounded-full shadow-xl outline-none cursor-pointer hover:opacity-90 hover:translate-y-1"
            onClick={handleClick}
            data-position={position - 1}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            className="absolute top-0 right-0 z-50 flex items-center justify-center w-20 h-20 mt-32 text-4xl text-center text-blue-500 duration-700 bg-white rounded-full shadow-xl outline-none cursor-pointer hover:opacity-90 hover:translate-y-1"
            right="true"
            onClick={handleClick}
            data-position={position + 1}
          >
            <AiOutlineArrowRight />
          </button>
          <div className="absolute left-0 right-0 z-50 flex items-center justify-center bg-opacity-50 -top-10">
            {Array(...Array(total)).map((val, index) => (
              <button
                className="mx-1 text-4xl text-blue-500 cursor-pointer"
                key={index}
                onClick={handleClick}
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
    <div className="pt-12">
      <Carousel defaultWait={8000} maxTurns={1} /*wait for 1000 milliseconds*/>
        {data.collections.edges.map(({ node }) => {
          return (
            <Fade>
              <div
                className="relative flex flex-col max-w-md p-3 pb-6 mx-auto overflow-hidden text-center transition-all duration-500 ease-in-out transform bg-white shadow-md rounded-xl hover:shadow-2xl hover:translate-y-1"
                key={node.slug}
              >
                <Link
                  to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                  className="flex flex-col items-center justify-center w-full text-lg font-bold text-blue-500 shadow-sm"
                >
                  {node.icono && (
                    <div className="relative flex items-center justify-center max-w-md py-6 pt-3 mx-auto overflow-hidden text-center bg-white md:w-full">
                      <GatsbyImage
                        title={node.title}
                        alt={node.title}
                        image={node.icono.gatsbyImageData}
                      />
                    </div>
                  )}
                  <h4 className="font-sans text-3xl font-bold text-blue-500">
                    {node.title}
                  </h4>
                </Link>
                <p className="px-6 py-4 font-sans text-xl text-gray-800 md:text-2xl">
                  {node.CollectionDescription.CollectionDescription}
                </p>

                <AwesomeButton
                  action={() => {
                    navigate(`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`)
                  }}
                  type="secondary"
                  className="max-w-sm mx-auto"
                >
                  Ver colección
                  <AiOutlineArrowRight className="inline-block ml-2 text-2xl" />
                </AwesomeButton>
              </div>
            </Fade>
          )
        })}
      </Carousel>
    </div>
  )
}

export default SliderHomeCollection
