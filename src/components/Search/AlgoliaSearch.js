import React from "react"
import algoliasearch from "algoliasearch"
import {
  NumericMenu,
  ToggleRefinement,
  ClearRefinements,
  SearchBox,
  Stats,
  RefinementList,
} from "react-instantsearch-dom"

const EncontrarComponent = () => {
  return (
    <>
      <div className="flex justify-between px-1 py-3 mb-2">
        <h3 className="pt-0 my-1 font-serif font-bold text-left text-gray-800 text-md ">
          Filtros
        </h3>
        <ClearRefinements
          translations={{
            reset: "Reiniciar",
          }}
        />
      </div>
      <div className="flex justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 duration-700 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75 focus:ring-green-500">
        <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
          Precio
        </h3>
      </div>
      <div className="px-1 pt-1 text-base text-gray-700 bg-white shadow-md">
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
      </div>
      <div className="flex justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 duration-700 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus:ring-green-500focus-visible:ring-opacity-75">
        <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
          Edades
        </h3>
      </div>
      <div className="px-1 py-2 text-base text-gray-700 bg-white shadow-md">
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
            all: "Para Todes",
          }}
        />
      </div>
      <div className="flex justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 duration-700 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75 focus:ring-green-500">
        <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
          Editoriales
        </h3>
      </div>
      <div className="px-1 py-2 text-base text-gray-700 bg-white shadow-md">
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
      </div>
      <div className="flex justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 duration-700 bg-indigo-100 rounded-lg hover:bg-indigo-200 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75 focus:ring-green-500">
        <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
          Colecciones
        </h3>
      </div>
      <div className="px-1 py-2 text-base text-gray-700 bg-white shadow-md">
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
      </div>
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
