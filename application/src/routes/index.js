/**
 * Routes
 */

// Dependencies
const router = require("express").Router();
const validator = require("express-validation");
const rules = require("./routeValidatorRules");

// Controllers
const { auth } = require("../controllers/auth.controller");

/**
 * Auth
 */
router.post("/auth", validator(rules.auth), auth);

module.exports = router;
