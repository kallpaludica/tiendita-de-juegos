import React from "react"

import BackgroundSlider from "../HomeSlider"

const HomeHeroCompoent = () => {
  return (
    <>
      <div class="w-full justify-center items-center py-20 flex flex-col relative z-50 ">
        <section class="container mx-auto h-full flex-1 flex flex-col">
          <div class="px-6 h-full flex flex-col flex-1">
            <div class="flex items-center flex-1">
              <div class="flex-1 py-8 pt-12 flex max-w-lg mx-auto items-center font-mono">
                <div class="col-span-2">
                  <h1 class="font-extrabold text-4xl md:text-5xl leading-tight text-white">
                    Potencia = Kallpa
                  </h1>
                  <p class="pt-6 text-white text-xl font-sans">
                    Un entramado donde nos encontramos caminando en relación al
                    juego, el aprendizaje y la recreación.
                  </p>
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
