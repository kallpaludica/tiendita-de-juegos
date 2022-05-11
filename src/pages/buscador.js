import algoliasearch from "algoliasearch/lite"
import React from "react"
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom"
import Layout from "../components/layout"
import PostPreview from "../components/PostPreview/PostPreview"
import HeroWave from "../components/HeroWave/HeroWave"
import GameSort from "../components/Games/GameSort"
import GamesAside from "../components/Games/GameMenu"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"

const searchClient = algoliasearch(
  process.env.ALGOLIA_APP_ID,
  process.env.ALGOLIA_API_KEY,
)

const BuscarComponent = () => {
  return (
    <>
      <Layout>
        <Seo title="Buscar" />
        <Helmet>
          <body className="games" />
        </Helmet>
        <HeroWave pattern="bg-green-600 text-green-500" />
        <div className="relative z-10 flex flex-row-reverse w-full mx-auto max-w-7xl md:-mt-16">
          <div className="hidden w-72 md:block ">
            <GamesAside />
          </div>
          <div className="relative w-full px-2 mx-auto md:px-0">
            <div className="relative top-0 z-50 pt-3 md:pl-4">
              <GameSort />
            </div>
            <div className="p-6 pt-6 mx-auto max-w-7xl">
              <InstantSearch
                searchClient={searchClient}
                indexName="juegos"
              >
                <SearchBox
                  className="w-full mx-auto mb-6"
                  translations={{
                    submitTitle: "Iniciar búsqueda",
                    resetTitle: "Reiniciar búsqueda",
                    placeholder: "Buscador",
                  }}
                />
                <Fade delay={800}>
                  <Hits className="w-full mx-auto grilla" hitComponent={PostPreview} />
                </Fade>
              </InstantSearch>
            </div>
          </div>
        </div>
      </Layout>
    </>
  )
}

export default BuscarComponent
