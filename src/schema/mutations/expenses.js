const ExpensesType = require("../types/expenses");
const { DeleteInput } = require("../inputs/delete");
const { ExpensesInput } = require("../inputs/expenses");
const { Expense, UserWallet } = require("../../app/models");
const { compose, authenticated } = require("../../../utils/please");

const ExpensesMutations = {
  expensesCreate: {
    type: ExpensesType,
    description: "Register User Expenses",
    args: {
      input: { type: ExpensesInput }
    },
    resolve: compose(authenticated)(async (_, { input }, ctx) => {
      const { initialDate, finalDate, value, user, type } = input;

      const { available } = await UserWallet.findByPk(user);
      const percent = value / available;
      const parcel = input.plots || 1;

      return Expense.create({
        user_id: user,
        type_id: type,
        initial_date: new Date(initialDate),
        final_date: new Date(finalDate),
        net_value: value,
        plots: parcel,
        plots_value: value / parcel,
        percentage: percent,
        description: input.description || ""
      });
    })
  },
  expensesDelete: {
    type: ExpensesType,
    description: "Register User Expenses",
    args: {
      input: { type: DeleteInput }
    },
    resolve: compose(authenticated)((_, { input }, ctx) => {
      const { id } = input;

      return Expense.destroy({ where: { id, user_id: ctx.user.id } });
    })
  }
};

module.exports = ExpensesMutations;
