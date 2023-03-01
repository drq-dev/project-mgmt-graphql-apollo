import { gql, request } from 'graphql-request'
const apiEndpoint = import.meta.env.VITE_API_ENDPOINT

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

  return request(apiEndpoint, query)
}

export const getClientNames = async () => {
  const query = gql`
    query getClients {
      clients {
        id
        name
      }
    }
  `

  return request(apiEndpoint, query)
}
