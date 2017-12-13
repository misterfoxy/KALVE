const router = require("express").Router();
const bookRoutes = require("./users");

// Book routes
router.use("/users", users);

module.exports = router;
