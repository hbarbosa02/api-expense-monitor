const { GraphQLObjectType } = require("graphql");

const Queries = new GraphQLObjectType({
  name: "Query",
  description: "These are the things we can list",
  fields: {
    ...require("./user")
  }
});

module.exports = Queries;
