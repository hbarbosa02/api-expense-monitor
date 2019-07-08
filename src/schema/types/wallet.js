const { GraphQLNonNull, GraphQLObjectType, GraphQLFloat } = require("graphql");

const UserWalletType = new GraphQLObjectType({
  name: "UserWallet",
  fields: () => ({
    amount: { type: new GraphQLNonNull(GraphQLFloat) },
    available: { type: new GraphQLNonNull(GraphQLFloat) },
    spent: { type: new GraphQLNonNull(GraphQLFloat) }
  })
});

module.exports = UserWalletType;
