import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"

const CarouselAboutPage = (props) => {
  const data = useStaticQuery(graphql`
    query CarouselAboutPageQuery {
      backgrounds: allContentfulCarrousel(
        filter: { slug: { eq: "talleres" } }
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

  
  const backimages = data.backgrounds.edges[0].node.images

  return (
    <>
      {backimages.map((item, i) => (
        <div className="embla__slide" key={item.id}>
          <div className="relative w-full h-96">
            <GatsbyImage
              className="object-cover w-full h-full"
              alt=""
              image={item.gatsbyImageData}
            />
          </div>
        </div>
      ))}
    </>
  )
}

export default CarouselAboutPage
