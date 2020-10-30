import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled"
import FormatText from "./wysiwyg"
import { Link } from "gatsby"

const HeroWave = (props) => (
  <>
    <Hero className={`${props.pattern} pattern-cross-dots-md`}>
      {props.heading && (
        <HeroContent>
          <Title>{props.heading}</Title>
          {props.subtitle && (
            <Subtitle className="flex items-start max-w-3xl mx-auto font-mono text-white">
              <FormatText FormatText={props.subtitle} />
            </Subtitle>
          )}
          {props.back && (
            <Back className="flex items-start justify-start">
              <Link to="/tienda-de-juegos">{props.back}</Link>
            </Back>
          )}
        </HeroContent>
      )}

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

export default HeroWave

const HeroContent = styled.div`
  ${tw`relative z-50 flex flex-col items-start justify-start w-full max-w-6xl px-6 pt-0 pb-0 mx-auto text-left md:pt-12 md:pb-20`}
`

const Title = styled.h1`
  ${tw`font-mono text-5xl text-white`}
`

const Subtitle = styled.div`
  ${tw`w-full max-w-2xl pb-1 m-0 font-sans text-xl text-white`}
  p {
    ${tw`text-white `}
  }
`

const Back = styled.div`
  ${tw`py-3`}

  a {
    ${tw`p-3 font-sans text-base font-bold text-white border-b border-white hover:bg-white hover:text-orange-500`}
  }
`

const Hero = styled.div`
  ${tw`relative flex flex-col items-start justify-center w-full pt-32 pb-16 mx-auto`}
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
