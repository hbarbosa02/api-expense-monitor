const {
  GraphQLID,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require("graphql");

exports.DeleteInput = new GraphQLInputObjectType({
  name: "DeleteInput",
  fields: {
    id: { type: new GraphQLNonNull(GraphQLID) }
  }
});
