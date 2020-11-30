import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FormatText from "../wysiwyg"
import styled from "@emotion/styled"
import tw from "twin.macro"
import makeCarousel from "react-reveal/makeCarousel"
import Fade from "react-reveal/Fade"
const SliderHomeComponent = () => {
  const CarouselUI = ({ children }) => <Container>{children}</Container>
  const Carousel = makeCarousel(CarouselUI)

  const data = useStaticQuery(graphql`
    query SliderHomeComponenttQuery {
      about: contentfulSobreElProyecto(slug: { eq: "quienes-somos" }) {
        id
        title
        childContentfulSobreElProyectoTextoPrincipalRichTextNode {
          json
        }
      }
    }
  `)

  return (
    <>
      <h1 className="hidden max-w-6xl pb-6 mx-auto font-mono text-6xl">
        {data.about.title}
      </h1>

      <About className="">
        <FormatText
          FormatText={
            data.about.childContentfulSobreElProyectoTextoPrincipalRichTextNode
          }
        />
      </About>
      <Carousel
        defaultWait={9000}
        maxTurns={100} /*wait for 1000 milliseconds*/
      >
        <Fade>as</Fade>
        <Fade>asdasdasd</Fade>
        <Fade>asdfasdf</Fade>
        <Fade>asdgasdf</Fade>
        <Fade>dfjdghj</Fade>
      </Carousel>
    </>
  )
}

export default SliderHomeComponent

const About = styled.div`
  ${tw`max-w-3xl mx-auto font-sans text-2xl text-left `}
  p {
    ${tw`text-white`}
  }
`


const Container = styled.div`
  ${tw`relative bg-red-500`}
`
