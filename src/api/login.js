const express = require("express");
const UserController = require("../repos/User");
const basicAuth = require("../middlewares/basicAuth");

const routes = express.Router();

routes.post("/login", basicAuth.authenticate, UserController.login);

module.exports = routes;