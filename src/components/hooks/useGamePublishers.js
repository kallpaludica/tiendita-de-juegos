import { useStaticQuery, graphql } from "gatsby"

const useGamePublishers = () => {
  const data = useStaticQuery(graphql`
    query GamePublisher {
      editoriales: allContentfulEditorial(sort: { fields: title }) {
        edges {
          node {
            id
            title
            slug
            logo {
              fluid(maxWidth: 200) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return ( data.editoriales.edges )
}

export default useGamePublishers
