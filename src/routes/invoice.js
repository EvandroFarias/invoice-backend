const express = require("express");

const routes = express.Router();
const invoiceService = require("../service/Invoice");

routes.get("/invoice/:user_id", invoiceService.index)

module.exports = routes;