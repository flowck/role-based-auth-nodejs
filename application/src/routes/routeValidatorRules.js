/**
 * Route validator rules
 */

const Joi = require("joi");

// Auth
module.exports.auth = {
  body: {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string().required()
  }
};
