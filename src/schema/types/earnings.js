const {
  GraphQLNonNull,
  GraphQLObjectType,
  GraphQLString,
  GraphQLFloat,
  GraphQLInt,
  GraphQLID
} = require("graphql");

const UserType = require("./user");

const { User, PaymentType } = require("../../app/models");

const TypeEarnings = new GraphQLObjectType({
  name: "TypeEarnings",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    active: { type: new GraphQLNonNull(GraphQLString) }
  })
});

const EarningsType = new GraphQLObjectType({
  name: "Earnings",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    user: {
      type: UserType,
      resolve: obj => User.findByPk(obj.user_id)
    },
    type: {
      type: TypeEarnings,
      resolve: obj => PaymentType.findByPk(obj.type_id)
    },
    netValue: {
      type: GraphQLFloat,
      resolve: obj => obj.net_value
    },
    description: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = EarningsType;
