import { GraphQLClient, gql } from 'graphql-request'

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT

export const addProject = ({ name, description, status, clientId }) => {
  const graphQLClient = new GraphQLClient(apiEndpoint)
  const mutation = gql`
    mutation addProject($clientId: ID!, $name: String!, $description: String!, $status: String!) {
      addProject(clientId: $clientId, name: $name, description: $description, status: $status) {
        id
      }
    }
  `
  const variables = { clientId, name, description, status }
  return graphQLClient.request(mutation, variables)
}
