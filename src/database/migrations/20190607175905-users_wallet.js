"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("users_wallet", {
      user_id: {
        allowNull: false,
        primaryKey: true,
        type: DataTypes.BIGINT,
        references: {
          model: "users",
          key: "id"
        }
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date()
      },
      deleted_at: {
        allowNull: true,
        type: DataTypes.DATE
      },
      amount: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0
      },
      available: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0
      },
      spent: {
        allowNull: true,
        type: DataTypes.FLOAT,
        defaultValue: 0.0
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("users_wallet");
  }
};
