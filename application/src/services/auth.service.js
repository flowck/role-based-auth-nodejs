// Dependencies
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { SALT, JWT_SECRET } = require("../configs/config");

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
    if (email && password) {
      const user = await Users.findOne({ where: { email } });

      // Check if a user account was found
      if (user) {
        // Check user's password
        const isPasswordValid = bcrypt.compareSync(
          password,
          user.dataValues.password
        );
        if (isPasswordValid) {
          const { name, email } = user.dataValues;
          // Generate token
          const tokenPayload = { name, email };
          const token = jwt.sign(tokenPayload, JWT_SECRET, { expiresIn: "2h" });

          // Remove important fields
          delete user.dataValues.password;

          return Promise.resolve({
            token,
            user: {
              name,
              email
            }
          });
        } else {
          return Promise.resolve(AUTH_INVALID_DATA);
        }
      } else {
        return Promise.resolve(AUTH_USER_NOT_FOUND);
      }
    } else {
      return Promise.resolve(AUTH_INVALID_DATA);
    }
  } catch (error) {
    return Promise.reject(AUTH_UNDEFINED_ERROR);
  }
};
