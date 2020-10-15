import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"
import Headroom from "react-headroom"
import tw from "twin.macro"
import styled from "@emotion/styled"
import KallpaLogo from "../assets/logo.svg"
import { FaNewspaper } from "react-icons/fa"
import { AiFillShop } from "react-icons/ai"

import { IoIosChatbubbles, IoIosArchive, IoMdMail } from "react-icons/io"

const routesLeft = [
  {
    title: "Comunidad",
    active: "opacity-100 text-red-500",
    slug: "/comunidad",
    icon: <FaNewspaper className="text-2xl " />,
  },
  {
    title: "Recursos",
    active: "opacity-100 text-red-500",
    slug: "/recursos",
    icon: <IoIosArchive className="text-2xl " />,
  },
  {
    title: "Quienes somos",
    active: "opacity-100 text-red-500",
    slug: "/quienes-somos",
    icon: <IoIosChatbubbles className="text-2xl " />,
  },
  {
    title: "Contacto",
    active: "opacity-100 text-red-500",
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
    icon: <AiFillShop className="text-xl " />,
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
          <Link to="/" className="flex items-center mr-12">
            <KallpaLogo className="w-16 h-16 mr-3 kallpa-logo" />
            <span className="font-mono text-2xl leading-5 md:leading-7 md:text-3xl">
              Kallpa <br /> lúdica
            </span>
          </Link>
        </Logo>

        <NavLeft>
          {routesLeft.map((route, i) => {
            return (
              <Link
                key={i}
                activeclassName={route.active}
                className={`hover:${route.active} flex items-center py-3 md:mx-4  font-mono text-lg`}
                to={route.slug}
              >
                <span>{route.title}</span>
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
                className={`hover:${route.active} flex items-center py-2 px-4 md:mx-2 font-mono text-lg opacity-100 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full shadow-md hover:shadow-lg transition-all transform`}
                to={route.slug}
              >
                <span className="mr-2">{route.icon}</span>
                <span>{route.title}</span>
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
  ${tw`justify-center hidden w-full md:flex`}
  flex:1;

  a {
    ${tw`text-white`}

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

    &:hover {
      ${tw`text-white`}
    }

    .headroom--pinned & {
      ${tw`text-gray-900`}
    }
    .headroom--unpinned & {
      ${tw`text-gray-900`}
    }
  }
`

const HeaderContainer = styled.header`
  ${tw`z-50 px-2 py-2 transition-all duration-500 md:py-2 `}

  body.ingame & a {
    ${tw`text-gray-800`} !important
  }
`

const InnerHeader = styled.div`
  ${tw`relative flex items-center justify-between w-full px-0 mx-auto md:pb-1 sm:pr-6 md:pr-0`}
`

const Logo = styled.div`
  ${tw`m-0 md:px-6 md:relative`}
  top:2px;
  transition: all 1s;

  .kallpa-logo {
    transition: all 1s;
  }
  .headroom--pinned & .kallpa-logo {
    transform: scale(0.9) rotate(120deg);
  }

  .headroom--unpinned & .kallpa-logo {
    transform: scale(0.9) rotate(60deg);
  }

  .gatsby-image-wrapper {
    ${tw`w-24 `}
  }

  a {
    ${tw`text-white`}

    &:hover {
      ${tw`text-gray-100`}
    }

    .headroom--unpinned & {
      ${tw`text-gray-800`}
    }

    .headroom--scrolled & {
      ${tw`text-gray-800`}
    }
  }
`
