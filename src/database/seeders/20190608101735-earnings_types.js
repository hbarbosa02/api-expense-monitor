"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "earnings_types",
      [
        {
          name: "Deposito",
          description: "Valor depositado na conta."
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("earnings_types", null, {});
  }
};
