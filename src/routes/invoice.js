const express = require("express");

const router = express.Router();
const invoiceService = require("../service/Invoice");

router.get("/invoice/:user_id", invoiceService.index);

module.exports = router;
