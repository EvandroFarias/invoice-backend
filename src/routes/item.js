const express = require("express");

const router = express.Router();
const itemService = require("../service/Item");
const tokenAuth = require("../middleware/tokenAuth");

router.post("/item/:invoice_id", itemService.store);

router.get("/item/:user_id", itemService.index);

module.exports = router;
