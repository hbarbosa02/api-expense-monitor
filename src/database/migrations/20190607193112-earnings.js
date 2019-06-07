"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("earnings", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.BIGINT
      },
      user_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
        references: {
          model: "users",
          key: "id"
        }
      },
      type_id: {
        allowNull: false,
        type: DataTypes.BIGINT,
        references: {
          model: "payments_types",
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
      net_value: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("earnings");
  }
};
