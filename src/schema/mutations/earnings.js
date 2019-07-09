const { Earning } = require("../../app/models");
const EarningsType = require("../types/earnings");
const { DeleteInput } = require("../inputs/delete");
const { EarningsCreateInput } = require("../inputs/earnings");
const { compose, authenticated } = require("../../../utils/please");

const EarningsMutations = {
  earningsCreate: {
    type: EarningsType,
    description: "Register User Earnings",
    args: {
      input: { type: EarningsCreateInput }
    },
    resolve: compose(authenticated)((_, { input }, ctx) => {
      const { value, user, type } = input;

      return Earning.create({
        user_id: user,
        type_id: type,
        net_value: value,
        description: input.description || ""
      });
    })
  },
  earningsDelete: {
    type: EarningsType,
    description: "Register User Earnings",
    args: {
      input: { type: DeleteInput }
    },
    resolve: compose(authenticated)((_, { input }, ctx) => {
      const { id } = input;

      return Earning.destroy({ where: { id, user_id: ctx.user.id } });
    })
  }
};

module.exports = EarningsMutations;
