import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css/effect-fade"
import { Autoplay, EffectFade } from "swiper/modules"
import "swiper/css"

const AboutSlider = ({ hit }) => {
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
              id
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

  return (
    <>
      {data.backgrounds.edges.map(({ node }) => {
        return (
          <div className="absolute inset-0 z-0 w-full h-screen mb-0 overflow-hidden opacity-20">
            <Swiper
              spaceBetween={50}
              slidesPerView={1}
              onSlideChange={() => console.log("slide change")}
              onSwiper={(swiper) => console.log(swiper)}
              modules={[EffectFade, Autoplay]}
              effect="fade"
              className="w-auto h-screen md:w-full md:h-full"
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
            >
              {node.images.map((item, index) => (
                <SwiperSlide key={item.id} >
                  <div className="relative w-auto h-screen md:w-full md:h-full">
                    <GatsbyImage
                      className="object-cover w-full h-full"
                      alt=""
                      image={item.gatsbyImageData}
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        )
      })}
    </>
  )
}

export default AboutSlider
