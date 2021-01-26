// Dependencies
require("dotenv/config");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SALT, JWT_SECRET } = process.env;

// API messages
const {
  AUTH_UNDEFINED_ERROR,
  AUTH_USER_NOT_FOUND,
  AUTH_INVALID_DATA
} = require("../configs/apiMessages");

// Models
const Users = require("../data/postgres/models").users;

/**
 * auth
 * @params {string} email
 * @params {string} password
 *
 * @returns {Promise} An object that represents auth failure or success
 */
module.exports.auth = async (email, password) => {
  try {
    if (!email || !password) return Promise.resolve(AUTH_INVALID_DATA);

    const user = await Users.findOne({ where: { email } });

    // Check if a user account was found
    if (!user) return Promise.resolve(AUTH_USER_NOT_FOUND);

    // Check user's password
    const isPasswordValid = bcrypt.compareSync(
      password,
      user.dataValues.password
    );

    if (!isPasswordValid) return Promise.resolve(AUTH_INVALID_DATA);

    const { name, email: _email } = user.dataValues;
    const tokenPayload = { name, _email };
    const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "2h" });

    // Remove important fields
    delete user.dataValues.password;

    return Promise.resolve({ token, user: { name, _email } });
  } catch (error) {
    return Promise.reject(AUTH_UNDEFINED_ERROR);
  }
};
