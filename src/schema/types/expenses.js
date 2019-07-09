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

const TypePayments = new GraphQLObjectType({
  name: "TypePayments",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    name: { type: new GraphQLNonNull(GraphQLString) },
    description: { type: new GraphQLNonNull(GraphQLString) },
    active: { type: new GraphQLNonNull(GraphQLString) }
  })
});

const ExpensesType = new GraphQLObjectType({
  name: "Expenses",
  fields: () => ({
    id: { type: new GraphQLNonNull(GraphQLID) },
    user: {
      type: UserType,
      resolve: obj => User.findByPk(obj.user_id)
    },
    type: {
      type: TypePayments,
      resolve: obj => PaymentType.findByPk(obj.type_id)
    },
    initialDate: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: obj => new Date(obj.initial_date).toISOString()
    },
    finalDate: {
      type: new GraphQLNonNull(GraphQLString),
      resolve: obj => new Date(obj.final_date).toISOString()
    },
    netValue: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: obj => obj.net_value
    },
    plotsValue: {
      type: new GraphQLNonNull(GraphQLFloat),
      resolve: obj => obj.plots_value
    },
    plots: { type: new GraphQLNonNull(GraphQLInt) },
    percentage: { type: new GraphQLNonNull(GraphQLFloat) },
    description: { type: new GraphQLNonNull(GraphQLString) }
  })
});

module.exports = ExpensesType;
