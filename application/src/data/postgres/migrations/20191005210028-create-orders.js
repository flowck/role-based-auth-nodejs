"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("orders", {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      code: {
        type: Sequelize.UUID
      },
      product: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.FLOAT
      },
      date: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM("PAID", "UNPAID"),
        defaultValue: "UNPAID"
      },
      customerName: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("orders");
  }
};
