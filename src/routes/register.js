const express = require("express");
const UserService = require("../service/User");

const router = express.Router();

router.post("/register", UserService.register);
router.get("/user/exists/:email", UserService.checkUserEmail)

module.exports = router;
