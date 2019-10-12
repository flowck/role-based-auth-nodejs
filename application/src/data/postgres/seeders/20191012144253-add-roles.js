"use strict";

const uuid = require("uuidv4").default;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "roles",
      [
        {
          id: uuid(),
          name: "MANAGER",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuid(),
          name: "EMPLOYEE",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("roles", null, {});
  }
};
