const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");
const UserType = require("../types/user");

const { User, UserWallet } = require("../../app/models");

const UserQueries = {
  users: {
    type: new GraphQLList(UserType),
    description: "User",
    resolve: async (_, __, ctx) => {
      const value = await User.findAll();
      console.log(value);
      return value;
    }
  },
  userById: {
    type: UserType,
    description: "User",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (_, { id }, ctx) => {
      User.create({
        name: "hiran",
        email: "hiran@teste.com",
        password: "12345678"
      });
    }
  }
};

module.exports = UserQueries;
