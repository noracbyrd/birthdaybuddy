require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8022;
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");
const dbConnection = require("./connection");
const session = require("express-session");
const MongoStore = require('connect-mongo')(session);
const passport = require("./passport")
const api = require("./routes/api")

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

let sess = {
    secret: 'salt portion',
    cookie: {},
    store: new MongoStore({ mongooseConnection: dbConnection }),
    resave: false,
    saveUninitialized: false
}

if (app.get('env') === 'production') {
    app.set('trust proxy', 1) // trust first proxy
    sess.cookie.secure = true // serve secure cookies
}

app.use(session(sess))

// can i combine below if statement with the above trust proxy one?
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}

// Passport
app.use(passport.initialize())
app.use(passport.session())

// rewrite
app.use("/", function (req, res) {
    res.sendFile(path.join(__dirname, "client", "build"))
})

app.use("/api", api);

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, function () {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
}); 