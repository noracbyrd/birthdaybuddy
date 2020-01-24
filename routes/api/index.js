const router = require("express").Router();

const userRoutes = require("./users");
const buddyRoutes = require("./buddies");

console.log("index is hit")
router.use("/users", userRoutes);
router.use("/buddies", buddyRoutes);

module.exports = router;