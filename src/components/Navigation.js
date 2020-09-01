import { Link } from "gatsby"
import React from "react"

const routes = [
  {
    title: "Inicio",
    active: "text-orange-500",
    slug: "/",
  },
  {
    title: "Tiendita de juegos",
    active: "text-green-500",
    slug: "/juegos/todos",
  },
  {
    title: "Quienes somos",
    active: "text-pink-500",
    slug: "/quienes-somos",
  },
  {
    title: "Contacto",
    active: "text-indigo-500",
    slug: "/contacto",
  },
  {
    title: "Buscar",
    active: "text-indigo-200",
    slug: "/buscar",
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
          className={`hover:${route.active} my-5 font-mono text-2xl font-bold text-gray-800 text-right  cursor-pointer `}
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
