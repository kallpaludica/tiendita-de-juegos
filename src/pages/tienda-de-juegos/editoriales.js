import React from "react"
import Layout from "../../components/layout"
import HeroWave from "../../components/HeroWave"
import Publishers from "../../components/Games/Publishers"
import Seo from "../../components/seo"
import { Helmet } from "react-helmet"
import Bread from "../../components/breadcrumb"
import Contact from "../../components/About/Contact"

const PublishersPages = ({ data, pageContext, location }) => {
  return (
    <Layout>
      <Seo title="Editoriales" />
      <Helmet>
        <body className="about" />
      </Helmet>
      <HeroWave
        heading="Editoriales"
        pattern="bg-green-800 text-green-900"
        svg="M0,256L80,261.3C160,267,320,277,480,272C640,267,800,245,960,229.3C1120,213,1280,203,1360,197.3L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
      />
      <div className="max-w-6xl px-6 mx-auto">
        <Bread breaddata={pageContext.breadcrumb}></Bread>
      </div>
      <Publishers />
      <Contact />
    </Layout>
  )
}

export default PublishersPages
