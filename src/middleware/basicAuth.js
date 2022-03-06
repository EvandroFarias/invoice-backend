const express = require("express");
const User = require("../models/User");

module.exports = {
  async authenticate(req, res, next) {
    const { userName } = req.body;
    exists = User.findOne({ where: { userName } });

    if (!exists) {
      res.json({ Error: "Does not exists" });
    }
    next();
  },
};
