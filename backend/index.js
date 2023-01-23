const express = require("express");
const { graphqlHTTP } = require("express-graphql");
require("dotenv").config();
const { schema, root } = require("./schema/schema");

const port = process.env.PORT || 5000;

const app = express();

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: process.env.NODE_ENV === "development",
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
