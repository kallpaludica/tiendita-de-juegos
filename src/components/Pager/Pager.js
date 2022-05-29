import React from "react"
import { Link } from "gatsby"

const Pager = ({ pageContext }) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <nav style={{ display: "flex", justifyContent: "space-between" }}>
      <div>
        {previousPagePath && (
          <Link to={previousPagePath} className="text-4xl">
            <button>← </button>
          </Link>
        )}
      </div>

      <div style={{ justifySelf: "flex-end" }}>
        {nextPagePath && (
          <Link to={nextPagePath} className="text-4xl">
            <button> →</button>
          </Link>
        )}
      </div>
    </nav>
  )
}

export default Pager
