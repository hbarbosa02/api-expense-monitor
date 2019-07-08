module.exports = (sequelize, DataTypes) => {
  const Earning = sequelize.define(
    "Earning",
    {
      user_id: DataTypes.BIGINT,
      type_id: DataTypes.BIGINT,
      net_value: DataTypes.FLOAT,
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
      tableName: "earnings"
    }
  );

  return Earning;
};
