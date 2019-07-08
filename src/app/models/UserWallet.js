module.exports = (sequelize, DataTypes) => {
  const UserWallet = sequelize.define(
    "UserWallet",
    {
      user_id: DataTypes.BIGINT,
      amount: DataTypes.FLOAT,
      available: DataTypes.FLOAT,
      spent: DataTypes.FLOAT
    },
    {
      tableName: "users_wallet"
    }
  );
  UserWallet.associate = models => {
    UserWallet.belongsTo(models.User, { foreginKey: "user_id" });
  };

  return UserWallet;
};
