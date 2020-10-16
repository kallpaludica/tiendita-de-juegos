/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { RiWhatsappLine } from "react-icons/ri"
import ReactTooltip from "react-tooltip"
import lottie from "lottie-web"
import reactLogo from "../animations/whatsapp.json"
import React, { useEffect } from "react"

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
      <TransitionProvider location={location}>
        <Sidebar />
        <Header siteTitle={data.site.siteMetadata.title} />
        <TransitionViews>{children}</TransitionViews>
        {/*<ReactTooltip place="left" type="dark" effect="solid" />*/}
        <a
          className="fixed bottom-0 right-0 p-1 mb-3 mr-3 overflow-hidden transition-all duration-500 rounded-full hover:bg-green-600 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
          title="Hacenos una consulta"
          href="https://api.whatsapp.com/send?phone=+549%203876034627&text=%C2%A1Hola!%F0%9F%A4%97%20"
        >
          <div id="react-logo" style={{ width: 60, height: 60 }} />
        </a>
      </TransitionProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
