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
      </TransitionProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
