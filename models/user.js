// Using https://blog.cloudboost.io/node-js-authentication-with-passport-4a125f264cd4 as a resource

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require("mongoose-unique-validator")
const bcrypt = require("bcryptjs")

const UserSchema = new Schema({
    // documents belonging to schema
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true, unique: false},
    // for the future: do they want reminders? do they want email or text reminders? 
    // email: { type: String, required: true , unique: true },
    // phone: a way for this to be required if they want text reminders?
    // phone: {type: Number, required: false},
    active: { type: Boolean, default: true },
    // documents belonging to other collections
    buddies: [{ type: Schema.Types.ObjectId, ref: "Buddy" }]
  })


  // the schema methods for comparing the passwords and hashing them
UserSchema.methods = {
  checkPassword: function (inputPassword) {
      return bcrypt.compareSync(inputPassword, this.password)
  },
  hashPassword: plainTextPassword => {
      return bcrypt.hashSync(plainTextPassword, 15)
  }
}

// pre-saving the hashed password
UserSchema.pre('save', function (next) {
  if (!this.password) {
      console.log('no password was provided')
      next()
  } else {
      this.password = this.hashPassword(this.password)
      next()
  }
})

const User = mongoose.model("User", UserSchema);
module.exports = User;