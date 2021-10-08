import React from "react"
import { Helmet } from "react-helmet"
import Contact from "../../components/About/Contact"
import Collections from "../../components/Games/GameCollections"
import HeroWave from "../../components/HeroWave"
import Layout from "../../components/layout"
import Seo from "../../components/seo"

const CollectionsPages = ({ data, pageContext, location }) => {
  return (
    <Layout>
      <Helmet>
        <body className="home" />
      </Helmet>
      <Seo title="Colecciones" />
      <HeroWave
        heading="Colecciones"
        center={true}
        pattern="bg-blue-500 text-blue-600"
      />
      <Collections />
      <Contact />
    </Layout>
  )
}

export default CollectionsPages
