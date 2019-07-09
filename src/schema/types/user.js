const {
  GraphQLObjectType,
  GraphQLNonNull,
  GraphQLString,
  GraphQLID
} = require("graphql");

const UserWalletType = require("./wallet");

const { UserWallet } = require("../../app/models");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    wallet: {
      type: UserWalletType,
      resolve: obj => UserWallet.findByPk(obj.id)
    },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = UserType;
