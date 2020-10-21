import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import Slider from "react-slick"
//import "~slick-carousel/slick/slick-theme.css"
//import "~slick-carousel/slick/slick.css"

const HomePublishersComponent = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    swipeToSlide: true,
    speed: 2000,
    autoplaySpeed: 2000,
    slidesToShow: 7,
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
              <div className="flex items-center justify-center">
                <Link
                  key={node.slug}
                  to={`/editoriales/${kebabCase(node.slug)}`}
                  activeClassName="opacity-25"
                  className="flex items-center justify-center m-6 overflow-hidden text-gray-800 rounded-md "
                >
                  {node.logo ? (
                    <div className="relative flex flex-col items-center justify-center h-full overflow-hidden md:w-full">
                      <Img
                        title={node.title}
                        className="object-cover w-32 h-auto "
                        alt={node.title}
                        fluid={node.logo.fluid}
                      />
                    </div>
                  ) : (
                    <h2 className="w-24 max-w-xs font-bold ">{node.title}</h2>
                  )}
                </Link>
              </div>
            )
          })}
        </Slider>
      </div>
    </>
  )
}

export default HomePublishersComponent
