const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcryptjs");

function initialize(passport, getUserByEmail, getUserById) {
  const authenticateUser = async (email, password, done) => {
    console.log("authenticatin");
    // console.log(email);
    const user = await getUserByEmail(email);
    if (!user) {
      return done(null, false, { message: "No user with that email" });
    }
    // console.log(user);

    try {
      if (await bcrypt.compare(password, user.password)) {
        // console.log("passwords match");
        return done(null, user);
      } else {
        return done(null, false, { message: "Password incorrect" });
      }
    } catch (e) {
      console.log(e.message);
      return done(e);
    }
  };

  passport.use(
    new LocalStrategy(
      { usernameField: "email", passwordField: "password" },
      authenticateUser
    )
  );
  passport.serializeUser((user, done) => {
    // console.log({ user, srz: "srz" });
    return done(null, user.id);
  });
  passport.deserializeUser(async (id, done) => {
    // console.log({ here: "dsz", id });
    const user = await getUserById(id);

    if (user == null) {
      return done(null, false, { message: "No user with that email" });
    }

    return done(null, user);
  });
}

module.exports = initialize;
