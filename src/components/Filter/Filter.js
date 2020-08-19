import React from "react"
import "./Filter.css"

const Filters = () => {
  return (
    <>
      <h2>Filter</h2>
      <div id="filters" className="button-group">
        <button className="button is-checked" data-filter="*">
          show all
        </button>
        <button className="button" data-filter=".metal">
          metal
        </button>
        <button className="button" data-filter=".transition">
          transition
        </button>
        <button className="button" data-filter=".alkali, .alkaline-earth">
          alkali and alkaline-earth
        </button>
        <button className="button" data-filter=":not(.transition)">
          not transition
        </button>
        <button className="button" data-filter=".metal:not(.transition)">
          metal but not transition
        </button>
        <button className="button" data-filter="numberGreaterThan50">
          number 50
        </button>
        <button className="button" data-filter="ium">
          name ends with &ndash;ium
        </button>
      </div>
    </>
  )
}

export default Filters
