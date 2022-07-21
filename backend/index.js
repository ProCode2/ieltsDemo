const express = require("express");
require("@prisma/client");
require("dotenv").config();
// remove
const multer = require("multer");
const passport = require("passport");
const auth = require("./services/auth.service");
const session = require("express-session");

const app = express();

const initializePassport = require("./config/passport.config");
initializePassport(passport, auth.getUserByEmail, auth.getUserById);

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  session({
    secret: process.env.SECRET_TOKEN,
    resave: false,
    saveUninitialized: false,
  })
);
app.use(passport.initialize());
app.use(passport.session());

const route = require("./routes");

app.use("/", route);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
