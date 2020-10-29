import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
//import { FaNewspaper } from "react-icons/fa"
import { AiFillShop } from "react-icons/ai"
import { IoIosChatbubbles, IoMdMail } from "react-icons/io"
import tw from "twin.macro"
import KallpaLogo from "../assets/logo.svg"
import "./header.css"

const routesLeft = [
  {
    title: "Tiendita de juegos",
    slug: "/juegos/todos",
    icon: <AiFillShop className="text-xl " />,
  },
  /*
  {
    title: "Comunidad",
    slug: "/comunidad",
    icon: <FaNewspaper className="text-2xl " />,
  },
  {
    title: "Recursos",
    slug: "/recursos",
    icon: <IoIosArchive className="text-2xl " />,
  }*/
  {
    title: "Quienes somos",
    slug: "/quienes-somos",
    icon: <IoIosChatbubbles className="text-2xl " />,
  },
  {
    title: "Contacto",
    slug: "/contacto",
    icon: <IoMdMail className="text-2xl " />,
  },

  //{
  // title: <GrSearch className="mt-1 text-white fill-current" />,
  //active: "opacity-50",
  //slug: "/buscar",
  //},
]
/*
const routesRight = [
  {
    title: "Tiendita de juegos",
    active: "opacity-50",
    slug: "/juegos/todos",
    icon: <AiFillShop className="text-xl " />,
  },

  //{
  // title: <GrSearch className="mt-1 text-white fill-current" />,
  //active: "opacity-100",
  //slug: "/buscar",
  //},
]
*/

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
                activeClassName="opacity-100 border-white"
                className={`hover:${route.active} text-center flex items-center py-3 md:mx-4 text-sm font-mono lg:text-lg opacity-75 border-b border-transparent`}
                to={route.slug}
              >
                <span>{route.title}</span>
              </Link>
            )
          })}
        </NavLeft>

        {/*<NavRight>
          {routesRight.map((route, i) => {
            return (
              <Link
                key={i}
                activeclassactiveClassNamename={route.active}
                className={`hover:${route.active} flex items-center py-2 px-4 md:mx-2 font-mono text-lg opacity-100 bg-gray-100 hover:bg-orange-500 hover:text-white rounded-full shadow-md hover:shadow-lg transition-all transform`}
                to={route.slug}
              >
                <span className="mr-2">{route.icon}</span>
                <span>{route.title}</span>
              </Link>
            )
          })}
        </NavRight>*/}
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
  ${tw`justify-end hidden w-full md:flex`}
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
/*
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
*/
const HeaderContainer = styled.header`
  ${tw`z-50 px-2 py-2 transition-all duration-500 md:py-2 `}

  body.ingame & a {
    ${tw`text-gray-800`} !important
  }
`

const InnerHeader = styled.div`
  ${tw`relative flex items-center justify-between w-full max-w-6xl px-0 mx-auto md:pb-1 sm:pr-6 md:pr-0`}
`

const Logo = styled.div`
  ${tw`m-0 md:px-3 md:relative`}
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
