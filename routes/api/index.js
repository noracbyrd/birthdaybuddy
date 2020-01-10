const router = require("express").Router();

const userRoutes = require("./users");
const buddyRoutes = require("./buddies");

// App routes
router.use("/users", userRoutes);
router.use("/buddies", buddyRoutes);

module.exports = router;