const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");
const UserType = require("../types/user");

const { User } = require("../../app/models");

const UserQueries = {
  users: {
    type: new GraphQLList(UserType),
    description: "User",
    resolve: (_, __, ctx) => User.findAll()
  },
  userById: {
    type: UserType,
    description: "User",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (_, { id }, ctx) => User.findOne({ where: { id } })
  }
};

module.exports = UserQueries;
