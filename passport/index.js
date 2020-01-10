const passport = require("passport")
const LocalStrategy = require("./localStrategy")
const User = require("../models/user")

// app.use(passport.initialize())
// app.use(passport.session())
// keeping the above in my server file

passport.serializeUser(function(user, done) {
  console.log('*** serializeUser called, user: ')
    console.log(user) // the whole raw user object!
    console.log('---------')
    done(null, {_id: user._id});
  })
  
  //might need to look into findOne?
  passport.deserializeUser(function(userId, done) {
    User.findById(userId, (err, user) => done(err, user));
  })

  passport.use(LocalStrategy)
  module.exports = passport