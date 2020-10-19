import { graphql, Link } from "gatsby"
import { kebabCase } from "lodash"
import React from "react"
import HeroWave from "../components/HeroWave"
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
      <SEO title={totales} />
      <HeroWave
        pattern="bg-teal-600 text-teal-500"
        svg="M0,224L80,240C160,256,320,288,480,277.3C640,267,800,213,960,202.7C1120,192,1280,224,1360,240L1440,256L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <div className="w-full bg-white">
        <div className="relative w-full max-w-2xl py-2 m-auto mb-2 text-center bg-white searchBox md:pb-6 animated fadeIn slower">
          <span className="absolute top-0 right-0 p-6 py-5 font-sans text-lg font-bold text-gray-400">
            {totales} juegos
          </span>

          <input
            className="w-full p-3 text-gray-900 placeholder-gray-500 bg-gray-100 border-b-2 searchInput "
            type="text"
            tabindex="0"
            aria-label="Search"
            placeholder="Buscar&hellip;"
            onChange={handleInputChange}
          />
        </div>

        <div className="flex flex-col w-full max-w-2xl mx-auto">
          {posts.map(({ node }) => {
            const { id, slug, title, GameBuyPrice } = node
            //const { description } = node.description

            return (
              <article
                key={id}
                className="flex justify-between w-full p-6 my-3 text-center transition-all duration-500 transform bg-white shadow-md animated fadeIn hover:-translate-y-1 hover:shadow-2xl"
              >
                <Link
                  to={`/juegos/${kebabCase(slug)}/`}
                  className="font-sans text-xl font-bold"
                >
                  {title}
                </Link>
                <span className="text-xl font-bold text-green-500">
                  ${GameBuyPrice}
                </span>
              </article>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default SearchIndex

export const pageQuery = graphql`
  query {
    allContentfulArticulos(sort: { fields: [title], order: ASC }) {
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
