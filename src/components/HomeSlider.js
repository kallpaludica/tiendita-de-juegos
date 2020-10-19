import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import BackgroundSlider from "gatsby-image-background-slider"

const HomeSlider = (props) => (
  <BackgroundSlider
    initDelay={2}
    transition={2}
    duration={3}
    images={["dafault-kallpa.jpg"]}
    query={useStaticQuery(graphql`
      query {
        backgrounds: allFile(
          filter: { sourceInstanceName: { eq: "backgrounds" } }
        ) {
          nodes {
            relativePath
            childImageSharp {
              fluid(maxWidth: 4000, quality: 100) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    `)}
  />
)

export default HomeSlider
