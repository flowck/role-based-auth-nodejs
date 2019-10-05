const router = require("express").Router();

router.get("/test", (req, res) => {
  res.json({
    message: "Testing API"
  });
});

module.exports = router;
