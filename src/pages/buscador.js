import styled from "@emotion/styled"
import algoliasearch from "algoliasearch/lite"
import React from "react"
import { InstantSearch, Hits, SearchBox } from "react-instantsearch-dom"
import tw from "twin.macro"
import Layout from "../components/layout"
import PostPreview from "../components/postPreview"
import SEO from "../components/seo"
import "./algolia.css"
import { Helmet } from "react-helmet"

const searchClient = algoliasearch(
  "REF3SMUMO1",
  "e01ef19f511d91260a11e891714a8432"
)

const BuscarComponent = () => {
  return (
    <>
      <Layout>
        <Helmet>
          <body className="ingame" />
        </Helmet>
        <SearchContainer className="bg-gradient-to-tl from-blue-200 to-blue-300">
          <SEO title="Buscar" />
          <div className="max-w-6xl min-h-screen p-6 pt-6 mx-auto">
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
              <Hits className="w-full mx-auto" hitComponent={PostPreview} />
            </InstantSearch>
          </div>
        </SearchContainer>
      </Layout>
    </>
  )
}

export default BuscarComponent

const SearchContainer = styled.div`
  ${tw`relative`}
  ${tw`pt-24 bg-teal-100 border-teal-800`}

  p {
    ${tw`text-gray-800 `}
  }
  h1 {
    ${tw`text-gray-800`}
  }
`
