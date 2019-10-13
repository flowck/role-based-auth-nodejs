/**
 * Auth controller
 */

// Dependencies
const { auth } = require("../services/auth.service");

// Auth
module.exports.auth = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Call auth service
    const response = await auth(email, password);

    // Check response type
    if (response.code) {
      res.status(response.code).json(response);
    } else {
      res.json(response);
    }
  } catch (error) {
    res.status(error.code).json(error);
  }
};
