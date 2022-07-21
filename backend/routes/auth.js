const router = require("express").Router();
const user = require("../controllers/auth.controller");

//register
router.post("/", user.register);
// login
router.post("/login", user.login);

module.exports = router;
