const express = require("express");
const tokenAuth = require("../middleware/tokenAuth");

const router = express.Router();
const invoiceService = require("../service/Invoice");

router.post("/invoice/:user_id", tokenAuth, invoiceService.store);
router.get("/invoice/:user_id", tokenAuth, invoiceService.index);

module.exports = router;
