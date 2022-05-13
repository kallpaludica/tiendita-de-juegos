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
import Layout from "@components/layout"
import PostPreview from "@components/CardGameSearchResult/CardGameSearchResult"
import Seo from "@components/seo"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import { HiViewGrid } from "react-icons/hi"
import { TiThList } from "react-icons/ti"
import { useSpring, animated } from "react-spring"
import OffcanvasFilters from "@components/OffcanvasFilters/OffcanvasFilters"
import AlgoliaSearch from "@components/Search/AlgoliaCollapseSearch"


const searchClient = algoliasearch(
  "REF3SMUMO1",
  "7c4c56c7384927744e0746a4b31a7ff2"
)

const EncontrarComponent = () => {
  const [isToggled, setToggle] = useState(true)

  const fade = useSpring({
    opacity: isToggled ? "1" : "0",
    position: isToggled ? "sticky" : "absolute",
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
            <OffcanvasFilters />
          </div>
          <div className="sticky z-50 flex flex-col-reverse px-2 pt-6 pb-4 mx-auto mb-3 space-y-2 bg-white top-16 md:px-7 2xl:max-w-7xl sm:flex-row sm:space-y-0 sm:space-x-1 md:space-x-3">
            <button
              tabIndex="0"
              className={`${
                isToggled
                  ? "bg-blue-500 hover:bg-blue-700"
                  : "bg-indigo-600 hover:bg-indigo-700"
              } items-center justify-center hidden px-5 py-1 font-serif text-sm font-bold text-white duration-700  rounded-md cursor-pointer lg:flex  focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus:ring-yellow-500 focus-visible:ring-opacity-75`}
              onClick={() => setToggle(!isToggled)}
            >
              <TiThList className="mr-1 text-xl" />
              Filtros
            </button>
            <div className="relative w-full">
              <SearchBox
                className="w-full mx-auto"
                showLoadingIndicator 
                translations={{
                  submitTitle: "Iniciar búsqueda",
                  resetTitle: "Reiniciar búsqueda",
                  placeholder: "Buscador",
                  noResults: "Sin resultados",
                }}
              />
              <div className="absolute right-0 mr-8 font-serif text-base font-bold text-gray-500 top-1">
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
            <div className="grid items-center justify-end w-full grid-cols-2 gap-2 md:space-x-2 md:w-auto md:flex">
              <div className="flex items-center justify-end w-full md:w-auto">
                <div className="w-full md:w-44">
                  <HitsPerPage
                    defaultRefinement={2}
                    items={[
                      { value: 2, label: "Mostrar de a 2 " },
                      { value: 10, label: "Mostrar de a 10 " },
                      { value: 20, label: "Mostrar de a 20 " },
                      { value: 30, label: "Mostrar de a 30 " },
                      { value: 50, label: "Mostrar de a 50 " },
                      { value: 100, label: "Mostrar de a 100 " },
                    ]}
                  />
                </div>
              </div>
              <div className="w-full m-0 md:w-64">
                <SortBy
                  defaultRefinement="juegos"
                  items={[
                    { value: "juegos", label: "Ordenado A-Z" },
                    {
                      value: "juegos_precio_asc",
                      label: "< Precio más bajo",
                    },
                    {
                      value: "juegos_precio_desc",
                      label: "> Precio más alto",
                    },
                    {
                      value: "juegos_edades_asc",
                      label: "< Edades más chiques",
                    },
                    {
                      value: "juegos_edades_desc",
                      label: "> Edades más grandes",
                    },
                  ]}
                />
              </div>
            </div>
            <div className="hidden">
              <button
                onClick={handleToggle}
                className="items-center justify-center hidden px-5 py-1 font-serif text-sm font-bold text-white duration-700 bg-indigo-600 rounded-md cursor-pointer h-9 md:flex hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus:ring-yellow-500 focus-visible:ring-opacity-75"
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
          <div className="relative z-10 flex flex-row w-full min-h-screen pt-16 mx-auto md:px-3 2xl:max-w-7xl">
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
