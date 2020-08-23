import React from "react"
import { Helmet } from "react-helmet"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import HeroWave from "../../components/HeroWave"
import GamesAll from "../../components/Games/GamesSorted"
import GamesAside from "../../components/Games/GameMenu"
import GameSort from "../../components/Games/GameSort"

import tw from "twin.macro"
import styled from "@emotion/styled"

const PreciosPage = () => {
  return (
    <Layout>
      <SEO title="Tiendita de juegos" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave
        pattern="bg-orange-600 text-orange-500"
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <ContentSidebar>
        <Aside>
          <GamesAside />
        </Aside>
        <Main>
          <GameSort />
          <MainTitle>Todos los juegos</MainTitle>
          <GamesAll />
        </Main>
      </ContentSidebar>
    </Layout>
  )
}

export default PreciosPage

const ContentSidebar = styled.div`
  ${tw`flex max-w-6xl mx-auto`}
`

const Aside = styled.aside`
  ${tw`hidden w-56 pl-3 md:block `}
`

const Main = styled.section`
  ${tw`relative`}
`

const MainTitle = styled.h2`
  ${tw`pl-5 mt-2 font-serif text-3xl font-bold text-left border-b border-orange-300`}
  ${tw`text-orange-500`}
`
