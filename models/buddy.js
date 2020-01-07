const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const buddySchema = new Schema({
    // if they want text vs email reminders, would I need an emailBuddy versus textBuddy schema? 
    // documents belonging to schema
    firstName: {type: String, required: true},
    lastName: {type: String, required: true},
    date: {type: Date, default: Date.now},
    // will need to make month two digits so it sorts properly
    month: {type: Number, required: true},
    day: {type: Number, required: true}
    // in future versions: reminders. 
    // dayOfReminder: {type: Boolean, required: true},
    // dayBeforeReminder: {type: Boolean, required: true},
    // weekBeforeReminder: {type: Boolean, required: true},
    //documents belonging to other connections:
});

const Buddy = mongoose.model("Buddy", buddySchema);
module.exports = Buddy;