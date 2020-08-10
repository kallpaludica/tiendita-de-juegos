import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { IoIosArrowDown } from "react-icons/io"
import Img from "gatsby-image"
const HeroImageWave = (props) => (
  <>
    <Hero className={`${props.pattern} pattern-cross-dots-md`}>
      <HeroContent>
        <Title>{props.heading}</Title>
        <SubTitle>De {props.author}</SubTitle>
        {props.anchor && (
          <AnchorLink
            href="#contenido"
            className="inline-block mt-6 text-3xl text-center text-white hover:text-green-200"
          >
            <IoIosArrowDown />
          </AnchorLink>
        )}
      </HeroContent>
      <Image>
        <Img
          title={props.heading}
          alt={props.heading}
          className="absolute"
          fluid={props.url}
        />
      </Image>
      <Wave>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fillOpacity="1"
            className="text-white fill-current "
            d={props.svg}
          ></path>
        </svg>
      </Wave>
    </Hero>
  </>
)

export default HeroImageWave

const HeroContent = styled.div`
  ${tw`relative z-50 block pt-12 pb-2`}
`

const Image = styled.div`
  ${tw`relative `}

  .gatsby-image-wrapper {
    z-index: 99;
  }
`

const Title = styled.h1`
  ${tw`font-mono text-5xl text-white`}
`

const SubTitle = styled.h3`
  ${tw`font-mono text-2xl text-white`}
`

const Hero = styled.div`
  ${tw`relative flex flex-col items-center justify-center w-full pt-24 pb-32 mx-auto`}
`

const Wave = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  overflow: hidden;
  line-height: 0;

  .svg {
    position: relative;
    display: block;
    width: calc(140% + 1.3px);
    height: 208px;
  }
`
