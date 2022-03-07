const express = require("express");

const router = express.Router();
const itemService = require("../service/Item");

router.post("/item/:user_id", itemService.store);

module.exports = router;
