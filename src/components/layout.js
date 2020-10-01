import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "../styles/pattern.css"

import SimpleReactLightbox from "simple-react-lightbox"
import tw from "twin.macro"
import styled from "@emotion/styled"
import { AiOutlineHeart } from "react-icons/ai"
import { HiCode } from "react-icons/hi"

const Layout = ({ children }) => {
  return (
    <>
      <div className="app-container">
        <SimpleReactLightbox>
          <main className="text-center bg-white ">{children}</main>
        </SimpleReactLightbox>

        <Stn>
          <Inner>
            <h3 className="pb-2 text-sm font-bold text-gray-800">
              {new Date().getFullYear()} Kallpa Lúdica
            </h3>
            <div className="flex flex-col pr-2 text-sm opacity-75">
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="inline-block font-bold"
                href="https://www.cooparaje.com.ar"
              >
                Hecho en Cooparaje con
              </a>
              <div>
                <HiCode className="inline-block mx-1 mb-1 text-lg " />
                <span className="mx-1">&</span>
                <AiOutlineHeart className="inline-block mx-1 mb-1 text-lg " />
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
  ${tw`flex justify-between max-w-6xl p-2 py-3 mx-auto text-center text-gray-800 `}
`
