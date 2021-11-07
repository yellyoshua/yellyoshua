import { gql } from "@apollo/client"

export const GET_ALL_PROJECTS = gql`
  query {
    projects {
      id
      title
      slug
      sortDescription
      description {
        
        html
      }
      isDevelopment
      externalLink
      backdrop {
        url
        height
        width
        size
      }
      repository
    }
  }
`