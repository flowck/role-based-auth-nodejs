module.exports = {
  /**
   * Auth messages
   */
  AUTH_INVALID_DATA: {
    name: "AUTH_INVALID_DATA",
    message: "Please verify your email or password, then try again",
    code: 401
  },
  AUTH_USER_NOT_FOUND: {
    name: "AUTH_USER_NOT_FOUND",
    message: "We couldn't find any account using this email address.",
    code: 404
  },
  AUTH_UNDEFINED_ERROR: {
    name: "AUTH_UNDEFINED_ERROR",
    message:
      "We couldn't process your request. Please try again in a couple of minutes.",
    code: 500
  }
};
