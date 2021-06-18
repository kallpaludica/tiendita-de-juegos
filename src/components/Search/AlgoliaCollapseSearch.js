import React from "react"
import algoliasearch from "algoliasearch"
import {
  NumericMenu,
  ToggleRefinement,
  ClearRefinements,
  SearchBox,
  RefinementList,
} from "react-instantsearch-dom"

import { Disclosure, Transition } from "@headlessui/react"
import { FiChevronDown } from "react-icons/fi"

const EncontrarComponent = () => {
  return (
    <>
      <div className="absolute left-0 px-2 top-4 right-12">
        <SearchBox
          className="w-full mx-auto"
          translations={{
            submitTitle: "Iniciar búsqueda",
            resetTitle: "Reiniciar búsqueda",
            placeholder: "Buscador",
            noResults: "Sin resultados",
          }}
        />
      </div>
      <div className="flex justify-between px-1 py-3 mb-2">
        <h3 className="pt-0 my-1 font-serif text-xl text-left text-gray-800 ">
          Filtrar
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
              } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75 focus:ring-green-500`}
            >
              <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
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
              } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-green-500 focus:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
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
              } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-green-500 focus:ring-green-500focus-visible:ring-opacity-75`}
            >
              <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
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
              } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-green-500 focus:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
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
      <div className="w-full ">
        <ToggleRefinement
          attribute="stock"
          label="Por encargo"
          value="Sin Stock"
        />
      </div>
    </>
  )
}

export default EncontrarComponent
