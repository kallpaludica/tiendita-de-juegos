import FormatText from "@components/Serializers/Serializers"
import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import * as s from "./Proposals.module.css"

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
        <div className={s.Proposals}>
        {data.propuestas.textoPrincipal && (
          <FormatText FormatText={data.propuestas.textoPrincipal} />
        )}
        </div>
      </div>
    </>
  )
}

export default ProposalsComponent
