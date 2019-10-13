const router = require("express").Router();

// Controllers
const { auth } = require("../controllers/auth.controller");

/**
 * Auth
 */
router.post("/auth", auth);

module.exports = router;
