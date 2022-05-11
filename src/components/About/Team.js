import FormatText from "@components/Serializers/Serializers"
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React from "react"

const QueryTeamComponent = () => {
  const data = useStaticQuery(graphql`
    query QueryTeamQuery {
      editoriales: allContentfulEquipo(sort: { fields: orden }) {
        edges {
          node {
            id
            title
            orden
            textoPrincipal {
              raw
            }
            imagenDestacada {
              gatsbyImageData(
                layout: CONSTRAINED
                width:400
                height:400
                quality: 90
                formats: JPG
                backgroundColor: "#ffffff"
                jpegProgressive: false
                placeholder: BLURRED
              )
            }
          }
        }
      }
    }
  `)

  return (
    <>
      {data.editoriales.edges.map(({ node }) => {
        return (
          <div key={node.id} className="flex flex-col items-start justify-start w-full max-w-lg px-0 pb-3 mx-auto my-6 font-serif transition-all duration-500 bg-white shadow-md hover:shadow-xl">
            <div className="p-2 text-yellow-300 md:flex-row pattern-dots-sm ">
              <div className="flex items-center justify-center mx-auto mb-3 overflow-hidden transform -translate-y-12 border-4 border-white rounded-full shadow-lg w-44 ">
                 <GatsbyImage
                  title={node.title}
                  className="block object-cover h-auto transform w-44"
                  alt={node.title}
                  image={node.imagenDestacada.gatsbyImageData}
                />
              </div>
              <div className="px-2 -mt-10 prose prose-lg text-left">
                {node.textoPrincipal && <FormatText FormatText={node.textoPrincipal} />}
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default QueryTeamComponent

