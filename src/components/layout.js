import React from "react"
import PropTypes from "prop-types"
import "./layout.css"
import "../styles/pattern.css"

import SimpleReactLightbox from "simple-react-lightbox"
import tw from "twin.macro"
import styled from "@emotion/styled"

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
            <div className="pr-2 text-sm opacity-75">
              Hecho en
              {` `}
              <a
                rel="noopener noreferrer"
                target="_blank"
                className="font-bold"
                href="https://www.cooparaje.com.ar"
              >
                cooparaje
              </a>
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
