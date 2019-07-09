const { Register } = require("../inputs/user");
const { User } = require("../../app/models");
const UserType = require("../types/user");

const UserMutations = {
  singUp: {
    type: UserType,
    description: "Sing up user",
    args: {
      input: { type: Register }
    },
    resolve: (_, { input }, ctx) => {
      const { name, email, password } = input;
      return User.create({
        name,
        email,
        password
      });
    }
  }
};

module.exports = UserMutations;
