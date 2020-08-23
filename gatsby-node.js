/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const _ = require("lodash")
const path = require(`path`)
const { paginate } = require("gatsby-awesome-pagination")

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const gameSingle = path.resolve(`./src/templates/gameSingle.js`)
    const categorySingle = path.resolve(`./src/templates/categorySingle.js`)
    const publisherSingle = path.resolve(`./src/templates/publisherSingle.js`)
    const collectionSingle = path.resolve(`./src/templates/collectionSingle.js`)

    resolve(
      graphql(
        `
          {
            allContentfulArticulos {
              edges {
                node {
                  title
                  slug
                  GameBuyPrice
                }
              }
            }
            allContentfulCategoriaDelJuego {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulEditorial {
              edges {
                node {
                  title
                  slug
                }
              }
            }
            allContentfulColecciones {
              edges {
                node {
                  title
                  slug
                }
              }
            }
          }
        `
      ).then((result) => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        paginate({
          createPage,
          items: result.data.allContentfulArticulos.edges,
          itemsPerPage: 25,
          pathPrefix: "/juegos",
          component: path.resolve("src/templates/gameArchive.js"),
        })

        const posts = result.data.allContentfulArticulos.edges
        const categories = result.data.allContentfulCategoriaDelJuego.edges
        const publishers = result.data.allContentfulEditorial.edges
        const collections = result.data.allContentfulColecciones.edges

        posts.forEach((post, index) => {
          createPage({
            path: `/juegos/${post.node.slug}/`,
            component: gameSingle,
            context: {
              slug: post.node.slug,
              prev: index === 0 ? null : posts[index - 1].node,
              next: index === posts.length - 1 ? null : posts[index + 1].node,
            },
          })
        })

        categories.forEach((category, index) => {
          createPage({
            path: `/categorias/${category.node.slug}/`,
            component: categorySingle,
            context: {
              slug: category.node.slug,
              prev: index === 0 ? null : categories[index - 1].node,
              next:
                index === categories.length - 1
                  ? null
                  : categories[index + 1].node,
            },
          })
        })

        publishers.forEach((publisher, index) => {
          createPage({
            path: `/editoriales/${publisher.node.slug}/`,
            component: publisherSingle,
            context: {
              slug: publisher.node.slug,
              prev: index === 0 ? null : publishers[index - 1].node,
              next:
                index === publishers.length - 1
                  ? null
                  : publishers[index + 1].node,
            },
          })
        })

        collections.forEach((collection, index) => {
          createPage({
            path: `/colecciones/${collection.node.slug}/`,
            component: collectionSingle,
            context: {
              slug: collection.node.slug,
              prev: index === 0 ? null : collections[index - 1].node,
              next:
                index === collections.length - 1
                  ? null
                  : collections[index + 1].node,
            },
          })
        })
      })
    )
  })
}
