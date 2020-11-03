import styled from "@emotion/styled"
import { graphql, useStaticQuery } from "gatsby"
import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { animated, useSpring } from "react-spring"
import tw from "twin.macro"
import GameCard from "../../components/GameCard"
import GamesAside from "../../components/Games/GameMenu"
import GameSort from "../../components/Games/GameSort"
import HeroWave from "../../components/HeroWave"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai"
import { sortBy } from "lodash"
import useGameCollections from "../../components/hooks/useGameCollections"
import useGameCategories from "../../components/hooks/useGameCategories"
import useGamePublishers from "../../components/hooks/useGamePublishers"

const AllPage = (props) => {
  // Query de todos los artículos
  const queryResults = useStaticQuery(graphql`
    query AllQuery {
      collection: allContentfulArticulos(
        sort: { fields: [title], order: ASC }
      ) {
        edges {
          node {
            id
            title
            slug
            GameBuyPrice
            GamePlayers
            GameDuration
            GameAuthor
            GameAges
            stock
            categoria {
              title
              slug
            }
            publisher {
              title
              slug
            }
            colecciones {
              title
              slug
            }
            imagenDestacada {
              fixed(width: 300, height: 230) {
                ...GatsbyContentfulFixed
              }
              fluid(maxWidth: 550) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  const colecciones = useGameCollections();
  const categorias = useGameCategories();
  const publishers = useGamePublishers();

  // Estado que contiene la lista que se muestra
  const [data, setData] = useState([]);
  const [filter, setFilter] = useState({
    key: '',
    value: ''
  })
  const [isToggled, setToggle] = useState(false)
  const sortDESC = useSpring({
    display: isToggled ? "block" : "none",
    opacity: isToggled ? "1" : "0",
    config: { mass: 5, tension: 200, friction: 80 },
  })
  const sortASD = useSpring({
    display: isToggled ? "none" : "block",
    opacity: isToggled ? "0" : "1",
    config: { mass: 5, tension: 200, friction: 80 },
  })

  // 'HOOK' que ejecuta cada vez que 'queryResults' cambia su valor
  // Si 'queryResults' tiene datos, guardamos la lista como estado
  useEffect(() => {
    if (queryResults.collection.edges) {
      const parsed = queryResults.collection.edges.map(game => game.node) // Quito el nivel que dice 'nodes'
      setData(parsed)
      console.log("AllPage -> parsed", parsed)
    }
  }, [queryResults])

  // Funciones auxiliares para ordenar
  const sortByTitle = () => {
    const sorted = sortBy(data, 'title')
    setData(sorted);
  }
  const sortByPrice = () => {
    const sorted = sortBy(data, 'GameBuyPrice')
    setData(sorted);
  }
  const sortByLength = () => {
    const sorted = sortBy(data, 'GameDuration')
    setData(sorted);
  }
  const sortByAge = () => {
    const sorted = sortBy(data, 'GameAges')
    setData(sorted);
  }
  // Para filtrar por colección, modalidad o editorial
  // Si no hay filtro seteado, siempre devuelve true
  // Caso contrario, evalúa si corresponde mostrar o filtrar el juego
  const filterFn = (item) => {
    let result = false;
    if (filter.key !== '' && filter.value !== '') {
      if (filter.key === 'colecciones') {
        const collectionAux = item[filter.key]?.find(col => col.slug === filter.value);
        if (collectionAux) {
          result = true;
        }
      } else {
        result = item[filter.key] && item[filter.key].slug === filter.value
      }
    } else {
      result = true;
    }
    return result;
  }

  // Invierte la lista
  const reverseList = () => {
    setToggle(!isToggled)
    setData([...data.reverse()]);
  }

  return (
    <Layout>
      <SEO title="Tiendita de juegos" />
      <Helmet>
        <body className="games" />
      </Helmet>
      <HeroWave pattern="bg-blue-600 text-blue-500" />
      <ContentSidebar>
        <Aside>
          <GamesAside setFilter={setFilter} colecciones={colecciones} categorias={categorias} publishers={publishers} />
        </Aside>
        <Main>
          <PageSticky>
            <MainTitle>Por Título</MainTitle>
          </PageSticky>
          <div className="relative flex flex-col justify-start border-b-2 border-blue-300 md:flex-row sm:py-0 sm:pt-0">
            <GameSort 
              sortByTitle={sortByTitle} 
              sortByPrice={sortByPrice} 
              sortByLength={sortByLength} 
              sortByAge={sortByAge} 
            />
            <button
              className="relative bottom-0 right-0 flex items-center justify-center px-4 py-3 text-white bg-blue-500 outline-none md:absolute focus:outline-none hover:bg-blue-600"
              onClick={reverseList}
            >
              <span className="font-sans font-bold">
                <animated.div style={sortDESC}>
                  De la Z a la A
                  <AiOutlineArrowUp className="inline-block ml-1 text-lg" />
                </animated.div>
                <animated.div style={sortASD}>
                  De la A a la Z
                  <AiOutlineArrowDown className="inline-block ml-1 text-lg" />
                </animated.div>
              </span>
            </button>
          </div>
          <animated.div style={sortASD}>
            <Container id="contenido">
              {
                data
                  .filter(filterFn)
                  .map((item, i) => (
                    <GameCard card={item} key={item.slug} />
                  ))
              }
            </Container>
          </animated.div>
        </Main>
      </ContentSidebar>
    </Layout>
  )
}

export default AllPage

const Container = styled.div`
  ${tw`grid w-full grid-cols-1 gap-4 p-3 pt-6 pb-12 mx-auto bg-white sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3`}
`

const PageSticky = styled.div`
  ${tw`top-0 z-50 pt-3 `}
`

const ContentSidebar = styled.div`
  ${tw`relative z-10 flex flex-row-reverse w-full max-w-6xl mx-auto -mt-16`}
`

const Aside = styled.aside`
  ${tw`hidden w-64 md:block `}
`

const Main = styled.section`
  ${tw`relative w-full px-2 mx-auto md:px-0`}
`

const MainTitle = styled.h2`
  ${tw`font-sans text-3xl font-bold text-center md:text-left `}
  ${tw`pb-6 text-white md:pl-3`}
`
