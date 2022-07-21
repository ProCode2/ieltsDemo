const jwt = require("../utils/jwt");
const createError = require("http-errors");

const auth = async (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  } else {
    return next(createError.Unauthorized());
  }
};

module.exports = auth;
