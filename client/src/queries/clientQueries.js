import { gql, request } from 'graphql-request'

export const getClients = async () => {
  const query = gql`
    query getClients {
      clients {
        id
        name
        email
        phone
      }
    }
  `

  return request('http://localhost:5001/graphql', query)
}
