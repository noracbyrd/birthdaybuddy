require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8022;
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dbConnection = require("./connection");
const session = require("express-session");

// middleware
app.use(morgan("dev"))
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// alternate middleware: should i be using this?
// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// )
// app.use(bodyParser.json())

//Mongoose DB Connection
mongoose.Promise = global.Promise

if (process.env.NODE_ENV === "production") {
 app.use(express.static("client/build"));
}

// rewrite
app.use("/", function(req,res) {
    res.sendFile(path.join(__dirname, "client", "build"))
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  }); 