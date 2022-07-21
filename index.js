const express = require("express");
require("@prisma/client");
require("dotenv").config();
// remove
const multer = require("multer");
const passport = require("passport");
const auth = require("./services/auth.service");
const session = require("express-session");
const cookieParser = require("cookie-parser");

const app = express();
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Credentials", true);
  res.header("Access-Control-Allow-Origin", req.headers.origin);
  res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
  res.header(
    "Access-Control-Allow-Headers",
    "X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept"
  );
  if ("OPTIONS" == req.method) {
    res.send(200);
  } else {
    next();
  }
});

const initializePassport = require("./config/passport.config");
initializePassport(passport, auth.getUserByEmail, auth.getUserById);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser(process.env.SECRET_TOKEN));

app.use(
  session({
    secret: [process.env.SECRET_TOKEN],
    saveUninitialized: false,
    resave: false,
    cookie: {
      maxAge: 3600000 * 24, // 1 day
    },
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
