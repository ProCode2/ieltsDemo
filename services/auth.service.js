const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const createError = require("http-errors");
const passport = require("passport");

require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

class authService {
  static register = async (data) => {
    const { email } = data;
    data.password = bcrypt.hashSync(data.password, 8);
    let user = await prisma.user.create({
      data,
    });
    console.log(user);
    data.accessToken = await jwt.signAccessToken(user);
    return passport.authenticate({
      successRedirect: "/dashboard",
      failureRedirect: "/login",
    });
  };

  static login = async (data) => {
    return passport.authenticate({
      successRedirect: "/dashboard",
      failureRedirect: "/login",
    });
    // const { email, password } = data;
    // console.log({ email, password });
    // const users = await prisma.user.findMany();
    // console.log(users);
    // const user = await prisma.user.findUnique({
    //   where: {
    //     email,
    //   },
    // });

    // if (!user) {
    //   throw createError.NotFound("User not registered");
    // }

    // const checkPassword = bcrypt.compareSync(password, user.password);

    // if (!checkPassword) {
    //   throw createError.Unauthorized("Email or password not valid");
    // }
    // delete user.password;

    // const accessToken = await jwt.signAccessToken(user);
    // return { ...user, accessToken };
  };

  static updateName = async (username, userId) => {
    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        name: username,
      },
    });
    delete updatedUser.password;
    return updatedUser;
  };

  static updatePassword = async (oldPassword, newPassword, userId) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw createError.NotFound("User not registered");
    }

    const checkPassword = bcrypt.compareSync(oldPassword, user.password);

    if (!checkPassword) {
      throw createError.Unauthorized("Password not valid");
    }

    const newPass = bcrypt.hashSync(newPassword, 8);

    const updatedUser = await prisma.user.update({
      where: {
        id: userId,
      },
      data: {
        password: newPass,
      },
    });

    delete updatedUser.password;
    return updatedUser;
  };

  static getUserByEmail = async (email) => {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });
    return user;
  };

  static getUserById = async (userId) => {
    const user = await prisma.user.findUnique({
      where: {
        id: userId,
      },
    });
    return user;
  };
}

module.exports = authService;
