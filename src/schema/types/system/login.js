const { GraphQLObjectType, GraphQLNonNull, GraphQLString } = require("graphql");

const LoginType = new GraphQLObjectType({
  name: "Login",
  fields: () => ({
    token: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = LoginType;
