const express = require("express");

const router = express.Router();
const itemService = require("../service/Item");
const tokenAuth = require("../middleware/tokenAuth");

router.post("/item/:user_id", tokenAuth, itemService.store);

module.exports = router;
