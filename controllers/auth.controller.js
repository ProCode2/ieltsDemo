const auth = require("../services/auth.service");
const createError = require("http-errors");

class authController {
  static getUser = async (req, res, next) => {
    res.status(200).json({
      status: true,
      message: "User created successfully",
      data: req.user,
    });
  };

  static register = async (req, res, next) => {
    try {
      const user = await auth.register(req.body);
      res.status(200).json({
        status: true,
        message: "User created successfully",
        data: user,
      });
    } catch (error) {
      next(createError(error.message));
    }
  };

  static login = async (req, res, next) => {
    try {
      await auth.login(req.body);
      res.status(200).json({
        status: true,
        message: "Account login successful",
        data: {},
      });
    } catch (error) {
      next(createError(error.message));
    }
  };

  static updateName = async (res, req, next) => {
    const { username } = req.body;
    try {
      const data = await auth.updateName(username, req.payload.id);
      res.status(200).json({
        status: true,
        message: "Account name updated successful",
        data,
      });
    } catch (error) {
      next(createError(error.message));
    }
  };

  static updatePassword = async (res, req, next) => {
    const { oldPassword, newPassword } = req.body;
    try {
      const data = await auth.updatePassword(
        oldPassword,
        newPassword,
        req.payload.id
      );
      res.status(200).json({
        status: true,
        message: "Account password successful",
        data,
      });
    } catch (error) {
      next(createError(error.message));
    }
  };
}

module.exports = authController;
