const { buildSchema } = require("graphql");
const { clients } = require("../SampleData.js");
// Construct a schema, using GraphQL schema language
const schema = buildSchema(`
    type Client {
        id: ID,
        name: String,
        email: String,
        phone: String,
    }
  type Query {
    clients: [Client]
    client(id: ID!): Client 
  }
`);

// The root provides a resolver function for each API endpoint
const root = {
  clients: () => {
    return clients;
  },
  client: ({ id }) => {
    return clients.find((client) => client.id === id);
  },
};

module.exports = { schema, root };
