const express = require("express");
require("@prisma/client");
require("dotenv").config();
const multer = require("multer");

const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const route = require("./routes");

app.use("/", route);

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
