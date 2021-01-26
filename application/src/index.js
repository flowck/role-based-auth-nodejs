/**
 * Role based auth service
 */

// Dependencies
const cors = require("cors");
const routes = require("./routes");
const express = require("express");
const bodyParser = require("body-parser");
const compression = require("compression");
const validationErrors = require("./middlewares/expressValidationErrors");

const app = express();

/**
 * Middlewares
 */

// Allow external clients to make requests
app.use(cors());
app.use(bodyParser.json());
app.use(compression());

/**
 * Routing middleware
 */
app.use("/api", routes);
app.use(validationErrors);

/**
 * Listen the application to a port
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Service is running");
});
