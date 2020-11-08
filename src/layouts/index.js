/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
//import { RiWhatsappLine } from "react-icons/ri"
import ReactTooltip from "react-tooltip"
import lottie from "lottie-web"
import reactLogo from "../animations/whatsapp.json"
import React, { useEffect } from "react"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteLayoutTitleQuery {
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

  return <>{children}</>
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
