import KallpaLogo from "@components/svgs/logo"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
import { FcContacts, FcGlobe, FcShop } from "react-icons/fc"

const routesLeft = [
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
      <div className="relative flex items-center justify-between w-full max-w-full px-0 mx-auto inner 2xl:max-w-7xl md:pb-1 sm:pr-6 md:pr-0">
        <div className="logo-container">
          <Link to="/" className="flex items-center mr-12">
            <div className="mr-3 w-14 h-14 kallpa-logo -translate-y-0.5">
              <KallpaLogo />
            </div>
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
                className="flex items-center py-3 m-0 font-mono text-xs text-center duration-700 border-t-4 border-transparent opacity-100 md:text-base hover:opacity-80 md:ml-6 md:mr-2 focus:outline-none focus-visible:ring focus-visible:ring-yellow-500 focus:ring-yellow-500 focus-visible:ring-opacity-75"
                to={route.slug}
              >
                <span className="hidden mr-1 lg:inline-block">
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
