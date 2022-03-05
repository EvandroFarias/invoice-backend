const express = require("express");
const UserController = require("../controllers/UserController");
const basicAuth = require("../middlewares/basicAuth");

const routes = express.Router();

routes.post("/register", UserController.register);
routes.post("/login", basicAuth.authenticate, UserController.login);

module.exports = routes;
