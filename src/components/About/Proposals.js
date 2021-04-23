import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import FormatText from "../serializers"
import "./proposals.css"

const ProposalsComponent = () => {
  const data = useStaticQuery(graphql`
    query ProposalsQuery {
      propuestas: contentfulSobreElProyecto(slug: { eq: "propuestas" }) {
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
      <div className="w-full text-center">
        <h1 className="max-w-4xl pb-12 mx-auto font-mono text-4xl">
          {data.propuestas.title}
        </h1>
        <div className="max-w-4xl mx-auto font-sans text-xl proposals">
        {data.propuestas.textoPrincipal && (
          <FormatText FormatText={data.propuestas.textoPrincipal} />
        )}
        </div>
      </div>
    </>
  )
}

export default ProposalsComponent
