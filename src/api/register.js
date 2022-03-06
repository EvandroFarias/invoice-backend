const express = require("express");
const UserRepo = require("../service/User");

const routes = express.Router();

routes.post("/register", UserRepo.register);

module.exports = routes;
