import { AwesomeButton } from "react-awesome-button"
import { useStaticQuery, graphql, navigate, Link } from "gatsby"

import React, { useEffect } from "react"
import BackgroundSlider from "../HomeSlider"

const HomeHeroCompoent = () => {
  return (
    <>
      <div class="w-full justify-starts items-center py-20 pt-12 flex flex-col relative z-50 ">
        <section class="container mx-auto h-full flex-1 flex flex-col">
          <div class="px-6 h-full flex flex-col flex-1">
            <div class="flex items-start flex-1 pb-12">
              <div class="flex-1 py-8  flex max-w-sm items-center font-mono">
                <div class="col-span-2 text-left">
                  <h1 class="text-2xl md:text-4xl leading-tight text-white text-left">
                    .Compartiendo la <br />
                    potencia de jugar.
                  </h1>
                  <p class="pt-6 text-white text-2xl font-sans text-left">
                    Abrimos nuestra tienda de juegos para la provincia de Salta.
                  </p>

                  <div className="flex flex-col justify-start mt-5">
                    <div className="mr-3 ">
                      <AwesomeButton
                        action={() => {
                          navigate(`/quienes-somos`)
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
      <div className="opacity-25">
        <BackgroundSlider />
      </div>
    </>
  )
}

export default HomeHeroCompoent
