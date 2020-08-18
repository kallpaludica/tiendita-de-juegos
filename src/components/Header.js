import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Headroom from "react-headroom"
import { GrSearch } from "react-icons/gr"
//import ThemeToggler from "./ThemeToggler/ThemeToggler"
import tw from "twin.macro"
import styled from "@emotion/styled"

const routes = [
  {
    title: "Tiendita de juegos",
    active: "text-green-200",
    slug: "/juegos",
  },
  {
    title: "Sobre el proyecto",
    active: "text-pink-300",
    slug: "/sobre-el-proyecto",
  },
  {
    title: "Contacto",
    active: "text-indigo-200",
    slug: "/contacto",
  },
  {
    title: <GrSearch className="mt-1 text-white" />,
    active: "text-indigo-200",
    slug: "/buscar",
  },
]

const Header = ({ siteTitle }) => (
  <Headroom disableInlineStyles>
    <HeaderContainer>
      <InnerHeader>
        <Logo>
          <Link
            to="/"
            className="block py-6 font-mono text-xl font-bold tracking-widest uppercase hover:text-green-200"
          >
            {siteTitle}
          </Link>
        </Logo>
        <Nav>
          {routes.map((route, i) => {
            return (
              <Link
                key={i}
                activeClassName={route.active}
                className={`hover:${route.active} ml-6 font-mono text-xl font-bold tracking-widest`}
                to={route.slug}
              >
                {route.title}
              </Link>
            )
          })}
        </Nav>
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

const Nav = styled.nav`
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
`

const InnerHeader = styled.div`
  ${tw`relative flex items-center justify-between max-w-6xl px-0 m-auto md:py-3 sm:pr-6 md:pr-0`}
`

const Logo = styled.div`
  ${tw`m-0 md:absolute md:pl-0 `}

  .gatsby-image-wrapper {
    ${tw`w-40 `}
  }

  a {
    ${tw`text-white`}

    .headroom--scrolled & {
      ${tw`text-green-500`}
    }
  }
`
