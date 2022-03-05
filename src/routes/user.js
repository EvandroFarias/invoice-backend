const express = require("express");
const UserController = require("../controllers/UserController");

const routes = express.Router();

routes.post("/register", UserController.register);
routes.post("/login", UserController.login);

module.exports = routes;
