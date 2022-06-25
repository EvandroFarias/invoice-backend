const express = require("express");
const tokenAuth = require("../middleware/tokenAuth");

const router = express.Router();
const invoiceService = require("../service/Invoice");

router.post("/invoice/:user_id", invoiceService.store);
router.get("/invoices/:user_id", invoiceService.index);
router.get("/invoice/:invoice_id", invoiceService.findByPk);
router.delete("/invoice/:invoice_id", invoiceService.delete)

module.exports = router;
