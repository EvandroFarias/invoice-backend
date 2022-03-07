const express = require("express");
const UserService = require("../service/User");
const basicAuth = require("../middleware/basicAuth");

const router = express.Router();

router.post("/login", basicAuth.authenticate, UserService.login);

module.exports = router;
