import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import Slider from "react-slick"


const HomePublishersComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    variableWidth: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }

  const data = useStaticQuery(graphql`
    query HOmePublishersWithImagesQuery {
      editoriales: allContentfulEditorial {
        edges {
          node {
            id
            title
            slug
            logo {
              fluid(maxWidth: 300) {
                ...GatsbyContentfulFluid_withWebp
              }
              fixed(width: 250, height: 100) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      ></link>
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <div className="relative z-50 overflow-hidden">
        <Slider {...settings}>
          {data.editoriales.edges.map(({ node }) => {
            return (
              <div
                key={node.slug}
                className="flex items-center justify-center m-5 overflow-hidden text-gray-800 rounded-md "
              >
                {node.logo && (
                  <Img
                    title={node.title}
                    className="block object-cover w-32 h-auto "
                    alt={node.title}
                    fluid={node.logo.fluid}
                  />
                )}
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default HomePublishersComponent
