import React from "react"
//import { useStaticQuery, graphql } from "gatsby"
import PropTypes from "prop-types"
import "./layout.css"

const Footer = ({ children }) => {
  return (
    <>
      <footer className="relative px-4 py-8 text-gray-800 bg-gray-200">
        <div className="flex flex-col justify-between max-w-4xl m-auto text-sm md:flex-row">
          <div className="flex justify-between">
            <span className="block mr-8">
              @Cucha Estudio {new Date().getFullYear()}
            </span>
            <a
              rel="noopener noreferrer"
              className="border-b border-gray-600"
              target="_blank"
              href="mailto:hola@cuchaestudio.com"
            >
              Contactanos
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Footer
