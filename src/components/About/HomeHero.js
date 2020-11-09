import { graphql, navigate, useStaticQuery } from "gatsby"
import BackgroundSlider2 from "gatsby-image-background-slider"
import React from "react"
import { AwesomeButton } from "react-awesome-button"
import BackgroundSlider from "../HomeSlider"
import TextLoop from "react-text-loop"
import { Link } from "gatsby"

const HomeHeroCompoent = () => {
  return (
    <>
      <div className="relative z-50 flex flex-col items-center justify-start w-full py-20 pt-12">
        <section className="container flex flex-col flex-1 h-full mx-auto">
          <div className="flex flex-col flex-1 w-full h-full max-w-6xl px-3 mx-auto">
            <div className="flex items-start flex-1 pb-12">
              <div className="flex items-center flex-1 max-w-xl py-8 font-mono">
                <div className="col-span-2 text-left">
                  <h1 className="text-3xl leading-9 text-left text-white md:text-4xl">
                    Tienda de juegos{" "}
                    <TextLoop interval={2500} fade={true}>
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
                        to={`/tienda-de-juegos/colecciones/cooperativos`}
                        className="text-indigo-300 hover:text-white hover:underline"
                      >
                        cooperativos
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
                      </AwesomeButton>
                    </div>
                  </div>
                  <p className="block pt-6 font-sans text-xl text-left text-white transition-all duration-200 transform opacity-50 hover:opacity-100">
                    <Link
                      to={`/quienes-somos`}
                      className="inline-block text-white underline hover:text-white"
                    >
                      Compartir la potencia de jugar.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div style={{ opacity: 0.95 }}>
        <BackgroundSlider />
      </div>
      <div style={{ opacity: 0.35 }}>
        <BackgroundSlider2
          initDelay={2}
          transition={2}
          duration={5}
          images={[
            "dafault-kallpa.jpg",
            "juegos.png",
            "47.png",
            "23.png",
            "29.png",
            "3.png",
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
