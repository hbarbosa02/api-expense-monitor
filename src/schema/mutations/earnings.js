const { Earning } = require("../../app/models");
const EarningsType = require("../types/earnings");
const { EarningsInput } = require("../inputs/earnings");
const { compose, authenticated } = require("../../../utils/please");

const EarningsMutations = {
  earningsCreate: {
    type: EarningsType,
    description: "Register User Earnings",
    args: {
      input: { type: EarningsInput }
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
  }
};

module.exports = EarningsMutations;
