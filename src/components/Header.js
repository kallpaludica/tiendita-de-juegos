import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Headroom from "react-headroom"
import tw from "twin.macro"
import styled from "@emotion/styled"
import KallpaLogo from "../assets/logo.svg"
import { FaNewspaper, FaShoppingBasket } from "react-icons/fa"
import { IoIosChatbubbles, IoIosArchive, IoMdMail } from "react-icons/io"

const routesLeft = [
  {
    title: "Quienes somos",
    active: "opacity-100",
    slug: "/quienes-somos",
    icon: <IoIosChatbubbles className="text-2xl " />,
  },
  {
    title: "Comunidad",
    active: "opacity-100",
    slug: "/comunidad",
    icon: <FaNewspaper className="text-2xl " />,
  },
  {
    title: "Recursos",
    active: "opacity-100",
    slug: "/recursos",
    icon: <IoIosArchive className="text-2xl " />,
  },
  {
    title: "Contacto",
    active: "opacity-100",
    slug: "/contacto",
    icon: <IoMdMail className="text-2xl " />,
  },

  //{
  // title: <GrSearch className="mt-1 text-white fill-current" />,
  //active: "opacity-100",
  //slug: "/buscar",
  //},
]

const routesRight = [
  {
    title: "Tienda de juegos",
    active: "opacity-100",
    slug: "/juegos/todos",
    icon: <FaShoppingBasket className="text-xl " />,
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
        <Logo>
          <Link to="/">
            <KallpaLogo className="w-24" />
          </Link>
        </Logo>

        <NavLeft>
          {routesLeft.map((route, i) => {
            return (
              <Link
                key={i}
                activeclassname={route.active}
                className={`hover:${route.active} flex items-center py-3 md:mx-4   font-mono  text-lg  font-bold tracking-widest opacity-75`}
                to={route.slug}
              >
                <b>{route.title}</b>
              </Link>
            )
          })}
        </NavLeft>

        <NavRight>
          {routesRight.map((route, i) => {
            return (
              <Link
                key={i}
                activeclassname={route.active}
                className={`hover:${route.active}  flex items-center py-2 px-4 md:mx-2  font-mono  text-lg  font-bold tracking-widest opacity-100 bg-gray-100 rounded-full shadow-md hover:shadow-lg transition-all transform`}
                to={route.slug}
              >
                <b>{route.title}</b>
                <span className="ml-2">{route.icon}</span>
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
  ${tw`justify-start hidden w-full md:flex`}
  flex:1;

  a {
    ${tw`text-white`}

    b {
      ${tw`font-extrabold`}
    }

    .headroom--pinned & {
      ${tw`text-gray-900`}
    }
    .headroom--unpinned & {
      ${tw`text-gray-900`}
    }
  }
`

const NavRight = styled.nav`
  ${tw`justify-end hidden md:flex`}

  a {
    ${tw`text-orange-700`}

    .headroom--pinned & {
      ${tw`text-gray-900`}
    }
    .headroom--unpinned & {
      ${tw`text-gray-900`}
    }
  }
`

const HeaderContainer = styled.header`
  ${tw`z-50 px-2 py-0 transition-all duration-500 md:py-0 `}

  body.ingame & a {
    ${tw`text-gray-800`} !important
  }
`

const InnerHeader = styled.div`
  ${tw`relative flex items-center justify-between w-full max-w-6xl px-0 mx-auto md:pb-1 sm:pr-6 md:pr-0`}
`

const Logo = styled.div`
  ${tw`m-0 md:px-6 md:relative`}
  top:2px;
  transition: all 1s;

  .headroom--pinned & {
    transform: scale(0.9) rotate(-8deg);
  }

  .headroom--unpinned & {
    transform: scale(0.9) rotate(8deg);
  }

  .gatsby-image-wrapper {
    ${tw`w-24 `}
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
