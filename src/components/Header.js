import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Headroom from "react-headroom"
//import { GrSearch } from "react-icons/gr"
//import ThemeToggler from "./ThemeToggler/ThemeToggler"
import tw from "twin.macro"
import styled from "@emotion/styled"
//import AboutImage from "../components/image"
import KallpaLogo from "../assets/logo.svg"
import { GoBell } from "react-icons/go"

import { FiShoppingCart, FiSend } from "react-icons/fi"
import { FaNewspaper, FaShoppingCart } from "react-icons/fa"

import {
  IoIosChatbubbles,
  IoIosArchive,
  IoIosRocket,
  IoMdMail,
} from "react-icons/io"

const routesLeft = [
  {
    title: "Tienda de juegos",
    active: "opacity-100",
    slug: "/juegos/todos",
    icon: <FaShoppingCart className="mr-2 text-xl" />,
  },
  {
    title: "Recursos",
    active: "opacity-100",
    slug: "/recursos",
    icon: <IoIosArchive className="mr-2 text-xl" />,
  },
  {
    title: "Comunidad",
    active: "opacity-100",
    slug: "/comunidad",
    icon: <FaNewspaper className="mr-2 text-xl" />,
  },

  //{
  // title: <GrSearch className="mt-1 text-white fill-current" />,
  //active: "opacity-100",
  //slug: "/buscar",
  //},
]

const routesRight = [
  {
    title: "Quienes somos",
    active: "opacity-100",
    slug: "/quienes-somos",
    icon: <IoIosChatbubbles className="mr-2 text-xl" />,
  },

  {
    title: "Que hacemos",
    active: "opacity-100",
    slug: "/propuestas",
    icon: <GoBell className="mr-2 text-xl" />,
  },

  {
    title: "Contacto",
    active: "opacity-100",
    slug: "/contacto",
    icon: <IoMdMail className="mr-2 text-xl" />,
  },

  //{
  // title: <GrSearch className="mt-1 text-white fill-current" />,
  //active: "opacity-100",
  //slug: "/buscar",
  //},
]

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <HeaderContainer>
      <InnerHeader>
        <NavLeft>
          {routesLeft.map((route, i) => {
            return (
              <Link
                key={i}
                activeClassName={route.active}
                className={`hover:${route.active} flex items-center flex-col py-3 md:mx-4   font-mono  text-lg  font-bold tracking-widest opacity-75`}
                to={route.slug}
              >
                <span>{route.icon}</span>
                {route.title}
              </Link>
            )
          })}
        </NavLeft>
        <Logo>
          <Link to="/">
            <KallpaLogo className="w-24" />
          </Link>
        </Logo>
        <NavRight>
          {routesRight.map((route, i) => {
            return (
              <Link
                key={i}
                activeClassName={route.active}
                className={`hover:${route.active} flex items-center flex-col py-3 md:mx-4  font-mono  text-lg  font-bold tracking-widest opacity-75`}
                to={route.slug}
              >
                <span>{route.icon}</span>

                {route.title}
              </Link>
            )
          })}
        </NavRight>
      </InnerHeader>
    </HeaderContainer>
  </Headroom>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header

const NavLeft = styled.nav`
  ${tw`justify-start hidden md:flex`}
  flex:1;

  a {
    ${tw`text-white`}

    .headroom--scrolled & {
      ${tw`text-green-500`}
    }
  }
`

const NavRight = styled.nav`
  ${tw`justify-end hidden md:flex`}
  flex:1;

  a {
    ${tw`text-white`}

    .headroom--scrolled & {
      ${tw`text-green-500`}
    }
  }
`

const HeaderContainer = styled.header`
  ${tw`z-50 px-2 py-0 transition-all duration-500 md:py-0 `}

  body.ingame & a {
    ${tw`text-green-500`} !important
  }
`

const InnerHeader = styled.div`
  ${tw`relative flex items-center justify-between w-full px-0 m-auto md:pb-1 sm:pr-6 md:pr-0`}
`

const Logo = styled.div`
  ${tw`m-0 md:px-6 md:relative`}
  top:2px;

  .gatsby-image-wrapper {
    ${tw`w-32 `}
  }

  a {
    ${tw`text-white`}

    &:hover {
      ${tw`text-gray-100`}
    }

    .headroom--scrolled & {
      ${tw`text-gray-800`}
    }
  }
`
