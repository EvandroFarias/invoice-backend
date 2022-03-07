const express = require("express");

const router = express.Router();
const invoiceService = require("../service/Invoice");
const tokenAuth = require("../middleware/tokenAuth");

router.get("/invoice/:user_id", tokenAuth, invoiceService.index);

module.exports = router;
