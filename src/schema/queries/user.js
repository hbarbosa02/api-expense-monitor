const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");

const UserType = require("../types/user");
const UserWalletType = require("../types/wallet");

const { User, UserWallet } = require("../../app/models");

const UserQueries = {
  user: {
    type: UserType,
    description: "Get User",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (_, { id }, ctx) => User.findByPk(id)
  },
  wallet: {
    type: UserWalletType,
    description: "Get User Wallet",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (_, { id }, ctx) => UserWallet.findByPk(id)
  }
};

module.exports = UserQueries;
