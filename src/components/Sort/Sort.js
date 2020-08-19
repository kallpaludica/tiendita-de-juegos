import React from "react"

const Sort = () => {
  return (
    <>
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
    </>
  )
}

export default Sort
