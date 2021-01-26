"use strict";

require("dotenv/config");
const uuid = require("uuidv4").default;
const bcrypt = require("bcryptjs");
const { SALT } = process.env;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          id: uuid(),
          name: "Lionel Messi",
          email: "lionel.messi@gmail.com",
          password: bcrypt.hashSync("barcelona", SALT),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuid(),
          name: "Cristiano Ronaldo",
          email: "cr7@gmail.com",
          password: bcrypt.hashSync("LaVecchiaSignora", SALT),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuid(),
          name: "Neymar Jr.",
          email: "nj@gmail.com",
          password: bcrypt.hashSync("sequeda", SALT),
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          id: uuid(),
          name: "Hazard",
          email: "hazard10@gmail.com",
          password: bcrypt.hashSync("hallaMadrid", SALT),
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
