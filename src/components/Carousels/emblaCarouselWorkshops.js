import React, { useState, useEffect, useCallback } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import CarouselAboutPage from "@components/Queries/CarouselAboutPage"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"
export const DotButton = ({ selected, onClick }) => (
  <button
    aria-label="Seleccionar item"
    className={`embla__dots_about md:h-5 shadow-lg h-4 md:w-5 w-4 flex justify-center items-center bg-gray-200 m-1 rounded-full ${
      selected ? "active" : ""
    }`}
    type="button"
    onClick={onClick}
  />
)

export const PrevButton = ({ enabled, onClick }) => (
  <button
    className="absolute bottom-0 left-0 z-10 w-10 p-1 pb-2 text-gray-900 transform cursor-pointer fill-current"
    onClick={onClick}
    disabled={!enabled}
  >
    <FaChevronLeft className="text-3xl" />
  </button>
)

export const NextButton = ({ enabled, onClick }) => (
  <button
    className="absolute bottom-0 right-0 z-10 w-10 p-1 pb-2 text-gray-900 transform cursor-pointer fill-current"
    onClick={onClick}
    disabled={!enabled}
  >
    <FaChevronRight className="text-3xl" />
  </button>
)

Autoplay.globalOptions = { delay: 6000 }

const EmblaCarouselWorkshops = ({ hit }) => {
  // const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])
  const [viewportRef, embla] = useEmblaCarousel(
    { skipSnaps: false, loop: true },
    [Autoplay()]
  )
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false)
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false)
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState([])

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla])
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla])
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  )

  const onSelect = useCallback(() => {
    if (!embla) return
    setSelectedIndex(embla.selectedScrollSnap())
    setPrevBtnEnabled(embla.canScrollPrev())
    setNextBtnEnabled(embla.canScrollNext())
  }, [embla, setSelectedIndex])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])
  return (
    <>
      <div className="max-w-3xl overflow-hidden bg-white rounded-lg shadow-xl embla">
        <div className="embla__viewport" ref={viewportRef}>
          <div className=" embla__container">
            <CarouselAboutPage />
          </div>
        </div>
        <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
        <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
        <div className="flex justify-center py-2 list-none">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  )
}

export default EmblaCarouselWorkshops
