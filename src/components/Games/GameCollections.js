import { graphql, Link, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { kebabCase } from "lodash"
import React from "react"
import tw from "twin.macro"
import styled from "@emotion/styled"
const GameCollectionComponent = () => {
  const data = useStaticQuery(graphql`
    query GameCollectionQuery {
      collections: allContentfulColecciones {
        edges {
          node {
            id
            title
            slug
            CollectionDescription {
              CollectionDescription
            }
            icono {
              fixed(width: 85, height: 85) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div tw="flex flex-col items-center justify-center max-w-6xl px-6 mx-auto">
        <div tw="grid grid-cols-2 gap-5 my-12 font-sans text-gray-800 md:grid-cols-4">
          {data.collections.edges.map(({ node }) => {
            return (
              <Card className="">
                <Link
                  key={node.slug}
                  to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                  tw="flex flex-col justify-center text-lg font-bold text-teal-500 shadow-sm"
                >
                  {node.icono && (
                    <div tw="relative bg-white py-6 overflow-hidden text-center md:w-full ">
                      <Img
                        title={node.title}
                        tw="w-full"
                        alt={node.title}
                        fixed={node.icono.fixed}
                      />
                    </div>
                  )}
                </Link>
                <p
                  tw=" p-2 pt-4 md:px-8  font-sans text-base md:text-lg"
                  style={{ minHeight: "80px" }}
                >
                  {node.CollectionDescription.CollectionDescription}
                </p>
                <Link
                  to={`/tienda-de-juegos/colecciones/${kebabCase(node.slug)}/`}
                  tw="px-2 py-2 text-white bg-teal-500 font-bold rounded-sm hover:bg-teal-600 hover:text-white"
                >
                  Ver {node.title}
                </Link>
              </Card>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default GameCollectionComponent

const Card = styled.div`
  ${tw`flex flex-col text-center transition-all duration-500 ease-in-out transform bg-teal-100 rounded-md shadow-xl hover:shadow-2xl hover:-translate-y-2`}

`
