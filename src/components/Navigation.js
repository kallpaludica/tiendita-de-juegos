import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    active: "text-orange-500",
    slug: "/",
  },
  {
    title: "Tienda de juegos",
    active: "text-green-500",
    slug: "/juegos",
  },
  {
    title: "Sobre el proyecto",
    active: "text-pink-500",
    slug: "/sobre-el-proyecto",
  },
  {
    title: "Contacto",
    active: "text-indigo-500",
    slug: "/contacto",
  },
]

const Navigation = ({ closeMenu }) => (
  <nav className="flex flex-col w-full">
    {routes.map((route, i) => {
      return (
        <Link
          key={i}
          onClick={closeMenu}
          to={route.slug}
          activeClassName={route.active}
          className={`hover:${route.active} my-5 font-mono text-xl font-bold text-gray-800 text-center uppercase cursor-pointer `}
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
