import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import Slider from "react-slick"
//import "~slick-carousel/slick/slick-theme.css"
//import "~slick-carousel/slick/slick.css"

const PublishersComponent = () => {
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
          initialSlide: 2,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          dots: true,
        },
      },
    ],
  }

  const data = useStaticQuery(graphql`
    query PublishersWithImagesQuery {
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
      <div
        className="relative z-50 flex flex-col items-baseline justify-center w-full max-w-6xl mx-auto"
        id="publishers"
      >
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        ></link>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />

        <div className="hidden w-full mb-12 text-center text-gray-800">
          <div className="grid items-center justify-center max-w-6xl grid-cols-2 gap-3 mx-auto md:grid-cols-4 lg:grid-cols-5 ">
            {data.editoriales.edges.map(({ node }) => {
              return (
                <Link
                  key={node.slug}
                  to={`/editoriales/${kebabCase(node.slug)}`}
                  activeClassName="opacity-25"
                  className="flex items-center justify-center m-6 overflow-hidden text-gray-800 rounded-md "
                >
                  {node.logo ? (
                    <div className="relative flex items-center justify-center w-48 h-32 overflow-hidden md:w-full">
                      <Img
                        title={node.title}
                        className="w-32"
                        alt={node.title}
                        fixed={node.logo.fixed}
                      />
                    </div>
                  ) : (
                    <h2 className="w-24 max-w-xs font-bold ">{node.title}</h2>
                  )}
                </Link>
              )
            })}
          </div>
        </div>
      </div>
      <div className="overflow-hidden">
        <Slider {...settings}>
          {data.editoriales.edges.map(({ node }) => {
            return (
              <div>
                <Link
                  key={node.slug}
                  to={`/editoriales/${kebabCase(node.slug)}`}
                  activeClassName="opacity-25"
                  className="flex items-center justify-center m-6 overflow-hidden text-gray-800 rounded-md "
                >
                  {node.logo ? (
                    <div className="relative flex flex-col items-center justify-end overflow-hidden md:w-full">
                      <Img
                        title={node.title}
                        className="flex-1 object-contain w-full h-full "
                        alt={node.title}
                        fluid={node.logo.fluid}
                      />
                      <h2 className="mt-2 font-sans text-sm font-bold">
                        {node.title}
                      </h2>
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

export default PublishersComponent
