import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Headroom from "react-headroom"
import { GrSearch } from "react-icons/gr"
//import ThemeToggler from "./ThemeToggler/ThemeToggler"
import tw from "twin.macro"
import styled from "@emotion/styled"
import AboutImage from "../components/image"
import KallpaLogo from "../assets/logo.svg"

const routesLeft = [
  {
    title: "Tienda de juegos",
    active: "border-white",
    slug: "/juegos/todos",
  },
  {
    title: "Recursos",
    active: "border-white",
    slug: "/recursos",
  },
  {
    title: "Comunidad",
    active: "border-white",
    slug: "/comunidad",
  },

  //{
  // title: <GrSearch className="mt-1 text-white fill-current" />,
  //active: "border-white",
  //slug: "/buscar",
  //},
]

const routesRight = [
  {
    title: "Quienes somos",
    active: "border-white",
    slug: "/quienes-somos",
  },

  {
    title: "Propuestas",
    active: "border-white",
    slug: "/quienes-somos",
  },

  {
    title: "Contacto",
    active: "border-white",
    slug: "/contacto",
  },

  //{
  // title: <GrSearch className="mt-1 text-white fill-current" />,
  //active: "border-white",
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
                className={`hover:${route.active}   font-mono border-t-2 text-base lg:text-xl font-bold tracking-widest`}
                to={route.slug}
              >
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
                className={`hover:${route.active}   font-mono border-t-2 text-base lg:text-xl font-bold tracking-widest`}
                to={route.slug}
              >
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
  ${tw`justify-end hidden md:flex`}
  flex:1;

  a {
    ${tw`text-white`}

    .headroom--scrolled & {
      ${tw`text-green-500`}
    }
  }
`

const NavRight = styled.nav`
  ${tw`justify-start hidden md:flex`}
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
  ${tw`relative flex items-center justify-between max-w-6xl px-0 m-auto md:pb-1 sm:pr-6 md:pr-0`}
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
