const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require("graphql");

exports.Register = new GraphQLInputObjectType({
  name: "Register",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  }
});
