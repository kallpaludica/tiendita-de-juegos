/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { TransitionProvider, TransitionViews } from "gatsby-plugin-transitions"
import Sidebar from "../components/Sidebar"
import Header from "../components/Header"
import { RiWhatsappLine } from "react-icons/ri"
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

  return (
    <>
      <TransitionProvider location={location}>
        <Sidebar />
        <Header siteTitle={data.site.siteMetadata.title} />
        <TransitionViews>{children}</TransitionViews>
        <ReactTooltip place="left" type="dark" effect="solid" />
        <a
          className="fixed bottom-0 right-0 p-1 mb-3 mr-3 overflow-hidden text-white bg-green-500 rounded-full hover:bg-green-600 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
          data-tip="Consultanos sobre juegos"
          title="Hacenos una consulta"
          href="https://api.whatsapp.com/send?phone=+549%203876034627&text=%C2%A1Hola!%F0%9F%A4%97%20"
        >
          <RiWhatsappLine className="m-2 text-3xl " />
        </a>
      </TransitionProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
