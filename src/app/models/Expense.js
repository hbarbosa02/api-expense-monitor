module.exports = (sequelize, DataTypes) => {
  const Expense = sequelize.define(
    "Expense",
    {
      user_id: DataTypes.BIGINT,
      type_id: DataTypes.BIGINT,
      net_value: DataTypes.FLOAT,
      plots: DataTypes.INTEGER,
      plots_value: DataTypes.FLOAT,
      initial_date: DataTypes.DATEONLY,
      final_date: DataTypes.DATEONLY,
      percentage: DataTypes.FLOAT,
      description: {
        type: DataTypes.STRING,
        validate: {
          notEmpty: {
            msg: "The description can not be empty"
          },
          len: {
            args: [1, 100],
            msg: "The description must contain less than 100 characters"
          }
        }
      }
    },
    {
      tableName: "expenses"
    }
  );

  return Expense;
};
