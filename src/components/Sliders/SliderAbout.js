import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
import { GatsbyImage } from "gatsby-plugin-image"
import { AiOutlineArrowRight, AiOutlineArrowLeft } from "react-icons/ai"
import { BiRadioCircle, BiRadioCircleMarked } from "react-icons/bi"

const SliderAboutComponent = (props) => {
  const data = useStaticQuery(graphql`
    query SliderAboutComponentQuery {
      backgrounds: allContentfulCarrousel(
        filter: { slug: { eq: "quienes-somos" } }
      ) {
        edges {
          node {
            id
            title
            images {
              gatsbyImageData(
                layout: FULL_WIDTH
                cropFocus: CENTER
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)

  const CarouselUI = ({ position, total, handleClick, children }) => (
    <div className="absolute inset-0 z-0 w-full h-screen mb-0 overflow-hidden opacity-20">
      {props.arrows ? (
        <div className="relative max-w-2xl mx-auto ">
          <button
            className="absolute left-0 z-50 items-center justify-center hidden w-20 h-20 text-4xl text-center text-blue-800 duration-700 bg-white rounded-full shadow-xl cursor-pointer hover:opacity-90 md:flex top-1/3 hover:translate-y-1"
            onClick={handleClick}
            data-position={position - 1}
          >
            <AiOutlineArrowLeft />
          </button>
          <button
            className="absolute right-0 z-50 items-center justify-center hidden w-20 h-20 text-4xl text-center text-blue-800 duration-700 bg-white rounded-full shadow-xl cursor-pointer hover:opacity-90 md:flex top-1/3 hover:translate-y-1"
            right="true"
            onClick={handleClick}
            data-position={position + 1}
          >
            <AiOutlineArrowRight />
          </button>
          <div className="absolute left-0 right-0 z-50 flex items-center justify-center bg-opacity-50 bottom-2">
            {Array(...Array(total)).map((val, index) => (
              <button
                className="mx-1 text-4xl text-blue-800 cursor-pointer"
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
    <>
      {data.backgrounds.edges.map(({ node }) => {
        return (
          <Carousel
            defaultWait={5000}
            maxTurns={100} /*wait for 1000 milliseconds*/
          >
            {node.images.map((item, i) => (
              <Fade key={item.id}>
                <div className="relative w-auto h-screen md:w-full md:h-full">
                  <GatsbyImage
                    title={item.title}
                    className="object-cover w-full h-full"
                    alt={item.title}
                    image={item.gatsbyImageData}
                  />
                </div>
              </Fade>
            ))}
          </Carousel>
        )
      })}
    </>
  )
}

export default SliderAboutComponent
