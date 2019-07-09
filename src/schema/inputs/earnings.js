const {
  GraphQLID,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require("graphql");

exports.EarningsCreateInput = new GraphQLInputObjectType({
  name: "EarningsCreate",
  fields: {
    value: { type: new GraphQLNonNull(GraphQLFloat) },
    user: { type: new GraphQLNonNull(GraphQLID) },
    type: { type: new GraphQLNonNull(GraphQLID) },
    description: { type: GraphQLString }
  }
});
