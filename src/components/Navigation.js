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
    slug: "/tienda-de-juegos/",
  },

  {
    title: "Colecciones",
    active: "text-pink-500",
    slug: "/tienda-de-juegos/colecciones",
  },
  {
    title: "Editoriales",
    active: "text-pink-500",
    slug: "/tienda-de-juegos/editoriales",
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
          className={`hover:${route.active} my-3 font-mono text-xl text-gray-800 text-right cursor-pointer`}
        >
          {route.title}
        </Link>
      )
    })}
  </nav>
)

export default Navigation
