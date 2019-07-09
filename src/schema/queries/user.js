const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");

const UserType = require("../types/user");
const UserWalletType = require("../types/wallet");
const ExpensesType = require("../types/expenses");

const { User, UserWallet, Expense } = require("../../app/models");

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
  },
  expenses: {
    type: new GraphQLList(ExpensesType),
    description: "Get User Expenses",
    args: {
      id: { type: new GraphQLNonNull(GraphQLID) }
    },
    resolve: (_, { id }, ctx) => Expense.findAll({ where: { user_id: id } })
  }
};

module.exports = UserQueries;
