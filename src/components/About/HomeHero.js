import { navigate } from "gatsby"
import React from "react"
import SliderHome from "../Sliders/SliderHome"
import { AwesomeButton } from "react-awesome-button"
import TextLoop from "react-text-loop"
import { Link } from "gatsby"
import { AiOutlineArrowRight } from "react-icons/ai"

const HomeHeroCompoent = () => {
  return (
    <>
      <div className="relative z-50 flex flex-col items-center justify-start w-full py-20 pt-12">
        <section className="container flex flex-col flex-1 h-full mx-auto">
          <div className="flex flex-col flex-1 w-full h-full px-3 mx-auto max-w-7xl">
            <div className="flex items-start flex-1 pb-2">
              <div className="flex items-center flex-1 max-w-4xl py-8 font-mono">
                <div className="col-span-2 text-left">
                  <h1 className="text-3xl leading-9 text-left text-white md:text-4xl">
                    Comunidad de juegos{" "}
                    <TextLoop interval={3000} fade={true}>
                      <Link
                        to={`/tienda-de-juegos/colecciones/familiares`}
                        className="text-indigo-400 hover:text-white hover:underline"
                      >
                        familiares
                      </Link>
                      <Link
                        to={`/tienda-de-juegos/colecciones/educativos`}
                        className="text-amber-400 hover:text-white hover:underline"
                      >
                        educativos
                      </Link>

                      <Link
                        to={`/tienda-de-juegos/colecciones/terapeuticos`}
                        className="text-emerald-400 hover:text-white hover:underline"
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
                          navigate(`/tienda-de-juegos/encontrador`)
                        }}
                        type="primary"
                      >
                        Ingresar a la Tienda
                        <AiOutlineArrowRight className="inline-block ml-2 text-2xl" />
                      </AwesomeButton>
                    </div>
                  </div>
                  <p className="block pt-8 font-serif text-xl text-left text-white transition-all duration-200 transform opacity-100">
                    <a className="inline-block text-white" href="#comunidad">
                      Compartimos la potencia de jugar.
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <SliderHome />
    </>
  )
}

export default HomeHeroCompoent
