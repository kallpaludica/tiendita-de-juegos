import { useStaticQuery, graphql } from "gatsby"

const useGameCategories = () => {
  const data = useStaticQuery(graphql`
    query GameCategories {
      categories: allContentfulCategoriaDelJuego {
        edges {
          node {
            id
            title
            slug
            icono {
              fixed(width: 80, height: 80) {
                ...GatsbyContentfulFixed
              }
            }
          }
        }
      }
    }
  `)

  return (data.categories.edges)
}

export default useGameCategories
