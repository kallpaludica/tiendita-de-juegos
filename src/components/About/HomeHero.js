import { graphql, navigate, useStaticQuery } from "gatsby"
import BackgroundSlider2 from "gatsby-image-background-slider"
import React from "react"
import { AwesomeButton } from "react-awesome-button"
import BackgroundSlider from "../HomeSlider"
import TextLoop from "react-text-loop"
import { Link } from "gatsby"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { AiOutlineArrowRight } from "react-icons/ai"

const HomeHeroCompoent = () => {
  return (
    <>
      <div className="relative z-50 flex flex-col items-center justify-start w-full py-20 pt-12">
        <section className="container flex flex-col flex-1 h-full mx-auto">
          <div className="flex flex-col flex-1 w-full h-full max-w-6xl px-3 mx-auto">
            <div className="flex items-start flex-1 pb-2">
              <div className="flex items-center flex-1 max-w-xl py-8 font-mono">
                <div className="col-span-2 text-left">
                  <h1 className="text-3xl leading-9 text-left text-white md:text-4xl">
                    Tienda de juegos{" "}
                    <TextLoop interval={3000} fade={true}>
                      <Link
                        to={`/tienda-de-juegos/colecciones/familiares`}
                        className="text-blue-300 hover:text-white hover:underline"
                      >
                        familiares
                      </Link>
                      <Link
                        to={`/tienda-de-juegos/colecciones/educativos`}
                        className="text-orange-300 hover:text-white hover:underline"
                      >
                        educativos
                      </Link>
                      <Link
                        to={`/tienda-de-juegos/modalidades/cooperativo`}
                        className="text-indigo-300 hover:text-white hover:underline"
                      >
                        cooperativos
                      </Link>
                      <Link
                        to={`/tienda-de-juegos/modalidades/abstractos`}
                        className="text-red-300 hover:text-white hover:underline"
                      >
                        abstractos
                      </Link>
                      <Link
                        to={`/tienda-de-juegos/colecciones/terapeuticos`}
                        className="text-green-300 hover:text-white hover:underline"
                      >
                        terapéuticos
                      </Link>
                    </TextLoop>{" "}
                    <br />
                    en la Provincia de Salta.
                  </h1>

                  <div className="flex flex-col justify-start mt-5">
                    <div className="mr-3 ">
                      <AwesomeButton
                        action={() => {
                          navigate(`/tienda-de-juegos/disponibles`)
                        }}
                        type="primary"
                      >
                        Ingresar a la tiendita
                        <AiOutlineArrowRight className="inline-block ml-2 text-2xl" />
                      </AwesomeButton>
                    </div>
                  </div>
                  <p className="block pt-8 font-sans text-xl text-left text-white transition-all duration-200 transform opacity-100">
                    <AnchorLink
                      className="inline-block text-white hover:text-white"
                      href="#redes"
                    >
                      Compartimos la potencia de jugar.
                    </AnchorLink>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ opacity: 0.2 }}>
        <BackgroundSlider />
      </div>
      <div style={{ opacity: 0.35 }}>
        <BackgroundSlider2
          initDelay={2}
          transition={2}
          duration={5}
          images={[
            "home-slider-1.jpg",
            "home-slider-2.jpg",
            "home-slider-3.jpg",
            "home-slider-4.jpg",
            "home-slider-5.jpg",
            "home-slider-6.jpg",
            "home-slider-7.jpg",
            "home-slider-8.jpg",
            "home-slider-9.jpg",
            "home-slider-10.jpg",
            "home-slider-11.jpg",
            "home-slider-12.jpg",
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
