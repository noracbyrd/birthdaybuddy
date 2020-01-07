const passport = require("passport")
const LocalStrategy = require("./localStrategy")
const User = require("../models/user")

app.use(passport.initialize())
app.use(passport.session())

passport.serializeUser(function(user, done) {
    done(null, user._id);
  })
  
  passport.deserializeUser(function(userId, done) {
    User.findById(userId, (err, user) => done(err, user));
  })