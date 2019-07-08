const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLID
} = require("graphql");

const UserWalletType = require("./wallet");

const { UserWallet } = require("../../app/models");

const UserType = new GraphQLObjectType({
  name: "User",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    email: { type: new GraphQLNonNull(GraphQLString) },
    password: { type: new GraphQLNonNull(GraphQLString) },
    wallet: {
      type: UserWalletType,
      resolve: obj => UserWallet.findOne({ where: { user_id: obj.id } })
    }
  })
});

module.exports = UserType;
