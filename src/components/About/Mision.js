import FormatText from "@components/Serializers/Serializers"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"

const MisionComponent = () => {
  const data = useStaticQuery(graphql`
    query MisionQuery {
      mision: contentfulSobreElProyecto(slug: { eq: "mision" }) {
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
      <div className="w-full max-w-3xl mx-auto mb-12 text-center">
        <h2 className="max-w-6xl mx-auto mb-6 font-mono text-4xl leading-tight text-green-500 md:text-5xl">
          {data.mision.title}
        </h2>
        <div className="flex items-center justify-center mb-2 ">
          <h3 className="max-w-3xl mx-auto mb-6 text-2xl leading-loose ">
            {data.mision.textoPrincipal && (
              <FormatText FormatText={data.mision.textoPrincipal} />
            )}
          </h3>
        </div>
      </div>
    </>
  )
}

export default MisionComponent
