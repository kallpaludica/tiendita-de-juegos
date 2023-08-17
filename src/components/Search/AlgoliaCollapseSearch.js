import React from "react"
import {
  NumericMenu,
  ClearRefinements,
  Stats,
  RefinementList,
  connectRefinementList
} from "react-instantsearch-dom"
import { Disclosure } from "@headlessui/react"
import { FiChevronDown } from "react-icons/fi"
// import algoliasearch from "algoliasearch"
const RefinementListCustom = ({
  items,
  refine,
  createURL,
}) => (
  <ul>
    {items.map(item => (
      <li key={item.label}>
        <button
          className={`ais-RefinementList-label ${item.isRefined ? "active " : ""} ${item.label === "true" ? "inStock " : "outStock"} `}
          href={createURL(item.value)}
          onClick={event => {
            event.preventDefault();
            refine(item.value);
          }}
        >
          {item.isRefined
            ? (
              <div className="block w-6 h-4 rounded CheckActive" />
            ) : (
              <div className="block w-6 h-4 bg-gray-200 rounded" />
            )}
          <span className={`ais-RefinementList-labelText ${item.isRefined ? "font-bold " : ""} `}>
            {item.label === "true"
              ? (
                <>En Stock</>
              ) : (
                <>Por encargo</>
              )}
          </span>
          <span className="font-light ais-RefinementList-count">{item.count}</span>
        </button>
      </li>
    ))}
  </ul>
);

const CustomRefinementList = connectRefinementList(RefinementListCustom);

const EncontrarComponent = () => {
  return (
    <>
      <div className="flex justify-between px-1 py-3 pt-1 mb-2">
        <h3 className="font-serif text-xs font-bold text-left text-gray-800">
          Encontrados <br />
          <Stats
            translations={{
              stats(nbHits, processingTimeMS, nbSortedHits, areHitsSorted) {
                return areHitsSorted && nbHits !== nbSortedHits
                  ? `${nbSortedHits.toLocaleString()} relevant results sorted out of ${nbHits.toLocaleString()} ${processingTimeMS.toLocaleString()}ms`
                  : `${nbHits.toLocaleString()} juegos`
              },
            }}
          />
        </h3>
        <ClearRefinements
          translations={{
            reset: "Reiniciar",
          }}
        />
      </div>
      <Disclosure>
        <div
          className="flex justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-gray-900 duration-700 bg-gray-100 rounded-lg hover:bg-gray-100 focus:outline-none focus-visible:ring focus-visible:ring-green-500 focus:ring-green-500 focus-visible:ring-opacity-75"
        >
          <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-gray-500">
            Stock
          </h3>
        </div>
        <div className="px-1 pt-1 text-base text-gray-700 bg-white shadow-md">
          <CustomRefinementList
            attribute="GameInStock"
          />
        </div>
      </Disclosure>
      
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${open ? "rounded-b-none bg-yellow-100 " : ""
                } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75 focus:ring-green-500`}
            >
              <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
                Editoriales
              </h3>
              <FiChevronDown
                className={`${open ? "transform rotate-180" : ""
                  } w-5 h-5 text-indigo-800 mt-2 duration-100`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="px-1 py-2 text-base text-gray-700 bg-white shadow-md">
              <RefinementList
                attribute="publisher.title"
                operator="and"
                showMoreLimit={100}
                showMore={true}
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

          </>
        )}
      </Disclosure>
      
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${open ? "rounded-b-none bg-yellow-100 " : ""
                } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-green-500 focus:ring-green-500focus-visible:ring-opacity-75`}
            >
              <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
                Edades
              </h3>
              <FiChevronDown
                className={`${open ? "transform rotate-180" : ""
                  } w-5 h-5 text-indigo-800 mt-2 duration-100`}
              />
            </Disclosure.Button>

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
                  { label: "Más de 10", start: 10 },
                ]}
                translations={{
                  all: "Para Todos",
                }}
              />
            </Disclosure.Panel>

          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${open ? "rounded-b-none bg-yellow-100 " : ""
                } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-green-500 focus-visible:ring-opacity-75 focus:ring-green-500`}
            >
              <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
                Jugadorxs
              </h3>
              <FiChevronDown
                className={`${open ? "transform rotate-180" : ""
                  } w-5 h-5 text-indigo-800 mt-2 duration-100`}
              />
            </Disclosure.Button>

            <Disclosure.Panel className="px-1 py-2 text-base text-gray-700 bg-white shadow-md">
              <RefinementList
                attribute="GamePlayers"
                operator="and"
                showMoreLimit={100}
                showMore={true}
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

          </>
        )}
      </Disclosure>
      <Disclosure>
        {({ open }) => (
          <>
            <Disclosure.Button
              className={`${open ? "rounded-b-none bg-yellow-100 " : ""
                } flex rounded-lg justify-between w-full px-4 py-0 mt-3 text-sm font-medium text-left text-indigo-900 bg-indigo-100  hover:bg-indigo-200 focus:outline-none duration-700 focus-visible:ring focus-visible:ring-green-500 focus:ring-green-500 focus-visible:ring-opacity-75`}
            >
              <h3 className="pt-1 my-1 font-serif text-lg font-bold text-left text-indigo-500">
                Colecciones
              </h3>
              <FiChevronDown
                className={`${open ? "transform rotate-180" : ""
                  } w-5 h-5 text-indigo-800 mt-2 duration-100`}
              />
            </Disclosure.Button>

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

          </>
        )}
      </Disclosure>

    </>
  )
}

export default EncontrarComponent
