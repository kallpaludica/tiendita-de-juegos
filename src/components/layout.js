import styled from "@emotion/styled"
import PropTypes from "prop-types"
import React from "react"
import { AiOutlineHeart } from "react-icons/ai"
import { HiCode } from "react-icons/hi"
import SimpleReactLightbox from "simple-react-lightbox"
import tw from "twin.macro"
import "../styles/pattern.css"
import "./layout.css"
import KallpaLogo from "../assets/logo.svg"

const Layout = ({ children }) => {
  return (
    <>
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
