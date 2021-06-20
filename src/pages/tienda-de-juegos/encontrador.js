import algoliasearch from "algoliasearch"
import React, { useState } from "react"
import {
  InstantSearch,
  Hits,
  SortBy,
  HitsPerPage,
  PoweredBy,
  Stats,
  SearchBox,
  Pagination,
} from "react-instantsearch-dom"
import Layout from "../../components/layout"
import PostPreview from "../../components/EncontrarComponent"
import Seo from "../../components/seo"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import "../../styles/algolia.css"
import { HiViewGrid } from "react-icons/hi"
import { TiThList } from "react-icons/ti"
import { useSpring, animated } from "react-spring"
import SidebarFilters from "../../components/SidebarFilters"
import AlgoliaSearch from "../../components/Search/AlgoliaSearch"

const searchClient = algoliasearch(
  "REF3SMUMO1",
  "7c4c56c7384927744e0746a4b31a7ff2"
)

const EncontrarComponent = () => {
  const [isToggled, setToggle] = useState(false)

  const fade = useSpring({
    opacity: isToggled ? "1" : "0",
    position: isToggled ? "sticky" : "absolute",
    maxHeight: isToggled ? "90vh" : "90vh",
  })

  const [isActive, setActive] = useState(false)

  const handleToggle = () => {
    setActive(!isActive)
  }

  return (
    <>
      <Layout>
        <Seo title="Buscar" />
        <Helmet>
          <body className="ingame searcher" />
        </Helmet>
        <InstantSearch searchClient={searchClient} indexName="juegos">
          <div className="menu-2">
            <SidebarFilters />
          </div>
          <div className="relative z-50 flex flex-col-reverse px-2 pt-24 pb-12 mx-auto mb-3 space-y-2 bg-white md:px-8 md:pb-0 2xl:max-w-7xl sm:flex-row sm:space-y-0 sm:space-x-1 md:space-x-3">
            <button
              tabIndex="0"
              className={`${
                isToggled
                  ? "bg-green-500 hover:bg-green-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } items-center justify-center hidden px-5 py-1 font-sans text-sm font-bold text-white duration-700  rounded-md cursor-pointer lg:flex  focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus:ring-yellow-500 focus-visible:ring-opacity-75`}
              onClick={() => setToggle(!isToggled)}
            >
              <TiThList className="mr-1 text-xl" />
              Filtros
            </button>
            <div className="relative w-full">
              <SearchBox
                className="w-full mx-auto"
                translations={{
                  submitTitle: "Iniciar búsqueda",
                  resetTitle: "Reiniciar búsqueda",
                  placeholder: "Buscador",
                  noResults: "Sin resultados",
                }}
              />
              <div className="absolute right-0 mr-8 font-bold text-gray-500 top-1">
                <Stats
                  translations={{
                    stats(
                      nbHits,
                      processingTimeMS,
                      nbSortedHits,
                      areHitsSorted
                    ) {
                      return areHitsSorted && nbHits !== nbSortedHits
                        ? `${nbSortedHits.toLocaleString()} relevant results sorted out of ${nbHits.toLocaleString()} ${processingTimeMS.toLocaleString()}ms`
                        : `${nbHits.toLocaleString()} juegos`
                    },
                  }}
                />
              </div>
            </div>
            <div className="grid w-full grid-cols-2 gap-2 space-x-2">
              <HitsPerPage
                defaultRefinement={10}
                items={[
                  { value: 2, label: "Mostrando de a 2" },
                  { value: 10, label: "Mostrando de a 10" },
                  { value: 20, label: "Mostrando de a 20" },
                  { value: 30, label: "Mostrando de a 30" },
                  { value: 50, label: "Mostrando de a 50" },
                  { value: 100, label: "Mostrando de a 100" },
                ]}
              />
              <SortBy
                defaultRefinement="juegos"
                items={[
                  { value: "juegos", label: "A-Z" },
                  {
                    value: "juegos_precio_asc",
                    label: "< Precio",
                  },
                  {
                    value: "juegos_precio_desc",
                    label: "> Precio",
                  },
                  {
                    value: "juegos_edades_asc",
                    label: "< Edades",
                  },
                  {
                    value: "juegos_edades_desc",
                    label: "> Edades",
                  },
                ]}
              />
            </div>
            <div className="hidden">
              <button
                onClick={handleToggle}
                className="items-center justify-center hidden px-5 py-1 font-sans text-sm font-bold text-white duration-700 bg-indigo-600 rounded-md cursor-pointer h-9 md:flex hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus:ring-yellow-500 focus-visible:ring-opacity-75"
              >
                <div
                  className={
                    isActive ? "flex items-center justify-center" : "hidden "
                  }
                >
                  <HiViewGrid className="mr-1 text-2xl " />
                  Grilla
                </div>
                <div
                  className={
                    isActive ? "hidden " : "flex items-center justify-center"
                  }
                >
                  <TiThList className="mr-1 text-2xl" />
                  Lista
                </div>
              </button>
            </div>
          </div>
          <div className="relative z-10 flex flex-row w-full min-h-screen mx-auto md:px-3 2xl:max-w-7xl">
            <animated.div
              style={fade}
              className="hidden px-3 text-left filter-menu w-80 lg:block"
            >
              <AlgoliaSearch />
            </animated.div>
            <div className="relative w-full px-2 mx-auto duration-700 md:py-5 md:pt-0 md:px-2">
              <div className="relative p-6 px-0 pt-0 mx-auto">
                <Fade delay={800}>
                  <Hits
                    className={
                      isActive
                        ? "w-full md:px-3 mx-auto mt-0 mb-12 grilla"
                        : "w-full md:px-3 mx-auto mt-0 mb-12 list"
                    }
                    hitComponent={PostPreview}
                  />
                </Fade>
                <Pagination padding={1} />
                <div className="bottom-0 right-0 flex items-center justify-center py-6 md:py-0 md:absolute opacity-30">
                  <PoweredBy />
                </div>
              </div>
            </div>
          </div>
        </InstantSearch>
      </Layout>
    </>
  )
}

export default EncontrarComponent
