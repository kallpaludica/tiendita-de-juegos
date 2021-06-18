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
  const [isToggled, setToggle] = useState(true)

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
          <div className="relative z-10 flex flex-row w-full min-h-screen pt-24 mx-auto border-t border-gray-900 md:px-3 2xl:max-w-7xl">
            <animated.div
              style={fade}
              className="hidden px-3 overflow-y-auto text-left filter-menu w-80 lg:block"
            >
              <AlgoliaSearch />
            </animated.div>
            <div className="relative w-full px-2 mx-auto duration-700 md:py-5 md:px-2">
              <div className="relative p-6 px-0 pt-0 mx-auto">
                <div className="relative z-50 flex mb-3 space-x-1 bg-white lg:sticky md:space-x-3 md:pb-6 md:px-3">
                  <button
                    tabIndex="0"
                    className="items-center justify-center hidden px-5 py-1 font-sans text-sm font-bold text-white duration-700 bg-indigo-600 rounded-md cursor-pointer lg:flex hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus:ring-yellow-500 focus-visible:ring-opacity-75"
                    onClick={() => setToggle(!isToggled)}
                  >
                    Filtros
                  </button>
                  <div className="relative hidden w-full md:block">
                    <SearchBox
                      className="w-full mx-auto"
                      translations={{
                        submitTitle: "Iniciar búsqueda",
                        resetTitle: "Reiniciar búsqueda",
                        placeholder: "Buscador",
                        noResults: "Sin resultados",
                      }}
                    />
                    <div className="absolute top-0 right-0 hidden m-1 mr-10 2xl:block">
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
                              : `${nbHits.toLocaleString()} resultados en ${processingTimeMS.toLocaleString()}ms 🥳`
                          },
                        }}
                      />
                    </div>
                  </div>
                  <HitsPerPage
                    defaultRefinement={3}
                    items={[
                      { value: 3, label: "Mostrando 3" },
                      { value: 9, label: "Mostrando 9" },
                      { value: 24, label: "Mostrando 24" },
                      { value: 100, label: "Mostrando 100" },
                    ]}
                  />
                  <SortBy
                    defaultRefinement="juegos"
                    items={[
                      { value: "juegos", label: "Nombre (A a la Z)" },
                      {
                        value: "juegos_precio_asc",
                        label: "Precio (Más económicos)",
                      },
                      {
                        value: "juegos_precio_desc",
                        label: "Precio (Más caros)",
                      },
                      {
                        value: "juegos_edades_asc",
                        label: "Edades (Más chicos)",
                      },
                      {
                        value: "juegos_edades_desc",
                        label: "Edades (Más grandes)",
                      },
                    ]}
                  />
                  <div>
                    <button
                      onClick={handleToggle}
                      className="items-center justify-center hidden px-5 py-1 font-sans text-sm font-bold text-white duration-700 bg-indigo-600 rounded-md cursor-pointer h-9 md:flex hover:bg-indigo-700 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus:ring-yellow-500 focus-visible:ring-opacity-75"
                    >
                      <div
                        className={
                          isActive
                            ? "flex items-center justify-center"
                            : "hidden "
                        }
                      >
                        <HiViewGrid className="mr-1 text-2xl " />
                        Grilla
                      </div>
                      <div
                        className={
                          isActive
                            ? "hidden "
                            : "flex items-center justify-center"
                        }
                      >
                        <TiThList className="mr-1 text-2xl" />
                        Lista
                      </div>
                    </button>
                  </div>
                </div>
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
