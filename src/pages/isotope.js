import React from "react"
import Isotope from "isotope-layout"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import { kebabCase } from "lodash"
import Layout from "../components/layout"

const IsotopeReact = () => {
  const data = useStaticQuery(graphql`
    query IsotopeQuery {
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
            categoria {
              title
              slug
            }
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
      allContentfulCategoriaDelJuego {
        edges {
          node {
            id
            title
            slug
            icono {
              fixed(width: 80, height: 80) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  // store the isotope object in one state
  const [isotope, setIsotope] = React.useState(null)
  // store the filter keyword in another state
  const [filterKey, setFilterKey] = React.useState("*")

  // initialize an Isotope object with configs
  React.useEffect(() => {
    setIsotope(
      new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        layoutMode: "fitRows",
        getSortData: {
          price: ".price",
        },
      })
    )
  }, [])

  // handling filter key change
  React.useEffect(() => {
    if (isotope) {
      filterKey === "*"
        ? isotope.arrange({ filter: `*` })
        : isotope.arrange({ filter: `.${filterKey}` })
    }
  }, [isotope, filterKey])

  return (
    <>
      <ul>
        <li onClick={() => setFilterKey("*")}>Show Both</li>

        {data.allContentfulCategoriaDelJuego.edges.map(({ node }) => {
          return (
            <li key={node.id} onClick={() => setFilterKey(node.slug)}>
              {node.title}
            </li>
          )
        })}
      </ul>
      <div id="filters" className="button-group">
        <button className="button is-checked" data-filter="*">
          show all
        </button>
        <button className="button" data-sort-by="price">
          price
        </button>
      </div>
      <hr />
      <ul className="filter-container">
        <div className="w-full h-24 max-w-xs mx-2 filter-item solitarios">
          <span>Cucumber</span>
        </div>
        <div className="w-full h-24 max-w-xs mx-2 filter-item juegos-de-cartas">
          <span>Apple</span>
        </div>
        <div className="w-full h-24 max-w-xs mx-2 filter-item solitarios">
          <span>Orange</span>
        </div>
        <div className="w-full h-24 max-w-xs mx-2 filter-item juegos-de-cartas solitarios">
          <span>Tomato</span>
        </div>
        {data.allContentfulArticulos.edges.map(({ node }) => {
          return (
            <div
              key={node.id}
              className={`filter-item h-24 max-w-xs w-full mx-2 ${node.slug}`}
            >
              {node.slug}
              <h3 className={node.GameBuyPrice}>{node.GameBuyPrice}</h3>
              {node.categoria && (
                <div className="pl-6 my-6 mb-8 md:px-0">
                  {node.categoria.map((item, i) => (
                    <b>{item.title}</b>
                  ))}
                </div>
              )}
            </div>
          )
        })}
      </ul>
    </>
  )
}

export default () => {
  return (
    <Layout>
      <div className="mt-24">
        <IsotopeReact />
      </div>
    </Layout>
  )
}
