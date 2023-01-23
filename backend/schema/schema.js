const { buildSchema } = require("graphql");
const { clients, projects } = require("../SampleData.js");
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
  type Client {
    id: ID!,
    name: String!,
    email: String!,
    phone: String!,
  }

  type Project {
    id: ID!,
    clientID: ID!,
    name: String!
    description: String!,
    status: String!
  }

  type Query {
    clients: [Client]
    client(id: ID!): Client
    projects: [Project]
    project(id: ID!): Project 
  }

  type Mutation {
    addClient(name: String, email: String, phone: String): Client
    deleteClient(id: ID!): Client
  }
`);

// deleteClient(id: ID!)
// addProject(project: Project!)
// deleteProject(id: ID!)
// updateProject(project: Project!)
// The root provides a resolver function for each API endpoint
const root = {
  clients: () => {
    return clients;
  },
  client: ({ id }) => {
    return clients.find((client) => client.id === id);
  },
  projects: () => {
    return projects;
  },
  project: ({ id }) => {
    return projects.find((project) => project.id === id);
  },
  addClient: (args) => {
    clients.push({ id: clients.length, ...args });
    return clients[clients.length - 1];
  },
  deleteClient: ({ id }) => {
    const index = clients.findIndex((client) => client.id === id);
    if (index === -1) return null;

    [deletedClient] = clients.splice(
      clients.findIndex((client) => client.id === id),
      1
    );

    return deletedClient;
  },
};

module.exports = { schema, root };
