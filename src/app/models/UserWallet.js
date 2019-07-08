module.exports = (sequelize, DataTypes) => {
  const UserWallet = sequelize.define(
    "UserWallet",
    {
      user_id: {
        type: DataTypes.BIGINT,
        primaryKey: true
      },
      amount: DataTypes.FLOAT,
      available: DataTypes.FLOAT,
      spent: DataTypes.FLOAT
    },
    {
      tableName: "users_wallet"
    }
  );

  return UserWallet;
};
