import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import { FcShop, FcContacts, FcGlobe } from "react-icons/fc"
import KallpaLogo from "../assets/logo.svg"
import "./header.css"

const routesLeft = [
  /*

  */
  {
    title: "Comunidad",
    slug: "/comunidad",
    icon: <FcGlobe className="mr-1 text-2xl" />,
  },
  {
    title: "Tienda de juegos",
    slug: "/tienda-de-juegos/encontrador",
    icon: <FcShop className="mr-1 text-2xl" />,
  },

  {
    title: "Quienes somos",
    slug: "/quienes-somos",
    icon: <FcContacts className="mr-1 text-2xl" />,
  },
  {
    title: "Contacto",
    slug: "/contacto",
    icon: (
      <span role="img" aria-label="contacto" className="mr-1 text-xl">
        👋
      </span>
    ),
  },
]

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <header className="header-container">
      <div className="relative flex items-center justify-between w-full max-w-full px-0 mx-auto 2xl:max-w-7xl md:pb-1 sm:pr-6 md:pr-0">
        <div className=" logo-container">
          <Link to="/" className="flex items-center mr-12">
            <KallpaLogo className="w-16 h-16 mr-3 kallpa-logo" />
            <span className="font-mono text-2xl leading-5 duration-700 md:leading-7 md:text-3xl">
              Kallpa <br /> lúdica
            </span>
          </Link>
        </div>

        <div className="justify-end hidden w-full h-16 nav-left lg:flex">
          {routesLeft.map((route, i) => {
            return (
              <Link
                key={i}
                activeClassName="opacity-100 border-white active"
                partiallyActive={true}
                className="flex items-center py-3 m-0 font-mono text-xs text-center duration-700 border-t-2 border-transparent opacity-100 md:text-base hover:opacity-80 md:mx-4 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus:ring-yellow-500 focus-visible:ring-opacity-75"
                to={route.slug}
              >
                <span className="hidden mr-1 xl:inline-block">
                  {route.icon}
                </span>
                <span>{route.title}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </header>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
