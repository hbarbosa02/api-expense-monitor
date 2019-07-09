const { GraphQLObjectType } = require("graphql");

const Mutations = new GraphQLObjectType({
  name: "Mutation",
  description: "These are the things we can list",
  fields: {
    ...require("./system"),
    ...require("./earnings"),
    ...require("./expenses")
  }
});

module.exports = Mutations;
