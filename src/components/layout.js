import styled from "@emotion/styled"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import React, { useEffect } from "react"
import lottie from "lottie-web"

import reactLogo from "../animations/whatsapp.json"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { AiOutlineHeart } from "react-icons/ai"
import { HiCode } from "react-icons/hi"
import SimpleReactLightbox from "simple-react-lightbox"
import tw from "twin.macro"
import "../styles/pattern.css"
import "./layout.css"
import KallpaLogo from "../assets/logo.svg"
import ReactTooltip from "react-tooltip"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  useEffect(() => {
    lottie.loadAnimation({
      container: document.querySelector("#react-logo"),
      animationData: reactLogo,
    })
  }, [])
  return (
    <>
      <Sidebar />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div className="app-container">
        <SimpleReactLightbox>
          <main className="text-center bg-white ">{children}</main>
        </SimpleReactLightbox>

        <Stn>
          <Inner>
            <KallpaLogo className="w-20 h-20 max-w-xs mx-auto mb-6" />
            <h3 className="pb-2 text-base font-bold ">
              {new Date().getFullYear()} Kallpa Lúdica
            </h3>
            <div className="flex justify-center pr-2 text-base opacity-75">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block font-bold"
                href="https://www.cooparaje.com.ar"
              >
                Realizado cooperativamente con
              </a>
              <div>
                <HiCode className="inline-block mx-1 text-lg " />
                <span className="mx-1">&</span>
                <AiOutlineHeart className="inline-block mx-1 text-lg " />
              </div>
              {` `}
            </div>
          </Inner>
        </Stn>
      </div>
      <ReactTooltip place="left" type="dark" effect="solid" />
      <a
        className="fixed bottom-0 right-0 p-1 mb-3 mr-3 overflow-hidden transition-all duration-500 rounded-full hover:bg-green-600 hover:text-white"
        target="_blank"
        rel="noopener noreferrer"
        title="Consultas por Whatsapp"
        data-tip="Consultas por Whatsapp"
        href="https://api.whatsapp.com/send?phone=+549%203876034627&text=%C2%A1Hola!%F0%9F%A4%97%20"
      >
        <div id="react-logo" style={{ width: 60, height: 60 }} />
      </a>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

//const Footer = styled.footer`
//  ${tw`relative hidden px-2 py-8 text-center text-gray-800 bg-white`}
//`

const Stn = styled.div`
  ${tw`w-full p-2 py-4 bg-white`}
`

const Inner = styled.div`
  ${tw`flex flex-col justify-between max-w-6xl p-2 py-3 mx-auto text-center text-gray-800 `}
`
