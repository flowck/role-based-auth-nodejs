/**
 * Error handler for express-validation
 */

module.exports = (err, req, res, next) => {
  res.status(400).json(err);
};
