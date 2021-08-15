import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import FormatText from "../serializers"

const AboutAboutComponent = () => {
  const data = useStaticQuery(graphql`
    query AboutAboutQuery {
      about: contentfulSobreElProyecto(slug: { eq: "quienes-somos" }) {
        id
        title
        textoPrincipal {
          raw
        }
      }
    }
  `)

  return (
    <>
      <h1 className="max-w-6xl pb-3 mx-auto font-serif text-4xl font-bold text-gary-800 ">
        {data.about.title}
      </h1>
      <div className="max-w-3xl mx-auto mt-3 font-serif prose prose-xl text-center text-gray-800">
        {data.about.textoPrincipal && (
          <FormatText FormatText={data.about.textoPrincipal} />
        )}
      </div>
    </>
  )
}

export default AboutAboutComponent
