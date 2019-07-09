const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLFloat,
  GraphQLID
} = require("graphql");

const UserWalletType = new GraphQLObjectType({
  name: "UserWallet",
  fields: () => ({
    id: {
      type: new GraphQLNonNull(GraphQLID),
      resolve: obj => obj.user_id
    },
    amount: { type: new GraphQLNonNull(GraphQLFloat) },
    available: { type: new GraphQLNonNull(GraphQLFloat) },
    spent: { type: new GraphQLNonNull(GraphQLFloat) }
  })
});

module.exports = UserWalletType;
