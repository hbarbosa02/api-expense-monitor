const { RegisterInput, LoginInput } = require("../inputs/user");

const { User } = require("../../app/models");

const LoginType = require("../types/system/login");
const UserType = require("../types/user");

const SystemMutations = {
  singUp: {
    type: UserType,
    description: "Sing up user",
    args: {
      input: { type: RegisterInput }
    },
    resolve: (_, { input }, ctx) => {
      const { name, email, password } = input;
      return User.create({
        name,
        email,
        password
      });
    }
  },
  login: {
    type: LoginType,
    description: "Login for users",
    args: {
      input: { type: LoginInput }
    },
    resolve: async (_, { input }, ctx) => {
      const { email, password } = input;

      const user = await User.findOne({ where: { email } });
      if (!user) throw Error("email or password incorrect");

      const passVerify = await user.checkPassword(password);
      if (!passVerify) throw Error("email or password incorrect");

      const { token } = user.generateToken();

      return { token };
    }
  }
};

module.exports = SystemMutations;
