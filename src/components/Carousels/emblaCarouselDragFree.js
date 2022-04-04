import React, { useState, useEffect, useCallback } from "react"
import { PrevButton, NextButton } from "./EmblaCarouselButtons"
import useEmblaCarousel from "embla-carousel-react"
import CarouselComunidadRecursos from "@components/Queries/CarouselComunidadRecursos"
import { DotButton, PrevButton, NextButton } from "./emblaCarouselButtons"
const EmblaCarouselDragFree = ({ slides }) => {
  const [viewportRef, embla] = useEmblaCarousel({
    dragFree: true,
    loop: true,
    containScroll: "trimSnaps",
  })
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
  }, [embla])

  useEffect(() => {
    if (!embla) return
    onSelect()
    setScrollSnaps(embla.scrollSnapList())
    embla.on("select", onSelect)
  }, [embla, setScrollSnaps, onSelect])

  return (
    <div className="max-w-2xl p-2 !bg-transparent embla ">
      <div className="embla__viewport" ref={viewportRef}>
        <div className="embla__container justify-between -ml-2.5">
          <CarouselComunidadRecursos />
        </div>
      </div>
      <PrevButton onClick={scrollPrev} enabled={prevBtnEnabled} />
      <NextButton onClick={scrollNext} enabled={nextBtnEnabled} />
      <div className="embla__dots">
        {scrollSnaps.map((_, index) => (
          <DotButton
            key={index}
            selected={index === selectedIndex}
            onClick={() => scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default EmblaCarouselDragFree
