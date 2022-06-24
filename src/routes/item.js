const express = require("express");

const router = express.Router();
const itemService = require("../service/Item");
const tokenAuth = require("../middleware/tokenAuth");

router.get("/item/:user_id", itemService.index);

router.post("/item/:invoice_id", itemService.store);

router.delete("/item/:item_id", itemService.delete)

module.exports = router;
