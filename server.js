require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8022;
const path = require("path");

// middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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