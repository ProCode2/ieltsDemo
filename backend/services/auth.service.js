const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const createError = require("http-errors");

require("dotenv").config();

const bcrypt = require("bcryptjs");
const jwt = require("../utils/jwt");

class authService {
  static async register(data) {
    const { email } = data;
    data.password = bcrypt.hashSync(data.password, 8);
    let user = await prisma.user.create({
      data,
    });
    console.log(user);
    data.accessToken = await jwt.signAccessToken(user);

    return data;
  }

  static async login(data) {
    const { email, password } = data;
    console.log({ email, password });
    const users = await prisma.user.findMany();
    console.log(users);
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw createError.NotFound("User not registered");
    }

    const checkPassword = bcrypt.compareSync(password, user.password);

    if (!password) {
      throw createError.Unauthorized("Email or password not valid");
    }
    delete user.password;

    const accessToken = await jwt.signAccessToken(user);
    return { ...user, accessToken };
  }
}

module.exports = authService;
