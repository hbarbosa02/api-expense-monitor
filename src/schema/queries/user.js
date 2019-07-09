const { GraphQLNonNull, GraphQLID, GraphQLList } = require("graphql");

const { compose, authenticated } = require("../../../utils/please");

const UserType = require("../types/user");
const UserWalletType = require("../types/wallet");
const ExpensesType = require("../types/expenses");
const EarningsType = require("../types/earnings");

const { User, UserWallet, Expense } = require("../../app/models");

const UserQueries = {
  user: {
    type: UserType,
    description: "Get User",
    resolve: compose(authenticated)((_, __, ctx) => User.findByPk(ctx.user.id))
  },
  wallet: {
    type: UserWalletType,
    description: "Get User Wallet",
    resolve: compose(authenticated)((_, __, ctx) =>
      UserWallet.findByPk(ctx.user.id)
    )
  },
  expenses: {
    type: new GraphQLList(ExpensesType),
    description: "Get User Expenses",
    resolve: compose(authenticated)((_, __, ctx) =>
      Expense.findAll({ where: { user_id: ctx.user.id } })
    )
  },
  earnings: {
    type: new GraphQLList(EarningsType),
    description: "Get User Earnings",
    resolve: compose(authenticated)((_, __, ctx) =>
      Expense.findAll({ where: { user_id: ctx.user.id } })
    )
  }
};

module.exports = UserQueries;
