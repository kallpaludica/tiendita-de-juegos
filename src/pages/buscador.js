import algoliasearch from "algoliasearch/lite"
import React from "react"
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"
import HeroWave from "../components/HeroWave"
import GameSort from "../components/Games/GameSort"
import GamesAside from "../components/Games/GameMenu"
import Seo from "../components/seo"
import { Helmet } from "react-helmet"
import Fade from "react-reveal/Fade"
import "../styles/algolia.css"

const searchClient = algoliasearch(
  "REF3SMUMO1",
  "e01ef19f511d91260a11e891714a8432"
)

const BuscarComponent = () => {
  return (
    <>
      <Layout>
        <Seo title="Buscar" />
        <Helmet>
          <body className="games searcher" />
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
                indexName="netlify_89e873dd-0214-4d2f-b526-ed8fb59a5cfe_master_all"
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
