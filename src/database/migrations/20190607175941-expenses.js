"use strict";

module.exports = {
  up: (queryInterface, DataTypes) => {
    return queryInterface.createTable("expenses", {
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
      },
      plots: {
        allowNull: false,
        type: DataTypes.INTEGER,
        defaultValue: 1
      },
      plots_value: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0
      },
      initial_date: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
      },
      final_date: {
        allowNull: false,
        type: DataTypes.DATEONLY,
        defaultValue: new Date()
      },
      percentage: {
        allowNull: false,
        type: DataTypes.FLOAT,
        defaultValue: 0.0
      },
      description: {
        allowNull: true,
        type: DataTypes.STRING(100)
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable("expenses");
  }
};
