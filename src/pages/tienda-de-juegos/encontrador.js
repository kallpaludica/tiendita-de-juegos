import algoliasearch from "algoliasearch"
import React from "react"
import {
  InstantSearch,
  Hits,
  SortBy,
  HitsPerPage,
  NumericMenu,
  RangeSlider,
  CurrentRefinements,
  ToggleRefinement,
  PoweredBy,
  Stats,
  ClearRefinements,
  SearchBox,
  RefinementList,
  Pagination,
} from "react-instantsearch-dom"
import Layout from "../../components/layout"
import PostPreview from "../../components/EncontrarComponent"
import HeroWave from "../../components/HeroWave"
import GameSort from "../../components/Games/GameSort"
import GamesAside from "../../components/Games/GameMenu"
import Seo from "../../components/seo"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import "../../styles/algolia.css"
import { Disclosure, Transition } from "@headlessui/react"
import { FiChevronDown } from "react-icons/fi"

const searchClient = algoliasearch(
  "REF3SMUMO1",
  "7c4c56c7384927744e0746a4b31a7ff2"
)

const EncontrarComponent = () => {
  return (
    <>
      <Layout>
        <Seo title="Buscar" />
        <Helmet>
          <body className="games searcher" />
        </Helmet>
        <InstantSearch searchClient={searchClient} indexName="juegos">
          <div className="relative z-10 flex flex-row w-full min-h-screen px-3 pt-6 mx-auto mt-20 md:p-0 2xl:max-w-7xl">
            <div className="relative hidden p-3 overflow-y-auto text-left w-80 xl:bg-gray-50 md:block">
              <div className="flex justify-between px-1 py-3 mb-2">
                <h3 className="pt-0 my-1 font-sans text-xl text-left text-gray-800 ">
                  Filtrado
                </h3>
                <ClearRefinements
                  translations={{
                    reset: "Reiniciar",
                  }}
                />
              </div>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? "rounded-b-none bg-yellow-100 " : ""
                      } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`}
                    >
                      <h3 className="pt-1 my-1 font-sans text-lg font-bold text-left text-indigo-500">
                        Precio
                      </h3>
                      <FiChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-800 mt-2 duration-100`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-700 ease-out"
                      enterFrom="transform opacity-0"
                      enterTo="transform opacity-100"
                      leave="transition duration-700 ease-out"
                      leaveFrom="transform opacity-100"
                      leaveTo="transform  opacity-0"
                    >
                      <Disclosure.Panel className="px-1 pt-1 text-base text-gray-700 bg-white shadow-md">
                        <NumericMenu
                          attribute="GameBuyPrice"
                          items={[
                            { label: "Hasta $500", end: 500 },
                            { label: "De $500 a $1000", start: 500, end: 1000 },
                            {
                              label: "De $1000 a $2000",
                              start: 1000,
                              end: 2000,
                            },
                            { label: "Mayores a $2000", start: 2000 },
                          ]}
                          translations={{
                            all: "Todos",
                          }}
                        />
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? "rounded-b-none bg-yellow-100 " : ""
                      } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`}
                    >
                      <h3 className="pt-1 my-1 font-sans text-lg font-bold text-left text-indigo-500">
                        Edades
                      </h3>
                      <FiChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-800 mt-2 duration-100`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-700 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-700 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-1 py-2 text-base text-gray-700 bg-white shadow-md">
                        <NumericMenu
                          attribute="GameAges"
                          items={[
                            { label: "3 a 7", start: 3, end: 7 },
                            {
                              label: "7 a 10",
                              start: 7,
                              end: 10,
                            },
                            { label: "De 10", start: 10 },
                          ]}
                          translations={{
                            all: "Para Todos",
                          }}
                        />
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? "rounded-b-none bg-yellow-100 " : ""
                      } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`}
                    >
                      <h3 className="pt-1 my-1 font-sans text-lg font-bold text-left text-indigo-500">
                        Colecciones
                      </h3>
                      <FiChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-800 mt-2 duration-100`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-700 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-700 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-1 py-2 text-base text-gray-700 bg-white shadow-md">
                        <RefinementList
                          attribute="colecciones.title"
                          operator="and"
                          translations={{
                            showMore(expanded) {
                              return expanded ? "Mostrar menos" : "Mostrar más"
                            },
                            noResults: "Sin resultados",
                            submitTitle: "Iniciar búsqueda",
                            resetTitle: "Reiniciar búsqueda",
                            placeholder: "Buscador",
                          }}
                        />
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
              <Disclosure>
                {({ open }) => (
                  <>
                    <Disclosure.Button
                      className={`${
                        open ? "rounded-b-none bg-yellow-100 " : ""
                      } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-indigo-500 focus-visible:ring-opacity-75`}
                    >
                      <h3 className="pt-1 my-1 font-sans text-lg font-bold text-left text-indigo-500">
                        Editoriales
                      </h3>
                      <FiChevronDown
                        className={`${
                          open ? "transform rotate-180" : ""
                        } w-5 h-5 text-indigo-800 mt-2 duration-100`}
                      />
                    </Disclosure.Button>
                    <Transition
                      show={open}
                      enter="transition duration-700 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-700 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="px-1 py-2 text-base text-gray-700 bg-white shadow-md">
                        <RefinementList
                          attribute="publisher.title"
                          showMore={true}
                          operator="and"
                          translations={{
                            showMore(expanded) {
                              return expanded ? "Mostrar menos" : "Mostrar más"
                            },
                            noResults: "Sin resultados",
                            submitTitle: "Iniciar búsqueda",
                            resetTitle: "Reiniciar búsqueda",
                            placeholder: "Buscador",
                          }}
                        />
                      </Disclosure.Panel>
                    </Transition>
                  </>
                )}
              </Disclosure>
            </div>
            <div className="relative w-full px-2 mx-auto md:py-5 md:px-6">
              <div className="relative p-6 px-0 pt-0 mx-auto">
                <div className="flex py-1 mb-3 space-x-3 bg-white">
                  <div className="relative w-full">
                    <SearchBox
                      className="w-full mx-auto mb-1"
                      translations={{
                        submitTitle: "Iniciar búsqueda",
                        resetTitle: "Reiniciar búsqueda",
                        placeholder: "Buscador",
                        noResults: "Sin resultados",
                      }}
                    />
                    <div className="absolute hidden md:block top-0 right-0 m-1.5 mr-12">
                      <Stats />
                    </div>
                  </div>
                  <HitsPerPage
                    defaultRefinement={9}
                    items={[
                      { value: 2, label: "Mostrando 2" },
                      { value: 9, label: "Mostrando 9" },
                      { value: 24, label: "Mostrando 24" },
                    ]}
                  />
                  <SortBy
                    defaultRefinement="juegos"
                    items={[
                      { value: "juegos", label: "Titulo" },
                      { value: "juegos_precio_asc", label: "Precio asc." },
                      { value: "juegos_precio_desc", label: "Precio desc." },
                      { value: "juegos_edades_asc", label: "Edades Asc." },
                      { value: "juegos_edades_desc", label: "Edades desc." },
                    ]}
                  />
                  <div className="hidden w-64">
                    <ToggleRefinement
                      attribute="stock"
                      label="Por encargo"
                      value="Sin Stock"
                    />
                  </div>
                </div>
                <Fade delay={800}>
                  <Hits
                    className="w-full mx-auto mb-6"
                    hitComponent={PostPreview}
                  />
                </Fade>
                <Pagination />
                <div className="absolute bottom-0 right-0 opacity-30">
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
