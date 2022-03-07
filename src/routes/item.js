const express = require("express");

const routes = express.Router();
const itemService = require("../service/Item");

routes.post("/item/:user_id", itemService.store);

module.exports = routes;
