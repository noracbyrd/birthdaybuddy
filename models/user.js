// Using https://blog.cloudboost.io/node-js-authentication-with-passport-4a125f264cd4 as a resource

const mongoose = require("mongoose")
const Schema = mongoose.Schema
const uniqueValidator = require("mongoose-unique-validator")
const bcrypt = require("bcryptjs")

const UserSchema = new Schema({
    // documents belonging to schema
    username: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    // for the future: do they want reminders? do they want email or text reminders? 
    // email: { type: String, required: true , unique: true },
    // phone: a way for this to be required if they want text reminders?
    // phone: {type: Number, required: false},
    active: { type: Boolean, default: true },
    // documents belonging to other collections
    buddies: [{ type: Schema.Types.ObjectId, ref: "Buddy" }]
  })

  UserSchema.plugin(uniqueValidator)

  UserSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.passwordHash);
  }

  UserSchema.virtual("password").set(function(value) {
    this.passwordHash = bcrypt.hashSync(value, 15);
  })

const User = mongoose.model("User", UserSchema);
module.exports = User;