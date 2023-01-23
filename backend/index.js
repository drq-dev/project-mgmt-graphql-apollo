var express = require("express");
const { graphqlHTTP } = require("express-graphql");
const { buildSchema } = require("graphql");
const port = process.env.PORT || 5000;
const { schema, root } = require("./schema/schema");

const app = express();
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(port, console.log(`Server running on port ${port}`));
