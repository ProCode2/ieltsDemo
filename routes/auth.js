const router = require("express").Router();
const user = require("../controllers/auth.controller");
const auth = require("../middlewares/auth");
const passport = require("passport");

// send logged in user info
router.get("/", auth, user.getUser);
//register
router.post("/", user.register);
// login
router.post(
  "/login",
  passport.authenticate("local", { failureRedirect: "/login" }),
  (req, res) => {
    console.log("here");
    res.status(200).json({
      status: true,
      message: "User logged in successfully",
      data: {},
    });
  }
);

// update name
router.put("/name/edit", auth, user.updateName);
// update password
router.put("/password/edit", auth, user.updatePassword);

module.exports = router;
