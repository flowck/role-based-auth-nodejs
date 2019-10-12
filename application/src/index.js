/**
 * Role based auth service
 */

// Dependencies
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const routes = require("./routes");
const compression = require("compression");

const app = express();

/**
 * Middlewares
 */
// Allow external clients to make requests
app.use(cors());
app.use(bodyParser.json());
// Enable http compression
app.use(compression());

/**
 * Routing middleware
 */
app.use("/api", routes);

/**
 * Listen the application to a port
 */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Service is running");
});
