const {
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require("graphql");

exports.RegisterInput = new GraphQLInputObjectType({
  name: "Register",
  fields: {
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  }
});

exports.LoginInput = new GraphQLInputObjectType({
  name: "LoginInput",
  fields: {
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  }
});
