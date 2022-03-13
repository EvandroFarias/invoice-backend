const express = require("express");
const tokenAuth = require("../middleware/tokenAuth");

const router = express.Router();
const invoiceService = require("../service/Invoice");

router.post("/invoice/:user_id", invoiceService.store);
router.get("/invoice/:user_id", invoiceService.index);

module.exports = router;
