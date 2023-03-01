import { GraphQLClient, gql } from 'graphql-request'

const apiEndpoint = import.meta.env.VITE_API_ENDPOINT

export const addClient = ({ name, email, phone }) => {
  const graphQLClient = new GraphQLClient(apiEndpoint)
  const mutation = gql`
    mutation addClient($name: String!, $email: String!, $phone: String!) {
      addClient(name: $name, email: $email, phone: $phone) {
        id
        name
        email
        phone
      }
    }
  `
  const variables = { name, email, phone }
  return graphQLClient.request(mutation, variables)
}

export const removeClient = ({ clientID }) => {
  const graphQLClient = new GraphQLClient(apiEndpoint)
  const mutation = gql`
    mutation removeClient($id: ID!) {
      deleteClient(id: $id) {
        id
        name
        email
        phone
      }
    }
  `
  const variables = { id: clientID }
  return graphQLClient.request(mutation, variables)
}
