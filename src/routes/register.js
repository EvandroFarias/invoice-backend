const express = require("express");
const UserService = require("../service/User");

const routes = express.Router();

routes.post("/register", UserService.register);

module.exports = routes;
