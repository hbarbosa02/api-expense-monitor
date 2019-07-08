const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");
const UserType = require("../types/user");

const { User } = require("../../app/models");

const UserQueries = {
  user: {
    type: UserType,
    description: "User",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (_, { id }, ctx) => User.findByPk(id)
  }
};

module.exports = UserQueries;
