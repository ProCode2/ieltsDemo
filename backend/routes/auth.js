const router = require("express").Router();
const user = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");

// send logged in user info
router.get("/", auth, user.getUser);
//register
router.post("/", user.register);
// login
router.post("/login", user.login);
// update name
router.put("/name/edit", auth, user.updateName);
// update password
router.put("/password/edit", auth, user.updatePassword);

module.exports = router;
