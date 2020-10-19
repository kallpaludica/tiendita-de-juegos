import { graphql, navigate, useStaticQuery } from "gatsby"
import BackgroundSlider2 from "gatsby-image-background-slider"
import React from "react"
import { AwesomeButton } from "react-awesome-button"
import BackgroundSlider from "../HomeSlider"

const HomeHeroCompoent = () => {
  return (
    <>
      <div className="relative z-50 flex flex-col items-center justify-start w-full py-20 pt-12">
        <section className="container flex flex-col flex-1 h-full mx-auto">
          <div className="flex flex-col flex-1 w-full h-full max-w-6xl px-3 mx-auto">
            <div className="flex items-start flex-1 pb-12">
              <div className="flex items-center flex-1 max-w-sm py-8 font-mono">
                <div className="col-span-2 text-left">
                  <h1 className="text-3xl leading-tight text-left text-white md:text-4xl">
                    Compartiendo la <br />
                    potencia de jugar.
                  </h1>
                  <p className="pt-6 font-sans text-2xl text-left text-white">
                    Abrimos nuestra tienda de juegos para la provincia de Salta.
                  </p>

                  <div className="flex flex-col justify-start mt-5">
                    <div className="mr-3 ">
                      <AwesomeButton
                        action={() => {
                          navigate(`/juegos/todos`)
                        }}
                        type="primary"
                      >
                        Ingresar a la tiendita
                      </AwesomeButton>
                    </div>
                    <span className="flex-1 inline-block mt-3 font-sans text-sm text-left text-white uppercase">
                      (para ventas por menor en la provincia)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="opacity-75">
        <BackgroundSlider />
      </div>
      <div className="opacity-50">
        <BackgroundSlider2
          initDelay={3}
          transition={3}
          duration={5}
          images={[
            "juegos.png",
            "22.png",
            "3.png",
            "34.png",
            "40.png",
            "42.png",
          ]}
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
      </div>
    </>
  )
}

export default HomeHeroCompoent
