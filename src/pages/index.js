import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import HeroWave from "../components/HeroWave"
import tw from "twin.macro"
import styled from "@emotion/styled"
import "../components/VideoReact.css"

const Hero = styled.div`
  ${tw`relative flex flex-col items-center justify-center w-full mx-auto text-orange-600 bg-orange-500`}
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

const PageTitle = styled.h1`
  ${tw`pb-12 font-mono text-5xl font-bold text-left text-white`}
`

export default () => {
  return (
    <Layout>
      <HeroWave
        heading="Kallpa Lúdica"
        pattern="bg-orange-600 text-orange-500"
        svg="M0,128L720,256L1440,128L1440,320L720,320L0,320Z"
      />

      <div className="flex flex-col items-center justify-center max-w-3xl p-3 py-2 mx-auto">
        <Link
          to={`/juegos/`}
          className="block px-12 py-3 my-6 font-mono text-2xl font-bold text-center text-white transition-all duration-500 bg-orange-500 rounded-md shadow-md hover:bg-orange-100 hover:text-orange-900"
        >
          Conocé la tienda de juegos
        </Link>
      </div>
    </Layout>
  )
}
