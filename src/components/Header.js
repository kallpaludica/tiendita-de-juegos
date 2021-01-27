import styled from "@emotion/styled"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Headroom from "react-headroom"
//import { FaNewspaper } from "react-icons/fa"
import { AiFillShop, AiOutlineSearch } from "react-icons/ai"
import { GrSearch } from "react-icons/gr"
import { IoIosChatbubbles, IoMdMail } from "react-icons/io"
import tw from "twin.macro"
import KallpaLogo from "../assets/logo.svg"
import "./header.css"

const routesLeft = [
  {
    title: "Tienda de juegos",
    slug: "/tienda-de-juegos",
    icon: <AiFillShop className="mr-1 text-xl " />,
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
    title: "Buscador",
    slug: "/buscador",
    icon: <AiOutlineSearch className="mr-1 text-2xl " />,

  },
  {
    title: "Quienes somos",
    slug: "/quienes-somos",
    icon: <IoIosChatbubbles className="mr-1 text-2xl " />,
  },
  {
    title: "Contacto",
    slug: "/contacto",
    icon: <IoMdMail className="mr-1 text-2xl " />,
  },
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
                activeClassName="opacity-100 border-white"
                partiallyActive={true}
                className="flex items-center py-3 font-mono text-sm text-center border-t-2 border-transparent opacity-90 hover:opacity-100 md:mx-4 lg:text-lg"
                to={route.slug}
              >
                <span>{route.icon}</span>
                <span>{route.title}</span>
              </Link>
            )
          })}
        </NavLeft>
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

const HeaderContainer = styled.header`
  ${tw`z-50 px-2 py-2 transition-all duration-500 md:py-2 `}

  body.ingame & a {
    ${tw`text-gray-800`}
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
    transform: scale(1.05) rotate(120deg);
  }

  .headroom--unpinned & .kallpa-logo {
    transform: scale(1.05) rotate(60deg);
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
