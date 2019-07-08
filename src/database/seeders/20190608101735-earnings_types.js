"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "earnings_types",
      [
        {
          name: "Rendimento",
          description: "Valor de rendimento em fundos de investimento."
        },
        {
          name: "Salário",
          description: "Salário recebido."
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("earnings_types", null, {});
  }
};
