const {
  GraphQLID,
  GraphQLInt,
  GraphQLFloat,
  GraphQLString,
  GraphQLNonNull,
  GraphQLInputObjectType
} = require("graphql");

exports.ExpensesInput = new GraphQLInputObjectType({
  name: "ExpensesInput",
  fields: {
    initialDate: { type: new GraphQLNonNull(GraphQLString) },
    finalDate: { type: new GraphQLNonNull(GraphQLString) },
    value: { type: new GraphQLNonNull(GraphQLFloat) },
    user: { type: new GraphQLNonNull(GraphQLID) },
    type: { type: new GraphQLNonNull(GraphQLID) },
    description: { type: GraphQLString },
    plots: { type: GraphQLInt }
  }
});
