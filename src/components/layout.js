import AnimatedWhatsapp from "@animations/whatsapp.json"
import Footer from "@components/Footer/Footer"
import Header from "@components/Header/Header"
import Offcanvas from "@components/Offcanvas/Offcanvas"
import { graphql, useStaticQuery } from "gatsby"
import lottie from "lottie-web"
import PropTypes from "prop-types"
import React, { useEffect } from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { BsFillTriangleFill } from "react-icons/bs"
import SimpleReactLightbox from "simple-react-lightbox"

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
      container: document.querySelector("#animated-whatsapp"),
      animationData: AnimatedWhatsapp,
    })
  }, [])

  return (
    <>
      <Offcanvas />
      <Header siteTitle={data.site.siteMetadata.title} />
      <div id="top"></div>
      <div className="app-container">
        <SimpleReactLightbox>
          <main className="text-center bg-white">{children}</main>
        </SimpleReactLightbox>
        <Footer />
      </div>
      <AnchorLink
        className="fixed bottom-0 left-0 z-50 p-4 m-4 font-mono text-xl text-white duration-300 rounded-full bg-amber-500 hover:text-yellow-300 to-top"
        href="#top"
        aria-label="Ir a la parte de arriba del sitio"
      >
        <BsFillTriangleFill />
      </AnchorLink>
      <a
        className="fixed bottom-0 right-0 z-50 p-1 mb-3 mr-3 overflow-hidden transition-all duration-500 rounded-full hover:bg-emerald-600 hover:text-white to-whatsapp"
        target="_blank"
        rel="noopener noreferrer"
        title="Consultas por Whatsapp"
        href="https://api.whatsapp.com/send?phone=+549%203874811808&text=%C2%A1Hola!%F0%9F%A4%97%20"
      >
        <div id="animated-whatsapp" style={{ width: 60, height: 60 }} />
      </a>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
