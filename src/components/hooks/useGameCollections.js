import { useStaticQuery, graphql } from "gatsby"

const useGameCollections = () => {
  const data = useStaticQuery(graphql`
    query GameCollections {
      collections: allContentfulColecciones {
        edges {
          node {
            id
            title
            slug
          }
        }
      }
    }
  `)

  return (data.collections.edges)
    
}

export default useGameCollections
