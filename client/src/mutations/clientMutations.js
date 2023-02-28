import { GraphQLClient, gql } from 'graphql-request'

export const removeClient = ({ clientID }) => {
  const graphQLClient = new GraphQLClient('http://localhost:5001/graphql')
  const mutation = gql`
    mutation removeClient($id: ID!) {
      deleteClient(id: $id) {
        name
      }
    }
  `
  const variables = { id: clientID }
  return graphQLClient.request(mutation, variables)
}
