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
    name: String!
    description: String!,
    status: String!,
    client: Client!
  }

  type Query {
    clients: [Client]
    client(id: ID!): Client
    projects: [Project]
    project(id: ID!): Project 
  }

  type Mutation {
    addClient(name: String!, email: String!, phone: String!): Client
    deleteClient(id: ID!): Client
    addProject(clientId: ID!, name: String!, description: String!, status: String!): Project
    deleteProject(id: ID!): Project
  }
`);

const getProjectWithClient = ({ clientId, ...projectData }) => {
  return { client: clients[clientId], ...projectData };
};

// The root provides a resolver function for each API endpoint
const root = {
  // client queries
  clients: () => {
    return clients;
  },
  client: ({ id }) => {
    return clients.find((client) => client.id === id);
  },

  // client mutations
  addClient: (args) => {
    clients.push({ id: `${clients.length + 1}`, ...args });
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

  // project queries
  projects: () => projects.map((project) => getProjectWithClient(project)),
  project: ({ id }) => {
    const project = projects.find((project) => project.id === id);
    return getProjectWithClient(project);
  },

  // project mutations
  addProject: (args) => {
    projects.push({ id: `${projects.length + 1}`, ...args });
    return projects[projects.length - 1];
  },
  deleteProject: ({ id }) => {
    const index = projects.findIndex((project) => project.id === id);
    if (index === -1) return null;

    [deletedProject] = projects.splice(
      projects.findIndex((project) => project.id === id),
      1
    );

    return deletedProject;
  },
};

module.exports = { schema, root };
