"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "payments_types",
      [
        {
          name: "Depito",
          description: "Débito em conta."
        },
        {
          name: "Credito",
          description: "Compra parcelada."
        },
        {
          name: "Em dinheiro",
          description: "Pagamento em dinheiro."
        },
        {
          name: "Boleto Bancário",
          description: "Pagamento em boleto."
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("payments_types", null, {});
  }
};
