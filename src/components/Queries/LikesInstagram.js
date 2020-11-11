import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { AiTwotoneHeart } from "react-icons/ai"
import { FaComment } from "react-icons/fa"

const LikesInstagramComponent = () => {
  const data = useStaticQuery(graphql`
    query LikesInstagramQuery {
      instagram: allInstaNode(
        limit: 8
        sort: { order: DESC, fields: likes }
        skip: 6
      ) {
        edges {
          node {
            id
            likes
            comments
            caption
            mediaType
            timestamp
            original
            thumbnails {
              src
              config_width
              config_height
            }
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <div className="grid max-w-5xl grid-cols-2 gap-1 mx-auto md:grid-cols-4 ">
        {data.instagram.edges.map(({ node }) => {
          return (
            <div className="relative">
              <a
                href="https://www.instagram.com/kallpaludica/"
                target="_blank"
                rel="noopener noreferrer"
                className="absolute z-40 flex items-center justify-center w-full h-full transition-all duration-200 transform opacity-0 hover:opacity-100"
              >
                <div className="flex flex-col items-center justify-center w-12 h-12 px-2 m-3 font-sans text-xl font-bold text-white ">
                  <AiTwotoneHeart className="inline-block " />
                  {node.likes}
                </div>

                <div className="hidden m-3 font-sans text-xl font-bold text-white">
                  <FaComment className="inline-block " />
                  {node.comments}
                </div>
              </a>

              <div className="w-full h-64 overflow-hidden bg-teal-800 ">
                <img
                  src={node.original}
                  className="object-cover w-full h-full opacity-75 "
                  alt="Lo que se anda jugando"
                />
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default LikesInstagramComponent
