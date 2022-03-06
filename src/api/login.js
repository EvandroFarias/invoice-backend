const express = require("express");
const UserRepo = require("../service/User");
const basicAuth = require("../middleware/basicAuth");

const routes = express.Router();

routes.post("/login", basicAuth.authenticate, UserRepo.login);

module.exports = routes;