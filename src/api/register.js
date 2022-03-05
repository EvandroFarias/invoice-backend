const express = require("express");
const UserController = require("../repos/User");

const routes = express.Router();

routes.post("/register", UserController.register);

module.exports = routes;
