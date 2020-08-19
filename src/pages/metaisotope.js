import React, { useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import Isotope from "isotope-layout"

const IsotopeDemo = () => {
  const data = useStaticQuery(graphql`
    query MetaIsotopeQuery {
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

  useEffect(() => {
    const isotope = new Isotope(".grilla", {
      itemSelector: ".element",
      layoutMode: "masonry",

      getSortData: {
        name: ".name",
        symbol: ".symbol",
        number: ".number parseInt",
        duration: ".duration parseInt",
        ages: ".ages parseInt",
        category: "[data-category]",
      },
    })

    /**-------------------------- Filter --------------------------**/

    const filterFns = {
      // show if number is greater than 50
      numberGreaterThan50: function (itemElem) {
        var number = itemElem.querySelector(".number").textContent
        return parseInt(number, 10) > 50
      },
      // show if name ends with -ium
      ium: function (itemElem) {
        var name = itemElem.querySelector(".name").textContent
        return name.match(/ium$/)
      },
    }

    const filterBtns = document.querySelector("#filters").children
    // AKA onButtonClick in Filter Buttons
    function filterAction(e) {
      let filterValue = e.target.getAttribute("data-filter")
      filterValue = filterFns[filterValue] || filterValue
      isotope.arrange({ filter: filterValue })

      //only style...
      for (const btn of filterBtns) {
        btn.classList.remove("is-checked")
      }
      e.target.classList.add("is-checked")
    }

    for (const btn of filterBtns) {
      btn.addEventListener("click", filterAction)
    }

    /**-------------------------- END Filter --------------------------**/

    /**-------------------------- Sort --------------------------**/

    const sortBtns = document.querySelector("#sorts").children
    // AKA onButtonClick in Sort Buttons
    function sortAction(e) {
      let sortValue = e.target.getAttribute("data-sort-by")
      let direction = e.target.getAttribute("data-sort-direction")
      let isAscending = direction === "asc"
      let newDirection = isAscending ? "desc" : "asc"
      isotope.arrange({ sortBy: sortValue, sortAscending: isAscending })
      e.target.getAttribute("data-sort-direction", newDirection)

      //only style...
      for (const btn of sortBtns) {
        btn.classList.remove("is-checked")
      }
      e.target.classList.add("is-checked")
    }

    for (const btn of sortBtns) {
      btn.addEventListener("click", sortAction)
    }

    /**-------------------------- END Sort --------------------------**/

    return () => {
      isotope.destroy()
      for (const btn of filterBtns) {
        btn.removeEventListener("click", filterAction)
      }
      for (const btn of sortBtns) {
        btn.removeEventListener("click", sortAction)
      }
    }
  }, [])

  return (
    <>
      <Layout>
        <div className="mt-24">
          <div id="filters" className="button-group"></div>
          <div id="sorts" className="flex justify-center py-12 button-group">
            <button
              className="button is-checked"
              data-sort-by="original-order"
              data-sort-direction="asc"
            >
              original order
            </button>
            <button
              className="button"
              data-sort-by="name"
              data-sort-direction="asc"
            >
              A - Z
            </button>
            <button
              className="button"
              data-sort-by="name"
              data-sort-direction="desc"
            >
              Z - A
            </button>

            <button
              className="button"
              data-sort-by="number"
              data-sort-direction="asc"
            >
              Precio - menor a mayor
            </button>
            <button
              className="button"
              data-sort-by="number"
              data-sort-direction="desc"
            >
              Precio - Mayor a menor
            </button>
            <button
              className="button"
              data-sort-by="ages"
              data-sort-direction="asc"
            >
              edades - menor a mayor
            </button>
            <button
              className="button"
              data-sort-by="ages"
              data-sort-direction="desc"
            >
              edades - Mayor a menor
            </button>
            <button
              className="button"
              data-sort-by="duration"
              data-sort-direction="asc"
            >
              duration - menor a mayor
            </button>
            <button
              className="button"
              data-sort-by="duration"
              data-sort-direction="desc"
            >
              duration - Mayor a menor
            </button>
          </div>

          <div className="max-w-6xl mx-auto grilla">
            {data.allContentfulArticulos.edges.map(({ node }) => {
              return (
                <>
                  <div
                    key={node.id}
                    className="w-full max-w-xs mx-3 mb-12 bg-red-100 element"
                    data-category="transition"
                  >
                    <h3 className="mb-6 text-xl name">{node.title}</h3>
                    <h3 className="duration">{node.GameDuration} min</h3>
                    <h3 className="ages">{node.GameAges}+</h3>
                    <h3>
                      $<span className="number">{node.GameBuyPrice}</span>
                    </h3>
                    {node.categoria && (
                      <>
                        {node.categoria.map((item) => (
                          <>{item.slug}</>
                        ))}
                      </>
                    )}
                  </div>
                </>
              )
            })}
          </div>
        </div>
      </Layout>
    </>
  )
}

export default IsotopeDemo
