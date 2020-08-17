import React from "react"
import { Link, graphql } from "gatsby"
import { kebabCase } from "lodash"

import SEO from "../components/seo"

const SearchIndex = (props) => {
  const { data } = props
  const allPosts = data.allContentfulArticulos.edges
  const totales = data.allContentfulArticulos.totalCount

  const emptyQuery = ""

  const [state, setState] = React.useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = (event) => {
    console.log(event.target.value)
    const query = event.target.value
    const { data } = props

    const posts = data.allContentfulArticulos.edges || []

    const filteredData = posts.filter((post) => {
      const { title } = post.node
      //const { description } = post.node.description
      //const { name } = post.node.author

      return title
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .toLowerCase()
        .includes(query.toLowerCase())
    })

    setState({
      query,
      filteredData,
    })
  }

  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts

  return (
    <>
      <div className="w-full max-w-2xl p-2 m-auto mt-24 mb-0 text-center searchBox md:pt-6 md:p-0 md:pb-6 animated fadeIn slower">
        <h2 className="flex flex-col items-baseline py-3 pb-6 font-mono text-2xl text-left text-white md:flex-row">
          <span className="flex-1">Todos los juegos</span>
          <SEO title={totales} />

          <small className="text-gray-100">
            <span className="text-gray-100">{totales}</span>
          </small>
        </h2>

        <input
          className="w-full p-3 text-gray-100 placeholder-gray-100 bg-green-600 border-b-2 searchInput "
          type="text"
          tabindex="0"
          aria-label="Search"
          placeholder="Buscar&hellip;"
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col max-w-2xl mx-auto">
        {posts.map(({ node }) => {
          const { id, slug, title, GameBuyPrice } = node
          //const { description } = node.description

          return (
            <article
              key={id}
              className="flex justify-between w-full p-6 mb-3 text-center bg-white animated fadeIn"
            >
              <Link
                to={`/juegos/${kebabCase(slug)}/`}
                className="font-serif text-xl font-bold text-green-500"
              >
                {title}
              </Link>
              <span>${GameBuyPrice}</span>
            </article>
          )
        })}
      </div>
    </>
  )
}

export default SearchIndex

export const pageQuery = graphql`
  query {
    allContentfulArticulos(sort: { fields: [GameBuyPrice], order: ASC }) {
      edges {
        node {
          id
          title
          slug
          GameBuyPrice
          GamePlayers
          GameDuration
          GameAuthor
          GameAges

          imagenDestacada {
            fixed(width: 200, height: 230) {
              ...GatsbyContentfulFixed
            }
            fluid(maxWidth: 450) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
      totalCount
    }
  }
`
