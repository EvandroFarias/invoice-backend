const express = require("express");
const UserService = require("../service/User");
const basicAuth = require("../middleware/basicAuth");

const routes = express.Router();

routes.post("/login", basicAuth.authenticate, UserService.login);

module.exports = routes;
