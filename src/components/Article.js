import React from "react"

import { Link } from "gatsby"

export default ({ article }) => (
  <>
    <Link
      to={`/juegos/${article.slug}`}
      className="block mb-2 text-base font-bold text-center title"
    >
      {article.title}
    </Link>
  </>
)
