const jwt = require("jsonwebtoken");

const createError = require("http-errors");

require("dotenv").config();

const secretToken = process.env.SECRET_TOKEN;

const signAccessToken = (payload) => {
  return new Promise((resolve, reject) => {
    jwt.sign({ payload }, secretToken, {}, (err, token) => {
      if (err) {
        reject(createError.InternalServerError());
      }
      resolve(token);
    });
  });
};

const verifyAccessToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(token, secretToken, (err, payload) => {
      if (err) {
        const message =
          err.name == "JsonWebTokenError" ? "Unauthorized" : err.message;
        return reject(createError.Unauthorized(message));
      }

      resolve(payload);
    });
  });
};

module.exports = { signAccessToken, verifyAccessToken };
