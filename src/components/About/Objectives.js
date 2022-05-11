import FormatText from "@components/Serializers/Serializers"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const ObjectivesComponent = () => {
  const data = useStaticQuery(graphql`
    query ObjectivesQuery {
      objetivos: contentfulSobreElProyecto(slug: { eq: "objetivos" }) {
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
      <div className="w-full text-left ">
        <h1 className="max-w-4xl pb-6 mx-auto font-mono text-4xl text-center text-yellow-600">
          {data.objetivos.title}
        </h1>
        <hr className="w-16 mx-auto my-8 border-t-4 border-yellow-600" />
        <div className="max-w-4xl mx-auto font-serif text-2xl prose prose-xl prose-red">
          {data.objetivos.textoPrincipal && (
            <FormatText FormatText={data.objetivos.textoPrincipal} />
          )}
        </div>
      </div>
    </>
  )
}

export default ObjectivesComponent
