import { gql, request } from 'graphql-request'

export const getProjects = async () => {
  const query = gql`
    query getProjects {
      projects {
        id
        name
        status
      }
    }
  `

  return request('http://localhost:5001/graphql', query)
}
